"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import LazyVideo from "@/components/LazyVideo";

/**
 * CreativePowerSection — "ShotStudio Intelligence"
 *
 * Layout mirrors the Higgsfield Supercomputer section:
 *   · Contained rounded-card on the page (surface bg, site-blue glow)
 *   · Absolutely-positioned left card ("Creative") + blue badge
 *   · Center: section-num eyebrow → avatar squares → Fraunces headline
 *     with silver-chrome "superpower" em → Geist Sans sub → command bar
 *   · Absolutely-positioned right panel: Distribution card + blue status
 *     pills + Studio scene card
 *
 * Design tokens used:
 *   --surface / --surface-2 / --line / --line-2
 *   --ink / --mute
 *   --silver-grad (chrome text on "superpower")
 *   --blue / --blue-grad / --blue-glow / --blue-glow-soft
 *   --font-fraunces / --font-geist-sans / --font-geist-mono
 *   .blue-pulse · .shimmer-bg · .glow-breathe
 */
export default function CreativePowerSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Fade-in on scroll ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.transition = "none";
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      aria-label='ShotStudio Intelligence'
      style={{ padding: "200px 40px" }}
      className='max-[720px]:px-4 max-[720px]:py-32'
    >
      {/* ─── Contained card ─── */}
      <div
        ref={containerRef}
        style={{
          maxWidth: 1480,
          margin: "0 auto",
          borderRadius: 28,
          overflow: "hidden",
          position: "relative",
          /* Slightly raised surface vs page #000 — defines the card */
          background:
            "linear-gradient(150deg, #0A0A0A 0%, #0A0E16 45%, #0A0A0A 100%)",
          border: "1px solid var(--line)",
          opacity: 0,
          transform: "translateY(28px)",
          transition: "opacity 0.85s ease, transform 0.85s ease",
        }}
      >
        {/* ── Ambient blue glow (center) ── */}
        <div
          aria-hidden
          className='glow-breathe'
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 860,
            height: 520,
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.11) 0%, rgba(14,165,233,0.05) 42%, transparent 70%)",
            filter: "blur(55px)",
            pointerEvents: "none",
          }}
        />
        {/* ── Bottom rim glow ── */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1200,
            height: 180,
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 60%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* ── Dot grid ── */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />

        {/* ── Content wrapper ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            minHeight: 560,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* ══ LEFT CARD ══ */}
          <div
            className='max-[1100px]:hidden'
            style={{
              position: "absolute",
              left: 40,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              width: 268,
            }}
          >
            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--line-2)",
                borderRadius: 18,
                padding: 16,
                position: "relative",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 5,
                }}
              >
                <span
                  style={{ fontSize: 11, color: "var(--mute)", lineHeight: 1 }}
                >
                  ✦
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  Creative
                </span>
              </div>
              <div
                className='text-silver-grad'
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.08em",
                  marginBottom: 12,
                }}
              >
                Product · Hero Image
              </div>

              {/* Thumbnail — video with crosshair + corner overlay */}
              <div
                style={{
                  height: 174,
                  borderRadius: 12,
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                }}
              >
                {/* Below the fold, so it mounts on approach rather than
                    downloading the whole clip during first paint — this was
                    the last raw <video preload="auto"> on the page and cost
                    ~985KB before anything the visitor could see. */}
                <LazyVideo
                  src='/assets/video/carosel-videos/studio-carosel.mp4'
                  poster='/assets/video/carosel-videos/studio-carosel.jpg'
                  posterSizes='236px'
                  alt='Product hero image being generated in the studio'
                  className='absolute inset-0'
                />
                <svg
                  viewBox='0 0 236 174'
                  fill='none'
                  aria-hidden='true'
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                >
                  {/* Corner crop marks — silver */}
                  <path
                    d='M10 22 L10 10 L22 10'
                    stroke='rgba(168,174,184,0.6)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    fill='none'
                  />
                  <path
                    d='M226 22 L226 10 L214 10'
                    stroke='rgba(168,174,184,0.6)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    fill='none'
                  />
                  <path
                    d='M10 152 L10 164 L22 164'
                    stroke='rgba(168,174,184,0.6)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    fill='none'
                  />
                  <path
                    d='M226 152 L226 164 L214 164'
                    stroke='rgba(168,174,184,0.6)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    fill='none'
                  />
                  {/* Crosshair — blue */}
                  <circle cx='118' cy='87' r='3' fill='#38BDF8' opacity='0.9' />
                  <line
                    x1='118'
                    y1='75'
                    x2='118'
                    y2='99'
                    stroke='rgba(56,189,248,0.35)'
                    strokeWidth='1'
                  />
                  <line
                    x1='106'
                    y1='87'
                    x2='130'
                    y2='87'
                    stroke='rgba(56,189,248,0.35)'
                    strokeWidth='1'
                  />
                </svg>
              </div>
            </div>

            {/* ── "Removing BG" badge — blue-grad ── */}
            <div
              style={{
                position: "absolute",
                bottom: -14,
                right: -18,
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "8px 14px",
                background: "var(--blue-grad)",
                borderRadius: 999,
                boxShadow: "var(--shadow-blue)",
                zIndex: 30,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                ✦
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                Removing BG
              </span>
            </div>
          </div>
          {/* ══ END LEFT CARD ══ */}

          {/* ══ CENTER COLUMN ══ */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "80px 0",
              maxWidth: 620,
              width: "100%",
              position: "relative",
              zIndex: 15,
            }}
          >
            {/* Eyebrow — section-num style, centered with flanking lines */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                justifyContent: "center",
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 28,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, #38BDF8)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#38BDF8",
                  whiteSpace: "nowrap",
                }}
              >
                ShotStudio Intelligence
              </span>
              <span
                style={{
                  display: "block",
                  width: 28,
                  height: 1,
                  background: "linear-gradient(90deg, #38BDF8, transparent)",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Avatar row — 5 rounded-square icons */}
            <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
              {(
                [
                  {
                    bg: "linear-gradient(135deg,#7DD3FC 0%,#38BDF8 100%)",
                    label: "SH",
                    dark: false,
                  },
                  {
                    bg: "linear-gradient(135deg,#DFE3EA 0%,#A8AEB8 100%)",
                    label: "MK",
                    dark: true,
                  },
                  {
                    bg: "linear-gradient(135deg,#0EA5E9 0%,#0369A1 100%)",
                    label: "AI",
                    dark: false,
                  },
                  {
                    bg: "linear-gradient(135deg,#B5BAC2 0%,#5A6069 100%)",
                    label: "ZR",
                    dark: false,
                  },
                  {
                    bg: "linear-gradient(135deg,#F5F5F5 0%,#DFE3EA 100%)",
                    label: "OP",
                    dark: true,
                  },
                ] as {
                  bg: string;
                  label: string;
                  dark: boolean;
                }[]
              ).map((a, i) => (
                <div
                  key={i}
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 13,
                    background: a.bg,
                    border: "1px solid var(--line-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: a.dark
                      ? "rgba(0,0,0,0.65)"
                      : "rgba(255,255,255,0.9)",
                    letterSpacing: "-0.01em",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.5)",
                    flexShrink: 0,
                  }}
                >
                  {a.label}
                </div>
              ))}
            </div>

            {/* Headline — Fraunces, silver-chrome accent */}
            <h2
              className='font-fraunces'
              style={{
                fontSize: "clamp(46px, 5.8vw, 80px)",
                fontWeight: 300,
                lineHeight: 0.93,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
                marginBottom: 20,
              }}
            >
              Your creative
              <br />
              <em className='silver'>superpower</em>.
            </h2>

            {/* Sub-headline — Geist Sans, site muted colour */}
            <p
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: 17,
                color: "var(--mute)",
                lineHeight: 1.6,
                maxWidth: 460,
                marginBottom: 44,
              }}
            >
              Upload a product photo. Run AI services in sequence. Download hero
              images that convert.
            </p>

            {/* Command bar */}
            <CommandBar />
          </div>
          {/* ══ END CENTER ══ */}

          {/* ══ RIGHT PANEL ══ */}
          <div
            className='max-[1100px]:hidden flex flex-col items-end gap-2.5'
            style={{
              position: "absolute",
              right: 40,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              width: 268,
            }}
          >
            {/* Distribution card */}
            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--line-2)",
                borderRadius: 18,
                padding: "14px 16px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginBottom: 10,
                }}
              >
                {/* macOS-style traffic lights */}
                <div style={{ display: "flex", gap: 4, marginRight: 2 }}>
                  {["#3A3F47", "#3A3F47", "#38BDF8"].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: c,
                        opacity: 0.8,
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  Distribution
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.08em",
                  color: "var(--mute-2)",
                  marginBottom: 12,
                }}
              >
                22 K exports · this month
              </div>

              {/* Progress bars — site blue + silver tones */}
              {(
                [
                  { label: "Instagram 1:1", pct: 82, color: "#38BDF8" },
                  { label: "TikTok 9:16", pct: 65, color: "#A8AEB8" },
                  { label: "Amazon Main", pct: 91, color: "#7DD3FC" },
                ] as {
                  label: string;
                  pct: number;
                  color: string;
                }[]
              ).map((row) => (
                <div key={row.label} style={{ marginBottom: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 9,
                        letterSpacing: "0.06em",
                        color: "var(--mute)",
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 9,
                        color: row.color,
                      }}
                    >
                      {row.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 2,
                      borderRadius: 1,
                      background: "var(--line-2)",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${row.pct}%`,
                        background: row.color,
                        borderRadius: 1,
                        opacity: 0.75,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── "Generating crops" pill ── */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "7px 14px",
                background: "var(--surface)",
                border: "1px solid rgba(56,189,248,0.22)",
                borderRadius: 999,
                alignSelf: "flex-start",
                marginLeft: 18,
                boxShadow: "0 0 18px rgba(56,189,248,0.08)",
              }}
            >
              <span className='blue-pulse' />
              <span
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--ink)",
                  whiteSpace: "nowrap",
                }}
              >
                Generating crops
              </span>
            </div>

            {/* ── "Staging scene" pill ── */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "7px 14px",
                background: "var(--surface)",
                border: "1px solid rgba(168,174,184,0.18)",
                borderRadius: 999,
                marginRight: 12,
              }}
            >
              <span
                className='pulse-anim'
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--silver-3)",
                  boxShadow: "0 0 10px rgba(168,174,184,0.4)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--ink)",
                  whiteSpace: "nowrap",
                }}
              >
                Staging scene
              </span>
            </div>

            {/* Studio card */}
            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--line-2)",
                borderRadius: 18,
                padding: "14px 16px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  Studio
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9,
                    color: "#38BDF8",
                    letterSpacing: "0.08em",
                  }}
                >
                  4 scenes ready
                </span>
              </div>

              {/* 2×2 scene thumbnails — blue + silver tones */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 6,
                }}
              >
                {(
                  [
                    {
                      bg: "linear-gradient(135deg,rgba(56,189,248,0.14),rgba(14,165,233,0.06))",
                      border: "rgba(56,189,248,0.16)",
                      label: "Loft",
                    },
                    {
                      bg: "linear-gradient(135deg,rgba(168,174,184,0.12),rgba(90,96,105,0.06))",
                      border: "rgba(168,174,184,0.14)",
                      label: "Studio",
                    },
                    {
                      bg: "linear-gradient(135deg,rgba(125,211,252,0.10),rgba(56,189,248,0.05))",
                      border: "rgba(125,211,252,0.12)",
                      label: "Outdoor",
                    },
                    {
                      bg: "linear-gradient(135deg,rgba(181,186,194,0.10),rgba(58,63,71,0.06))",
                      border: "rgba(181,186,194,0.12)",
                      label: "Minimal",
                    },
                  ] as {
                    bg: string;
                    border: string;
                    label: string;
                  }[]
                ).map((t) => (
                  <div
                    key={t.label}
                    style={{
                      height: 54,
                      borderRadius: 9,
                      border: `1px solid ${t.border}`,
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "5px 7px",
                    }}
                  >
                    <Image
                      src={`/assets/images/carosel-images/${t.label.toLowerCase()}.png`}
                      alt={t.label}
                      fill
                      sizes='120px'
                      style={{ objectFit: "cover", borderRadius: 9 }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 8,
                        letterSpacing: "0.06em",
                        color: "#fff",
                        position: "relative",
                        zIndex: 1,
                        background: "rgba(0,0,0,0.55)",
                        backdropFilter: "blur(4px)",
                        borderRadius: 4,
                        padding: "2px 5px",
                        lineHeight: 1.4,
                      }}
                    >
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ══ END RIGHT PANEL ══ */}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Command bar — site DNA version
   · Dark pill matching --surface-2 / --line-2
   · Blue "▶ Run it" CTA matching primary button
──────────────────────────────────────────── */
function CommandBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "var(--surface-2)",
        border: "1px solid var(--line-2)",
        borderRadius: 999,
        padding: "6px 6px 6px 24px",
        maxWidth: 520,
        width: "100%",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), 0 0 40px rgba(56,189,248,0.08)",
      }}
    >
      {/* Prompt text */}
      <span
        style={{
          flex: 1,
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: 14,
          letterSpacing: "-0.01em",
          color: "var(--mute)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          paddingRight: 10,
        }}
      >
        Remove background → stage in loft → export 9 sizes
      </span>

      {/* Blinking blue cursor */}
      <span
        className='cursor-blink'
        style={{
          display: "inline-block",
          width: 2,
          height: 16,
          background: "#38BDF8",
          borderRadius: 1,
          marginRight: 18,
          opacity: 0.9,
          flexShrink: 0,
        }}
      />

      {/* Run it — blue-grad matching site primary CTA */}
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 22px",
          borderRadius: 999,
          background: "var(--blue-grad)",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: 14,
          fontWeight: 600,
          color: "#fff",
          letterSpacing: "-0.01em",
          flexShrink: 0,
          transition: "opacity 0.18s ease, transform 0.18s ease",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.22), 0 0 24px rgba(56,189,248,0.40), 0 4px 14px rgba(0,0,0,0.4)",
        }}
        onMouseEnter={(e) => {
          const b = e.currentTarget as HTMLButtonElement;
          b.style.opacity = "0.85";
          b.style.transform = "scale(0.96)";
        }}
        onMouseLeave={(e) => {
          const b = e.currentTarget as HTMLButtonElement;
          b.style.opacity = "1";
          b.style.transform = "scale(1)";
        }}
      >
        <svg width='13' height='13' viewBox='0 0 13 13' fill='none'>
          <path
            d='M6.5 0L7.9 4.6H12.5L8.8 7.4L10.2 12L6.5 9.2L2.8 12L4.2 7.4L0.5 4.6H5.1L6.5 0Z'
            fill='white'
          />
        </svg>
        Run it
      </button>
    </div>
  );
}
