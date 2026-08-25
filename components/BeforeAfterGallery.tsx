"use client";

import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const GALLERY_ITEMS = [
  {
    id: 1,
    product: "Object Removal",
    service: "Object Erase",
    cat: "CUT",
    catClass: "tag-cut",
    src: "/assets/images/object erase.png",
    w: 1672,
    h: 941,
    alt: "Object erase demonstration",
    beforeFilter:
      "brightness(0.45) contrast(1.25) saturate(0.45) sepia(0.25) hue-rotate(8deg)",
  },
  {
    id: 2,
    product: "Studio Lighting",
    service: "Studio White",
    cat: "STAGE",
    catClass: "tag-stage",
    src: "/assets/images/studio white.png",
    w: 1448,
    h: 1086,
    alt: "Studio white background demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.15) saturate(0.55) sepia(0.3) hue-rotate(-6deg)",
  },
  {
    id: 3,
    product: "Sky Enhancement",
    service: "Sky Replace",
    cat: "STAGE",
    catClass: "tag-stage",
    src: "/assets/images/Sky-Replace.png",
    w: 1448,
    h: 1086,
    alt: "Sky replacement demonstration",
    beforeFilter:
      "brightness(0.55) contrast(1.2) saturate(0.4) hue-rotate(-12deg)",
  },
  {
    id: 4,
    product: "Clarity Boost",
    service: "4K Upscale",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/4k upscale.png",
    w: 1448,
    h: 1086,
    alt: "4K upscale enhancement demonstration",
    beforeFilter:
      "brightness(0.55) contrast(0.9) saturate(0.4) sepia(0.35) hue-rotate(20deg)",
  },
  {
    id: 5,
    product: "Skin Perfection",
    service: "Skin Smooth",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/skin smooth.png",
    w: 1122,
    h: 1402,
    alt: "Skin smoothing demonstration",
    beforeFilter:
      "brightness(0.55) contrast(1.1) saturate(0.5) sepia(0.25) hue-rotate(-10deg)",
  },
  {
    id: 6,
    product: "Reflection Polish",
    service: "Reflection Clean",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/reflection clean.png",
    w: 1536,
    h: 1024,
    alt: "Reflection cleaning demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.2) saturate(0.4) hue-rotate(-20deg)",
  },
  {
    id: 7,
    product: "Room Staging",
    service: "Room Declutter",
    cat: "STAGE",
    catClass: "tag-stage",
    src: "/assets/images/room-declutring.png",
    w: 1672,
    h: 941,
    alt: "Room decluttering demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.3) saturate(0.45) sepia(0.4) hue-rotate(12deg)",
  },
  {
    id: 8,
    product: "Mood Lighting",
    service: "Light & Mood",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/light and mood.png",
    w: 1536,
    h: 1024,
    alt: "Light and mood adjustment demonstration",
    beforeFilter:
      "brightness(0.55) contrast(1.15) saturate(0.5) sepia(0.2) hue-rotate(-18deg)",
  },
  {
    id: 9,
    product: "Professional Pack",
    service: "Studio Pack",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/studio pack.png",
    w: 1672,
    h: 941,
    alt: "Studio pack professional tools demonstration",
    beforeFilter:
      "brightness(0.6) contrast(1.1) saturate(0.5) sepia(0.2) hue-rotate(-15deg)",
  },
  {
    id: 10,
    product: "Garment Isolation",
    service: "Ghost Mannequin",
    cat: "CUT",
    catClass: "tag-cut",
    src: "/assets/images/ghost mannequin-snap-pro.png",
    w: 1122,
    h: 1402,
    alt: "Ghost mannequin garment isolation demonstration",
    beforeFilter:
      "brightness(0.45) contrast(1.2) saturate(0.45) sepia(0.2) hue-rotate(10deg)",
  },
  {
    id: 11,
    product: "Surface Polish",
    service: "Glass Reflection",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/glass-reflection.png",
    w: 1122,
    h: 1402,
    alt: "Glass reflection cleanup demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.25) saturate(0.4) hue-rotate(-15deg)",
  },
  {
    id: 12,
    product: "Angle Correction",
    service: "Perspective Fix",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/Studio Perspective Fix. .png",
    w: 1448,
    h: 1086,
    alt: "Perspective fix correction demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.2) saturate(0.45) sepia(0.15) hue-rotate(6deg)",
  },
  {
    id: 13,
    product: "Evening Mood",
    service: "Twilight Convert",
    cat: "STAGE",
    catClass: "tag-stage",
    src: "/assets/images/twilght .png",
    w: 1672,
    h: 941,
    alt: "Twilight conversion demonstration",
    beforeFilter:
      "brightness(0.65) contrast(1.1) saturate(0.5) hue-rotate(-8deg)",
  },
  {
    id: 14,
    product: "Detail Clarity",
    service: "Macro Sharpen",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/macro sharpen.png",
    w: 1448,
    h: 1086,
    alt: "Macro sharpen detail demonstration",
    beforeFilter:
      "brightness(0.55) contrast(0.95) saturate(0.45) sepia(0.3) hue-rotate(15deg)",
  },
  {
    id: 16,
    product: "Tileable Swatch",
    service: "Pattern Repeat",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/pattren repeat.png",
    w: 1672,
    h: 941,
    alt: "Pattern repeat tiling demonstration",
    beforeFilter:
      "brightness(0.55) contrast(1.05) saturate(0.4) sepia(0.2) hue-rotate(18deg)",
  },
];

/** Uniform card height — each card's width follows its image's native aspect
    ratio, so nothing is cropped or stretched. */
const CARD_H = 320;

/** One card-ish nudge per arrow press. */
const SCROLL_STEP = 400;

function BACard({ item }: { item: (typeof GALLERY_ITEMS)[0] }) {
  // Width is derived from aspect-ratio so the box matches the bitmap exactly;
  // this rounded value is only the `sizes` hint for srcset selection.
  const cardW = Math.round(CARD_H * (item.w / item.h));
  return (
    <div
      className='shrink-0 overflow-hidden relative'
      style={{
        height: CARD_H,
        aspectRatio: `${item.w} / ${item.h}`,
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--line)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={`${cardW}px`}
        style={{ objectFit: "cover" }}
        draggable={false}
      />

      {/* Service name overlay */}
      <div
        className='absolute bottom-3 left-3 z-10'
        style={{
          background: "rgba(8,10,14,0.92)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "var(--r-md)",
          padding: "8px 12px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: 13,
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: 2,
          }}
        >
          {item.product}
        </p>
        <span
          className={`chip ${item.catClass}`}
          style={{ fontSize: 8, padding: "2px 7px" }}
        >
          {item.service}
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollCards = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -SCROLL_STEP : SCROLL_STEP;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({ left: amount, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <section id='gallery' className='relative z-10 mt-40'>
      {/* Section header */}
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        <div
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: 28,
            marginBottom: 56,
          }}
        >
          <div>
            <h2
              className='font-fraunces'
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              See the <em className='silver'>difference.</em>
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
              Real products, real results.
            </p>
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              color: "var(--mute)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {GALLERY_ITEMS.length} transformations
          </div>
        </div>

        <div className='flex items-center justify-end gap-2 mb-4'>
          <button
            type='button'
            aria-label='Scroll gallery left'
            onClick={() => scrollCards("left")}
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              border: "none",
              background: "var(--silver-grad)",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "var(--shadow-silver)",
            }}
          >
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
              <path
                d='M7.5 2.5L4 6l3.5 3.5'
                stroke='currentColor'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            type='button'
            aria-label='Scroll gallery right'
            onClick={() => scrollCards("right")}
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              border: "none",
              background: "var(--silver-grad)",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "var(--shadow-silver)",
            }}
          >
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
              <path
                d='M4.5 2.5L8 6l-3.5 3.5'
                stroke='currentColor'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        id='baScroll'
        ref={scrollRef}
        className='gallery-scroll flex gap-4 overflow-x-auto pb-6'
        style={{ paddingLeft: 48, paddingRight: 48, scrollbarWidth: "none" }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          if (!el) return;
          isDown.current = true;
          startX.current = e.pageX - el.offsetLeft;
          scrollLeft.current = el.scrollLeft;
        }}
        onMouseLeave={() => {
          isDown.current = false;
        }}
        onMouseUp={() => {
          isDown.current = false;
        }}
        onMouseMove={(e) => {
          if (!isDown.current || !scrollRef.current) return;
          e.preventDefault();
          const x = e.pageX - scrollRef.current.offsetLeft;
          scrollRef.current.scrollLeft =
            scrollLeft.current - (x - startX.current) * 1.2;
        }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <ScrollReveal
            key={item.id}
            delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
            className='shrink-0'
          >
            <BACard item={item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
