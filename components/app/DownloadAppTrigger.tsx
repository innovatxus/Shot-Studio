"use client";

import type { CSSProperties, ReactNode } from "react";
import { useDownloadApp, type DownloadModalSource } from "./DownloadAppProvider";

/**
 * A button that opens the global download modal.
 *
 * Exists so server components (Hero, Pricing) can trigger the modal without
 * becoming client components themselves — it forwards className and style so
 * each call site keeps its own visual treatment.
 */
export default function DownloadAppTrigger({
  source = "other",
  className,
  style,
  children,
  "aria-label": ariaLabel,
}: {
  source?: DownloadModalSource;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  "aria-label"?: string;
}) {
  const { open } = useDownloadApp();
  return (
    <button
      type='button'
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={() => open(source)}
    >
      {children}
    </button>
  );
}
