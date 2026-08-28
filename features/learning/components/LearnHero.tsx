import ScrollReveal from "@/components/ScrollReveal";
import type { LearningStats } from "../types";
import { LearnSearch } from "./LearnSearch";

interface LearnHeroProps {
  stats: LearningStats;
}

export function LearnHero({ stats }: LearnHeroProps) {
  const STAT_TILES = [
    { label: "Tutorials", value: stats.totalTutorials },
    { label: "Tools covered", value: stats.totalToolsCovered },
    { label: "Learning paths", value: stats.totalLearningPaths },
    { label: "Beginner guides", value: stats.totalBeginnerGuides },
    { label: "Advanced guides", value: stats.totalAdvancedGuides },
    { label: "Hours of content", value: stats.totalLearningHours },
  ];

  return (
    <section id='learn-hero' className='relative z-10 mt-32'>
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Above the fold on first paint: this block holds the page's LCP
            heading, so it must not wait on hydration to become visible. */}
        <ScrollReveal variant='blur' immediate>
          <div
            style={{
              borderBottom: "1px solid var(--line)",
              paddingBottom: 28,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 18,
              }}
            >
              <span className='section-num'>Learning Center</span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  background:
                    "color-mix(in oklab, var(--blue) 12%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--blue) 35%, transparent)",
                  borderRadius: "var(--r-pill)",
                  padding: "4px 10px",
                  lineHeight: 1,
                }}
              >
                <span
                  className='blue-pulse'
                  style={{ width: 6, height: 6, borderRadius: 999 }}
                />
                New
              </span>
            </div>
            <h1
              className='font-fraunces'
              style={{
                fontSize: "clamp(44px, 6vw, 92px)",
                fontWeight: 300,
                lineHeight: 0.92,
                color: "var(--ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Learn every <em className='silver'>tool</em>,
              <br />
              <em className='silver'>workflow</em>, and AI feature.
            </h1>
            <p
              style={{
                marginTop: 18,
                maxWidth: 620,
                color: "var(--mute)",
                fontSize: 17,
                lineHeight: 1.55,
              }}
            >
              Master every AI tool, workflow, and feature through guided
              tutorials, learning paths, and resources — produced by the team
              that built ShotStudio.
            </p>
          </div>
        </ScrollReveal>

        {/* Search + quick actions */}
        <ScrollReveal variant='up' delay={1}>
          <LearnSearch />
        </ScrollReveal>

        {/* Stat strip */}
        <ScrollReveal
          stagger
          className='mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3'
        >
          {STAT_TILES.map((tile) => (
            <div
              key={tile.label}
              className='stagger-item'
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-lg)",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                className='font-fraunces'
                style={{
                  fontSize: 32,
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                {tile.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--mute)",
                }}
              >
                {tile.label}
              </span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
