"use client";

import { useEffect, useState } from "react";
import type { AppMetrics } from "@/lib/analytics/metrics";

/**
 * Shared header metrics.
 *
 * The header renders on every route and in both the desktop and mobile trees,
 * so the request is memoised at module scope: the first mount fetches, every
 * later mount reuses the same promise. One network call per page load, and the
 * route itself is edge-cached for 60s on top of that.
 */
type State =
  | { status: "loading"; data: null }
  | { status: "ready"; data: AppMetrics }
  | { status: "error"; data: null };

let inflight: Promise<AppMetrics> | null = null;
let resolved: AppMetrics | null = null;

function load(): Promise<AppMetrics> {
  if (resolved) return Promise.resolve(resolved);
  if (inflight) return inflight;
  inflight = fetch("/api/analytics/metrics")
    .then((r) => {
      if (!r.ok) throw new Error(`metrics ${r.status}`);
      return r.json() as Promise<AppMetrics>;
    })
    .then((data) => {
      resolved = data;
      return data;
    })
    .finally(() => {
      inflight = null;
    });
  return inflight;
}

export function useAppMetrics(): State {
  const [state, setState] = useState<State>(() =>
    resolved ? { status: "ready", data: resolved } : { status: "loading", data: null },
  );

  useEffect(() => {
    if (resolved) return;
    let alive = true;
    load()
      .then((data) => alive && setState({ status: "ready", data }))
      .catch(() => alive && setState({ status: "error", data: null }));
    return () => {
      alive = false;
    };
  }, []);

  return state;
}

/** 999 · 1.2K · 12.4K · 125K · 1.2M — never NaN, never undefined. */
export function formatMetric(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "0";
  if (value < 1000) return String(Math.floor(value));
  if (value < 10_000) return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  if (value < 1_000_000) {
    const k = value / 1000;
    return k < 100 ? `${k.toFixed(1).replace(/\.0$/, "")}K` : `${Math.round(k)}K`;
  }
  return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
}
