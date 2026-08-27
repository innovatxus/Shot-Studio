import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Icon, type IconName } from "@/features/learning/components/Icon";

export const metadata: Metadata = {
  title: "About · ShotStudio",
  description:
    "Why ShotStudio exists, the principles we build by, and how a simple AI studio in your pocket levels the playing field for every seller, creator, and small business.",
};

// ── Section wrapper ──────────────────────────────────────────────────────────

const SECTION_INNER: CSSProperties = {
  width: "100%",
};

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
}

function SectionHeader({ eyebrow, title, body }: SectionHeaderProps) {
  return (
    <ScrollReveal variant='blur' className='flex flex-col gap-2'>
      <div
        style={{
          borderBottom: "1px solid var(--line)",
          paddingBottom: 28,
          marginBottom: 56,
          ...SECTION_INNER,
        }}
      >
        <span className='section-num'>{eyebrow}</span>
        <h2
          className='font-fraunces'
          style={{
            fontSize: "clamp(36px, 4.4vw, 64px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
            marginTop: 10,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            marginTop: 14,
            maxWidth: 620,
            color: "var(--mute)",
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          {body}
        </p>
      </div>
    </ScrollReveal>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

interface Principle {
  iconKey: IconName;
  title: string;
  body: string;
}

const PRINCIPLES: Principle[] = [
  {
    iconKey: "sparkles",
    title: "Restraint over noise",
    body: "Every feature earns its place. We don't ship things that distract from the result on screen.",
  },
  {
    iconKey: "rocket",
    title: "Speed is a feature",
    body: "Tap, wait a moment, ship the asset. Real workflows happen between meetings, in queues, on the move.",
  },
  {
    iconKey: "command",
    title: "AI as a tool, not a substitute",
    body: "We use models to remove drudgery. Taste, judgement, and the story you want to tell stay with you.",
  },
  {
    iconKey: "users",
    title: "Mobile first, every market",
    body: "The phone is the studio. Designed for African, MENA, South Asian, and global markets where mobile is primary.",
  },
  {
    iconKey: "fileText",
    title: "Privacy by default",
    body: "Your photos are yours. We never train shared models on your originals and never sell what you upload.",
  },
  {
    iconKey: "trophy",
    title: "One result, beautifully finished",
    body: "Output you can ship without a designer reviewing it first. That's the whole bar.",
  },
];

interface Outcome {
  metric: string;
  label: string;
  body: string;
}

const OUTCOMES: Outcome[] = [
  {
    metric: "23",
    label: "Professional services",
    body: "From ghost mannequin and reflection clean to virtual staging and color match. Engineered, not generic.",
  },
  {
    metric: "20",
    label: "Industries served",
    body: "Fashion, beauty, real estate, automotive, hospitality, jewellery, electronics, food, and more.",
  },
  {
    metric: "1",
    label: "Free image / day",
    body: "Enough to build the habit before you decide whether to upgrade. No card needed.",
  },
  {
    metric: "< 60s",
    label: "From upload to download",
    body: "On most edits. Built so a daily routine fits inside the time it takes to make coffee.",
  },
];

interface Audience {
  title: string;
  body: string;
}

const AUDIENCES: Audience[] = [
  {
    title: "Independent sellers",
    body: "Etsy, Shopify, Instagram, WhatsApp commerce. Make every listing look like a brand campaign.",
  },
  {
    title: "Artisans & craftspeople",
    body: "Show texture, weave, and finish, without a studio, lighting kit, or post-production team.",
  },
  {
    title: "Real-estate agents",
    body: "Stage, balance HDR, replace skies, and brighten interiors in the same trip you took the photo on.",
  },
  {
    title: "Restaurants & hospitality",
    body: "Menu hero shots, room photography, and seasonal campaigns produced from a single phone.",
  },
  {
    title: "Creators & freelancers",
    body: "Faster client turnarounds. More time on direction, less on retouch.",
  },
  {
    title: "Small agencies",
    body: "A dependable execution layer for the volume work, so your team focuses on strategy and craft.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className='relative z-10 mt-12 max-[720px]:mt-6'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <ScrollReveal variant='blur'>
              <span
                className='blue-pulse'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 14px",
                  borderRadius: 999,
                  background:
                    "color-mix(in oklab, var(--blue) 12%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--blue) 32%, transparent)",
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                }}
              >
                <span
                  aria-hidden='true'
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: "var(--blue)",
                    boxShadow: "0 0 14px var(--blue-glow)",
                  }}
                />
                About ShotStudio
              </span>
            </ScrollReveal>

            <ScrollReveal variant='up' delay={1}>
              <h1
                className='font-fraunces'
                style={{
                  marginTop: 22,
                  fontSize: "clamp(44px, 6.4vw, 96px)",
                  fontWeight: 300,
                  lineHeight: 0.95,
                  letterSpacing: "-0.015em",
                  color: "var(--ink)",
                  maxWidth: 1040,
                }}
              >
                A studio in your pocket{" "}
                <em className='silver'>for every seller</em>, every story, every
                shot.
              </h1>
            </ScrollReveal>

            <ScrollReveal variant='up' delay={2}>
              <p
                style={{
                  marginTop: 26,
                  maxWidth: 720,
                  color: "var(--mute)",
                  fontSize: 18,
                  lineHeight: 1.6,
                }}
              >
                ShotStudio is an AI photography studio built for the
                ninety-something percent of sellers, creators, and small
                businesses who will never hire a retoucher. We turn a phone, a
                photo, and a tap into a finished asset you can ship.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='01 / Mission'
              title={
                <>
                  Make great photography <em className='silver'>effortless</em>,
                  for everyone.
                </>
              }
              body='Pro photography has always been gated by money, time, and skill. We think the gate should be a door, and that AI, used with restraint, is the doorknob.'
            />

            <ScrollReveal variant='up'>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-xl)",
                  padding: "clamp(28px, 4vw, 56px)",
                  display: "grid",
                  gap: 28,
                  gridTemplateColumns: "minmax(0, 1fr)",
                }}
              >
                <p
                  className='font-fraunces'
                  style={{
                    fontSize: "clamp(22px, 2.4vw, 32px)",
                    fontWeight: 300,
                    lineHeight: 1.3,
                    color: "var(--ink)",
                    letterSpacing: "-0.005em",
                    maxWidth: 920,
                  }}
                >
                  We believe a small business in Baghdad, Cairo, Amman, or
                  Casablanca, a boutique in Dubai or Riyadh, deserves the same
                  photographic firepower as a brand on Madison Avenue, and that
                  the difference between a sale and a scroll is often a single,
                  well-finished image.
                </p>
                <div
                  style={{
                    display: "grid",
                    gap: 18,
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  }}
                >
                  {[
                    {
                      title: "Lower the floor",
                      body: "Anyone with a phone can produce a hero asset. No studio. No lighting kit. No designer.",
                    },
                    {
                      title: "Raise the ceiling",
                      body: "Pros use ShotStudio to compress hours of retouch into minutes, and ship more, better.",
                    },
                    {
                      title: "Stay out of the way",
                      body: "The fastest interface is no interface. We aim for one tap, one good result, every time.",
                    },
                  ].map((b) => (
                    <div key={b.title}>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: 11,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--blue)",
                        }}
                      >
                        {b.title}
                      </span>
                      <p
                        style={{
                          marginTop: 8,
                          fontSize: 14,
                          color: "var(--mute)",
                          lineHeight: 1.6,
                        }}
                      >
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Story */}
        <section className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='02 / Origin'
              title={
                <>
                  Built from a <em className='silver'>simple frustration</em>.
                </>
              }
              body='Across thousands of small shops, brilliant products were being held back by tired photos. The tools to fix that existed, they were just expensive, slow, or too technical to learn between deliveries.'
            />

            <ScrollReveal stagger className='grid md:grid-cols-3 gap-5'>
              {[
                {
                  step: "Then",
                  title: "Hire a photographer",
                  body: "A half-day shoot, a week of edits, a five-figure bill. Reserved for catalog season, once or twice a year.",
                },
                {
                  step: "Almost",
                  title: "Generic AI tools",
                  body: "One-size-fits-all generators that turn jewellery into balloons and a sofa into something that looks like a sofa.",
                },
                {
                  step: "Now",
                  title: "ShotStudio",
                  body: "Industry-tuned services that respect what your product actually is. Refined, not reinvented.",
                },
              ].map((s, i) => (
                <article
                  key={s.title}
                  className='stagger-item card-hover sheen'
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-xl)",
                    padding: 28,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: i === 2 ? "var(--blue)" : "var(--mute)",
                    }}
                  >
                    0{i + 1} / {s.step}
                  </span>
                  <h3
                    className='font-fraunces'
                    style={{
                      fontSize: 24,
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--mute)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.body}
                  </p>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Principles */}
        <section className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='03 / Principles'
              title={
                <>
                  How we <em className='silver'>build</em>.
                </>
              }
              body={`Six commitments that decide what we ship and, more often, what we don't.`}
            />

            <ScrollReveal
              stagger
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
            >
              {PRINCIPLES.map((p) => (
                <article
                  key={p.title}
                  className='stagger-item card-hover sheen flex flex-col gap-3'
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-lg)",
                    padding: 24,
                  }}
                >
                  <span
                    aria-hidden='true'
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "var(--r-sm)",
                      background:
                        "color-mix(in oklab, var(--blue) 12%, transparent)",
                      border:
                        "1px solid color-mix(in oklab, var(--blue) 30%, transparent)",
                      color: "var(--blue)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon name={p.iconKey} size={18} />
                  </span>
                  <h3
                    className='font-fraunces'
                    style={{
                      fontSize: 19,
                      fontWeight: 400,
                      lineHeight: 1.25,
                      color: "var(--ink)",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--mute)",
                      lineHeight: 1.6,
                    }}
                  >
                    {p.body}
                  </p>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Outcomes */}
        <section className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='04 / In numbers'
              title={
                <>
                  What you can <em className='silver'>actually</em> ship.
                </>
              }
              body='No vanity stats. These are the numbers that decide whether ShotStudio fits into your week.'
            />

            <ScrollReveal
              stagger
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
            >
              {OUTCOMES.map((o) => (
                <div
                  key={o.label}
                  className='stagger-item'
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-lg)",
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <span
                    className='font-fraunces'
                    style={{
                      fontSize: "clamp(38px, 4vw, 52px)",
                      fontWeight: 300,
                      lineHeight: 1,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {o.metric}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--blue)",
                    }}
                  >
                    {o.label}
                  </span>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--mute)",
                      lineHeight: 1.55,
                    }}
                  >
                    {o.body}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Who we serve */}
        <section className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='05 / Who we build for'
              title={
                <>
                  Made for <em className='silver'>every seller</em>, not just
                  the loudest.
                </>
              }
              body='ShotStudio fits the workflows of the people big software usually overlooks, and gives professionals a sharper edge on top.'
            />

            <ScrollReveal
              stagger
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
            >
              {AUDIENCES.map((a) => (
                <article
                  key={a.title}
                  className='stagger-item card-hover'
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-lg)",
                    padding: "22px 24px",
                  }}
                >
                  <h3
                    className='font-fraunces'
                    style={{
                      fontSize: 19,
                      fontWeight: 400,
                      lineHeight: 1.25,
                      color: "var(--ink)",
                      letterSpacing: "-0.005em",
                      marginBottom: 8,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--mute)",
                      lineHeight: 1.6,
                    }}
                  >
                    {a.body}
                  </p>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Promise */}
        <section className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='06 / Our promise'
              title={
                <>
                  Three things you can <em className='silver'>count on</em>.
                </>
              }
              body={`Whatever else changes, these don't.`}
            />

            <ScrollReveal stagger className='flex flex-col gap-3'>
              {[
                {
                  title: "Your photos stay yours.",
                  body: "We process them, return them, and don't train shared models on your originals.",
                },
                {
                  title: "Output you can ship.",
                  body: "If a result isn't usable, it isn't a feature. We tune services until they're production-grade.",
                },
                {
                  title: "Pricing that respects you.",
                  body: "A genuine free tier, no dark patterns at checkout, and you can leave with one tap.",
                },
              ].map((row, i) => (
                <article
                  key={row.title}
                  className='stagger-item'
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    alignItems: "center",
                    gap: 20,
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r-lg)",
                    padding: "22px 26px",
                  }}
                >
                  <span
                    className='font-fraunces'
                    style={{
                      fontSize: 32,
                      fontWeight: 300,
                      lineHeight: 1,
                      color: "var(--blue)",
                      letterSpacing: "-0.02em",
                      minWidth: 52,
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      className='font-fraunces'
                      style={{
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1.25,
                        color: "var(--ink)",
                        letterSpacing: "-0.005em",
                        marginBottom: 4,
                      }}
                    >
                      {row.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--mute)",
                        lineHeight: 1.6,
                      }}
                    >
                      {row.body}
                    </p>
                  </div>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className='relative z-10 mt-40 mb-40 text-center'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <ScrollReveal variant='blur'>
              <h2
                className='font-fraunces'
                style={{
                  fontSize: "clamp(40px, 5vw, 76px)",
                  fontWeight: 300,
                  lineHeight: 0.98,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                  maxWidth: 920,
                  marginInline: "auto",
                }}
              >
                Build a <em className='silver'>better-looking</em> shop today,
                in the time it takes to make tea.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant='up' delay={1}>
              <p
                style={{
                  marginTop: 22,
                  maxWidth: 580,
                  marginInline: "auto",
                  color: "var(--mute)",
                  fontSize: 16,
                  lineHeight: 1.6,
                }}
              >
                Start free now. No card needed. Decide whether Shot Studio
                earns its place after you ship your first set.
              </p>
            </ScrollReveal>
            <ScrollReveal variant='up' delay={2}>
              <div
                style={{
                  marginTop: 30,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Link
                  href='/#pricing'
                  className='btn-lift'
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 22px",
                    borderRadius: 999,
                    background: "var(--blue-grad)",
                    color: "white",
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 600,
                    fontSize: 14,
                    boxShadow:
                      "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)",
                    textDecoration: "none",
                  }}
                >
                  Start free now
                  <Icon name='arrowRight' size={14} />
                </Link>
                <Link
                  href='/learn'
                  className='link-underline'
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 22px",
                    borderRadius: 999,
                    border: "1px solid var(--line)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: 500,
                    fontSize: 14,
                    background: "var(--surface)",
                    textDecoration: "none",
                  }}
                >
                  Visit the Learning Center
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
