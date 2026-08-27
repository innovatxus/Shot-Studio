import "server-only";
import type { App } from "firebase-admin/app";
import type { Firestore } from "firebase-admin/firestore";

/**
 * Server-side Firebase, mirroring the lazy pattern in `firebase/client.ts`:
 * the admin SDK is dynamically imported on first use so it never lands in a
 * bundle, and everything returns null when credentials are absent rather than
 * throwing — callers degrade to an empty state instead of breaking the page.
 *
 * Requires FIREBASE_SERVICE_ACCOUNT_KEY (the service-account JSON, raw or
 * base64). See FIREBASE_SETUP.md.
 */
export const isAdminConfigured = Boolean(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

let cached: Firestore | null | undefined;

function parseServiceAccount(raw: string): Record<string, string> | null {
  try {
    const json = raw.trim().startsWith("{")
      ? raw
      : Buffer.from(raw, "base64").toString("utf8");
    return JSON.parse(json) as Record<string, string>;
  } catch {
    return null;
  }
}

export async function getAdminDb(): Promise<Firestore | null> {
  if (cached !== undefined) return cached;

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!raw) {
    cached = null;
    return cached;
  }

  const serviceAccount = parseServiceAccount(raw);
  if (!serviceAccount) {
    console.error("[analytics] FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON");
    cached = null;
    return cached;
  }

  try {
    const [{ getApps, initializeApp, cert }, { getFirestore }] = await Promise.all([
      import("firebase-admin/app"),
      import("firebase-admin/firestore"),
    ]);

    const existing = getApps();
    const app: App =
      existing.length > 0
        ? existing[0]
        : initializeApp({
            credential: cert({
              projectId: serviceAccount.project_id,
              clientEmail: serviceAccount.client_email,
              privateKey: serviceAccount.private_key?.replace(/\\n/g, "\n"),
            }),
          });

    cached = getFirestore(app);
    return cached;
  } catch (err) {
    console.error("[analytics] admin init failed", err);
    cached = null;
    return cached;
  }
}
