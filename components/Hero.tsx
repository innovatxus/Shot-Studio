import { preload } from "react-dom";
import HeroVideo from "./HeroVideo";
import Navbar from "./Navbar";
import DownloadAppTrigger from "@/components/app/DownloadAppTrigger";

const HERO_VIDEO_SOURCES = [
  "/assets/video/hero-videos/hero-main-web.webm",
];

/**
 * Full-screen cinematic hero section.
 * ─ A looping video playlist fills the viewport as the background
 * ─ Three-layer overlay for depth and readability
 * ─ Navbar floats on top of the video
 * ─ Headline / sub-headline / CTAs animate in via CSS
 *
 * Server component: no runtime JS required beyond HeroVideo & Navbar (both "use client").
 */
export default function Hero() {
  // Kick off the fetch for the first (above-the-fold) clip as early as
  // possible — before HeroVideo even hydrates — via React's resource hint API.
  preload(HERO_VIDEO_SOURCES[0], { as: "video", fetchPriority: "high" });
  // Also preload the poster so it's ready the instant the video element mounts,
  // giving users a styled fallback frame rather than a blank well.
  preload("/assets/video/hero-videos/hero-main-poster.jpg", { as: "image", fetchPriority: "high" });

  return (
    <section
      className='relative w-full overflow-hidden'
      style={{ minHeight: "100svh" }}
      aria-label='Hero'
    >
      {/* ── Video Background ── */}
      <HeroVideo sources={HERO_VIDEO_SOURCES} />

      {/* ── Cinematic Overlay Stack ── */}

      {/* Layer 1 — base dark tint (prevents washed-out look) */}
      <div
        className='absolute inset-0 z-[2] pointer-events-none'
        style={{ background: "rgba(0,0,0,0.42)" }}
      />

      {/* Layer 2 — vertical gradient (darkens top & bottom, opens up mid) */}
      <div
        className='absolute inset-0 z-[3] pointer-events-none'
        style={{
          background:
            "linear-gradient(to bottom," +
            "rgba(0,0,0,0.72) 0%," +
            "rgba(0,0,0,0.18) 28%," +
            "rgba(0,0,0,0.08) 55%," +
            "rgba(0,0,0,0.45) 78%," +
            "rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Layer 3 — blue atmospheric depth (brand accent from below) */}
      <div
        className='absolute inset-0 z-[4] pointer-events-none'
        style={{
          background:
            "radial-gradient(ellipse 120% 60% at 50% 100%," +
            "rgba(56,189,248,0.07) 0%," +
            "transparent 60%)",
        }}
      />

      {/* Layer 4 — vignette edges */}
      <div
        className='absolute inset-0 z-[4] pointer-events-none'
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 50%," +
            "transparent 55%," +
            "rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Layer 5 — drifting aurora orbs (decorative) */}
      <div
        className='absolute inset-0 z-[5] pointer-events-none overflow-hidden'
        aria-hidden='true'
      >
        <span
          className='aurora-orb'
          style={{
            width: 520,
            height: 520,
            top: "-10%",
            left: "-8%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.55), transparent 60%)",
            animationDelay: "0s",
          }}
        />
        <span
          className='aurora-orb'
          style={{
            width: 620,
            height: 620,
            bottom: "-15%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(216,220,227,0.28), transparent 60%)",
            animationDelay: "-6s",
            opacity: 0.4,
          }}
        />
      </div>

      {/* ── Full-height content column ── */}
      <div
        className='relative z-10 flex flex-col'
        style={{ minHeight: "100svh" }}
      >
        {/* Navbar pinned to the top of the hero */}
        <div className='px-12 pt-10 max-[720px]:px-4 max-[720px]:pt-5'>
          <Navbar />
        </div>

        {/* Content — vertically centered in the remaining space */}
        <div className='flex flex-1 flex-col items-center justify-center px-6 text-center'>
          {/* Eyebrow pill */}
          <div className='hero-animate hero-animate-d1 mb-8'>
            <div
              className='inline-flex items-center gap-3 px-4 py-[9px]'
              style={{
                background: "rgba(6,8,12,0.65)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 999,
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <span className='blue-pulse' />
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                AI Studio&nbsp;·&nbsp;For everyone&nbsp;·&nbsp;iOS &amp; Android
              </span>
            </div>
          </div>

          {/* Main headline */}
          <div className='hero-animate hero-animate-d2'>
            <h1
              className='font-fraunces mx-auto'
              style={{
                fontSize: "clamp(52px, 8.5vw, 120px)",
                fontWeight: 300,
                letterSpacing: "-0.055em",
                lineHeight: 0.88,
                maxWidth: 1100,
                color: "var(--ink)",
              }}
            >
              <span className='block'>Your product.</span>
              <span className='block mt-[0.06em]'>
                <em className='silver'>shot</em>
                &nbsp;
                <span
                  className='text-blue-grad'
                  style={{ fontStyle: "italic" }}
                >
                  beautifully.
                </span>
              </span>
              <span className='block mt-[0.06em]'>In seconds.</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div className='hero-animate hero-animate-d3 mt-8'>
            <p
              className='mx-auto'
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "rgba(255,255,255,0.58)",
                lineHeight: 1.6,
                maxWidth: 620,
                fontFamily: "var(--font-geist-sans), sans-serif",
              }}
            >
              Upload a photo. Pick a service. Get a professional made image in seconds.{" "}
              <strong
                style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}
              >
                No designer needed.
              </strong>
            </p>
          </div>

          {/* CTA row */}
          <div className='hero-animate hero-animate-d4 flex items-center justify-center gap-3 mt-10 flex-wrap'>
            {/* Primary blue CTA */}
            <DownloadAppTrigger
              source='cta'
              className='btn-lift'
              style={{
                padding: "14px 28px",
                borderRadius: 999,
                background: "var(--blue-grad)",
                color: "white",
                fontWeight: 600,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.22)," +
                  "0 0 28px rgba(56,189,248,0.45)," +
                  "0 4px 16px rgba(0,0,0,0.4)",
                fontFamily: "var(--font-geist-sans), sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                letterSpacing: "-0.01em",
              }}
            >
              Start free now
              <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                <path
                  d='M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </DownloadAppTrigger>

            {/* Secondary glass CTA */}
            <button
              className='btn-lift'
              style={{
                padding: "13px 28px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.14)",
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontWeight: 500,
                fontSize: 14,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "-0.01em",
              }}
            >
              See all 23 services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
