"use client";

import { useState, useRef, useEffect, useId } from "react";
import Link from "next/link";
import Logo from "./Logo";
import WidgetShell from "./widgets/WidgetShell";
import AuthPanelContent from "./auth/AuthPanelContent";
import AccountPanelContent from "./auth/AccountPanelContent";
import { useAuth } from "./auth/AuthProvider";
import { useDownloadApp } from "@/components/app/DownloadAppProvider";
import HeaderStats from "@/components/app/HeaderStats";
import {
  NAV_CATEGORIES,
  NAV_SERVICES,
  SERVICE_ACCENT,
  serviceId,
  servicePoster,
} from "@/features/editor/data/services";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */

/** Temporarily hides the signed-out "Sign in" trigger. Signed-in users
    still get their account button. Flip to true to restore. */
const SHOW_SIGN_IN = false;



/* ─────────────────────────────────────────────────────────
   SMALL HELPERS
───────────────────────────────────────────────────────── */

/** Tiny badge pill — AI / NEW / HOT / SOON */


/** Person-outline icon for the sign-in / account trigger. */
function AccountIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 15 15' fill='none' aria-hidden='true'>
      <circle cx='7.5' cy='4.5' r='2.5' stroke='currentColor' strokeWidth='1.3' />
      <path
        d='M2.5 13c0-2.76 2.24-4.5 5-4.5s5 1.74 5 4.5'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinecap='round'
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   DROPDOWN PANEL
───────────────────────────────────────────────────────── */

interface DropdownProps {
  pos: { top: number; left: number };
  onEnter: () => void;
  onLeave: () => void;
}

function ToolsDropdown({ pos, onEnter, onLeave }: DropdownProps) {
  const { open: openDownloadApp } = useDownloadApp();
  return (
    <div
      className='nav-dropdown'
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "fixed",
        top: pos.top,
        left: pos.left,
        width: 880,
        zIndex: 9999,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid var(--line)",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow:
          "0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04) inset",
        display: "flex",
      }}
    >
      {/* ── Left panel: service list ── */}
      <div
        style={{
          flex: "0 0 360px",
          padding: "20px 0",
          borderRight: "1px solid var(--line)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Column header */}
        <div
          style={{
            padding: "0 20px 10px",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--mute-2)",
          }}
        >
          Services
        </div>

        {/* One row per real card: poster still as the thumbnail, and the
            link jumps to that card's anchor in the services grid. */}
        {NAV_SERVICES.map((svc) => {
          const poster = servicePoster(svc);
          return (
            <Link
              key={svc.id}
              href={`/#${serviceId(svc)}`}
              onClick={onLeave}
              className='nav-service-row'
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 20px",
                textDecoration: "none",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "transparent")
              }
            >
              <span
                aria-hidden='true'
                style={{
                  position: "relative",
                  width: 46,
                  height: 34,
                  flexShrink: 0,
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid var(--line-2)",
                  background: "var(--surface-3)",
                }}
              >
                {poster ? (
                  <Image
                    src={poster}
                    alt=''
                    fill
                    sizes='46px'
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${SERVICE_ACCENT[svc.cat]}22, transparent 70%)`,
                    }}
                  />
                )}
              </span>

              <span style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                    marginBottom: 2,
                  }}
                >
                  {svc.name} {svc.italic}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: 11,
                    color: "var(--mute)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {svc.desc}
                </span>
              </span>

              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 8,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: SERVICE_ACCENT[svc.cat],
                  opacity: 0.7,
                  flexShrink: 0,
                }}
              >
                {svc.catLabel}
              </span>
            </Link>
          );
        })}
      </div>

      {/* ── Right panel: categories ── */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Column header */}
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--mute-2)",
          }}
        >
          Categories
        </div>

        {/* 2×2 category tiles — artwork comes from the first live service in
            each group, so a tile can never show a tool that no longer ships. */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            flex: 1,
          }}
        >
          {NAV_CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href='/#services'
              onClick={onLeave}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                minHeight: 96,
                padding: "12px 14px",
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid var(--line)",
                background: "var(--surface-2)",
                textDecoration: "none",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  `${cat.accent}55`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--line)";
              }}
            >
              {cat.poster && (
                <Image
                  src={cat.poster}
                  alt=''
                  fill
                  sizes='200px'
                  aria-hidden='true'
                  style={{ objectFit: "cover", opacity: 0.42 }}
                />
              )}
              {/* Scrim keeps the label legible over any frame */}
              <span
                aria-hidden='true'
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(8,10,14,0.94) 30%, rgba(8,10,14,0.55) 70%, rgba(8,10,14,0.35) 100%)",
                }}
              />

              <span
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 8,
                  marginBottom: 3,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--ink)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {cat.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    color: cat.accent,
                    flexShrink: 0,
                  }}
                >
                  {cat.count}
                </span>
              </span>

              <span
                style={{
                  position: "relative",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: 11,
                  color: "var(--mute)",
                  lineHeight: 1.4,
                }}
              >
                {cat.desc}
              </span>
            </Link>
          ))}
        </div>
        {/* Bottom CTA strip */}
        <div
          style={{
            padding: "14px 16px",
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                marginBottom: 2,
              }}
            >
              Start with an image a day on us
            </div>
          </div>
          <button
            type='button'
            onClick={() => openDownloadApp("cta")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              background: "var(--blue-grad)",
              border: "none",
              borderRadius: 999,
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 20px rgba(56,189,248,0.3)",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              Try free
            </span>
            <svg width='11' height='11' viewBox='0 0 11 11' fill='none'>
              <path
                d='M2 5.5h7M7 3l2 2.5L7 8'
                stroke='white'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Services", key: null, href: "/#services" },
  { label: "Niches", key: null, href: "/#niches" },
  { label: "Tools", key: "tools", href: "/#ai-features" },
  { label: "Templates", key: null, href: "/templates" },
  { label: "Educationals", key: null, href: "/learn" },
  { label: "Pricing", key: null, href: "/#pricing" },
  { label: "About", key: null, href: "/about" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [dropPos, setDropPos] = useState({ top: 0, left: 0 });
  const [tokenHover, setTokenHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const authTriggerRef = useRef<HTMLButtonElement>(null);
  const authTitleId = useId();
  const { status, profile } = useAuth();
  const isSignedIn = status === "signed-in";

  /* cleanup on unmount */
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  /* lock body scroll + esc-to-close while mobile menu is open */
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileToolsOpen(false);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleNavEnter = (key: string, e: React.MouseEvent) => {
    cancelClose();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const W = 880;
    const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
    const left = Math.min(Math.max(12, rect.left - 80), vw - W - 12);
    setDropPos({ top: rect.bottom + 10, left });
    setOpenMenu(key);
  };

  return (
    <>
      <nav className='mb-15 flex items-center justify-between relative z-10'>
        {/* Three columns: the side tracks share the leftover space equally, so
            the nav stays optically centred while remaining in flow — an
            absolutely positioned nav can silently overlap the right cluster. */}
        <div
          className='flex lg:grid w-full items-center justify-between gap-3 px-3 py-3 sm:px-5.5 sm:py-3.5'
          style={{ gridTemplateColumns: "1fr auto 1fr", columnGap: 12 }}
        >
          {/* ── Left: Logo ── */}
          <div className='flex items-center min-w-0 overflow-hidden'>
            <Link
              href='/'
              /* Prefetching the route the visitor is already on. */
              prefetch={false}
              aria-label='ShotStudio — home'
              style={{ display: "inline-flex", textDecoration: "none" }}
            >
              {/* Two sizes only. Mixing an arbitrary min-[1440px] variant with
                  the named sm: one is not reliably ordered, which rendered both
                  marks at once — so each mark is sized to fit the tightest
                  track it has to survive rather than swapped at a third
                  breakpoint: 32/16 measures 153px against the 161px left track
                  at 320, and 52/26 fits the ~285px track at 1280. */}
              <span className='sm:hidden'>
                <Logo size={32} fontSize={16} />
              </span>
              <span className='hidden sm:inline-flex'>
                <Logo size={52} fontSize={26} />
              </span>
            </Link>
          </div>

          {/* ── Center: Nav links ── */}
          <div className='hidden lg:flex items-center justify-center gap-4 xl:gap-6'>
            {NAV_LINKS.map(({ label, key, href }, i) => (
              <div
                key={label}
                className={(i === 4 || i === 6) ? 'hidden xl:block' : undefined}
                style={{ position: "relative" }}
                onMouseEnter={key ? (e) => handleNavEnter(key, e) : undefined}
                onMouseLeave={key ? scheduleClose : undefined}
              >
                <Link
                  href={href ?? `/#${label.toLowerCase()}`}
                  className='transition-colors duration-200'
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color:
                      i === 0
                        ? "var(--blue)"
                        : openMenu === key
                          ? "var(--ink)"
                          : "var(--mute)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--ink)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      openMenu === key
                        ? "var(--ink)"
                        : i === 0
                          ? "var(--blue)"
                          : "var(--mute)")
                  }
                >
                  {label}
                  {/* Chevron for dropdown items */}
                  {key && (
                    <svg
                      width='10'
                      height='10'
                      viewBox='0 0 10 10'
                      fill='none'
                      style={{
                        transition: "transform 0.2s ease",
                        transform:
                          openMenu === key ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.5,
                      }}
                    >
                      <path
                        d='M2 3.5L5 6.5L8 3.5'
                        stroke='currentColor'
                        strokeWidth='1.3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* ── Right: Token chip + CTA ── */}
          <div className='flex items-center justify-end gap-2 sm:gap-3 min-w-0'>
            {/* Mobile hamburger */}
            <button
              type='button'
              className='lg:hidden inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10'
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls='mobile-nav-panel'
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                borderRadius: 10,
                background: "var(--surface-2)",
                border: "1px solid var(--line-2)",
                color: "var(--ink)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                aria-hidden='true'
              >
                {mobileOpen ? (
                  <path
                    d='M4 4l10 10M14 4L4 14'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                  />
                ) : (
                  <path
                    d='M3 5h12M3 9h12M3 13h12'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                  />
                )}
              </svg>
            </button>

            {/* Sign in / account */}
            {(isSignedIn || SHOW_SIGN_IN) && (
              <button
                ref={authTriggerRef}
                type='button'
                className='hidden sm:inline-flex items-center justify-center'
                aria-label={isSignedIn ? "Account" : "Sign in"}
                aria-expanded={authOpen}
                onClick={() => setAuthOpen(true)}
                style={
                  isSignedIn
                    ? {
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "var(--blue-grad)",
                        color: "white",
                        fontWeight: 700,
                        fontSize: 13,
                        border: "none",
                        cursor: "pointer",
                        flexShrink: 0,
                      }
                    : {
                        gap: 6,
                        height: 34,
                        padding: "0 14px",
                        borderRadius: 999,
                        background: "var(--surface-2)",
                        border: "1px solid var(--line-2)",
                        color: "var(--ink)",
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        flexShrink: 0,
                        lineHeight: 1,
                      }
                }
              >
                {isSignedIn ? (
                  (profile?.displayName ?? profile?.email ?? "?").charAt(0).toUpperCase()
                ) : (
                  <>
                    <AccountIcon />
                    Sign in
                  </>
                )}
              </button>
            )}

            {/* Live activity, in the gap immediately left of the CTA column.
                Stacking the two stats halves the block to ~66px, so it clears
                the nav from 1280 up; the side-by-side layout needed 161px and
                only fit at 1440. */}
            <div className='hidden xl:flex items-center shrink-0 mr-1'>
              <HeaderStats stacked />
            </div>

            {/* CTA with the balance tucked underneath, so the row keeps
                its width for the counters. */}
            <div className='flex flex-col items-center shrink-0' style={{ gap: 5 }}>
              {/* CTA */}
              <Link
                href='/#get-the-app'
                className='px-3 py-2 text-[11px] sm:px-4 sm:py-2.25 sm:text-[12px] inline-flex items-center justify-center'
                style={{
                  borderRadius: 999,
                  background: "var(--blue-grad)",
                  color: "white",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  textDecoration: "none",
                }}
              >
                Get the app
              </Link>
              {/* Token chip */}
              <button
                className='hidden sm:inline-flex items-center'
                onMouseEnter={() => setTokenHover(true)}
                onMouseLeave={() => setTokenHover(false)}
                style={{
                  gap: 6,
                  background:
                    "linear-gradient(135deg, rgba(20,22,28,0.9), rgba(10,12,16,0.9))",
                  border: `1px solid ${tokenHover ? "rgba(56,189,248,0.45)" : "var(--line-2, rgba(255,255,255,0.08))"}`,
                  padding: "5px 10px 5px 7px",
                  borderRadius: 999,
                  boxShadow: tokenHover
                    ? "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 14px rgba(0,0,0,0.3), 0 0 18px rgba(56,189,248,0.18)"
                    : "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 14px rgba(0,0,0,0.3)",
                  transform: tokenHover ? "translateY(-1px)" : "translateY(0)",
                  transition:
                    "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                  cursor: "pointer",
                }}
              >
                {/* Silver coin icon */}
                <span
                  className='flex items-center justify-center flex-shrink-0'
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #d8dce3 14%, #4e535c 32%, #b5bac2 48%, #2e323a 60%, #c8cdd4 76%, #ffffff 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.6), 0 0 10px rgba(232,234,237,0.25)",
                    fontSize: 9,
                    fontWeight: 800,
                    color: "#000",
                    lineHeight: 1,
                  }}
                >
                  ★
                </span>
                {/* Number */}
                <span
                  style={{
                    color: "var(--blue)",
                    fontWeight: 700,
                    fontSize: 13,
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    lineHeight: 1,
                  }}
                >
                  25
                </span>
                {/* Label */}
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                    lineHeight: 1,
                  }}
                >
                  tokens
                </span>
                {/* Plus circle */}
                <span
                  className='flex items-center justify-center flex-shrink-0'
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    background: "var(--blue, #38bdf8)",
                    color: "#000",
                    fontWeight: 800,
                    fontSize: 11,
                    lineHeight: 1,
                    boxShadow: "0 0 10px var(--blue-glow, rgba(56,189,248,0.5))",
                  }}
                >
                  +
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Dropdown — rendered fixed to bypass Hero overflow:hidden ── */}
      {openMenu === "tools" && (
        <ToolsDropdown
          pos={dropPos}
          onEnter={cancelClose}
          onLeave={() => setOpenMenu(null)}
        />
      )}

      {/* ── Sign in / account panel ── */}
      <WidgetShell
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        triggerRef={authTriggerRef}
        titleId={authTitleId}
        title={isSignedIn ? "Account" : "Sign in to ShotStudio"}
        accentIcon={<AccountIcon />}
        widthPx={380}
      >
        {isSignedIn ? (
          <AccountPanelContent onClose={() => setAuthOpen(false)} />
        ) : (
          <AuthPanelContent onClose={() => setAuthOpen(false)} />
        )}
      </WidgetShell>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <button
            type='button'
            aria-label='Close menu'
            onClick={closeMobile}
            className='lg:hidden'
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "none",
              cursor: "default",
            }}
          />
          {/* Panel */}
          <div
            id='mobile-nav-panel'
            role='dialog'
            aria-modal='true'
            aria-label='Site navigation'
            className='lg:hidden'
            style={{
              position: "fixed",
              top: 12,
              left: 12,
              right: 12,
              maxHeight: "calc(100dvh - 24px)",
              overflowY: "auto",
              zIndex: 60,
              background: "rgba(10,10,10,0.96)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid var(--line)",
              borderRadius: 20,
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04) inset",
              padding: "14px 14px 18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 6px 12px",
                borderBottom: "1px solid var(--line)",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--mute-2)",
                }}
              >
                Menu
              </span>
              <button
                type='button'
                aria-label='Close menu'
                onClick={closeMobile}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "var(--surface-2)",
                  border: "1px solid var(--line-2)",
                  color: "var(--ink)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                  <path
                    d='M3 3l8 8M11 3l-8 8'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                  />
                </svg>
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV_LINKS.map(({ label, key, href }) => {
                const isTools = key === "tools";
                if (isTools) {
                  return (
                    <div
                      key={label}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <button
                        type='button'
                        onClick={() => setMobileToolsOpen((v) => !v)}
                        aria-expanded={mobileToolsOpen}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "14px 12px",
                          borderRadius: 12,
                          background: mobileToolsOpen
                            ? "var(--surface-2)"
                            : "transparent",
                          border: "1px solid",
                          borderColor: mobileToolsOpen
                            ? "var(--line)"
                            : "transparent",
                          color: "var(--ink)",
                          fontFamily: "var(--font-geist-mono), monospace",
                          fontSize: 12,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          {label}
                          <span
                            style={{
                              fontSize: 8,
                              fontFamily: "var(--font-geist-mono), monospace",
                              letterSpacing: "0.14em",
                              color: "#38BDF8",
                              background: "rgba(56,189,248,0.1)",
                              border: "1px solid rgba(56,189,248,0.25)",
                              borderRadius: 4,
                              padding: "2px 5px",
                              lineHeight: 1.4,
                            }}
                          >
                            23
                          </span>
                        </span>
                        <svg
                          width='12'
                          height='12'
                          viewBox='0 0 12 12'
                          fill='none'
                          style={{
                            transition: "transform 0.2s ease",
                            transform: mobileToolsOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            opacity: 0.6,
                          }}
                        >
                          <path
                            d='M3 4.5L6 7.5L9 4.5'
                            stroke='currentColor'
                            strokeWidth='1.4'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>

                      {mobileToolsOpen && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 8,
                            padding: "8px 4px 12px",
                          }}
                        >
                          {NAV_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.key}
                              href={href}
                              onClick={closeMobile}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 4,
                                padding: "12px 14px",
                                background: "var(--surface-2)",
                                border: "1px solid var(--line)",
                                borderRadius: 12,
                                textDecoration: "none",
                                color: "var(--ink)",
                              }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <span
                                  aria-hidden='true'
                                  style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: cat.accent,
                                  }}
                                />
                                <span
                                  style={{
                                    fontFamily:
                                      "var(--font-geist-mono), monospace",
                                    fontSize: 9,
                                    letterSpacing: "0.1em",
                                    color: cat.accent,
                                    opacity: 0.7,
                                  }}
                                >
                                  {cat.count} tools
                                </span>
                              </span>
                              <span
                                style={{
                                  fontFamily:
                                    "var(--font-geist-sans), sans-serif",
                                  fontSize: 13,
                                  fontWeight: 600,
                                  letterSpacing: "-0.01em",
                                }}
                              >
                                {cat.label}
                              </span>
                              <span
                                style={{
                                  fontFamily:
                                    "var(--font-geist-sans), sans-serif",
                                  fontSize: 11,
                                  color: "var(--mute)",
                                  lineHeight: 1.4,
                                }}
                              >
                                {cat.desc}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href={href}
                            onClick={closeMobile}
                            style={{
                              gridColumn: "1 / -1",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 6,
                              padding: "10px 14px",
                              borderRadius: 999,
                              background: "var(--blue-grad)",
                              color: "#fff",
                              textDecoration: "none",
                              fontFamily: "var(--font-geist-mono), monospace",
                              fontSize: 10,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              fontWeight: 600,
                              boxShadow:
                                "inset 0 0 0 1px rgba(255,255,255,0.18), 0 0 18px rgba(56,189,248,0.25)",
                            }}
                          >
                            Browse all 23 tools
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMobile}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 12px",
                      borderRadius: 12,
                      color: "var(--ink)",
                      textDecoration: "none",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                    }}
                  >
                    <span>{label}</span>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      aria-hidden='true'
                      style={{ opacity: 0.5 }}
                    >
                      <path
                        d='M4 3l4 3-4 3'
                        stroke='currentColor'
                        strokeWidth='1.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                );
              })}
            </nav>

            {(isSignedIn || SHOW_SIGN_IN) && (
              <button
                type='button'
                onClick={() => {
                  closeMobile();
                  setAuthOpen(true);
                }}
                style={{
                  marginTop: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px",
                  borderRadius: 12,
                  background: "transparent",
                  border: "1px solid transparent",
                  color: "var(--ink)",
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {isSignedIn ? (
                  <>
                    <span
                      aria-hidden='true'
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "var(--blue-grad)",
                        color: "white",
                        fontWeight: 700,
                        fontSize: 11,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {(profile?.displayName ?? profile?.email ?? "?").charAt(0).toUpperCase()}
                    </span>
                    Account
                  </>
                ) : (
                  <>
                    <AccountIcon />
                    Sign in
                  </>
                )}
              </button>
            )}

            <div
              style={{
                marginTop: 14,
                paddingTop: 14,
                borderTop: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 12px 7px 9px",
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, rgba(20,22,28,0.9), rgba(10,12,16,0.9))",
                  border: "1px solid var(--line-2)",
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #d8dce3 14%, #4e535c 32%, #b5bac2 48%, #2e323a 60%, #c8cdd4 76%, #ffffff 100%)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 8,
                    fontWeight: 800,
                    color: "#000",
                  }}
                >
                  ★
                </span>
                <span
                  style={{
                    color: "var(--blue)",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  25
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                  }}
                >
                  tokens
                </span>
              </span>
              <Link
                href='/#get-the-app'
                onClick={closeMobile}
                style={{
                  padding: "9px 16px",
                  borderRadius: 999,
                  background: "var(--blue-grad)",
                  color: "white",
                  fontSize: 12,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Get the app
              </Link>
            </div>

            {/* Activity — in the sheet on phones rather than the cramped bar */}
            <div
              style={{
                marginTop: 14,
                paddingTop: 14,
                borderTop: "1px solid var(--line)",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <HeaderStats compact />
            </div>
          </div>
        </>
      )}
    </>
  );
}
