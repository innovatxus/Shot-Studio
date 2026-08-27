"use client";

import type { AnchorHTMLAttributes } from "react";
import { useDownloadApp, type DownloadModalSource } from "./DownloadAppProvider";

/**
 * A card or tool link that opens the download modal instead of navigating.
 *
 * Keeps the real `href` in the markup so the tool pages stay crawlable and the
 * site's internal linking survives, but intercepts the click — editing happens
 * in the app, so the web route is not where a user should land.
 *
 * Plain <a> rather than next/link on purpose: there is no navigation to
 * prefetch, so prefetching the editor bundle would be wasted bandwidth.
 */
interface DownloadAppLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> {
  href: string;
  source?: DownloadModalSource;
}

export default function DownloadAppLink({
  href,
  source = "card",
  children,
  ...rest
}: DownloadAppLinkProps) {
  const { open } = useDownloadApp();
  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => {
        // Let modified clicks behave normally so "open in new tab" still works
        // for anyone deliberately inspecting the page.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        open(source);
      }}
    >
      {children}
    </a>
  );
}
