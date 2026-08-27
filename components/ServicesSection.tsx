"use client";

import { useState } from "react";
import DownloadAppLink from "@/components/app/DownloadAppLink";
import type { ReactElement } from "react";
import LazyVideo from "./LazyVideo";
import ScrollReveal from "./ScrollReveal";
import { toolSlug } from "@/features/editor/data/niches";
import { studioServiceName } from "@/features/editor/data/studio";
import {
  SERVICES,
  serviceId,
} from "@/features/editor/data/services";

// ─── Services ─────────────────────────────────────────────────────────────────


// Tools a user can actually run today; the two `comingSoon` cards still
// render, badged SOON, but are excluded from every published count.
const LIVE_SERVICE_COUNT = SERVICES.filter((s) => !("comingSoon" in s && s.comingSoon)).length;

// ─── Tab config ───────────────────────────────────────────────────────────────
// Cut 4 · Stage 11 · Enhance 10 · Format 3 = 28 total

const TABS = ["All", "Cut", "Stage", "Enhance", "Format"] as const;

const TAB_COUNTS: Record<string, number> = {
  All: SERVICES.length,
  Cut: SERVICES.filter((s) => s.cat === "cut").length,
  Stage: SERVICES.filter((s) => s.cat === "stage").length,
  Enhance: SERVICES.filter((s) => s.cat === "enhance").length,
  Format: SERVICES.filter((s) => s.cat === "format").length,
};

// ─── Category visuals ─────────────────────────────────────────────────────────

const catBg: Record<string, string> = {
  cut: "linear-gradient(135deg, #001830 0%, #002a50 50%, #000d20 100%)",
  stage: "linear-gradient(135deg, #181818 0%, #242424 50%, #111 100%)",
  enhance: "linear-gradient(135deg, #1a0f00 0%, #2e1a00 50%, #0d0800 100%)",
  format: "linear-gradient(135deg, #0a0010 0%, #160020 50%, #050008 100%)",
};

const catTagClass: Record<string, string> = {
  cut: "tag-cut",
  stage: "tag-stage",
  enhance: "tag-enhance",
  format: "tag-format",
};

const catSvg: Record<string, ReactElement> = {
  cut: (
    <svg viewBox='0 0 160 120' className='w-full h-full opacity-20'>
      <rect
        x='30'
        y='15'
        width='100'
        height='90'
        rx='8'
        fill='rgba(56,189,248,0.15)'
        stroke='rgba(56,189,248,0.3)'
        strokeWidth='1'
      />
      <path
        d='M30 60 L130 60'
        stroke='rgba(56,189,248,0.5)'
        strokeWidth='1.5'
        strokeDasharray='4 3'
      />
      <circle
        cx='80'
        cy='60'
        r='12'
        fill='rgba(56,189,248,0.2)'
        stroke='rgba(56,189,248,0.5)'
        strokeWidth='1'
      />
    </svg>
  ),
  stage: (
    <svg viewBox='0 0 160 120' className='w-full h-full opacity-20'>
      <rect
        x='0'
        y='0'
        width='160'
        height='120'
        fill='rgba(255,255,255,0.03)'
      />
      <ellipse cx='80' cy='110' rx='60' ry='10' fill='rgba(255,255,255,0.08)' />
      <rect
        x='55'
        y='20'
        width='50'
        height='70'
        rx='4'
        fill='rgba(255,255,255,0.12)'
        stroke='rgba(255,255,255,0.2)'
        strokeWidth='0.5'
      />
    </svg>
  ),
  enhance: (
    <svg viewBox='0 0 160 120' className='w-full h-full opacity-20'>
      <circle
        cx='80'
        cy='60'
        r='40'
        fill='rgba(255,200,87,0.1)'
        stroke='rgba(255,200,87,0.25)'
        strokeWidth='1'
      />
      <circle cx='80' cy='60' r='25' fill='rgba(255,200,87,0.12)' />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <line
          key={i}
          x1={80 + 42 * Math.cos((a * Math.PI) / 180)}
          y1={60 + 42 * Math.sin((a * Math.PI) / 180)}
          x2={80 + 52 * Math.cos((a * Math.PI) / 180)}
          y2={60 + 52 * Math.sin((a * Math.PI) / 180)}
          stroke='rgba(255,200,87,0.3)'
          strokeWidth='1.5'
        />
      ))}
    </svg>
  ),
  format: (
    <svg viewBox='0 0 160 120' className='w-full h-full opacity-20'>
      <rect
        x='20'
        y='15'
        width='55'
        height='55'
        rx='4'
        fill='rgba(200,182,255,0.1)'
        stroke='rgba(200,182,255,0.25)'
        strokeWidth='1'
      />
      <rect
        x='85'
        y='15'
        width='55'
        height='35'
        rx='4'
        fill='rgba(200,182,255,0.08)'
        stroke='rgba(200,182,255,0.2)'
        strokeWidth='1'
      />
      <rect
        x='85'
        y='60'
        width='55'
        height='55'
        rx='4'
        fill='rgba(200,182,255,0.1)'
        stroke='rgba(200,182,255,0.25)'
        strokeWidth='1'
      />
      <rect
        x='20'
        y='80'
        width='55'
        height='35'
        rx='4'
        fill='rgba(200,182,255,0.08)'
        stroke='rgba(200,182,255,0.2)'
        strokeWidth='1'
      />
    </svg>
  ),
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.cat === activeTab.toLowerCase());

  return (
    <section id='services' className='relative z-10 mt-40'>
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Section header */}
        <ScrollReveal
          variant='blur'
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'
        >
          <div
            style={{
              borderBottom: "1px solid var(--line)",
              paddingBottom: 28,
              marginBottom: 56,
              width: "100%",
            }}
          >
            <h2
              className='font-fraunces'
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              Every edit. <em className='silver'>One</em> studio.
            </h2>
            <p
              style={{
                marginTop: 16,
                maxWidth: 580,
                color: "var(--mute)",
                fontSize: 16,
                lineHeight: 1.55,
              }}
            >
              {LIVE_SERVICE_COUNT} specialist services across cutting, staging,
              enhancing, and formatting. All AI-powered, all under one roof.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <div
          className='flex items-center gap-1 mb-10 overflow-x-auto'
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            borderRadius: 999,
            padding: "4px",
            width: "fit-content",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`service-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              <span
                style={{
                  marginLeft: 5,
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  opacity: activeTab === tab ? 0.6 : 0.4,
                  letterSpacing: "0.04em",
                }}
              >
                · {TAB_COUNTS[tab]}
              </span>
            </button>
          ))}
        </div>

        {/* Service cards */}
        <ScrollReveal
          stagger
          threshold={0}
          className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'
        >
          {filtered.map((svc) => {
            const comingSoon = "comingSoon" in svc && svc.comingSoon === true;
            const cardInner = (
              <>
                {/* Thumbnail */}
                <div
                  className='relative overflow-hidden'
                  style={{ aspectRatio: "4/3", background: catBg[svc.cat] }}
                >
                  {"video" in svc && svc.video ? (
                    <LazyVideo
                      src={svc.video}
                      poster={svc.video.replace(/\.mp4$/i, ".jpg")}
                      posterSizes='(max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1480px) 25vw, 334px'
                      alt={`${svc.name} ${svc.italic} demo`}
                      className='absolute inset-0'
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload='metadata'
                      videoStyle={
                        "videoZoom" in svc && svc.videoZoom
                          ? { transform: `scale(${svc.videoZoom})` }
                          : undefined
                      }
                    />
                  ) : (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      {catSvg[svc.cat]}
                    </div>
                  )}

                  {/* Category tag */}
                  <div className='absolute top-3 left-3'>
                    <span
                      className={`chip ${catTagClass[svc.cat]}`}
                      style={{ fontSize: 9, padding: "3px 8px" }}
                    >
                      {svc.catLabel}
                    </span>
                  </div>

                  {/* Coming-soon badge — top right */}
                  {comingSoon && (
                    <div className='absolute top-3 right-3'>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono), monospace",
                          fontSize: 9,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#0b0d12",
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #d8dce3 30%, #b5bac2 65%, #ffffff 100%)",
                          padding: "4px 10px",
                          borderRadius: 999,
                          fontWeight: 700,
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 14px rgba(0,0,0,0.35)",
                        }}
                      >
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Credit cost */}
                  <div
                    className='absolute bottom-3 right-3'
                    style={{
                      background: "rgba(8,10,14,0.92)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "var(--r-sm)",
                      padding: "4px 10px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      color: "var(--silver-2)",
                    }}
                  >
                    {svc.credit}
                  </div>
                </div>

                {/* Info */}
                <div className='p-4 flex flex-col gap-1'>
                  <h3
                    className='font-fraunces'
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: "var(--ink)",
                    }}
                  >
                    {svc.name} <em className='silver'>{svc.italic}</em>
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--mute)",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>
              </>
            );

            const baseStyle = {
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              textDecoration: "none",
              color: "inherit",
            } as const;

            if (comingSoon) {
              return (
                <div
                  key={svc.id}
                  aria-disabled='true'
                  aria-label={`${svc.name} ${svc.italic} — coming soon`}
                  className='stagger-item service-card flex flex-col overflow-hidden'
                  style={{
                    ...baseStyle,
                    cursor: "not-allowed",
                    opacity: 0.78,
                  }}
                >
                  {cardInner}
                </div>
              );
            }

            return (
              <DownloadAppLink
                key={svc.id}
                id={serviceId(svc)}
                href={`/edit/studio/${toolSlug(studioServiceName(svc))}`}
                source='tool'
                aria-label={`Get the app to use ${svc.name} ${svc.italic}`}
                className='stagger-item card-hover sheen service-card flex flex-col overflow-hidden'
                style={{ ...baseStyle, scrollMarginTop: 110 }}
              >
                {cardInner}
              </DownloadAppLink>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
