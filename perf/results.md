# Performance results — ShotStudio

**Date:** 2026-08-28 · **Branch:** `perf/audit-2026-08` · **Baseline:** [`perf/baseline.md`](./baseline.md) · **Plan:** [`perf/audit.md`](./audit.md)

Every number here comes from a matched-session interleaved A/B. Nothing is estimated.
Where a change could not be measured, it says so.

---

## 1. Headline

| Route | LCP before | LCP after | Delta |
| --- | --- | --- | --- |
| `/` | 5274 ms | **4716 ms** | **−558 ms** |
| `/learn` | 5087 ms | **4579 ms** | **−508 ms** |

| Payload | Before | After |
| --- | --- | --- |
| `/` total transfer | 777 KB | **705 KB** (−72) |
| `/` image bytes | 271 KB | **198 KB** (−73) |
| Card art, per image | — | **42–45 % smaller** |
| `public/` on disk | 468 MB | **118 MB** (−350) |
| Source | — | −168 lines of unreferenced code |

CLS stayed at **0.000** on every route, before and after.

---

## 2. How this was measured (and why the method changed mid-engagement)

Conditions are identical to [`perf/baseline.md`](./baseline.md) §1: Lighthouse,
mobile 412×823, Slow 4G (150 ms RTT / 1638 kbps), 4× CPU, cold cache.

The final numbers come from `scratchpad/ab2.sh`: **3 rounds, alternating
before/after arms inside one session, 3 runs per arm per route**, with each arm
checked out by commit ref (`67d8da6` vs `ee46b25`) rather than by patch.

This replaced a sequential before-then-after method that produced three
successive **invalid** results. The causes, all mine:

1. **Cross-session drift.** Sequential runs hours apart differed by ~600 ms on a
   byte-identical page. Comparisons spanning sessions are meaningless here.
2. **Leaked Chrome processes.** `chrome-launcher`'s kill left renderer/GPU
   children alive; 77 accumulated, consuming 6.4 GB and progressively loading
   the machine. This eventually crashed a build with
   `FATAL ERROR: JavaScript heap out of memory`. Because the leak grew over
   time, whichever arm ran *last* was penalised — which produced a confident
   "F3/F4 shows no benefit" verdict that was an artifact of the rig, not a fact
   about the site. Fixed by reaping only Lighthouse's own Chrome instances
   (matched on its temp profile).
3. **Concurrent runs.** Stopping a background task killed the output pipe but
   not the script behind it, so three copies of the A/B ran simultaneously
   against one repo and one port, each `git checkout`-ing the other's files.
   Fixed with a `noclobber` lockfile.

**Read this before trusting any single-run comparison on this machine.**

### Confidence

Per-round deltas: `/` = −571, −529, −573 ms · `/learn` = −593, −333, −598 ms.
Before and after distributions do not overlap on either route.

The order within each round is always before-then-after, which would flatter the
after arm if the machine warmed monotonically. It did not: round 1's *after*
(4689 ms) is faster than round 2's *before* (5245 ms) measured five minutes
later. The signal tracks the code, not the clock.

**Caveat:** `/learn` is **not** a control. The reveal fix ships in
`app/layout.tsx` and therefore affects every route. This run had no untreated
control route.

---

## 3. What worked

### `ee46b25` — paint above-the-fold content before hydration
**The largest single win. Most of the −508 ms on `/learn`.**

`ScrollReveal` starts elements at `opacity: 0` and adds `.in` only inside
`useEffect`, so above-the-fold content could not paint until the bundle had
downloaded, parsed and hydrated. On `/learn` that put the LCP `<h1>` at a
**1309 ms element render delay** — a headline waiting on JavaScript it did not
need.

A ~300-byte inline script at the end of `<body>` now reveals only the elements
already intersecting the viewport, one frame after parse. Below-the-fold
reveals are untouched and still driven by the observer. The class is applied on
the next animation frame so the CSS transition still has a starting frame:
**the entrance motion is unchanged, it simply stops waiting.**

`/learn` moved with **zero byte change** (670 KB both arms) — the gain is
entirely paint scheduling.

### `32f1592` — card art at quality 60
**−72 KB on `/`, deterministic.**

| Image | q75 | q60 | Saved |
| --- | --- | --- | --- |
| `antiques-vintage-snap-pro` | 50.4 KB | 27.9 KB | −22.5 KB (45 %) |
| `makeup-snap-pro` | 26.4 KB | 14.7 KB | −11.7 KB (44 %) |
| `apperal-snap-pro` | 23.7 KB | 13.8 KB | −10.0 KB (42 %) |

Applied only to card art, which renders ~384 px wide under a gradient overlay.
Both encodings were decoded and compared visually at card size: indistinguishable.
Full-bleed imagery stays at 75.

### `b4e0fe5` — remove unreferenced media
**468 MB → 118 MB on disk. No route got faster.**

Stated plainly because the number invites the wrong conclusion: these files were
never requested by any page. This is a repo, clone and deploy win, not a user-facing
speed win.

### `d720bf6` — remove seven unreferenced exports
**−168 lines. No measurable bundle change** — the bundler already tree-shook them.
Hygiene, not speed.

---

## 4. What did not work, or could not be attributed

### `72f0ce9` — hero poster fetch priority
**No isolated measurement. Cannot be individually attributed.**

The poster is provably not the LCP element (both video slots sit at `opacity: 0`
for ~800 ms, and Lighthouse names the hero `<p>` as LCP), so a 92 KB image
holding a *high* priority slot ahead of the fonts and CSS that the LCP text
waits on is wrong on mechanism. But it shipped in the same arm as `32f1592`,
and I did not run a per-commit A/B. **Its share of the −558 ms on `/` is
unknown.** It is retained on reasoning, not evidence.

### F2 — Fraunces italic preload: **withdrawn, not shipped**

The audit proposed `preload: false` on Fraunces italic for −45.7 KB/route,
claiming italic was used "in exactly two places". **That was wrong.** The grep
covered `fontStyle: "italic"` and missed that `<em>` is italic by default:
`em.silver` appears **40×** in headings site-wide, including above the fold on
`/`. Shipping it would have traded 45.7 KB for visible FOUT on heading accents
across nearly every route. Switching to static per-weight instances would also
produce *more* files than the two variable faces currently shipped.
**Current setup is correct; the finding was my error.**

### Sequential A/B results (3 separate attempts): **discarded**

See §2. All contaminated by rig defects.

---

## 5. Found, not done

| Item | Why |
| --- | --- |
| **Hero `.hero-animate` delay** | `/` LCP is still ~4716 ms, gated by `.hero-animate-d3` holding the LCP sub-headline at `opacity: 0` for 0.48 s before a 1.1 s fade. This is the **largest remaining lever on `/`**, and unlike the reveal fix it is not a bug — the stagger is deliberate choreography. Needs a design decision, not an engineering one. |
| **`old photo.png` (2.36 MB)** | No exact-filename reference, but its stem collides with the service name `"Old Photo"` in `services.ts`/`studio.ts`. Probably dead; "probably" is not sufficient to delete. |
| **11 unnecessary exports** | Used inside their own modules — dropping the `export` keyword is cosmetic and changes zero runtime bytes. Deleting the symbols would break them. |
| **20 type-only exports** | Erased at compile time. Zero bytes. |
| **Render-blocking CSS (12.5 KB)** | Already lean for a whole-site Tailwind sheet; Next has no first-class critical-CSS inlining. |
| **26 KB unused JS** | Framework/runtime chunk. No safe route-level split. |
| **Production / edge measurement** | No production URL supplied. TTFB and Cloudflare cache behaviour for Egypt and Iraq remain **unmeasured**. |
| **Authenticated route** | No Firebase credentials in the environment. |
| **Real video cost on scroll** | Lighthouse fetches ~1 KB of video; a human scrolling the home page pulls far more. Needs a scripted scroll trace. Likely the largest real-world number on the site. |

### Bug noted, not fixed
`LOCALE_COOKIE` was deleted as unreferenced, but the same literal `"snap-locale"`
remains hardcoded in `LOCALE_BOOTSTRAP` in `app/layout.tsx`, duplicating
`LOCALE_STORAGE_KEY`. Two sources of truth for one key.

---

## 6. Recommended budgets

| Metric | Ceiling | Current worst |
| --- | --- | --- |
| JS transferred per route | 250 KB | 249 KB (`/learn`) |
| Fonts per route | 160 KB | 151 KB (`/`) |
| Total transfer, marketing routes | 720 KB | 705 KB (`/`) |
| Total transfer, legal routes | 600 KB | 569 KB |
| LCP (Slow 4G, 4× CPU) | 2500 ms | 4716 ms — **not met** |
| CLS | 0.05 | 0.000 |

LCP is the one budget the site does not meet, and the remaining gap is the hero
choreography in §5.

### Enforcing in CI

Use the Phase 0 harness (`scratchpad/perf-tools/run-lh.mjs`) against a
production build. Three requirements, learned the hard way:

1. **One run at a time** — a lockfile, or a CI concurrency group.
2. **Reap browser processes** between runs, or the runner degrades and every
   later number is wrong.
3. **Never compare across sessions.** Build both refs and interleave arms in one
   job, or compare only byte metrics, which are deterministic.

Byte budgets can be enforced far more cheaply and reliably than timing: assert
on `.next` output size and per-route transfer, which need no browser at all.
Given how unstable lab timing proved here, **byte budgets should be the blocking
check, and LCP advisory.**

---

## 7. Plain language

A shopper in Cairo on a mid-range Android, on a slow connection, opening the
home page cold:

- The headline and sub-headline now appear about **half a second sooner**. On
  `/learn` the improvement is the same, and there it is pure: that page sends
  exactly the same bytes as before, the text simply stopped waiting for
  JavaScript to finish loading before it was allowed to be visible.
- They download **72 KB less** on the home page — real money on a metered plan,
  and bytes that never have to cross the distance to the edge.
- Nothing looks different. The animations play as designed, the card imagery is
  visually identical, and the page does not shift while loading (CLS 0.000).

What has **not** changed: the page still takes roughly 4.7 seconds to show its
largest text, against a 2.5-second target. The remaining delay is the hero's
entrance animation deliberately holding that text invisible for the first half
second. That is a design choice, and it is now the only thing standing between
this site and a good LCP.
