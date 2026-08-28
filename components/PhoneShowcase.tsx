import ScrollReveal from "./ScrollReveal";

function PhoneFrame({
  children,
  label,
  meta,
}: {
  children: React.ReactNode;
  label: string;
  meta: string;
}) {
  return (
    <div className='flex flex-col items-center gap-6'>
      {/* Meta text above */}
      <div className='text-center'>
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--blue)",
            marginBottom: 4,
          }}
        >
          {meta}
        </p>
        <p
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: 18,
            fontWeight: 400,
            color: "var(--ink)",
          }}
        >
          {label}
        </p>
      </div>

      {/* Phone */}
      <div
        className='phone-frame relative'
        style={{
          width: 240,
          height: 480,
          background: "#0A0A0A",
          flexShrink: 0,
        }}
      >
        {/* Dynamic island */}
        <div
          className='absolute top-4 left-1/2 -translate-x-1/2 z-20'
          style={{
            width: 96,
            height: 26,
            borderRadius: 999,
            background: "#000",
          }}
        />
        {/* Screen */}
        <div className='absolute inset-0 rounded-[48px] overflow-hidden bg-[#0A0A0A]'>
          {children}
        </div>
      </div>
    </div>
  );
}

function DashboardScreen() {
  const quickActions = [
    "Bg Remove",
    "Studio White",
    "Skin Retouch",
    "Amazon Pack",
    "Color Correct",
  ];
  const recentColors = [
    "linear-gradient(135deg, #001a30, #002a50)",
    "linear-gradient(135deg, #1a1000, #2e1800)",
    "linear-gradient(135deg, #100020, #1a0030)",
    "linear-gradient(135deg, #001a10, #002a18)",
  ];

  return (
    <div
      className='h-full flex flex-col'
      style={{ background: "#0A0A0A", paddingTop: 44 }}
    >
      {/* Status bar */}
      <div className='flex items-center justify-between px-5 pb-3'>
        <span
          style={{
            fontSize: 9,
            color: "rgba(255,255,255,0.4)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          9:41
        </span>
        <div className='flex gap-1 items-center'>
          {[1, 1, 1, 0.3].map((o, i) => (
            <div
              key={i}
              style={{
                width: 2,
                height: 5 + i * 2,
                background: `rgba(255,255,255,${o})`,
                borderRadius: 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Credit balance */}
      <div
        className='mx-4 p-4 rounded-2xl mb-3'
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--line)",
        }}
      >
        <p
          style={{
            fontSize: 9,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--mute)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Credits remaining
        </p>
        <div className='flex items-end gap-2'>
          <span
            className='text-silver-grad font-bold'
            style={{
              fontSize: 32,
              fontFamily: "var(--font-fraunces), serif",
              lineHeight: 1,
            }}
          >
            487
          </span>
          <span
            style={{
              fontSize: 10,
              color: "var(--mute)",
              fontFamily: "var(--font-geist-mono)",
              marginBottom: 4,
            }}
          >
            / 500
          </span>
        </div>
        <div
          className='mt-2'
          style={{
            height: 3,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 999,
          }}
        >
          <div
            style={{
              width: "97%",
              height: "100%",
              background: "var(--silver-grad)",
              borderRadius: 999,
            }}
          />
        </div>
      </div>

      {/* Continue editing card */}
      <div
        className='mx-4 p-3 rounded-xl mb-3 flex items-center gap-3'
        style={{
          background: "rgba(56,189,248,0.08)",
          border: "1px solid rgba(56,189,248,0.2)",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "linear-gradient(135deg, #001a30, #002a50)",
            flexShrink: 0,
          }}
        />
        <div className='flex-1 min-w-0'>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--ink)",
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            Jacket shoot
          </p>
          <p
            style={{
              fontSize: 9,
              color: "var(--blue)",
              fontFamily: "var(--font-geist-mono)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Continue →
          </p>
        </div>
      </div>

      {/* Quick actions */}
      <div className='mx-4 mb-3'>
        <p
          style={{
            fontSize: 9,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--mute)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 8,
          }}
        >
          Quick actions
        </p>
        <div className='flex flex-wrap gap-1'>
          {quickActions.map((a) => (
            <span
              key={a}
              className='chip'
              style={{ fontSize: 8, padding: "4px 8px" }}
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Recent edits grid */}
      <div className='mx-4'>
        <p
          style={{
            fontSize: 9,
            fontFamily: "var(--font-geist-mono)",
            color: "var(--mute)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 8,
          }}
        >
          Recent edits
        </p>
        <div className='grid grid-cols-4 gap-1'>
          {recentColors.map((bg, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                borderRadius: 8,
                background: bg,
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function EditorScreen() {
  return (
    <div
      className='h-full flex flex-col'
      style={{ background: "#050508", paddingTop: 44 }}
    >
      {/* Header */}
      <div className='flex items-center justify-between px-4 pb-2'>
        <div>
          <p
            style={{
              fontSize: 9,
              color: "var(--mute)",
              fontFamily: "var(--font-geist-mono)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            CUT
          </p>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--ink)",
              fontFamily: "var(--font-fraunces), serif",
            }}
          >
            Background Removal
          </p>
        </div>
        <span
          style={{
            fontSize: 10,
            color: "var(--blue)",
            fontFamily: "var(--font-geist-mono)",
            background: "rgba(56,189,248,0.1)",
            padding: "3px 8px",
            borderRadius: 6,
            border: "1px solid rgba(56,189,248,0.2)",
          }}
        >
          1 cr
        </span>
      </div>

      {/* Before/after split */}
      <div
        className='mx-3 relative overflow-hidden rounded-xl flex-1'
        style={{
          maxHeight: 300,
          background: "var(--surface-2)",
          border: "1px solid var(--line)",
        }}
      >
        {/* After */}
        <div className='absolute inset-0 bg-white flex items-center justify-center'>
          <div
            style={{
              width: 70,
              height: 90,
              background: "rgba(56,189,248,0.15)",
              borderRadius: 8,
              border: "1px solid rgba(56,189,248,0.3)",
            }}
          />
        </div>
        {/* Before (left half) */}
        <div
          className='absolute inset-0'
          style={{
            clipPath: "inset(0 50% 0 0)",
            background: "linear-gradient(135deg, #1a1000, #2e1800)",
          }}
        >
          <div className='absolute inset-0 flex items-center justify-center opacity-70'>
            <div
              style={{
                width: 70,
                height: 90,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 8,
                transform: "rotate(-3deg)",
              }}
            />
          </div>
        </div>
        {/* Divider */}
        <div
          className='absolute top-0 bottom-0 w-px'
          style={{
            left: "50%",
            background: "white",
            boxShadow: "0 0 8px rgba(56,189,248,0.8)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "white",
              boxShadow: "0 0 12px rgba(56,189,248,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width='10' height='8' viewBox='0 0 10 8' fill='none'>
              <path
                d='M1 4H9M1 4L3 2M1 4L3 6M9 4L7 2M9 4L7 6'
                stroke='#0EA5E9'
                strokeWidth='1.2'
                strokeLinecap='round'
              />
            </svg>
          </div>
        </div>
        {/* Labels */}
        <span
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            fontSize: 8,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-geist-mono)",
            background: "rgba(0,0,0,0.4)",
            padding: "2px 6px",
            borderRadius: 4,
          }}
        >
          BEFORE
        </span>
        <span
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            fontSize: 8,
            color: "var(--blue)",
            fontFamily: "var(--font-geist-mono)",
            background: "rgba(0,0,0,0.4)",
            padding: "2px 6px",
            borderRadius: 4,
          }}
        >
          AFTER
        </span>
      </div>

      {/* Progress bar */}
      <div className='mx-3 mt-3'>
        <div className='flex justify-between mb-1'>
          <span
            style={{
              fontSize: 9,
              color: "var(--mute)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Processing…
          </span>
          <span
            style={{
              fontSize: 9,
              color: "var(--blue)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            78%
          </span>
        </div>
        <div
          style={{
            height: 3,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 999,
          }}
        >
          <div
            style={{
              width: "78%",
              height: "100%",
              background: "var(--blue-grad)",
              borderRadius: 999,
            }}
          />
        </div>
      </div>

      {/* Apply button */}
      <div className='p-3'>
        <button
          className='w-full py-2 rounded-xl text-white font-semibold'
          style={{
            fontSize: 12,
            background: "var(--blue-grad)",
            boxShadow: "0 0 16px var(--blue-glow-soft)",
            fontFamily: "var(--font-geist-sans)",
            border: "none",
            cursor: "pointer",
          }}
        >
          Apply — 1 credit
        </button>
      </div>
    </div>
  );
}

export default function PhoneShowcase() {
  return (
    <section id='app' className='relative z-10 mt-40'>
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
              Your studio. <em className='silver'>In one dashboard.</em>
            </h2>
            <p
              style={{
                marginTop: 16,
                maxWidth: 580,
                color: "var(--mute)",
                fontSize: 16,
                lineHeight: 1.55,
              }}
            >
              A single dashboard prototype that keeps editing, processing, and
              batch workflows visible in one clean control center.
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
            Dashboard Prototype
          </div>
        </div>

        {/* 25/75 layout: dashboard phone + text support */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 lg:items-center lg:min-h-155'>
          <div className='lg:col-span-1'>
            <ScrollReveal delay={1}>
              <div className='flex justify-center lg:justify-start lg:h-full lg:items-center'>
                <PhoneFrame label='Dashboard' meta='Home · Overview'>
                  <DashboardScreen />
                </PhoneFrame>
              </div>
            </ScrollReveal>
          </div>

          <div className='lg:col-span-3'>
            <ScrollReveal delay={2}>
              <div
                className='rounded-[22px] p-6 md:p-8 h-full flex flex-col justify-center'
                style={{
                  background: "var(--surface)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ width: "100%", maxWidth: 980 }}>
                  <div
                    className='flex items-center gap-3'
                    style={{
                      marginBottom: 18,
                      paddingBottom: 14,
                      borderBottom: "1px solid rgba(223,227,234,0.12)",
                    }}
                  >
                    <span
                      className='chip'
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        borderColor: "rgba(223,227,234,0.45)",
                        color: "var(--silver-2)",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        fontWeight: 700,
                      }}
                    >
                      SN
                    </span>
                    <p
                      className='text-silver-grad'
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      DASHBOARD SUPPORT
                    </p>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontSize: "clamp(46px, 6vw, 78px)",
                      lineHeight: 0.92,
                      letterSpacing: "-0.015em",
                      fontWeight: 500,
                    }}
                  >
                    <span className='text-silver-grad'>
                      Edit, batch, and compare from one control center.
                    </span>
                  </h3>

                  <div className='mt-7 flex flex-col gap-4'>
                    <div
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--line-2)",
                        borderRadius: 12,
                        padding: "12px 14px",
                      }}
                    >
                      <p
                        style={{
                          color: "var(--mute)",
                          fontSize: 16,
                          lineHeight: 1.6,
                        }}
                      >
                        Edit · In Progress: CUT - Background Removal, Processing
                        78%, Apply - 1 credit.
                      </p>
                    </div>
                    <div
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--line-2)",
                        borderRadius: 12,
                        padding: "12px 14px",
                      }}
                    >
                      <p
                        style={{
                          color: "var(--mute)",
                          fontSize: 16,
                          lineHeight: 1.6,
                        }}
                      >
                        Batch · Multi-Select: Select photos, 7 selected, Apply
                        to 7 photos.
                      </p>
                    </div>
                    <div
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--line-2)",
                        borderRadius: 12,
                        padding: "12px 14px",
                      }}
                    >
                      <p
                        style={{
                          color: "var(--mute)",
                          fontSize: 16,
                          lineHeight: 1.6,
                        }}
                      >
                        See the difference: drag the slider to compare before
                        and after on real product images.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
