"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  /** Playlist of clips played back-to-back, looping to the first once the last ends. */
  sources: string[];
}

const CROSSFADE_MS = 700;

/**
 * Full-screen background video playlist, architected for a stall-free loop:
 *
 * - Two stacked <video> elements ("slots") ping-pong as active/standby. The
 *   standby slot's `src` is always set to the *next* clip and given
 *   `preload="auto"`, so it has the entire runtime of the current clip to
 *   buffer in the background — by the time playback reaches the end, the
 *   next clip is already ready to play instantly.
 * - Swapping slots is a CSS opacity crossfade, not a hard `src` swap on one
 *   element, so there's no black-frame flash or decode stall mid-transition.
 * - Only ever two clips are fetched at a time (the active one + its
 *   successor) — the rest of the playlist stays untouched until its turn,
 *   which keeps initial page weight to a single clip's worth of bytes.
 * - Tab-visibility aware: pauses the active clip when the tab is hidden to
 *   save bandwidth/battery, resumes on return.
 * - prefers-reduced-motion: renders no video at all (zero bytes fetched).
 * - subtle CSS zoom animation (handled via .hero-video class in globals.css)
 */
export default function HeroVideo({ sources }: HeroVideoProps) {
  const slotRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ] as const;

  const [slotSrcIdx, setSlotSrcIdx] = useState<[number, number]>([
    0,
    sources.length > 1 ? 1 % sources.length : 0,
  ]);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  const tryPlay = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;
    video.play().catch(() => {
      /* Autoplay blocked: static poster / first frame shown — graceful */
    });
  }, []);

  // Track prefers-reduced-motion changes at runtime.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Save bandwidth/battery: pause the active clip while the tab is hidden.
  useEffect(() => {
    if (reducedMotion) return;
    const onVisibilityChange = () => {
      const active = slotRefs[activeSlot].current;
      if (!active) return;
      if (document.hidden) {
        active.pause();
      } else {
        tryPlay(active);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlot, reducedMotion, tryPlay]);

  // Drive playback of the active slot and advance the playlist on "ended".
  useEffect(() => {
    if (reducedMotion) return;
    const active = slotRefs[activeSlot].current;
    if (!active) return;

    if (active.readyState >= 1) tryPlay(active);
    const onCanPlay = () => tryPlay(active);
    active.addEventListener("canplay", onCanPlay, { once: true });
    // With preload="metadata" the browser stops after the header and never
    // buffers far enough to fire "canplay" on its own — play() is what starts
    // the stream, so kick it as soon as the metadata lands.
    active.addEventListener("loadedmetadata", onCanPlay, { once: true });

    const onLoadedData = () => setIsVisible(true);
    active.addEventListener("loadeddata", onLoadedData, { once: true });
    const fallbackTimer = setTimeout(() => setIsVisible(true), 800);

    const onEnded = () => {
      const standbySlot = activeSlot === 0 ? 1 : 0;
      // The standby slot has been buffering this clip for the entire
      // runtime of the one that just ended, so it should be ready instantly.
      const standby = slotRefs[standbySlot].current;
      if (standby) {
        standby.currentTime = 0;
        tryPlay(standby);
      }
      setActiveSlot(standbySlot);
      // Queue the clip *after* next into the slot that just finished
      // playing, giving it the full next cycle to buffer ahead of its turn.
      setSlotSrcIdx((prev) => {
        const next = [...prev] as [number, number];
        next[activeSlot] = (prev[activeSlot] + 2) % sources.length;
        return next;
      });
    };
    active.addEventListener("ended", onEnded);

    return () => {
      active.removeEventListener("canplay", onCanPlay);
      active.removeEventListener("loadedmetadata", onCanPlay);
      active.removeEventListener("loadeddata", onLoadedData);
      active.removeEventListener("ended", onEnded);
      clearTimeout(fallbackTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlot, reducedMotion, sources.length, tryPlay]);

  // Nested <source> children (used below for WebM-first fallback) don't
  // auto-reload on attribute change the way a direct `src` does — the slot
  // that just became standby needs an explicit reload to pick up its newly
  // queued clip. The active slot's index never changes while it's playing,
  // so this never interrupts current playback.
  useEffect(() => {
    slotRefs[0].current?.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slotSrcIdx[0]]);
  useEffect(() => {
    slotRefs[1].current?.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slotSrcIdx[1]]);

  return (
    <div className='absolute inset-0 overflow-hidden' aria-hidden='true'>
      {/* Permanent dark fallback — visible immediately, fades behind the video */}
      <div className='absolute inset-0 hero-fallback-bg z-0' />

      {/* Two stacked slots, hidden entirely for reduced-motion users (zero clips fetched) */}
      {!reducedMotion &&
        ([0, 1] as const).map((slot) => {
          const slotSrc = sources[slotSrcIdx[slot]];
          return (
            <video
              key={slot}
              ref={slotRefs[slot]}
              muted
              playsInline
              /* The active clip streams rather than downloading whole before
                 the page settles, so it stops competing with the hero text
                 for bandwidth. The standby slot only buffers ahead when there
                 is genuinely a *different* clip queued behind it — on a
                 single-clip playlist both slots share one URL, and letting
                 both fetch it eagerly cost a duplicate download of the whole
                 file. */
              preload={
                activeSlot === slot
                  ? "metadata"
                  : sources.length > 1
                    ? "auto"
                    : "none"
              }
              disablePictureInPicture
              disableRemotePlayback
              className='hero-video absolute inset-0 w-full h-full object-cover object-center z-[1]'
              style={{
                opacity: activeSlot === slot && isVisible ? 1 : 0,
                transition: `opacity ${CROSSFADE_MS}ms ease`,
              }}
              /* Poster on both slots: prevents a black flash if the standby
                 clip hasn't fully decoded by the time a crossfade begins. */
              poster='/assets/video/hero-videos/hero-main-poster.jpg'
            >
              {/* WebM/VP9 first: gives playback an independent decode path
                  on devices where the H.264 hardware decoder misbehaves. */}
              <source src={slotSrc.replace(/\.mp4$/i, ".webm")} type='video/webm' />
              <source src={slotSrc} type='video/mp4' />
            </video>
          );
        })}
    </div>
  );
}
