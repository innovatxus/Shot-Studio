/**
 * Shared logo mark — used in Navbar and Footer.
 * Renders the shot-studio-logo mark + the two-tone "ShotStudio" wordmark.
 *
 * Props
 *   size        — logo image px (default 64)
 *   fontSize    — wordmark font-size px (default 32)
 *   borderRadius — extra logo image border-radius px (default 0; the mark
 *                  already ships with its rounded corners baked in)
 */
import Image from "next/image";

export interface LogoProps {
  size?: number;
  fontSize?: number;
  borderRadius?: number;
}

export default function Logo({
  size = 64,
  fontSize = 32,
  borderRadius = 0,
}: LogoProps) {
  return (
    <div className="flex items-center gap-[10px]">
      {/* Mark — served via next/image so AVIF/WebP conversion applies */}
      <Image
        src="/assets/logo/shot-studio-logo.png"
        alt="ShotStudio logo"
        width={size}
        height={size}
        style={{ borderRadius, flexShrink: 0, display: "block" }}
        priority
      />

      {/* Wordmark */}
      <span
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: "0.02em",
          display: "flex",
          alignItems: "center",
          lineHeight: 1,
        }}
      >
        {/* SHOT — blue gradient */}
        <span
          style={{
            background:
              "linear-gradient(135deg, #7DD3FC 0%, #38BDF8 35%, #0EA5E9 70%, #0369A1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          SHOT
        </span>
        {/* STUDIO — silver chrome gradient */}
        <span
          style={{
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #D8DCE3 14%, #4E535C 32%, #B5BAC2 48%, #2E323A 60%, #C8CDD4 76%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            marginLeft: 4,
          }}
        >
          STUDIO
        </span>
      </span>
    </div>
  );
}
