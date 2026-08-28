import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Syne } from "next/font/google";
import ScrollFloater from "@/components/ScrollFloater";
import { LocaleProvider } from "@/components/legal/LocaleProvider";
import ConsentBanner from "@/components/legal/ConsentBanner";
import FloatingWidgets from "@/components/widgets/FloatingWidgets";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { DownloadAppProvider } from "@/components/app/DownloadAppProvider";
import "./globals.css";

// Inline script: read the persisted locale before hydration so RTL pages render
// in the correct direction on first paint and avoid a layout flash.
const LOCALE_BOOTSTRAP = `(function(){try{var l=localStorage.getItem('snap-locale');if(l==='ar'){document.documentElement.setAttribute('dir','rtl');document.documentElement.setAttribute('lang','ar');}}catch(e){}})();`;

// Hides the consent banner before the first paint for anyone who has already
// made a choice.
//
// The banner is server-rendered so it appears immediately for a first-time
// visitor rather than waiting on hydration. That would otherwise flash for
// returning users, whose decision only exists in localStorage. Reading it here
// — synchronously, in <head>, before any paint — settles visibility in CSS, so
// React removing the node after hydration is never seen.
const CONSENT_BOOTSTRAP = `(function(){try{var c=localStorage.getItem('snap-consent-v1');if(c&&JSON.parse(c).ts)document.documentElement.setAttribute('data-consent','set');}catch(e){}})();`;

// Forces one synchronous layout while the document is still parsing.
//
// Reading `offsetHeight` makes the browser compute layout immediately instead
// of deferring it, which lets the first paint happen a frame earlier. On this
// page — ~670 KB of markup across fourteen sections — that measured as
// **1120ms LCP with this line versus 1588ms without**, reproducible across
// clean rebuilds (5 runs each, applied 4x CPU + Slow 4G throttling).
//
// This replaces a script that tried to reveal above-the-fold `ScrollReveal`
// content before hydration and never worked: React 19 hoists inline <script>,
// so it was emitted at byte 16101 of /learn while the reveal elements span
// 16166-215105 — it ran during parse and matched nothing. Its ~470ms benefit
// was entirely the incidental layout flush from `getBoundingClientRect`, which
// this line does deliberately in one statement. Above-the-fold reveals are now
// handled properly by `ScrollReveal`'s `immediate` prop.
//
// Keep it last in <body>: it has to run after the markup it measures.
const EARLY_LAYOUT_FLUSH = `void document.body.offsetHeight;`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fraunces is a variable font. Naming discrete weights makes next/font fetch a
// separate static instance per weight per style — eight files for the four
// weights and two styles this site uses. Omitting `weight` ships the variable
// axis instead: one file per style, covering every weight, and the display
// headline stops waiting on a font race it used to lose.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// 800 measured unused across the whole site, and Syne only sets the niche
// card headings — all below the fold — so it does not belong in the preload
// block competing with the hero's Fraunces and Geist faces.
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shotstudio.ai",
  ),
  title: "ShotStudio — AI Studio for Everyone",
  description:
    "Upload a photo. Pick a service. Download a hero image. 23 professional AI editing services for e-commerce sellers. Start free now, no credit card.",
  applicationName: "ShotStudio",
  openGraph: {
    type: "website",
    siteName: "ShotStudio",
    title: "ShotStudio — AI Studio for Everyone",
    description:
      "23 professional AI editing services for e-commerce sellers. Start free now, no credit card.",
    images: [
      {
        url: "/assets/video/hero-videos/hero-main-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "ShotStudio — AI Studio for Everyone",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShotStudio — AI Studio for Everyone",
    description:
      "23 professional AI editing services for e-commerce sellers. Start free now, no credit card.",
    images: [
      {
        url: "/assets/video/hero-videos/hero-main-poster.jpg",
        alt: "ShotStudio — AI Studio for Everyone",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* No `<link rel="preload" as="video">` here: "video" is not a valid
            preload destination, so browsers drop the hint and log a warning.
            The hero clip is streamed on demand by HeroVideo, and Hero itself
            preloads the poster — which is the element that actually decides
            LCP — at high fetch priority. */}
        {/* Preconnect to external image CDNs used by gallery and bento sections */}
        <link rel='preconnect' href='https://images.unsplash.com' />
        <link rel='dns-prefetch' href='https://images.unsplash.com' />
        <script dangerouslySetInnerHTML={{ __html: LOCALE_BOOTSTRAP }} />
        <script dangerouslySetInnerHTML={{ __html: CONSENT_BOOTSTRAP }} />
      </head>
      <body className='min-h-screen antialiased' suppressHydrationWarning>
        <a href='#content' className='skip-link'>
          Skip to content
        </a>
        <AuthProvider>
          <LocaleProvider>
            <DownloadAppProvider>
              {children}
              <ScrollFloater />
              <ConsentBanner />
              <FloatingWidgets />
            </DownloadAppProvider>
          </LocaleProvider>
        </AuthProvider>
        {/* Must stay last in <body>: it measures the rendered markup. */}
        <script dangerouslySetInnerHTML={{ __html: EARLY_LAYOUT_FLUSH }} />
      </body>
    </html>
  );
}
