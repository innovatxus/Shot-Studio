import "server-only";
import { getAdminDb } from "@/lib/firebase/admin";

/**
 * Analytics events and the aggregate the header reads.
 *
 * Raw events land in `analytics_events`; a single `analytics_metrics/global`
 * document carries the running totals. Only this server module ever writes —
 * clients POST to /api/analytics/event — so Firestore's deny-by-default rules
 * stay untouched and counters cannot be inflated from the browser.
 *
 * The header therefore reads ONE document, never an aggregation over the
 * event collection.
 */
export const EVENTS_COLLECTION = "analytics_events";
export const METRICS_COLLECTION = "analytics_metrics";
export const METRICS_DOC = "global";

export type AnalyticsEvent = "app_download_clicked" | "returning_user";
export type Platform = "ios" | "android";

export interface AppMetrics {
  /** Store-badge download interactions. Not verified installs — see below. */
  appDownloads: number;
  iosDownloads: number;
  androidDownloads: number;
  returningUsers: number;
  updatedAt: string | null;
  /** False when Firebase credentials are absent; the UI shows an em dash. */
  available: boolean;
}

export const EMPTY_METRICS: AppMetrics = {
  appDownloads: 0,
  iosDownloads: 0,
  androidDownloads: 0,
  returningUsers: 0,
  updatedAt: null,
  available: false,
};

interface DownloadContext {
  platform: Platform;
  source?: string;
  page?: string;
  tool?: string;
  feature?: string;
  userId?: string;
  visitorId?: string;
}

/**
 * A store-badge click. This is an *intent to download*, not a confirmed
 * install — the web app cannot observe installs. If the mobile app ever
 * reports first-open events, increment a separate `appInstalls` field rather
 * than folding them in here.
 */
export async function recordAppDownloadClick(ctx: DownloadContext): Promise<boolean> {
  const db = await getAdminDb();
  if (!db) return false;

  try {
    const { FieldValue } = await import("firebase-admin/firestore");
    const platformField =
      ctx.platform === "ios" ? "iosDownloads" : "androidDownloads";

    const batch = db.batch();
    batch.set(db.collection(EVENTS_COLLECTION).doc(), {
      event: "app_download_clicked" satisfies AnalyticsEvent,
      platform: ctx.platform,
      source: ctx.source ?? null,
      page: ctx.page ?? null,
      tool: ctx.tool ?? null,
      feature: ctx.feature ?? null,
      userId: ctx.userId ?? null,
      visitorId: ctx.visitorId ?? null,
      timestamp: FieldValue.serverTimestamp(),
    });
    batch.set(
      db.collection(METRICS_COLLECTION).doc(METRICS_DOC),
      {
        appDownloads: FieldValue.increment(1),
        [platformField]: FieldValue.increment(1),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
    await batch.commit();
    return true;
  } catch (err) {
    console.error("[analytics] recordAppDownloadClick failed", err);
    return false;
  }
}

/**
 * A visitor seen on an earlier day coming back. Deduplicated per visitor per
 * UTC day by using a deterministic document id, so a reload — or several tabs —
 * can never double-count. The aggregate only moves when the write is genuinely
 * new, which `create()` guarantees by throwing on collision.
 */
export async function recordReturningUser(
  visitorId: string,
  userId?: string,
): Promise<boolean> {
  const db = await getAdminDb();
  if (!db) return false;

  const day = new Date().toISOString().slice(0, 10);
  const safeId = visitorId.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 64);
  if (!safeId) return false;

  try {
    const { FieldValue } = await import("firebase-admin/firestore");
    await db
      .collection(EVENTS_COLLECTION)
      .doc(`returning_${safeId}_${day}`)
      .create({
        event: "returning_user" satisfies AnalyticsEvent,
        visitorId: safeId,
        userId: userId ?? null,
        day,
        timestamp: FieldValue.serverTimestamp(),
      });

    await db.collection(METRICS_COLLECTION).doc(METRICS_DOC).set(
      {
        returningUsers: FieldValue.increment(1),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
    return true;
  } catch {
    // ALREADY_EXISTS — already counted today. Not an error.
    return false;
  }
}

export async function readMetrics(): Promise<AppMetrics> {
  const db = await getAdminDb();
  if (!db) return EMPTY_METRICS;

  try {
    const snap = await db.collection(METRICS_COLLECTION).doc(METRICS_DOC).get();
    const d = snap.data() ?? {};
    const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : 0);
    const ts = d.updatedAt as { toDate?: () => Date } | undefined;
    return {
      appDownloads: num(d.appDownloads),
      iosDownloads: num(d.iosDownloads),
      androidDownloads: num(d.androidDownloads),
      returningUsers: num(d.returningUsers),
      updatedAt: ts?.toDate ? ts.toDate().toISOString() : null,
      available: true,
    };
  } catch (err) {
    console.error("[analytics] readMetrics failed", err);
    return EMPTY_METRICS;
  }
}
