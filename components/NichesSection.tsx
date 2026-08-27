import Image from "next/image";
import DownloadAppLink from "@/components/app/DownloadAppLink";
import ScrollReveal from "./ScrollReveal";
import LazyVideo from "./LazyVideo";
import { NICHES, toolSlug } from "@/features/editor/data/niches";

// "Special Events" and "Wedding & Events" moved to the Personal Tools group
// in SubCategoriesSection; "News & Editorial" is hidden entirely. All three
// stay in NICHES (so their /edit/* routes keep working) but none render here.
const HIDDEN_FROM_GRID = new Set(["events", "weddings", "editorial", "hotels"]);
const GRID_NICHES = NICHES.filter((n) => !HIDDEN_FROM_GRID.has(n.id));

export default function NichesSection() {
  return (
    <section id='niches' className='relative z-10 mt-40'>
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Section header */}
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
              Built for every <em className='silver'>seller.</em>
            </h2>
            <p
              style={{
                marginTop: 16,
                maxWidth: 580,
                color: "var(--mute)",
                fontSize: 16,
                lineHeight: 1.55,
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              {GRID_NICHES.length} industries, each with a dedicated preset
              toolkit tuned to its unique visual demands.
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
            {GRID_NICHES.length} industries ·{" "}
            {GRID_NICHES.reduce((acc, n) => acc + n.services.length, 0)} tools
          </div>
        </div>

        {/* 3-col niche grid */}
        <ScrollReveal
          stagger
          threshold={0}
          className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5'
        >
          {GRID_NICHES.map((niche, i) => (
            <div
              key={niche.id}
              className='stagger-item card-hover sheen tilt rounded-[22px] overflow-hidden flex flex-col relative h-82 sm:h-135'
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-xl)",
              }}
            >
              {/* Whole-card click target. Sits above the media/overlay
                    but below the interactive chips below (z-index 20+),
                    so chip deep-links still win their own clicks. */}
              <DownloadAppLink
                href={`/edit/${niche.id}`}
                source='card'
                aria-label={`Get the app to use ${niche.name}${niche.suffix ? " " + niche.suffix : ""}`}
                className='absolute inset-0'
                style={{ zIndex: 5 }}
              >
                <span className='sr-only'>Get the ShotStudio app</span>
              </DownloadAppLink>
              {/* Video background with lazy loading */}
              {niche.video && (
                <LazyVideo
                  src={niche.video}
                  poster={niche.poster}
                  posterSizes='(max-width: 768px) 50vw, 33vw'
                  posterPriority={i < 2}
                  alt={`${niche.name}${niche.suffix ? " " + niche.suffix : ""} photography`}
                  className='absolute inset-0 z-0'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                />
              )}

              {/* Image background */}
              {niche.image && !niche.video && (
                <Image
                  src={niche.image}
                  alt={`${niche.name}${niche.suffix ? " " + niche.suffix : ""} photography`}
                  fill
                  className='object-cover'
                  style={{ zIndex: 0 }}
                  sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                />
              )}

              {/* Gradient overlay */}
              {(niche.video || niche.image) && (
                <div
                  className='absolute inset-0'
                  style={{
                    zIndex: 1,
                    background:
                      "linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.85) 100%)",
                  }}
                />
              )}

              {/* Image area */}
              <div
                className='relative overflow-hidden h-45 sm:h-78'
                style={{ background: "transparent", zIndex: 2 }}
              >
                {/* Category pill */}
                <div className='absolute top-2 left-2'>
                  <div
                    className='chip'
                    style={{
                      background: "rgba(10,10,10,0.7)",
                      backdropFilter: "blur(12px)",
                      fontSize: 8,
                      padding: "2px 7px",
                      color: "var(--mute)",
                      letterSpacing: "0.14em",
                      lineHeight: 1.4,
                    }}
                  >
                    {niche.label}
                  </div>
                </div>

                {/* Niche heading */}
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: 24,
                      fontWeight: 700,
                      lineHeight: 1.05,
                      letterSpacing: "0.01em",
                      color: "var(--ink)",
                      minHeight: 50,
                    }}
                  >
                    {niche.name}
                    {niche.suffix ? ` ${niche.suffix} ` : " "}
                    <em className='silver'>{niche.italicWord}.</em>
                  </h3>
                </div>
              </div>

              {/* Services chips. The wrapper is pointer-events:none so
                    every empty pixel falls through to the whole-card Link
                    above. Each chip Link below re-enables pointer-events. */}
              <div
                className='p-4 flex flex-col gap-3 relative h-37 sm:h-58'
                style={{ zIndex: 10, pointerEvents: "none" }}
              >
                <div
                  className='flex flex-wrap gap-2 translate-y-6 sm:translate-y-22'
                  style={{
                    minHeight: 52,
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                  }}
                >
                  {niche.services.slice(0, 3).map((svc) => (
                    <DownloadAppLink
                      key={svc.name}
                      href={`/edit/${niche.id}/${toolSlug(svc.name)}`}
                      source='tool'
                      className={`chip ${svc.featured ? "chip-blue" : ""}`}
                      style={{
                        fontSize: 10,
                        gap: 4.4,
                        position: "relative",
                        zIndex: 20,
                        pointerEvents: "auto",
                      }}
                    >
                      {svc.featured && (
                        <span
                          style={{
                            width: 2.75,
                            height: 2.75,
                            borderRadius: "50%",
                            background: "#38BDF8",
                            boxShadow: "0 0 6px rgba(56,189,248,0.8)",
                            flexShrink: 0,
                            display: "inline-block",
                          }}
                        />
                      )}
                      {svc.name}
                    </DownloadAppLink>
                  ))}
                </div>

                <div className='flex items-center justify-between'>
                  <span />
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 11,
                      color: "var(--blue)",
                      fontWeight: 600,
                    }}
                  >
                    {niche.services.length}
                  </span>
                </div>

                {/* CTA row — visual only; the whole-card Link above
                      handles navigation. Kept as a div so we don't nest
                      <a> tags. */}
                <div
                  className='flex items-center justify-between mt-auto pt-2'
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontSize: 13,
                      color: "var(--mute)",
                    }}
                  >
                    Explore {niche.name}
                  </span>
                  <span
                    aria-hidden='true'
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      background: "var(--silver-grad)",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "var(--shadow-silver)",
                    }}
                  >
                    <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
                      <path
                        d='M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9'
                        stroke='#000'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
