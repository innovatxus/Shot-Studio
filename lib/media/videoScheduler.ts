"use client";

import { getMediaPolicy } from "./policy";

/**
 * A page-wide admission queue for video downloads.
 *
 * Each card asks for a slot before it mounts its `<video>`, and hands the slot
 * back the moment the clip is playable. Only a handful of clips are ever in
 * flight at once, and the queue is ordered by how close each card is to the
 * viewport, so the clip the user is actually looking at wins the connection
 * instead of queueing behind fifteen cards further down the page.
 *
 * This governs *fetching*, not playback — once a clip is playable it keeps
 * playing with no slot held, so the ceiling never limits how many cards are
 * animating at once.
 */

interface Waiter {
  /** Lower sorts first. Recomputed at each pump so it tracks scrolling. */
  getPriority: () => number;
  onGrant: () => void;
  granted: boolean;
  watchdog?: ReturnType<typeof setTimeout>;
}

/**
 * A clip that stalls without ever reaching `canplay` must not hold its slot
 * forever, or one dead request wedges the whole queue.
 */
const WATCHDOG_MS = 8000;

const waiting = new Set<Waiter>();
const active = new Set<Waiter>();

let limit: number | null = null;

function getLimit(): number {
  if (limit === null) limit = getMediaPolicy().maxConcurrentLoads;
  return limit;
}

function pump(): void {
  const max = getLimit();
  if (active.size >= max || waiting.size === 0) return;

  const queue = [...waiting].sort((a, b) => a.getPriority() - b.getPriority());
  for (const waiter of queue) {
    if (active.size >= max) break;
    waiting.delete(waiter);
    active.add(waiter);
    waiter.granted = true;
    waiter.watchdog = setTimeout(() => release(waiter), WATCHDOG_MS);
    waiter.onGrant();
  }
}

function release(waiter: Waiter): void {
  if (waiter.watchdog) {
    clearTimeout(waiter.watchdog);
    waiter.watchdog = undefined;
  }
  waiting.delete(waiter);
  active.delete(waiter);
  pump();
}

/**
 * Queues a request to start loading a clip.
 *
 * `onGrant` fires (asynchronously) once a slot is free. The returned function
 * releases the slot and must be called on `canplay`, on error, and on unmount
 * — releasing twice is safe.
 */
export function requestVideoSlot(
  getPriority: () => number,
  onGrant: () => void,
): () => void {
  const waiter: Waiter = { getPriority, onGrant, granted: false };
  waiting.add(waiter);
  pump();
  return () => release(waiter);
}

/**
 * Distance in pixels from the viewport's vertical centre — the priority
 * metric. Elements straddling the centre of the screen sort first.
 */
export function distanceFromViewport(el: Element | null): number {
  if (!el) return Number.MAX_SAFE_INTEGER;
  const rect = el.getBoundingClientRect();
  const viewportCentre = window.innerHeight / 2;
  const elementCentre = rect.top + rect.height / 2;
  return Math.abs(elementCentre - viewportCentre);
}
