/**
 * How much video this device and connection should be asked to carry.
 *
 * The home page mounts ~45 autoplaying cards across the niche, tool, carousel
 * and UGC grids. Left ungoverned they all begin fetching the moment they near
 * the viewport, which saturates the connection, starves whatever the user is
 * actually looking at, and keeps dozens of decoders alive at once. Every
 * consumer reads its limits from here so the policy is one decision rather
 * than a per-component guess.
 */

export interface MediaPolicy {
  /** False on metered or very slow connections — cards stay on their poster. */
  allowVideo: boolean;
  /** Ceiling on clips allowed to be *fetching* at the same moment. */
  maxConcurrentLoads: number;
  /** How far outside the viewport a clip may begin loading. */
  rootMargin: string;
}

/** Conservative default used during SSR and before hydration. */
const DEFAULT_POLICY: MediaPolicy = {
  allowVideo: true,
  maxConcurrentLoads: 3,
  rootMargin: "200px",
};

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
}

export function getMediaPolicy(): MediaPolicy {
  if (typeof window === "undefined") return DEFAULT_POLICY;

  const nav = navigator as Navigator & {
    connection?: NetworkInformation;
    deviceMemory?: number;
  };
  const connection = nav.connection;

  // Data Saver is an explicit request not to spend the user's bytes on
  // decoration. Posters still render, so nothing looks broken.
  if (connection?.saveData) {
    return { allowVideo: false, maxConcurrentLoads: 0, rootMargin: "0px" };
  }

  const effectiveType = connection?.effectiveType;
  if (effectiveType === "slow-2g" || effectiveType === "2g") {
    return { allowVideo: false, maxConcurrentLoads: 0, rootMargin: "0px" };
  }
  if (effectiveType === "3g") {
    return { allowVideo: true, maxConcurrentLoads: 1, rootMargin: "100px" };
  }

  // Low-memory phones are where a wall of live decoders actually crashes the
  // renderer, so cap them harder than the connection alone would suggest.
  const memory = nav.deviceMemory;
  if (typeof memory === "number" && memory <= 4) {
    return { allowVideo: true, maxConcurrentLoads: 2, rootMargin: "150px" };
  }

  return DEFAULT_POLICY;
}
