import AppStoreBadges from "@/components/app/AppStoreBadges";
export default function FinalCTA() {
  return (
    <section
      id='get-the-app'
      className='relative z-10 mt-60 text-center scroll-mt-24'
    >
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-6'>
        {/* Glow blob */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 1000,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.11) 0%, transparent 68%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div className='relative flex flex-col items-center'>
          {/* Eyebrow */}
          <div className='flex items-center gap-3 mb-10'>
            <span className='blue-pulse' />
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--mute)",
              }}
            >
              Available now · iOS &amp; Android
            </span>
          </div>

          {/* Headline */}
          <h2
            className='font-fraunces mx-auto'
            style={{
              fontSize: "clamp(64px, 9vw, 140px)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "var(--ink)",
              maxWidth: 1100,
              marginBottom: 36,
            }}
          >
            Your studio.
            <br />
            <em className='silver'>In your pocket.</em>
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: 20,
              color: "var(--mute)",
              lineHeight: 1.55,
              maxWidth: 560,
              marginBottom: 60,
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            Start free now. No credit card. No desktop.
          </p>

          {/* Store buttons */}
          <AppStoreBadges size='lg' className='mb-10' />
        </div>
      </div>
    </section>
  );
}
