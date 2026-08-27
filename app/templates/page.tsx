import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Industry Templates — ShotStudio",
  description: "Browse 48+ AI photo editing templates for your industry.",
};

// ── Data ──────────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  { id: "fashion",     label: "Fashion & Apparel",   tagline: "Ghost mannequin, color match & styled backdrops." },
  { id: "textile",     label: "Textile & Fabrics",   tagline: "Precision upscaling for fabric texture & weave detail." },
  { id: "realtors",    label: "Realtors & Listings", tagline: "Virtual staging, furniture AI & room decluttering." },
  { id: "electronics", label: "Electronics & Tech",  tagline: "Studio backdrops and crisp product isolation." },
  { id: "beauty",      label: "Beauty & Skincare",   tagline: "Glowing skin retouching and color enhancement." },
  { id: "antiques",    label: "Antiques & Vintage",  tagline: "Object isolation and high-detail 4K upscaling." },
  { id: "furniture",   label: "Furniture & Decor",   tagline: "Ambient room scenes and lifestyle flat-lay staging." },
  { id: "auto",        label: "Auto & Dealers",      tagline: "Showroom-ready reflections and dramatic backdrops." },
  { id: "jewelry",     label: "Jewelry",             tagline: "Sparkle enhancement and precision background removal." },
  { id: "products",    label: "Products",            tagline: "Clean cuts, cast shadows and 4K upscaling." },
  { id: "events",      label: "Special Events",      tagline: "Memorable portraits and venue polish." },
  { id: "food",        label: "Food & Drink",        tagline: "Fresh color correction and appetizing mood lighting." },
];

const TEMPLATES: string[][] = [
  ["Clean White", "Studio Dark", "Gradient Sky", "Outdoor Lush"],
  ["Marble Flat", "Neutral Tone", "Bold Contrast", "Minimal Grey"],
  ["Daylight Open", "Twilight Glow", "Modern Loft", "Scandinavian"],
  ["Neon Black", "Lab White", "Urban Desk", "Concrete Grey"],
  ["Peach Glow", "Dewy Skin", "Matte Luxe", "Golden Hour"],
  ["Aged Paper", "Warm Rust", "Dark Patina", "Museum Light"],
  ["Nordic Home", "Boho Warm", "Mid-Century", "Coast White"],
  ["Showroom Pro", "Night Gloss", "Desert Road", "City Grid"],
  ["Black Velvet", "Gold Foil", "Marble Ice", "Rose Float"],
  ["E-comm White", "Lifestyle Pop", "Shadow Soft", "Brand Bold"],
  ["Confetti Joy", "Evening Hall", "Garden Party", "City Lights"],
  ["Café Warm", "Bold Plate", "Green Fresh", "Moody Dark"],
];

// ── Image helpers ──────────────────────────────────────────────────────────────

const pic = (seed: number, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// 4 hero collage layout patterns, rotating by industry index
const Z1_CONFIGS: {
  style: CSSProperties;
  images: { area?: string; w: number; h: number }[];
}[] = [
  {
    // Pattern A: big left 2-col + 2 portrait right + landscape bottom-right (4 imgs)
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gridTemplateAreas: '"a b c" "a d d"',
      gap: 8,
      height: 480,
    },
    images: [
      { area: "a", w: 800, h: 600 },
      { area: "b", w: 400, h: 600 },
      { area: "c", w: 400, h: 600 },
      { area: "d", w: 800, h: 450 },
    ],
  },
  {
    // Pattern B: portrait · wide landscape · portrait (3 imgs, 1-row)
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr 1fr",
      gap: 8,
      height: 440,
    },
    images: [
      { w: 400, h: 600 },
      { w: 800, h: 440 },
      { w: 400, h: 600 },
    ],
  },
  {
    // Pattern C: wide panorama top + 3 equal below (4 imgs)
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "1.3fr 1fr",
      gridTemplateAreas: '"a a a" "b c d"',
      gap: 8,
      height: 500,
    },
    images: [
      { area: "a", w: 1200, h: 500 },
      { area: "b", w: 500,  h: 400 },
      { area: "c", w: 500,  h: 400 },
      { area: "d", w: 400,  h: 500 },
    ],
  },
  {
    // Pattern D: tall portrait left + 2 landscape stacked right (3 imgs)
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gridTemplateRows: "1fr 1fr",
      gridTemplateAreas: '"a b" "a c"',
      gap: 8,
      height: 480,
    },
    images: [
      { area: "a", w: 400, h: 600 },
      { area: "b", w: 800, h: 450 },
      { area: "c", w: 800, h: 450 },
    ],
  },
];

// Zone 2: 9 images with col-span-2 for landscape entries
const Z2: { col: string; w: number; h: number }[] = [
  { col: "col-span-2", w: 800, h: 500 },
  { col: "",           w: 500, h: 500 },
  { col: "",           w: 500, h: 500 },
  { col: "",           w: 500, h: 500 },
  { col: "",           w: 400, h: 500 },
  { col: "col-span-2", w: 800, h: 500 },
  { col: "col-span-2", w: 800, h: 500 },
  { col: "",           w: 500, h: 500 },
  { col: "",           w: 500, h: 500 },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function CollageCard({
  src,
  alt,
  gridArea,
}: {
  src: string;
  alt: string;
  gridArea?: string;
}) {
  return (
    <div
      className="card-hover group relative overflow-hidden"
      style={{
        gridArea: gridArea,
        width: "100%",
        height: "100%",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--line)",
      }}
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

function TemplateCard({ name, src }: { name: string; src: string }) {
  return (
    <div
      className="card-hover group shrink-0 flex flex-col overflow-hidden"
      style={{
        width: 220,
        borderRadius: "var(--r-xl)",
        border: "1px solid var(--line)",
        background: "var(--surface)",
      }}
    >
      <div className="relative overflow-hidden" style={{ height: 140 }}>
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <p
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
            marginBottom: 8,
          }}
        >
          {name}
        </p>
        <button
          style={{
            width: "100%",
            padding: "7px 0",
            borderRadius: 999,
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: "var(--mute)",
            cursor: "pointer",
          }}
        >
          Use template
        </button>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TemplatesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Sticky header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(8,8,8,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <Navbar />
      </header>

      <main className="max-w-370 mx-auto px-12 max-[720px]:px-4">
        {/* ── Page header ── */}
        <div style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="section-num">08 — TEMPLATES</div>
          <h1
            className="font-fraunces"
            style={{
              fontSize: "clamp(44px, 6vw, 88px)",
              fontWeight: 300,
              lineHeight: 0.95,
              color: "var(--ink)",
              marginTop: 20,
              marginBottom: 24,
            }}
          >
            Browse{" "}
            <em className="silver">48</em> industry
            <br />
            templates.
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--mute)",
              lineHeight: 1.6,
              maxWidth: 540,
              marginBottom: 36,
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            Every template is pre-tuned by AI for your niche — one click applies
            the full edit stack to your photo.
          </p>

          {/* Stats chips */}
          <div className="flex flex-wrap gap-3">
            {[
              { value: "12", label: "industries" },
              { value: "48", label: "templates" },
              { value: "23", label: "AI services" },
              { value: "1-click", label: "apply" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="chip"
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <span
                  className="font-fraunces"
                  style={{ fontWeight: 400, fontSize: 18, color: "var(--blue)" }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            height: 1,
            background: "var(--line)",
            marginBottom: 80,
          }}
        />

        {/* ── Industry sections ── */}
        {INDUSTRIES.map((industry, idx) => {
          const baseSeed = 100 + idx * 25;
          const z1 = Z1_CONFIGS[idx % 4];
          const tplNames = TEMPLATES[idx];

          return (
            <ScrollReveal
              key={industry.id}
              delay={(idx % 4) as 0 | 1 | 2 | 3 | 4}
            >
              <section
                id={industry.id}
                style={{
                  paddingBottom: 80,
                  borderBottom: "1px solid var(--line)",
                  marginBottom: 80,
                }}
              >
                {/* Industry heading */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: 32,
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  <div>
                    <div className="section-num" style={{ marginBottom: 10 }}>
                      {String(idx + 1).padStart(2, "0")} —{" "}
                      {industry.id.toUpperCase()}
                    </div>
                    <h2
                      className="font-fraunces"
                      style={{
                        fontSize: "clamp(28px, 3.5vw, 52px)",
                        fontWeight: 300,
                        color: "var(--ink)",
                        lineHeight: 1.0,
                        marginBottom: 8,
                      }}
                    >
                      {industry.label}
                    </h2>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--mute)",
                        fontFamily: "var(--font-geist-sans), sans-serif",
                      }}
                    >
                      {industry.tagline}
                    </p>
                  </div>
                  <div className="chip-blue">
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      {tplNames.length} templates
                    </span>
                  </div>
                </div>

                {/* Zone 1: Hero collage */}
                <div style={z1.style}>
                  {z1.images.map((img, i) => (
                    <CollageCard
                      key={i}
                      src={pic(baseSeed + i, img.w, img.h)}
                      alt={`${industry.label} photo ${i + 1}`}
                      gridArea={img.area}
                    />
                  ))}
                </div>

                {/* Zone 2: Mid grid — 9 images */}
                <div
                  className="grid grid-cols-2 md:grid-cols-4"
                  style={{ gap: 8, gridAutoFlow: "dense", marginTop: 8 }}
                >
                  {Z2.map((cell, i) => (
                    <div key={i} className={cell.col} style={{ height: 180 }}>
                      <CollageCard
                        src={pic(baseSeed + 4 + i, cell.w, cell.h)}
                        alt={`${industry.label} detail ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Zone 3: Supporting strip — 8 small images */}
                <div
                  className="grid grid-cols-4 md:grid-cols-8"
                  style={{ gap: 8, marginTop: 8 }}
                >
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} style={{ height: 100 }}>
                      <CollageCard
                        src={pic(baseSeed + 13 + i, 300, 300)}
                        alt={`${industry.label} sample ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Template cards */}
                <div style={{ marginTop: 32 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--mute)",
                      marginBottom: 16,
                    }}
                  >
                    Available templates
                  </p>
                  <div
                    className="flex gap-4 overflow-x-auto pb-2"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {tplNames.map((name, i) => (
                      <TemplateCard
                        key={name}
                        name={name}
                        src={pic(baseSeed + 21 + i, 440, 280)}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </ScrollReveal>
          );
        })}
      </main>
    </div>
  );
}
