"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Niche, NicheService } from "../data/niches";
import { toolSlug } from "../data/niches";
import { useDownloadApp } from "@/components/app/DownloadAppProvider";

/**
 * Shared, reusable editing surface.
 *
 * One component, two faces:
 *   - default       → all niche tools rendered as scrollable chips
 *   - focusedTool   → only that tool is shown, header subtitled accordingly
 *
 * The DNA mirrors the PhoneShowcase EditorScreen prototype: dark canvas,
 * silver compare slider, blue chip rail, metallic-silver apply CTA.
 *
 * Keep this component free of niche-specific branching — it should remain
 * fully data-driven so adding a new niche in `niches.ts` is enough to ship.
 */

interface EditorCanvasProps {
  niche: Niche;
  /** When set, only this tool is exposed; the rail collapses to one chip. */
  focusedTool?: NicheService;
}

export default function EditorCanvas({
  niche,
  focusedTool,
}: EditorCanvasProps) {
  const tools = useMemo(
    () => (focusedTool ? [focusedTool] : niche.services),
    [focusedTool, niche.services],
  );
  const initialIndex = useMemo(() => {
    if (focusedTool) return 0;
    const idx = tools.findIndex((t) => t.featured);
    return idx >= 0 ? idx : 0;
  }, [focusedTool, tools]);

  const { open: openDownloadApp } = useDownloadApp();
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [hasApplied, setHasApplied] = useState(false);
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);

  const fileRef = useRef<HTMLInputElement | null>(null);
  const selectedTool = tools[selectedIndex] ?? tools[0];

  const cost = useMemo(() => costFor(selectedTool?.name), [selectedTool]);

  // ── Image upload ─────────────────────────────────────────────────────────

  const onPickFile = () => fileRef.current?.click();

  const onFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageDataUrl(e.target?.result as string);
      setHasApplied(false);
      setProgress(0);
    };
    reader.readAsDataURL(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith("image/")) onFile(f);
  };

  // ── Apply (simulated) ────────────────────────────────────────────────────

  const onApply = useCallback(() => {
    if (!imageDataUrl || busy) return;
    setBusy(true);
    setHasApplied(false);
    setProgress(0);
    let p = 0;
    const id = window.setInterval(() => {
      p += 6 + Math.random() * 8;
      if (p >= 100) {
        p = 100;
        setProgress(100);
        window.clearInterval(id);
        window.setTimeout(() => {
          setBusy(false);
          setHasApplied(true);
          // The canvas previews the look; rendering and export happen in the
          // app, so surface the prompt once the user has seen the result.
          openDownloadApp("editor");
        }, 250);
      } else {
        setProgress(p);
      }
    }, 90);
  }, [imageDataUrl, busy, openDownloadApp]);

  const handleSelectTool = useCallback((i: number) => {
    // Reset transient apply state when the user picks a different tool so
    // the next Apply tap is unambiguous. Doing it inline here avoids the
    // `set-state-in-effect` anti-pattern.
    setSelectedIndex(i);
    setHasApplied(false);
    setProgress(0);
    setBusy(false);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 18,
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-xl)",
        overflow: "hidden",
      }}
    >
      <Header niche={niche} focusedTool={focusedTool} />

      <div
        style={{
          padding: "0 clamp(14px, 2vw, 28px) clamp(18px, 2.4vw, 32px)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {/* Canvas */}
        <div
          onDragOver={onDragOver}
          onDrop={onDrop}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            maxHeight: "min(70vh, 720px)",
            background: "var(--surface-2)",
            borderRadius: "var(--r-lg)",
            border: "1px solid var(--line)",
            overflow: "hidden",
          }}
        >
          {!imageDataUrl ? (
            <UploadDropzone onClick={onPickFile} />
          ) : (
            <CompareCanvas
              src={imageDataUrl}
              afterFilter={hasApplied ? filterFor(selectedTool?.name) : null}
              showSlider={hasApplied}
            />
          )}
          <input
            ref={fileRef}
            type='file'
            accept='image/*'
            hidden
            onChange={(e) => onFile(e.target.files?.[0])}
          />
        </div>

        {/* Tool rail */}
        <ToolRail
          niche={niche}
          tools={tools}
          selectedIndex={selectedIndex}
          onSelect={handleSelectTool}
          locked={Boolean(focusedTool)}
        />

        {/* Apply bar */}
        <ApplyBar
          toolName={selectedTool?.name ?? ""}
          cost={cost}
          disabled={!imageDataUrl}
          busy={busy}
          progress={progress}
          onApply={onApply}
          onPickFile={onPickFile}
          hasImage={Boolean(imageDataUrl)}
        />
      </div>
    </div>
  );
}

// ── Header ───────────────────────────────────────────────────────────────────

function Header({
  niche,
  focusedTool,
}: {
  niche: Niche;
  focusedTool?: NicheService;
}) {
  return (
    <div
      style={{
        padding: "clamp(18px, 2.4vw, 28px) clamp(18px, 2.4vw, 28px) 14px",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 18,
        flexWrap: "wrap",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <span
          className='section-num'
          style={{ display: "inline-block", marginBottom: 6 }}
        >
          {niche.label}
        </span>
        <h1
          className='font-fraunces'
          style={{
            fontSize: "clamp(28px, 3.6vw, 48px)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
          }}
        >
          {niche.name}
          {niche.suffix ? ` ${niche.suffix} ` : " "}
          <em className='silver'>
            {focusedTool ? focusedTool.name : niche.italicWord}.
          </em>
        </h1>
      </div>

      <Link
        href='/#niches'
        className='link-underline'
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--mute)",
          whiteSpace: "nowrap",
        }}
      >
        ← All niches
      </Link>
    </div>
  );
}

// ── Upload dropzone ──────────────────────────────────────────────────────────

// Same palette as the prototype's "Recent edits" / Batch mosaic in
// `PhoneShowcase.tsx`. Reused here as the cubic background filler behind the
// empty upload state so the editor inherits the showcase DNA.
const CUBE_PALETTE = [
  "linear-gradient(135deg, #001a30, #002a50)",
  "linear-gradient(135deg, #1a1000, #2e1800)",
  "linear-gradient(135deg, #100020, #1a0030)",
  "linear-gradient(135deg, #001a10, #002a18)",
  "linear-gradient(135deg, #1a0010, #2e0020)",
  "linear-gradient(135deg, #0a1a00, #142800)",
  "linear-gradient(135deg, #00101a, #001a2e)",
  "linear-gradient(135deg, #0d0a00, #1e1500)",
] as const;

function UploadDropzone({ onClick }: { onClick: () => void }) {
  // Build a stable 6-column mosaic. The exact count is cosmetic; the grid
  // auto-flows to fill the available aspect ratio.
  const cells = Array.from(
    { length: 48 },
    (_, i) => CUBE_PALETTE[i % CUBE_PALETTE.length],
  );
  return (
    <button
      type='button'
      onClick={onClick}
      style={{
        position: "absolute",
        inset: 0,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "var(--ink)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        padding: 24,
        overflow: "hidden",
      }}
    >
      {/* Cubic image background filler */}
      <span
        aria-hidden='true'
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridAutoRows: "1fr",
          gap: 6,
          padding: 12,
          opacity: 0.55,
        }}
      >
        {cells.map((bg, i) => (
          <span
            key={i}
            style={{
              background: bg,
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          />
        ))}
      </span>
      {/* Centered vignette so the prompt stays legible over the mosaic */}
      <span
        aria-hidden='true'
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.55) 38%, rgba(10,10,10,0.15) 70%, transparent 100%)",
        }}
      />

      <span
        aria-hidden='true'
        style={{
          position: "relative",
          width: 56,
          height: 56,
          borderRadius: 999,
          background: "color-mix(in oklab, var(--blue) 14%, transparent)",
          border: "1px solid color-mix(in oklab, var(--blue) 32%, transparent)",
          color: "var(--blue)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        <svg width='22' height='22' viewBox='0 0 24 24' fill='none'>
          <path
            d='M12 16V4M12 4l-4 4M12 4l4 4M4 20h16'
            stroke='currentColor'
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </span>
      <span
        className='font-fraunces'
        style={{
          position: "relative",
          fontSize: "clamp(18px, 2vw, 24px)",
          fontWeight: 400,
          color: "var(--ink)",
          letterSpacing: "-0.005em",
        }}
      >
        Upload an image
      </span>
      <span
        style={{
          position: "relative",
          fontFamily: "var(--font-geist-mono)",
          fontSize: 11,
          color: "var(--mute)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        PNG · JPG · WEBP · drop or browse
      </span>
    </button>
  );
}

// ── Compare canvas (silver slider) ───────────────────────────────────────────

function CompareCanvas({
  src,
  afterFilter,
  showSlider,
}: {
  src: string;
  afterFilter: string | null;
  showSlider: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50); // %
  const [dragging, setDragging] = useState(false);

  // React 19 'adjust state during render' pattern — resets slider position
  // when the source or applied filter changes, without triggering the
  // `set-state-in-effect` rule.
  const resetKey = `${src}|${afterFilter ?? ""}`;
  const [lastKey, setLastKey] = useState(resetKey);
  if (lastKey !== resetKey) {
    setLastKey(resetKey);
    setPos(50);
  }

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => setFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, setFromClientX]);

  return (
    <div
      ref={wrapRef}
      onPointerDown={(e) => {
        if (!showSlider) return;
        setDragging(true);
        setFromClientX(e.clientX);
      }}
      style={{
        position: "absolute",
        inset: 0,
        cursor: showSlider ? "ew-resize" : "default",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      {/* AFTER (full bleed) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt='Edited preview'
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "var(--surface-2)",
          filter: afterFilter ?? "none",
          transition: "filter 360ms ease",
        }}
      />

      {/* BEFORE (clipped from right by slider position) */}
      {showSlider && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt='Original'
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            background: "var(--surface-2)",
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
            transition: dragging ? "none" : "clip-path 80ms linear",
          }}
        />
      )}

      {/* Labels */}
      <span style={pillStyle("BEFORE", 8, 8)}>BEFORE</span>
      <span style={pillStyle("AFTER", 8, 8, true)}>AFTER</span>

      {/* Silver compare slider */}
      {showSlider && (
        <div
          aria-hidden='true'
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${pos}%`,
            width: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: -1,
              width: 2,
              background: "var(--silver-grad)",
              boxShadow: "0 0 14px rgba(255,255,255,0.55)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translate(-50%, -50%)",
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "var(--silver-grad)",
              boxShadow:
                "var(--shadow-silver), 0 0 14px rgba(255,255,255,0.45)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
            }}
          >
            <svg width='14' height='12' viewBox='0 0 14 12' fill='none'>
              <path
                d='M1 6h12M1 6l3-3M1 6l3 3M13 6l-3-3M13 6l-3 3'
                stroke='currentColor'
                strokeWidth='1.6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

const pillStyle = (
  _label: string,
  top: number,
  side: number,
  right = false,
): React.CSSProperties => ({
  position: "absolute",
  top,
  ...(right ? { right: side } : { left: side }),
  fontFamily: "var(--font-geist-mono)",
  fontSize: 9,
  letterSpacing: "0.18em",
  padding: "3px 8px",
  borderRadius: 4,
  background: "rgba(0,0,0,0.55)",
  color: right ? "var(--blue)" : "rgba(255,255,255,0.6)",
  border: "1px solid rgba(255,255,255,0.06)",
  pointerEvents: "none",
});

// ── Tool rail ────────────────────────────────────────────────────────────────

function ToolRail({
  niche,
  tools,
  selectedIndex,
  onSelect,
  locked,
}: {
  niche: Niche;
  tools: NicheService[];
  selectedIndex: number;
  onSelect: (i: number) => void;
  locked: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--mute)",
          }}
        >
          Tools · {tools.length}
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
          {locked
            ? "Single-tool view"
            : `${niche.name}${niche.suffix ? " " + niche.suffix : ""}`}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          paddingBottom: 6,
          scrollSnapType: "x proximity",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "thin",
        }}
      >
        {tools.map((t, i) => {
          const active = i === selectedIndex;
          return (
            <button
              key={`${t.name}-${i}`}
              type='button'
              onClick={() => onSelect(i)}
              className={active ? "chip-blue" : "chip"}
              style={{
                flexShrink: 0,
                scrollSnapAlign: "start",
                fontSize: 11,
                padding: "8px 14px",
                cursor: "pointer",
                gap: 6,
                fontFamily: "var(--font-geist-sans)",
                fontWeight: active ? 600 : 500,
                color: active ? "var(--ink)" : "var(--mute)",
                border: active
                  ? "1px solid color-mix(in oklab, var(--blue) 45%, var(--line))"
                  : "1px solid var(--line)",
                background: active
                  ? "color-mix(in oklab, var(--blue) 14%, transparent)"
                  : "var(--surface)",
              }}
            >
              {t.featured && (
                <span
                  aria-hidden='true'
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 999,
                    background: "var(--blue)",
                    boxShadow: "0 0 6px rgba(56,189,248,0.8)",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
              )}
              {t.name}
            </button>
          );
        })}
      </div>
      {!locked && (
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--mute)",
          }}
        >
          ↦ tip · open any tool on its own at /edit/{niche.id}/
          {tools[selectedIndex] ? toolSlug(tools[selectedIndex].name) : ""}
        </p>
      )}
    </div>
  );
}

// ── Apply bar ────────────────────────────────────────────────────────────────

function ApplyBar({
  toolName,
  cost,
  disabled,
  busy,
  progress,
  onApply,
  onPickFile,
  hasImage,
}: {
  toolName: string;
  cost: number;
  disabled: boolean;
  busy: boolean;
  progress: number;
  onApply: () => void;
  onPickFile: () => void;
  hasImage: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 16px",
        background: "var(--surface-2, var(--surface))",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-lg)",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}
      >
        <button
          type='button'
          onClick={onPickFile}
          className='chip'
          style={{
            cursor: "pointer",
            padding: "8px 14px",
            fontSize: 11,
            color: "var(--ink)",
            border: "1px solid var(--line)",
            background: "var(--surface)",
            fontFamily: "var(--font-geist-sans)",
            fontWeight: 500,
          }}
        >
          {hasImage ? "Change image" : "Upload image"}
        </button>
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 9,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--mute)",
            }}
          >
            Selected
          </p>
          <p
            className='font-fraunces'
            style={{
              fontSize: 17,
              fontWeight: 400,
              color: "var(--ink)",
              letterSpacing: "-0.005em",
              lineHeight: 1.2,
              maxWidth: 360,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {toolName || "Pick a tool"}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flex: "1 1 320px",
          justifyContent: "flex-end",
          minWidth: 220,
        }}
      >
        {busy && (
          <div
            aria-hidden='true'
            style={{
              flex: "1 1 160px",
              minWidth: 120,
              maxWidth: 280,
              height: 4,
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "var(--blue-grad)",
                transition: "width 120ms linear",
              }}
            />
          </div>
        )}
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--blue)",
            background: "rgba(56,189,248,0.10)",
            border: "1px solid rgba(56,189,248,0.25)",
            padding: "4px 10px",
            borderRadius: 6,
          }}
        >
          {cost} cr
        </span>
        <button
          type='button'
          disabled={disabled || busy}
          onClick={onApply}
          className='btn-lift'
          style={{
            padding: "11px 22px",
            borderRadius: 999,
            border: "none",
            cursor: disabled || busy ? "not-allowed" : "pointer",
            fontFamily: "var(--font-geist-sans)",
            fontWeight: 700,
            fontSize: 13,
            color: "#0A0A0A",
            background: "var(--silver-grad)",
            boxShadow:
              "var(--shadow-silver), inset 0 0 0 1px rgba(255,255,255,0.4)",
            opacity: disabled ? 0.55 : 1,
            letterSpacing: "0.01em",
          }}
        >
          {busy
            ? "Applying…"
            : `Apply ${toolName ? toolName.split(" ")[0] : ""}`.trim()}
        </button>
      </div>
    </div>
  );
}

// ── Cost + filter heuristics ─────────────────────────────────────────────────

function costFor(name?: string): number {
  if (!name) return 1;
  const n = name.toLowerCase();
  if (
    n.includes("upscale") ||
    n.includes("4k") ||
    n.includes("stitch") ||
    n.includes("album") ||
    n.includes("360")
  )
    return 3;
  if (
    n.includes("stage") ||
    n.includes("showroom") ||
    n.includes("twilight") ||
    n.includes("restore")
  )
    return 2;
  return 1;
}

/**
 * Maps a tool name to a CSS filter for an instant, trustworthy preview of the
 * "after" state — no AI call needed for the marketing demo. Keeps results
 * subtle so any uploaded image looks polished, not gimmicky.
 */
function filterFor(name?: string): string {
  if (!name) return "none";
  const n = name.toLowerCase();

  if (n.includes("background") && n.includes("remove"))
    return "brightness(1.08) contrast(1.05) saturate(0.95)";
  if (n.includes("studio") && n.includes("white"))
    return "brightness(1.18) contrast(1.06) saturate(0.92)";
  if (n.includes("ghost") && n.includes("mannequin"))
    return "contrast(1.08) saturate(1.04) brightness(1.04)";
  if (n.includes("color") && (n.includes("match") || n.includes("variant")))
    return "saturate(1.18) hue-rotate(-4deg) contrast(1.04)";
  if (n.includes("sky") && n.includes("replace"))
    return "saturate(1.15) hue-rotate(-10deg) brightness(1.06)";
  if (n.includes("hdr")) return "contrast(1.18) saturate(1.1) brightness(1.04)";
  if (n.includes("upscale") || n.includes("4k") || n.includes("sharp"))
    return "contrast(1.12) saturate(1.04) brightness(1.02)";
  if (n.includes("twilight"))
    return "brightness(0.86) contrast(1.18) saturate(1.2) hue-rotate(-12deg)";
  if (n.includes("golden") || n.includes("light & mood") || n.includes("mood"))
    return "saturate(1.18) brightness(1.06) contrast(1.06) hue-rotate(-6deg)";
  if (n.includes("skin") && n.includes("smooth"))
    return "contrast(0.96) brightness(1.05) saturate(1.04)";
  if (n.includes("steam") || n.includes("halo"))
    return "brightness(1.06) contrast(1.06) saturate(1.05)";
  if (n.includes("reflection") && n.includes("clean"))
    return "contrast(1.1) saturate(1.04) brightness(1.04)";
  if (n.includes("macro") || n.includes("edge"))
    return "contrast(1.16) saturate(1.06)";
  if (n.includes("restore") || n.includes("patina"))
    return "sepia(0.18) contrast(1.08) saturate(1.08) brightness(1.04)";
  if (n.includes("crowd") && n.includes("blur"))
    return "blur(0.4px) brightness(1.04) saturate(1.02)";
  if (n.includes("perspective") || n.includes("wide-angle"))
    return "contrast(1.06) saturate(1.04)";
  if (n.includes("watermark") || n.includes("marketplace"))
    return "contrast(1.04) saturate(1.04)";

  return "contrast(1.06) saturate(1.06) brightness(1.03)";
}
