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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
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
        {/* Hero video — highest-priority fetch so it wins the network race
            against niche and tool card videos that mount shortly after */}
        <link
          rel='preload'
          as='video'
          href='/assets/video/hero-videos/hero-main-web.webm'
          type='video/webm'
        />
        {/* Preconnect to external image CDNs used by gallery and bento sections */}
        <link rel='preconnect' href='https://images.unsplash.com' />
        <link rel='dns-prefetch' href='https://images.unsplash.com' />
        <script dangerouslySetInnerHTML={{ __html: LOCALE_BOOTSTRAP }} />
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
      </body>
    </html>
  );
}
