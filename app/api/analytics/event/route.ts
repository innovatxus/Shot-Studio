import { NextRequest, NextResponse } from "next/server";
import {
  recordAppDownloadClick,
  recordReturningUser,
  type Platform,
} from "@/lib/analytics/metrics";

/**
 * The only way analytics events reach Firestore. Clients never write directly,
 * so the deny-by-default Firestore rules stay intact and counters cannot be
 * inflated from the browser.
 *
 * Mirrors the rate-limit approach in api/feedback: a basic per-IP abuse guard,
 * not a substitute for a real limiter behind a proper backend.
 */
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 20;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const stamps = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  stamps.push(now);
  hits.set(ip, stamps);
  return stamps.length > RATE_LIMIT_MAX;
}

const PLATFORMS = new Set<Platform>(["ios", "android"]);
const MAX_FIELD = 120;

const clean = (v: unknown): string | undefined => {
  if (typeof v !== "string") return undefined;
  const s = v.trim().slice(0, MAX_FIELD);
  return s.length > 0 ? s : undefined;
};

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const event = clean(body.event);
  const visitorId = clean(body.visitorId);

  if (event === "app_download_clicked") {
    const platform = clean(body.platform) as Platform | undefined;
    if (!platform || !PLATFORMS.has(platform)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const recorded = await recordAppDownloadClick({
      platform,
      source: clean(body.source),
      page: clean(body.page),
      tool: clean(body.tool),
      feature: clean(body.feature),
      userId: clean(body.userId),
      visitorId,
    });
    return NextResponse.json({ ok: recorded });
  }

  if (event === "returning_user") {
    if (!visitorId) return NextResponse.json({ ok: false }, { status: 400 });
    const recorded = await recordReturningUser(visitorId, clean(body.userId));
    return NextResponse.json({ ok: recorded });
  }

  return NextResponse.json({ ok: false }, { status: 400 });
}
