import { NextResponse } from "next/server";
import { readMetrics } from "@/lib/analytics/metrics";

/**
 * The header's single data source. Cached for 60s at the edge so the site
 * reads one Firestore document per minute regardless of traffic, rather than
 * once per visitor — the header renders on every route.
 */
export const revalidate = 60;

export async function GET() {
  const metrics = await readMetrics();
  return NextResponse.json(metrics, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
