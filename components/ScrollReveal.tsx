"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

type Variant = "up" | "fade" | "right" | "left" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  variant?: Variant;
  /** When true, applies staggered child reveals (children should have `stagger-item`). */
  stagger?: boolean;
  as?: ElementType;
  /** Re-trigger every time it enters viewport. Default false (one-shot). */
  repeat?: boolean;
  threshold?: number;
  /**
   * For content that is above the fold on first paint.
   *
   * The normal variants hold their element at `opacity: 0` until an observer
   * adds `.in` after hydration. That is correct for anything the user scrolls
   * to, but for the first screenful it means the largest text on the page
   * cannot paint until the bundle has hydrated — measured on /learn as an LCP
   * of 4056ms against an FCP of 1116ms. `immediate` swaps the fade for a
   * transform-only entrance, so the text is painted and readable on the first
   * frame and still travels into place. Same trade as `.hero-animate`.
   */
  immediate?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  stagger = false,
  as: Tag = "div",
  repeat = false,
  threshold = 0.12,
  immediate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // `immediate` content is painted from the first frame and animates in CSS;
    // there is nothing for an observer to wait for.
    if (immediate) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          if (!repeat) obs.unobserve(el);
        } else if (repeat) {
          el.classList.remove("in");
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [repeat, threshold, immediate]);

  const variantClass = immediate ? "reveal-immediate" : `reveal-${variant}`;
  const delayClass = delay > 0 ? `reveal-d${delay}` : "";
  const staggerClass = stagger ? "stagger" : "";

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`${variantClass} ${staggerClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
