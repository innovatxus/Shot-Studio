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

// DO NOT REMOVE without re-measuring — see the note below.
//
// This was written to reveal above-the-fold `ScrollReveal` content before
// hydration. **It does not do that.** React 19 hoists inline <script>, so the
// tag is emitted near the top of the document (byte 16101 of /learn, where the
// reveal elements span 16166-215105); it runs during parse, matches nothing,
// and returns. The job it was meant to do is now handled properly by
// `ScrollReveal`'s `immediate` prop, which is what took /learn's LCP from
// 4056ms to ~1700ms.
//
// It is kept because deleting it measurably *regresses* the home page:
// 1116ms LCP with it, 1588ms without, reproducible across clean rebuilds
// (5 runs each, applied 4x CPU + Slow 4G throttling). A parser-blocking
// inline script after the body content appears to force an earlier paint
// flush. That is an accidental benefit resting on browser internals, not a
// designed one, so it is documented rather than tidied away.
//
// Worth replacing with something intentional that produces the same flush.
// Until then, removing this costs ~470ms on the highest-traffic page.
const REVEAL_BOOTSTRAP = `(function(){try{var e=document.querySelectorAll('.reveal-up,.reveal-fade,.reveal-right,.reveal-left,.reveal-scale,.reveal-blur'),h=innerHeight,p=[],i,r;for(i=0;i<e.length;i++){r=e[i].getBoundingClientRect();if(r.top<h&&r.bottom>0)p.push(e[i]);}if(p.length)requestAnimationFrame(function(){for(var j=0;j<p.length;j++)p[j].classList.add('in');});}catch(x){}})();`;

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
        {/* Must stay last in <body>: it reads the rendered markup. */}
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOTSTRAP }} />
      </body>
    </html>
  );
}
