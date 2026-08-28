"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "./LocaleProvider";
import { UI } from "@/lib/legal/i18n";
import {
  CONSENT_OPEN_EVENT,
  acceptAll,
  readConsent,
  rejectNonEssential,
  useConsent,
  writeConsent,
} from "@/lib/consent";

/**
 * Site-wide cookie / data consent banner.
 *
 * Mounts once in the root layout. Visibility is derived from two sources:
 *   1. Whether the user has a stored decision (subscribed via `useConsent`).
 *   2. A `forceOpen` flag toggled when the Footer link dispatches a
 *      `snap:open-consent` event so users can revisit their choice.
 */
export default function ConsentBanner() {
  const { locale } = useLocale();
  const consent = useConsent();
  // Defer rendering until after client hydration to avoid SSR/CSR flicker
  // (useSyncExternalStore briefly bails out during the hydration handoff,
  // which makes the banner appear and then disappear before user action).
  const [hydrated, setHydrated] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-only mount flag
    setHydrated(true);
    const onOpen = () => {
      const current = readConsent();
      if (current) {
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setShowManage(true);
      setForceOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  // Rendered on the server so the banner paints with the first frame. It used
  // to return null until `hydrated`, which meant the largest box in the
  // viewport did not exist until the bundle had hydrated — measured at 4x CPU
  // that made this paragraph the LCP element at ~3.9s, on a page whose bytes
  // had all arrived by ~0.7s.
  //
  // The first client render must still match the server's, so it ignores the
  // stored decision. Anyone who has already chosen never sees it: the
  // pre-paint bootstrap in `app/layout.tsx` stamps `data-consent` on <html>
  // and CSS hides the banner before the first paint, so React dropping it a
  // moment later is invisible.
  const open = hydrated ? forceOpen || consent === null : true;
  if (!open) return null;

  const C = UI.consent;
  const isAr = locale === "ar";

  function handleAcceptAll() {
    acceptAll();
    setForceOpen(false);
    setShowManage(false);
  }

  function handleReject() {
    rejectNonEssential();
    setForceOpen(false);
    setShowManage(false);
  }

  function handleSave() {
    writeConsent({ analytics, marketing });
    setForceOpen(false);
    setShowManage(false);
  }

  function handleOpenManage() {
    if (consent) {
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
    }
    setShowManage(true);
  }

  return (
    <div
      role='dialog'
      aria-modal='false'
      aria-labelledby='consent-title'
      aria-describedby='consent-body'
      className='consent-banner'
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 60,
        maxWidth: 720,
        margin: "0 auto",
        background: "rgba(10,12,16,0.96)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid var(--line-2, rgba(255,255,255,0.08))",
        borderRadius: 18,
        boxShadow:
          "0 24px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
        color: "var(--ink)",
        padding: "22px 22px 18px",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--blue, #38BDF8)",
          marginBottom: 8,
        }}
      >
        {C.eyebrow[locale]}
      </div>
      <h2
        id='consent-title'
        className='font-fraunces'
        style={{
          fontSize: 22,
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          marginBottom: 8,
        }}
      >
        {C.title[locale]}
      </h2>
      <p
        id='consent-body'
        style={{
          fontSize: 13,
          lineHeight: 1.55,
          color: "var(--mute)",
          marginBottom: 14,
        }}
      >
        {C.body[locale]}{" "}
        <Link
          href='/legal/cookies'
          /* Six copies of this RSC payload were being prefetched on load. */
          prefetch={false}
          style={{
            color: "var(--blue, #38BDF8)",
            textDecoration: "underline",
            textDecorationColor: "rgba(56,189,248,0.4)",
          }}
        >
          {C.learnMore[locale]}
        </Link>
      </p>

      {showManage && (
        <div
          style={{
            display: "grid",
            gap: 10,
            marginBottom: 14,
            paddingTop: 12,
            borderTop: "1px solid var(--line, rgba(255,255,255,0.06))",
          }}
        >
          <CategoryRow
            title={C.categories.essential.title[locale]}
            body={C.categories.essential.body[locale]}
            checked
            disabled
            onChange={() => undefined}
          />
          <CategoryRow
            title={C.categories.analytics.title[locale]}
            body={C.categories.analytics.body[locale]}
            checked={analytics}
            onChange={setAnalytics}
          />
          <CategoryRow
            title={C.categories.marketing.title[locale]}
            body={C.categories.marketing.body[locale]}
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "flex-end",
        }}
      >
        {!showManage && (
          <button
            type='button'
            onClick={handleOpenManage}
            style={ghostButtonStyle}
          >
            {C.manage[locale]}
          </button>
        )}
        <button type='button' onClick={handleReject} style={ghostButtonStyle}>
          {C.reject[locale]}
        </button>
        {showManage ? (
          <button type='button' onClick={handleSave} style={primaryButtonStyle}>
            {C.save[locale]}
          </button>
        ) : (
          <button
            type='button'
            onClick={handleAcceptAll}
            style={primaryButtonStyle}
          >
            {C.accept[locale]}
          </button>
        )}
      </div>
    </div>
  );
}

const primaryButtonStyle: React.CSSProperties = {
  padding: "9px 16px",
  borderRadius: 999,
  background: "var(--blue-grad)",
  color: "white",
  fontSize: 12,
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)",
  fontFamily: "var(--font-geist-sans), sans-serif",
  whiteSpace: "nowrap",
};

const ghostButtonStyle: React.CSSProperties = {
  padding: "9px 14px",
  borderRadius: 999,
  background: "var(--surface-2)",
  color: "var(--ink)",
  fontSize: 12,
  fontWeight: 500,
  border: "1px solid var(--line-2)",
  cursor: "pointer",
  fontFamily: "var(--font-geist-sans), sans-serif",
  whiteSpace: "nowrap",
};

interface CategoryRowProps {
  title: string;
  body: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
}

function CategoryRow({
  title,
  body,
  checked,
  disabled,
  onChange,
}: CategoryRowProps) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.7 : 1,
      }}
    >
      <span
        aria-hidden
        style={{
          position: "relative",
          flexShrink: 0,
          marginTop: 2,
          width: 32,
          height: 18,
          borderRadius: 999,
          background: checked
            ? "var(--blue-grad, linear-gradient(135deg,#38bdf8,#0ea5e9))"
            : "var(--surface-2, rgba(255,255,255,0.08))",
          border: "1px solid var(--line-2, rgba(255,255,255,0.1))",
          transition: "background 0.18s ease",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 2,
            left: checked ? 16 : 2,
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "#fff",
            boxShadow: "0 1px 2px rgba(0,0,0,0.35)",
            transition: "left 0.18s ease",
          }}
        />
      </span>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "var(--ink)",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </span>
        <span style={{ fontSize: 11.5, color: "var(--mute)", lineHeight: 1.5 }}>
          {body}
        </span>
      </span>
    </label>
  );
}
