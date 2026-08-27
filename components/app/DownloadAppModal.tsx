"use client";

import { useEffect, useId, useRef, useState } from "react";
import AppStoreBadges from "./AppStoreBadges";

/**
 * The single download-the-app experience for the whole site.
 *
 * Never rendered directly by feature code — `DownloadAppProvider` owns the one
 * instance and `useDownloadApp().open()` is the only way in, so the modal looks
 * and behaves identically wherever it is triggered from.
 *
 * Behaviour mirrors `widgets/WidgetShell`: Esc + overlay close, focus trap,
 * focus restore, body scroll lock, and a plain crossfade under reduced motion.
 */
const OPEN_MS = 320;
const CLOSE_MS = 200;

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
}

export default function DownloadAppModal({
  isOpen,
  onClose,
  source,
}: {
  isOpen: boolean;
  onClose: () => void;
  source?: string | null;
}) {
  const titleId = useId();
  const bodyId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);


  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Move focus in, lock scroll, and restore focus on the way out.
  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    // Runs before focus moves inside, so this is still the triggering element.
    restoreRef.current = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panel ? getFocusable(panel)[0] : null;
    first?.focus();
    return () => {
      document.body.style.overflow = overflow;
      restoreRef.current?.focus?.();
    };
  }, [isOpen]);

  // Esc to close, Tab cycles inside the dialog.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = getFocusable(panelRef.current);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);


  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
  const ms = isOpen ? OPEN_MS : CLOSE_MS;
  const motion = reducedMotion
    ? { transition: `opacity ${ms}ms ease` }
    : { transition: `opacity ${ms}ms ${ease}, transform ${ms}ms ${ease}` };

  return (
    <div
      aria-hidden={!isOpen}
      className='fixed inset-0 flex items-center justify-center max-[720px]:items-end'
      style={{
        zIndex: 999,
        background: "rgba(4, 8, 14, 0.72)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        visibility: isOpen ? "visible" : "hidden",
        // Delay the visibility flip so the fade-out is still seen.
        transition: `opacity ${ms}ms ease, visibility 0s linear ${isOpen ? 0 : ms}ms`,
        padding: 20,
      }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        className='relative w-full max-[720px]:rounded-b-none'
        style={{
          maxWidth: 560,
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-xl)",
          boxShadow: "var(--shadow-card), 0 0 60px rgba(56,189,248,0.10)",
          padding: "44px 40px 36px",
          textAlign: "center",
          opacity: isOpen ? 1 : 0,
          transform:
            reducedMotion || isOpen ? "none" : "translateY(12px) scale(0.98)",
          ...motion,
        }}
      >
        <button
          type='button'
          onClick={onClose}
          aria-label='Close'
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "transparent",
            border: "1px solid var(--line)",
            color: "var(--mute)",
            cursor: "pointer",
          }}
        >
          <svg width='14' height='14' viewBox='0 0 14 14' fill='none' aria-hidden='true'>
            <path
              d='M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        </button>

        <span
          className='section-num'
          style={{ display: "block", marginBottom: 18, color: "var(--mute)" }}
        >
          Available now · iOS &amp; Android
        </span>

        <h2
          id={titleId}
          className='font-fraunces'
          style={{
            fontSize: "clamp(34px, 6vw, 52px)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            marginBottom: 16,
          }}
        >
          Your studio.
          <br />
          <em className='silver'>In your pocket.</em>
        </h2>

        <p
          id={bodyId}
          style={{
            fontSize: 15,
            color: "var(--mute)",
            lineHeight: 1.55,
            maxWidth: 380,
            margin: "0 auto 32px",
            fontFamily: "var(--font-geist-sans), sans-serif",
          }}
        >
          Start free now. No credit card. No desktop.
        </p>

        <AppStoreBadges size='sm' source={source ?? undefined} className='justify-center' />
      </div>
    </div>
  );
}
