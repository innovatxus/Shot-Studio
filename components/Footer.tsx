"use client";

import type { ReactNode, CSSProperties } from "react";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useLocale } from "./legal/LocaleProvider";
import LocaleSwitcher from "./legal/LocaleSwitcher";
import RegionalStrip from "./legal/RegionalStrip";
import { UI } from "@/lib/legal/i18n";
import type { BiText } from "@/lib/legal/types";
import { openConsentBanner } from "@/lib/consent";

const YEAR = new Date().getFullYear();

/* ─────────────────────────────────────────────────────────
   NAV COLUMNS — bilingual, real routes.
   Six columns per the audit:
   Product · Solutions · Resources · Support · Company · Trust & Legal.
───────────────────────────────────────────────────────── */
type FooterLink = {
  label: BiText;
  href: string;
  badge?: "new" | "soon" | "hiring";
};
type FooterColumn = { heading: BiText; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    heading: UI.footer.headings.product,
    links: [
      { label: { en: "Features", ar: "الميزات" }, href: "/#services" },
      { label: { en: "Pricing", ar: "الأسعار" }, href: "/pricing" },
      { label: { en: "Integrations", ar: "التكاملات" }, href: "/integrations" },
      { label: { en: "Templates", ar: "القوالب" }, href: "/templates" },
      {
        label: { en: "Changelog", ar: "سجلّ التحديثات" },
        href: "/changelog",
        badge: "new",
      },
      { label: { en: "Roadmap", ar: "خارطة الطريق" }, href: "/roadmap" },
    ],
  },
  {
    heading: UI.footer.headings.solutions,
    links: [
      {
        label: { en: "All 23 Services", ar: "كل الخدمات الـ23" },
        href: "/#services",
      },
      {
        label: { en: "For E-commerce", ar: "للتجارة الإلكترونية" },
        href: "/#services",
      },
      { label: { en: "For Agencies", ar: "للوكالات" }, href: "/partners" },
      { label: { en: "For Retail", ar: "للتجزئة" }, href: "/enterprise" },
      { label: { en: "Enterprise", ar: "المؤسّسات" }, href: "/enterprise" },
      {
        label: { en: "Customer Stories", ar: "قصص العملاء" },
        href: "/customers",
      },
    ],
  },
  {
    heading: UI.footer.headings.resources,
    links: [
      { label: { en: "Documentation", ar: "التوثيق" }, href: "/help" },
      { label: { en: "Blog", ar: "المدوّنة" }, href: "/blog" },
      { label: { en: "Tutorials", ar: "الدروس" }, href: "/tutorials" },
      { label: { en: "Templates", ar: "القوالب" }, href: "/templates" },
      { label: { en: "Learn", ar: "تعلّم" }, href: "/learn" },
      { label: { en: "Community", ar: "المجتمع" }, href: "/community" },
    ],
  },
  {
    heading: UI.footer.headings.support,
    links: [
      { label: { en: "Help Center", ar: "مركز المساعدة" }, href: "/help" },
      { label: { en: "FAQ", ar: "الأسئلة الشائعة" }, href: "/faq" },
      {
        label: { en: "Contact Support", ar: "تواصل مع الدعم" },
        href: "/contact",
      },
      { label: { en: "System Status", ar: "حالة النظام" }, href: "/status" },
      { label: { en: "Community", ar: "المجتمع" }, href: "/community" },
      {
        label: { en: "Report Abuse", ar: "بلِّغ عن إساءة" },
        href: "/policies/ai-abuse",
      },
    ],
  },
  {
    heading: UI.footer.headings.company,
    links: [
      { label: { en: "About", ar: "من نحن" }, href: "/about" },
      {
        label: { en: "Careers", ar: "الوظائف" },
        href: "/careers",
        badge: "hiring",
      },
      { label: { en: "Press", ar: "الصحافة" }, href: "/press" },
      { label: { en: "Partners", ar: "الشركاء" }, href: "/partners" },
      { label: { en: "Affiliates", ar: "المسوّقون" }, href: "/affiliates" },
      { label: { en: "Contact", ar: "تواصل" }, href: "/contact" },
    ],
  },
  {
    heading: UI.footer.headings.trustLegal,
    links: [
      { label: { en: "Trust Center", ar: "مركز الثقة" }, href: "/trust" },
      { label: { en: "Security", ar: "الأمن" }, href: "/trust/security" },
      {
        label: { en: "Compliance", ar: "الامتثال" },
        href: "/trust/compliance",
      },
      {
        label: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
        href: "/legal/privacy",
      },
      {
        label: { en: "Terms of Service", ar: "شروط الخدمة" },
        href: "/legal/terms",
      },
      {
        label: { en: "Cookie Policy", ar: "سياسة الكوكيز" },
        href: "/legal/cookies",
      },
      {
        label: { en: "Acceptable Use", ar: "الاستخدام المقبول" },
        href: "/legal/acceptable-use",
      },
      {
        label: { en: "Refund Policy", ar: "سياسة الاسترداد" },
        href: "/legal/refunds",
      },
      {
        label: { en: "Subscription Terms", ar: "شروط الاشتراك" },
        href: "/legal/subscription",
      },
      {
        label: { en: "DPA", ar: "اتفاقية معالجة البيانات" },
        href: "/legal/dpa",
      },
      {
        label: { en: "Sub-processors", ar: "المعالجون الفرعيون" },
        href: "/legal/sub-processors",
      },
      {
        label: { en: "AI Usage", ar: "استخدام الذكاء الاصطناعي" },
        href: "/policies/ai-usage",
      },
      {
        label: { en: "Responsible AI", ar: "الذكاء الاصطناعي المسؤول" },
        href: "/policies/responsible-ai",
      },
      {
        label: {
          en: "AI Content Ownership",
          ar: "ملكية محتوى الذكاء الاصطناعي",
        },
        href: "/policies/ai-content-ownership",
      },
      {
        label: { en: "Accessibility", ar: "إمكانية الوصول" },
        href: "/accessibility",
      },
      { label: { en: "DMCA", ar: "إشعارات DMCA" }, href: "/legal/dmca" },
    ],
  },
];

const BOTTOM_LEGAL: FooterLink[] = [
  { label: { en: "Privacy", ar: "الخصوصية" }, href: "/legal/privacy" },
  { label: { en: "Terms", ar: "الشروط" }, href: "/legal/terms" },
  { label: { en: "Cookies", ar: "الكوكيز" }, href: "/legal/cookies" },
  { label: { en: "Sitemap", ar: "خريطة الموقع" }, href: "/sitemap" },
];

/* ─────────────────────────────────────────────────────────
   SOCIAL ICONS — Brand colors on dark surface.
───────────────────────────────────────────────────────── */
function SocialIcons() {
  const socials: {
    label: string;
    href: string;
    color: string;
    icon: ReactNode;
  }[] = [
    {
      label: "Instagram",
      href: "#",
      color: "#E1306C",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <rect
            x='2'
            y='2'
            width='12'
            height='12'
            rx='3.5'
            stroke='#E1306C'
            strokeWidth='1.35'
          />
          <circle cx='8' cy='8' r='2.8' stroke='#E1306C' strokeWidth='1.35' />
          <circle cx='11.6' cy='4.4' r='0.9' fill='#E1306C' />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "#",
      color: "#FFFFFF",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M10.5 2c.1 1.4.8 2.4 2.5 2.6v2c-1.1 0-2-.3-2.7-.9V10a4 4 0 11-4-4v2a2 2 0 102 2V2h2.2z'
            fill='white'
          />
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      href: "#",
      color: "#FFFFFF",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M2.5 2.5h3.3l2.1 2.8 2.5-2.8H13L9.4 7.2l4 6.3H10l-2.4-3.3-2.8 3.3H2L5.9 8.5 2.5 2.5z'
            fill='white'
          />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      color: "#FF0000",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <rect
            x='1'
            y='4'
            width='14'
            height='9'
            rx='2.5'
            stroke='#FF0000'
            strokeWidth='1.35'
          />
          <path d='M6.5 6.5l4 2-4 2v-4z' fill='#FF0000' />
        </svg>
      ),
    },
    {
      label: "Pinterest",
      href: "#",
      color: "#E60023",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <circle cx='8' cy='8' r='6' stroke='#E60023' strokeWidth='1.35' />
          <path
            d='M8 4.5C6.3 4.5 5 5.7 5 7.3c0 1 .5 1.9 1.4 2.2 0 .2-.1.5-.2.9s-.4 1.2-.4 1.2.7-.3 1.4-1.5h.3c1.7 0 3-1.2 3-2.8C10.5 5.7 9.4 4.5 8 4.5z'
            stroke='#E60023'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.6 9.4L7 12'
            stroke='#E60023'
            strokeWidth='1.2'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      color: "#0077B5",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <rect
            x='2'
            y='2'
            width='12'
            height='12'
            rx='2.5'
            stroke='#0077B5'
            strokeWidth='1.35'
          />
          <circle cx='5.5' cy='6' r='0.9' fill='#0077B5' />
          <path
            d='M5.5 8v3.5M8.5 8v3.5M8.5 9.5c0-1 .7-1.5 1.5-1.5s1.5.5 1.5 1.5v2'
            stroke='#0077B5'
            strokeWidth='1.3'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      color: "#1877F3",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h5.5V9.5H7V7.8h1.5V6.5c0-1.5.9-2.3 2.2-2.3.6 0 1.3.1 1.3.1v1.5h-.7c-.7 0-.9.4-.9.9v1.1H12l-.3 1.7H10.4V14H13a1 1 0 001-1V3a1 1 0 00-1-1z'
            fill='#1877F3'
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className='social-icon-btn'
          style={
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "var(--surface-2)",
              border: "1px solid var(--line-2)",
              textDecoration: "none",
              transition: "border-color 0.2s ease, background 0.2s ease",
              flexShrink: 0,
              ["--brand-hover" as string]: `${s.color}40`,
            } as CSSProperties
          }
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   APP STORE BADGES
───────────────────────────────────────────────────────── */
const badgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "8px 14px",
  borderRadius: 10,
  background: "var(--surface-2)",
  border: "1px solid var(--line-2)",
  textDecoration: "none",
  transition: "border-color 0.2s ease",
};

const badgeTopline: CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: 7,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--mute)",
};

const badgeName: CSSProperties = {
  fontFamily: "var(--font-geist-sans), sans-serif",
  fontSize: 12,
  fontWeight: 600,
  color: "var(--ink)",
  letterSpacing: "-0.01em",
};

function StoreBadges() {
  const { locale } = useLocale();
  const downloadOn = locale === "ar" ? "حمّل من" : "Download on the";
  const getOn = locale === "ar" ? "احصل عليه من" : "Get it on";

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <a href='#' className='store-badge' style={badgeStyle}>
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M11.4 8.6C11.4 6.8 12.9 5.9 13 5.8c-.8-1.2-2.1-1.4-2.6-1.4-1.1-.1-2.2.6-2.7.6-.5 0-1.4-.6-2.3-.6C4.1 4.4 2.9 5.1 2.2 6.2.9 8.3 1.9 11.4 3.2 13.2c.7.9 1.4 2 2.4 1.9 1-.1 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-.9 2.4-1.9c.7-.9 1-1.8 1-1.9 0 0-2.2-.9-2.6-3.7z'
            fill='var(--silver-3)'
          />
          <path
            d='M9.6 3.1c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.1-.5.6-.9 1.4-.8 2.3.9.1 1.8-.4 2.3-1z'
            fill='var(--silver-3)'
          />
        </svg>
        <div>
          <div style={badgeTopline}>{downloadOn}</div>
          <div style={badgeName}>App Store</div>
        </div>
      </a>

      <a href='#' className='store-badge' style={badgeStyle}>
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path d='M2 1.5L9.5 8 2 14.5V1.5z' fill='#38BDF8' opacity='0.7' />
          <path d='M2 1.5l8.5 3.5-3 3L2 1.5z' fill='#A8AEB8' opacity='0.8' />
          <path
            d='M13.5 6.5c.7.4 1 1 1 1.5s-.3 1.1-1 1.5L11 11l-3-3 3-3 2.5 1.5z'
            fill='#FFC857'
            opacity='0.8'
          />
          <path d='M2 14.5l7.5-6.5-3-3L2 14.5z' fill='#C8B6FF' opacity='0.7' />
        </svg>
        <div>
          <div style={badgeTopline}>{getOn}</div>
          <div style={badgeName}>Google Play</div>
        </div>
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   LINK COLUMN
───────────────────────────────────────────────────────── */
function LinkColumn({ column }: { column: FooterColumn }) {
  const { locale } = useLocale();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <span
          style={{
            display: "block",
            width: 16,
            height: 1,
            background: "linear-gradient(90deg, #38BDF8, transparent)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#38BDF8",
            whiteSpace: "nowrap",
          }}
        >
          {column.heading[locale]}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {column.links.map((link) => {
          const badgeText =
            link.badge === "new"
              ? locale === "ar"
                ? "جديد"
                : "New"
              : link.badge === "soon"
                ? locale === "ar"
                  ? "قريباً"
                  : "Soon"
                : link.badge === "hiring"
                  ? locale === "ar"
                    ? "نوظّف"
                    : "Hiring"
                  : null;

          return (
            <Link
              key={link.href + link.label.en}
              href={link.href}
              className='footer-link'
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: 13,
                color: "var(--mute)",
                letterSpacing: "-0.01em",
                transition: "color 0.15s ease",
                lineHeight: 1.45,
              }}
            >
              {link.label[locale]}
              {badgeText && (
                <span
                  style={{
                    fontSize: 8,
                    fontFamily: "var(--font-geist-mono), monospace",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color:
                      link.badge === "new"
                        ? "#38BDF8"
                        : link.badge === "hiring"
                          ? "#FFC857"
                          : "var(--mute)",
                    background:
                      link.badge === "new"
                        ? "rgba(56,189,248,0.1)"
                        : link.badge === "hiring"
                          ? "rgba(255,200,87,0.1)"
                          : "var(--surface-2)",
                    border: `1px solid ${
                      link.badge === "new"
                        ? "rgba(56,189,248,0.25)"
                        : link.badge === "hiring"
                          ? "rgba(255,200,87,0.25)"
                          : "var(--line)"
                    }`,
                    borderRadius: 4,
                    padding: "2px 5px",
                    lineHeight: 1.4,
                  }}
                >
                  {badgeText}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────────────────────── */
function Newsletter() {
  const { locale } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Newsletter wiring lands with the marketing pipeline; confirm submission
    // locally so the form gives feedback in both locales.
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        maxWidth: 360,
        flex: "1 1 320px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#38BDF8",
        }}
      >
        {UI.footer.newsletter.eyebrow[locale]}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type='email'
          required
          aria-label={UI.footer.newsletter.eyebrow[locale]}
          placeholder={UI.footer.newsletter.placeholder[locale]}
          style={{
            flex: 1,
            background: "var(--surface-2)",
            border: "1px solid var(--line-2)",
            borderRadius: 10,
            padding: "10px 14px",
            color: "var(--ink)",
            fontSize: 13,
            fontFamily: "inherit",
            outline: "none",
          }}
        />
        <button
          type='submit'
          style={{
            padding: "10px 18px",
            borderRadius: 10,
            background: "var(--silver-grad)",
            color: "#000",
            fontWeight: 600,
            fontSize: 13,
            border: "none",
            cursor: "pointer",
          }}
        >
          {UI.footer.newsletter.cta[locale]}
        </button>
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 11,
          color: "var(--mute-2)",
          lineHeight: 1.5,
        }}
      >
        {UI.footer.newsletter.consent[locale]}
      </p>
      {submitted && (
        <p
          role='status'
          style={{
            margin: 0,
            fontSize: 12,
            color: "#38BDF8",
          }}
        >
          {locale === "ar"
            ? "تم — شكراً لاشتراكك."
            : "Done — thanks for subscribing."}
        </p>
      )}
    </form>
  );
}

/* ─────────────────────────────────────────────────────────
   FOOTER ROOT
───────────────────────────────────────────────────────── */
export default function Footer() {
  const { locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <footer
      className='relative z-10 mt-50 overflow-hidden'
      lang={locale}
      dir={dir}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 200,
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ borderTop: "1px solid var(--line)" }} />

      {/* ── Pre-footer newsletter strip ── */}
      <div
        style={{
          borderBottom: "1px solid var(--line)",
          background:
            "linear-gradient(180deg, rgba(56,189,248,0.04) 0%, transparent 100%)",
        }}
      >
        <div className='max-w-370 mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12'>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              maxWidth: 520,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#38BDF8",
              }}
            >
              {UI.footer.newsletter.eyebrow[locale]}
            </span>
            <h2
              className='font-fraunces'
              style={{
                fontSize: "clamp(26px, 3.6vw, 38px)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                margin: 0,
              }}
            >
              {locale === "ar"
                ? "ابقَ على اطّلاع بكل ما هو جديد."
                : "Stay in the loop on every new feature."}
            </h2>
            <p
              style={{
                margin: 0,
                color: "var(--mute)",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              {locale === "ar"
                ? "نشرة موجزة — إصدارات المنتج، أدوات جديدة، ودراسات حالة من البائعين. لا بريد مزعج."
                : "A short, useful digest — product releases, new tools, and seller case studies. No spam."}
            </p>
          </div>
          <div className='w-full md:w-auto md:min-w-90'>
            <Newsletter />
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className='max-w-370 mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-18 pb-10 sm:pb-12'>
        <div className='grid items-start gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[1.2fr_repeat(6,minmax(0,1fr))]'>
          {/* ── Brand column ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 24,
            }}
          >
            <Logo size={56} fontSize={28} />

            <p
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: 13,
                color: "var(--mute)",
                lineHeight: 1.65,
                letterSpacing: "-0.005em",
                maxWidth: 280,
              }}
            >
              {locale === "ar"
                ? "تحرير صور احترافي بالذكاء الاصطناعي لبائعي التجارة الإلكترونية. 23 خدمة و25 رصيداً مجانياً شهرياً."
                : "Professional AI photo editing for e-commerce sellers. 23 services, 25 free credits monthly."}
            </p>

            <SocialIcons />
            <StoreBadges />
          </div>

          {/* ── Link columns ── */}
          {COLUMNS.map((col) => (
            <LinkColumn key={col.heading.en} column={col} />
          ))}
        </div>
      </div>

      {/* ── Utility row: locale switcher ── */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <div className='max-w-370 mx-auto px-4 sm:px-8 lg:px-12 py-5 flex items-center justify-end'>
          <LocaleSwitcher variant='footer' />
        </div>
      </div>

      {/* ── Regional disclosure strip ── */}
      <RegionalStrip />

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <div className='max-w-370 mx-auto px-4 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-4 sm:gap-4'>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className='blue-pulse' />
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--mute)",
              }}
            >
              © {YEAR} ShotStudio, Inc. — {UI.footer.rights[locale]}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {BOTTOM_LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='footer-legal-link'
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mute-2)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label[locale]}
              </Link>
            ))}
            <button
              type='button'
              onClick={openConsentBanner}
              className='footer-legal-link'
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--mute-2)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                whiteSpace: "nowrap",
                transition: "color 0.15s ease",
              }}
            >
              {UI.consent.footerLink[locale]}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
