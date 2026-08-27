import Link from "next/link";
import type { Metadata } from "next";
import DownloadAppLink from "@/components/app/DownloadAppLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found · ShotStudio",
  description: "The page you were looking for doesn't exist or has moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className='relative z-10 min-h-[60vh] flex items-center'>
        <div className='max-w-370 mx-auto w-full px-4 sm:px-8 lg:px-12 py-24 text-center'>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: 16,
            }}
          >
            404 · Off the grid
          </div>
          <h1
            className='font-fraunces'
            style={{
              fontSize: "clamp(40px, 8vw, 80px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: 16,
            }}
          >
            This frame <em className='silver'>doesn’t exist.</em>
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--mute)",
              maxWidth: 560,
              margin: "0 auto 32px",
            }}
          >
            The page you were looking for isn’t here. It may have moved, or the
            link is mistyped. Head back home or jump to the studio.
          </p>
          <div className='flex items-center justify-center gap-3 flex-wrap'>
            <Link
              href='/'
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                background: "var(--blue-grad)",
                color: "white",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)",
              }}
            >
              Back to home
            </Link>
            <DownloadAppLink
              href='/edit/studio'
              source='cta'
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                background: "var(--surface-2)",
                border: "1px solid var(--line-2)",
                color: "var(--ink)",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Open the studio
            </DownloadAppLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
