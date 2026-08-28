# Performance results — ShotStudio

**Date:** 2026-08-28 · **Branch:** `perf/audit-2026-08` · **Baseline:** [`perf/baseline.md`](./baseline.md) · **Plan:** [`perf/audit.md`](./audit.md)

Every figure here is measured. Where something could not be measured, or where
an earlier claim turned out to be wrong, it says so.

---

## 1. Headline

Measured under **applied** throttling (real CPU + network throttling), mobile,
n=5, medians:

| Route | Before | After | Target 2500 ms |
| --- | --- | --- | --- |
| `/` | 1192 ms | **1116 ms** | met |
| `/learn` | 4056 ms | **1672 ms** (−2384) | met |

| Payload | Before | After |
| --- | --- | --- |
| `/` total transfer | 777 KB | **~600 KB** |
| Card art, per image | — | **42–45 % smaller** |
| Hero poster | 90.7 KB | **36.8 KB** |
| `public/` on disk | 468 MB | **118 MB** |
| Source | — | −168 lines unreferenced |

CLS remained **0.000** on every route throughout.

---

## 2. The measurement instrument mattered more than any code change

This is the most important lesson in this document.

Phases 0–2 were measured with Lighthouse's **Lantern simulation**
(`throttlingMethod: 'simulate'`), which loads the page unthrottled and models
what Slow 4G + 4× CPU *would* have done. Switching to **applied** throttling
(`devtools`, and later a direct `PerformanceObserver` harness) changed the
picture completely:

| Route | Lantern simulated | Actually measured |
| --- | --- | --- |
| `/` | 3784 ms | **1116 ms** |
| `/learn` | 4465 ms | 4056 ms → 1672 ms |

**The home page was never the problem.** It was already comfortably under
target, and a large part of this engagement was spent optimising a simulation
artifact. `/learn` was genuinely broken and the simulation was *under*-reporting
it.

Under the simulated metric, four separate interventions produced nothing:

| Intervention | Bytes | Simulated LCP |
| --- | --- | --- |
| Transferred bytes −176 KB | −176 KB | ~0 |
| DOM size −56 % | −65 KB | ~0 |
| Main-thread work −255 ms, 49 fewer observers | — | ~0 |
| `browserslist` modern targets | 0 | 0 |

**Recommendation: do not gate CI on Lantern-simulated LCP for this site.** Use
applied throttling or field data. Byte budgets are deterministic and are the
right blocking check.

---

## 3. What worked

### `b1e6bf8` — `ScrollReveal immediate` (the fix that met the target)
**`/learn` 4056 ms → ~1700 ms.**

`ScrollReveal` holds its elements at `opacity: 0` and only adds `.in` from
inside `useEffect`. Correct for content the user scrolls to; wrong for the
first screenful, where it meant the page's largest heading could not paint
until the bundle had hydrated. On `/learn` that was an LCP of 4056 ms against
an FCP of 1116 ms.

The `immediate` prop swaps the fade for a transform-only entrance
(`.reveal-immediate`, reusing `hero-rise`), so the text is painted and legible
on the first frame and still travels into place — the same trade already made
by `.hero-animate`. Applied to exactly one element: the `LearnHero` block.

### `06098b7` — hero animates transform only
**`/` −876 ms** (measured under simulation, control-validated: `/learn`, which
has no `.hero-animate`, moved +14 ms).

`hero-rise` animated `opacity: 0 → 1` plus `filter: blur(8px)`, and
`.hero-animate` set `opacity: 0` as its base state, so the LCP text was
withheld for 0.32–0.48 s plus the fade ramp. Animating `transform` alone means
**the staggered choreography (d1–d5) is preserved exactly** — it simply no
longer decides when the page may appear. Dropping the blur also removes a
full-width filter repaint per frame.

### `32f1592` — card art at quality 60
**−72 KB on `/`, deterministic.** 42–45 % per image (50.4→27.9 KB, 26.4→14.7 KB,
23.7→13.8 KB). Both encodings were decoded and compared at card size:
indistinguishable. Applied only to card art under a gradient overlay.

### `50386d5` — hero poster and prefetch
Poster 90.7 → **36.8 KB** (1280→854 px, q12); it sits behind a 42 % black tint
and four gradient layers, and is kept rather than removed because it is the
real fallback when the video has not loaded by the 800 ms mark — precisely the
target audience's case. `prefetch={false}` on footer, consent and logo links:
`/legal/cookies` was being prefetched **six times** and the logo prefetched the
page the visitor was already on (~39 KB).

### `b4e0fe5` — remove unreferenced media
**468 MB → 118 MB on disk. No route got faster.** Stated plainly because the
number invites the wrong conclusion: these files were never requested by any
page. Repo, clone and deploy win only.

### `d720bf6` — remove seven unreferenced exports
−168 lines, **no measurable bundle change** — already tree-shaken. Hygiene.

### `093158b` — consent banner server-rendered
Correct on mechanism (the banner no longer waits on hydration; verified that a
returning visitor never sees a flash, and a first-time visitor sees it in the
first sample). Its isolated LCP contribution measured ~78 ms under simulation
and was not separable under applied throttling. Retained.

---

## 4. What failed, and was reverted or is documented as inert

### The global reveal bootstrap — **did not do what it claimed**
`ee46b25` shipped an inline script intended to reveal above-the-fold content
before hydration. **It never worked.** React 19 hoists inline `<script>`, so it
is emitted at byte 16101 of `/learn` while the reveal elements span
16166–215105 — it runs during parse, matches nothing, returns. The
"−508 ms on `/learn`" reported for it at the time was not real.

Three attempts to fix it (`DOMContentLoaded`, `readystatechange`,
`IntersectionObserver`, limiting to 8 elements) all **regressed the home page
by ~430 ms** while helping `/learn`, so the approach was abandoned in favour of
the surgical `immediate` prop.

**The inert script is deliberately still in the tree.** Deleting it regresses
`/` from 1116 ms to 1588 ms, reproducible across clean rebuilds (5 runs each).
A parser-blocking inline script after the body content appears to force an
earlier paint flush. That is an accidental benefit resting on browser
internals; it is documented in `app/layout.tsx` rather than tidied away, and
flagged for replacement with something intentional.

### Shared `IntersectionObserver` — **not shipped**
Collapsed 54 observers to 5 and cut main-thread work 2574→2319 ms and bootup
686→590 ms. **LCP did not move**, and it was the suspected source of a ~430 ms
home cost. Not shipped, per the rule that unmeasured-benefit changes do not
ship. `lib/media/viewportObserver.ts` was removed.

### F2, Fraunces italic preload — **withdrawn, my error**
The audit proposed `preload: false` for −45.7 KB/route, claiming italic was used
"in exactly two places". **Wrong.** The grep covered `fontStyle: "italic"` and
missed that `<em>` is italic by default: `em.silver` appears **40×** in headings
site-wide, including above the fold on `/`. Shipping it would have traded
45.7 KB for visible FOUT across nearly every route.

### `browserslist` modern targets — **reverted**
Total JS raw identical (1742.4 KB) before and after. Next 16/Turbopack does not
honour it for that output.

### Byte cuts that did not move lab LCP — **kept anyway**
The 176 KB reduction (posters, prefetch, hero poster) moved simulated LCP by
4 ms. It is retained because 176 KB that never crosses a metered Egyptian
connection is a real user benefit the lab metric does not capture. This is a
deliberate exception to "revert what doesn't measure", made explicit here.

---

## 5. Measurement methodology (reproducible)

Final numbers come from a direct `PerformanceObserver` harness driving
puppeteer-core over CDP:

- `Emulation.setCPUThrottlingRate` 4×
- `Network.emulateNetworkConditions`: 150 ms latency, 1638.4 kbps down
- Viewport 412×823, DPR 1.75, cold profile per run
- 5 runs per route, medians reported

Three rig defects invalidated earlier results and were fixed:

1. **Cross-session drift.** Sequential before/after runs hours apart differed by
   ~600 ms on byte-identical pages. Only matched-session interleaved A/B is
   trustworthy here.
2. **Leaked Chrome processes.** `chrome-launcher`'s kill left renderer children
   alive; 77 accumulated, consuming 6.4 GB, eventually crashing a build with
   `JavaScript heap out of memory`. Because the leak grew over time, whichever
   arm ran last was penalised — which produced a confident "no benefit" verdict
   that was an artifact. Fixed by reaping only Lighthouse's own instances.
3. **Concurrent runs.** Stopping a background task killed the output pipe but
   not the script; three copies of the A/B ran simultaneously against one repo
   and port, each `git checkout`-ing the other's files. Fixed with a lockfile.

---

## 6. Found, not done

| Item | Why |
| --- | --- |
| **Replace the accidental paint-flush script** | `/` depends on an inert inline script for ~470 ms. Works, but rests on browser internals. Deserves an intentional mechanism. |
| **`'use client'` boundary refactor** | 5 below-fold sections are client components. Measured ceiling ~400–800 ms of main-thread work; the shared-observer experiment suggests LCP would not follow. Not attempted. |
| **`old photo.png` (2.36 MB)** | No exact-filename reference, but its stem collides with the service name `"Old Photo"`. Probably dead; not enough to delete on. |
| **11 unnecessary exports / 20 type-only exports** | Zero runtime bytes. Deleting the former would break them (used in-module). |
| **Production / edge measurement** | No production URL supplied. TTFB and Cloudflare behaviour for Egypt and Iraq remain unmeasured. |
| **Authenticated route** | No Firebase credentials in the environment. |
| **Real video cost on scroll** | Lighthouse fetches ~1 KB of video; a human scrolling `/` pulls far more. Likely the largest real-world number on the site. |
| **Only 2 routes measured at the end** | `/pricing`, the tool page and `/legal/privacy` were measured under simulation only; they have no `.hero-animate` or above-fold `ScrollReveal`, so they are expected to resemble `/`. Unverified. |

### Bug noted, not fixed
`LOCALE_COOKIE` was deleted as unreferenced, but the literal `"snap-locale"`
remains hardcoded in `LOCALE_BOOTSTRAP` in `app/layout.tsx`, duplicating
`LOCALE_STORAGE_KEY`. Two sources of truth for one key.

---

## 7. Budgets and CI

| Metric | Ceiling | Current |
| --- | --- | --- |
| JS transferred per route | 250 KB | ~227 KB |
| Fonts per route | 160 KB | 151 KB |
| Total transfer, marketing routes | 700 KB | ~600 KB |
| LCP (applied throttling, mobile) | 2500 ms | `/` 1116 ms · `/learn` 1672 ms |
| CLS | 0.05 | 0.000 |

Enforcement, learned the hard way:

1. **Byte budgets are the blocking check.** Deterministic, no browser needed.
2. **LCP advisory only, and never from Lantern simulation** — it disagreed with
   applied throttling by 2.6 s on `/`.
3. **One run at a time** (lockfile or CI concurrency group).
4. **Reap browser processes** between runs.
5. **Never compare across sessions.** Interleave arms in one job.

---

## 8. Plain language

A shopper in Cairo on a mid-range Android, on a slow connection, opening the
site cold:

- **The Learn page went from 4.1 seconds to 1.7 seconds** before its headline
  appears. That page was the real problem: the heading was fully downloaded and
  sitting in the HTML, but deliberately held invisible until the JavaScript
  finished loading. It no longer waits.
- **The home page was already fast** — about 1.1 seconds — and still is. Much
  of this engagement was spent chasing a number that turned out to be a
  simulation artifact rather than something a real user experienced.
- They download meaningfully less: card imagery is 42–45 % smaller, the hero
  poster is a third of its old size, and the site no longer prefetches a stack
  of pages nobody asked for.
- Nothing looks different in a way anyone would notice. The hero and Learn
  headings now slide into place without fading, everything else animates as
  before, and the page still does not shift while loading (CLS 0.000).

Both measured routes are now inside the 2500 ms target.
