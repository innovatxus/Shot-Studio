"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import DownloadAppModal from "./DownloadAppModal";

/**
 * Where the prompt was triggered from. Kept only as intent metadata — the site
 * has no analytics platform, so nothing is dispatched. Wire it up here if one
 * is ever added, and every existing call site is already labelled.
 */
export type DownloadModalSource =
  | "cta"
  | "editor"
  | "generate"
  | "premium"
  | "tool"
  | "card"
  | "upload"
  | "other";

interface DownloadAppContextValue {
  isOpen: boolean;
  source: DownloadModalSource | null;
  open: (source?: DownloadModalSource) => void;
  close: () => void;
}

const DownloadAppContext = createContext<DownloadAppContextValue | null>(null);

/**
 * The one place the download prompt lives. Any component can call
 * `useDownloadApp().open("editor")` and get the identical experience.
 */
export function DownloadAppProvider({ children }: { children: ReactNode }) {
  const [source, setSource] = useState<DownloadModalSource | null>(null);

  const open = useCallback((next: DownloadModalSource = "other") => {
    setSource(next);
  }, []);

  const close = useCallback(() => setSource(null), []);

  const value = useMemo<DownloadAppContextValue>(
    () => ({ isOpen: source !== null, source, open, close }),
    [source, open, close],
  );

  return (
    <DownloadAppContext.Provider value={value}>
      {children}
      <DownloadAppModal isOpen={source !== null} onClose={close} source={source} />
    </DownloadAppContext.Provider>
  );
}

export function useDownloadApp(): DownloadAppContextValue {
  const ctx = useContext(DownloadAppContext);
  if (!ctx) {
    throw new Error("useDownloadApp must be used inside <DownloadAppProvider>");
  }
  return ctx;
}
