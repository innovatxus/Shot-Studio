"use client";

import { useEffect } from "react";
import { useAppMetrics, formatMetric } from "./useAppMetrics";
import {
  getVisitorId,
  hasAnalyticsConsent,
  markSeenToday,
  readLastSeenDay,
  sendAnalyticsEvent,
  todayUtc,
} from "@/lib/analytics/client";

/**
 * The two header KPIs. Deliberately typographic rather than card-like — the
 * navbar is a hairline surface, so boxed widgets would read as pasted-in.
 *
 * "App Downloads" counts store-badge interactions, which is intent to
 * download, not a verified install. See lib/analytics/metrics.ts.
 */
const EM_DASH = "—";

function Stat({
  icon,
  value,
  label,
  title,
  compact,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  title: string;
  compact: boolean;
}) {
  return (
    <div
      title={title}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        lineHeight: 1.1,
        minWidth: compact ? 54 : 62,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontWeight: 600,
          fontSize: compact ? 12 : 13,
          color: "var(--ink)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <span aria-hidden='true' style={{ color: "var(--blue)", display: "flex" }}>
          {icon}
        </span>
        {value}
      </span>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 9,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          // --mute-2 measured 2.23:1 on the navbar surface — an AA failure at
          // this size. --blue is 9.24:1 and matches the counter icons.
          color: "var(--blue)",
          marginTop: 2,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function HeaderStats({
  compact = false,
  stacked = false,
}: {
  compact?: boolean;
  stacked?: boolean;
}) {
  const { status, data } = useAppMetrics();

  // A visitor whose last-seen day is earlier than today is returning. Recorded
  // once per visitor per UTC day; the server dedupes again by document id.
  useEffect(() => {
    if (!hasAnalyticsConsent()) return;
    const today = todayUtc();
    const lastSeen = readLastSeenDay();
    markSeenToday(today);
    if (!lastSeen || lastSeen === today) return;
    if (!getVisitorId()) return;
    void sendAnalyticsEvent("returning_user");
  }, []);

  const ready = status === "ready" && data?.available === true;
  const downloads = ready ? formatMetric(data.appDownloads) : EM_DASH;
  const returning = ready ? formatMetric(data.returningUsers) : EM_DASH;

  return (
    <div
      className={stacked ? "flex flex-col" : "flex items-center"}
      style={{ gap: stacked ? 6 : compact ? 14 : 18 }}
      role='group'
      aria-label='ShotStudio activity'
    >
      <Stat
        compact={compact || stacked}
        icon={
          <svg width='11' height='11' viewBox='0 0 12 12' fill='none'>
            <path
              d='M6 1.5v6M6 7.5L3.5 5M6 7.5L8.5 5M2 9.5h8'
              stroke='currentColor'
              strokeWidth='1.4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
        value={downloads}
        label='Downloads'
        title='App download activity — store visits from ShotStudio'
      />
      <span
        aria-hidden='true'
        style={
          stacked
            ? { height: 1, width: "100%", background: "var(--line)" }
            : { width: 1, height: 22, background: "var(--line)", flexShrink: 0 }
        }
      />
      <Stat
        compact={compact || stacked}
        icon={
          <svg width='11' height='11' viewBox='0 0 12 12' fill='none'>
            <path
              d='M10 6a4 4 0 1 1-1.2-2.8M10 1.4v2.4H7.6'
              stroke='currentColor'
              strokeWidth='1.4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
        value={returning}
        label='Returning'
        title='Users who came back after their first visit'
      />
    </div>
  );
}
