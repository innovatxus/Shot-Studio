"use client";

import { readConsent } from "@/lib/consent";

/**
 * Client half of analytics. Every send is gated on the user's analytics
 * consent — Section 3 of the Privacy Policy lists analytics as consent-based,
 * so firing without it would contradict the published policy.
 *
 * The visitor id is a random opaque value in localStorage, alongside the
 * locale and consent keys the app already stores. It carries no personal data
 * and exists only to tell a first visit from a return.
 */
const VISITOR_KEY = "snap-visitor-v1";
const SEEN_KEY = "snap-visitor-seen";

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics === true;
}

export function getVisitorId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID().replace(/-/g, "");
    window.localStorage.setItem(VISITOR_KEY, id);
    return id;
  } catch {
    return null;
  }
}

/** The UTC day this visitor was last seen, or null on a first-ever visit. */
export function readLastSeenDay(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(SEEN_KEY);
  } catch {
    return null;
  }
}

export function markSeenToday(day: string): void {
  try {
    window.localStorage.setItem(SEEN_KEY, day);
  } catch {
    // Private mode / quota — fail soft.
  }
}

export function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

type EventPayload = Record<string, string | undefined>;

/**
 * Fire-and-forget. Never throws and never blocks the interaction that
 * triggered it — a failed beacon must not stop a store link from opening.
 */
export async function sendAnalyticsEvent(
  event: "app_download_clicked" | "returning_user",
  payload: EventPayload = {},
): Promise<void> {
  if (!hasAnalyticsConsent()) return;
  const visitorId = getVisitorId() ?? undefined;
  try {
    await fetch("/api/analytics/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, visitorId, ...payload }),
      keepalive: true,
    });
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[analytics] event not delivered:", event);
    }
  }
}
