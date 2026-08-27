"use client";

import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/app-links";
import { sendAnalyticsEvent } from "@/lib/analytics/client";
import type { Platform } from "@/lib/analytics/metrics";

/**
 * The two store badges, shared by the FinalCTA section and DownloadAppModal so
 * the download affordance is pixel-identical wherever it appears.
 *
 * Renders an <a> once a store URL exists in `lib/app-links.ts` and a plain
 * <button> until then, so the badge never becomes a link to nowhere.
 */
type BadgeSize = "lg" | "sm";

const SIZE = {
  lg: { padding: "18px 32px", radius: 20, minWidth: 220, gap: 16, mark: 28, caption: 10, label: 18 },
  sm: { padding: "12px 20px", radius: 14, minWidth: 168, gap: 12, mark: 20, caption: 9, label: 14 },
} as const;

function Badge({
  href,
  caption,
  label,
  size,
  platform,
  source,
  children,
}: {
  href: string;
  caption: string;
  label: string;
  size: BadgeSize;
  platform: Platform;
  source?: string;
  children: React.ReactNode;
}) {
  // Fires on the click itself — never when the modal merely opens.
  const record = () => {
    void sendAnalyticsEvent("app_download_clicked", {
      platform,
      source,
      page: typeof window !== "undefined" ? window.location.pathname : undefined,
    });
  };
  const s = SIZE[size];
  const style: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: s.gap,
    padding: s.padding,
    borderRadius: s.radius,
    background: "#000",
    border: "1px solid rgba(255,255,255,0.18)",
    cursor: "pointer",
    transition: "border-color var(--t-fast) ease, transform var(--t-fast) ease",
    minWidth: s.minWidth,
    textDecoration: "none",
  };

  const inner = (
    <>
      <span aria-hidden='true' style={{ display: "flex", flexShrink: 0 }}>
        {children}
      </span>
      <span style={{ textAlign: "left" }}>
        <span
          style={{
            display: "block",
            fontSize: s.caption,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-geist-mono)",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          {caption}
        </span>
        <span
          style={{
            display: "block",
            fontSize: s.label,
            fontWeight: 600,
            color: "white",
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          {label}
        </span>
      </span>
    </>
  );

  if (!href) {
    return (
      <button
        type='button'
        className='btn-lift'
        style={style}
        onClick={record}
        aria-label={`${caption} ${label}`}
      >
        {inner}
      </button>
    );
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='btn-lift'
      style={style}
      onClick={record}
      aria-label={`${caption} ${label} — opens in a new tab`}
    >
      {inner}
    </a>
  );
}

export default function AppStoreBadges({
  size = "lg",
  source,
  className = "",
}: {
  size?: BadgeSize;
  source?: string;
  className?: string;
}) {
  const mark = SIZE[size].mark;
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-5 ${className}`}>
      <Badge
        href={APP_STORE_URL}
        caption='Download on the'
        label='App Store'
        size={size}
        platform='ios'
        source={source}
      >
        <svg width={mark} height={mark * 1.21} viewBox='0 0 22 26' fill='none'>
          <path
            d='M18.2 13.8C18.2 10.8 20.6 9.5 20.7 9.4C19.3 7.3 17 7 16.3 6.9C14.3 6.7 12.4 8 11.4 8C10.4 8 8.8 7 7.1 7C4.9 7.1 2.9 8.2 1.7 10C-0.6 13.6 1.1 19 3.4 21.9C4.5 23.3 5.8 24.9 7.5 24.9C9.2 24.9 9.8 23.9 11.8 23.9C13.8 23.9 14.4 24.9 16.2 24.9C17.9 24.9 19.1 23.4 20.2 22C21.5 20.4 22 18.8 22 18.7C22 18.7 18.2 17.2 18.2 13.8Z'
            fill='white'
          />
          <path
            d='M14.8 4.9C15.7 3.8 16.3 2.3 16.1 0.8C14.8 0.8 13.3 1.6 12.3 2.7C11.4 3.7 10.7 5.2 10.9 6.7C12.3 6.8 13.9 5.9 14.8 4.9Z'
            fill='white'
          />
        </svg>
      </Badge>

      <Badge
        href={GOOGLE_PLAY_URL}
        caption='Get it on'
        label='Google Play'
        size={size}
        platform='android'
        source={source}
      >
        <svg width={mark} height={mark * 1.11} viewBox='0 0 26 29' fill='none'>
          <path d='M1.6 0.8C1.2 1.2 1 1.8 1 2.6V26.4C1 27.2 1.2 27.8 1.6 28.2L1.7 28.3L15 15V14.7L1.7 1.4L1.6 0.8Z' fill='#00D4FF' />
          <path d='M19.4 19.4L15 15V14.7L19.4 10.3L19.5 10.4L24.8 13.4C26.3 14.3 26.3 15.6 24.8 16.4L19.5 19.4H19.4Z' fill='#FFCE00' />
          <path d='M19.5 19.4L15 14.9L1.6 28.2C2.1 28.8 3 28.8 4 28.3L19.5 19.4Z' fill='#FF3A44' />
          <path d='M19.5 10.4L4 1.5C3 0.9 2.1 1 1.6 1.6L15 14.9L19.5 10.4Z' fill='#00F076' />
        </svg>
      </Badge>
    </div>
  );
}
