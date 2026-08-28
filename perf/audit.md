# Performance audit — ShotStudio

**Date:** 2026-08-28 · **Branch:** `perf/audit-2026-08` · **Phase 1 deliverable — no code changed yet.**

Baseline table and measurement conditions: [`perf/baseline.md`](./baseline.md).

---

## 0. Blocking question before Phase 2

The working tree contains **~98 uncommitted files**, including what is clearly an
unfinished performance pass by someone else:

```
 M components/LazyVideo.tsx      M components/HeroVideo.tsx     M next.config.ts
 M app/page.tsx                  M app/layout.tsx               M components/Hero.tsx
?? components/DeferredSection.tsx  ?? lib/media/policy.ts  ?? lib/media/videoScheduler.ts
?? scripts/optimize-video.mjs      ?? scripts/optimize-images.mjs
   + ~85 re-encoded video/image assets
```

This work is good — a video admission queue, `content-visibility` section
deferral, a connection-aware media policy — but **it has never been measured**,
and my baseline necessarily includes it. That creates two problems:

- I cannot tell you what any of it bought, because there is no "before".
- "Before/after" for my own work will be measured against a tree that already
  contains unreviewed changes.

**I need a decision:**

- **(a)** Commit the WIP as-is on this branch first, then let me measure
  `7894375` vs. WIP to tell you whether that pass actually helped. Costs one
  extra measurement cycle, gives you a real verdict on work already done.
- **(b)** Treat the current tree as the baseline and move on. Faster; the WIP
  ships unverified.
- **(c)** Something else — e.g. you tell me the WIP is already trusted and
  reviewed.

I have not stashed, committed, or reverted anything. `AGENTS.md` forbids me
committing without the literal word `approved`, and I will not gamble someone
else's uncommitted work on a `git stash` without being asked.

---

## 1. Baseline summary

| Route | LCP | CLS | TBT | Total KB | JS KB | Font KB | Img KB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 5285 ms | 0 | 48 ms | 777 | 227 | 151 | 271 |
| `/pricing` | 3485 ms | 0 | 22 ms | 545 | 235 | 136 | 98 |
| tool page | 3772 ms | 0 | 26 ms | 551 | 239 | 136 | 98 |
| `/legal/privacy` | 3563 ms | 0 | 128 ms | 569 | 227 | 151 | 98 |
| `/learn` | 5061 ms | 0 | 223 ms | 670 | 249 | 136 | 169 |

Median of 3, Slow 4G + 4× CPU, mobile, cold cache.

**The headline: LCP is 3.5–5.3 s everywhere, and it is not a bytes problem.**
It is a paint-scheduling problem. Details in F1.

---

## 2. Findings, ranked by user-visible impact

### F1 — Above-the-fold text is deliberately invisible until animation or hydration completes
**Impact: highest. Est. −0.7 s to −1.3 s LCP.**

- **Routes:** `/` (766 ms render delay), `/learn` (1309 ms), and every route using
  `ScrollReveal` above the fold.
- **Evidence:**
  - Lighthouse `lcp-breakdown-insight`: TTFB 6–12 ms, *element render delay*
    766 ms / 1309 ms. The LCP element is text that is present in the HTML from
    the first byte.
  - [`app/globals.css:617`](../app/globals.css#L617) —
    `.hero-animate { opacity: 0; animation: hero-rise 1.1s … }` +
    [`:629`](../app/globals.css#L629) `.hero-animate-d3 { animation-delay: 0.48s }`.
    The home LCP element carries `hero-animate hero-animate-d3`
    ([`components/Hero.tsx:181`](../components/Hero.tsx#L181)).
  - [`app/globals.css:840`](../app/globals.css#L840) — `.reveal-blur { opacity: 0 }`.
    The `.in` class that reveals it is added **only in `useEffect`**
    ([`components/ScrollReveal.tsx:38`](../components/ScrollReveal.tsx#L38)), so
    the `/learn` `<h1>` cannot paint until React hydrates.
- **Proposed fix:** for above-the-fold instances only, let content paint
  immediately — start `ScrollReveal` in the revealed state when it is in the
  initial viewport, and cut or shorten the hero's animation-delay on the LCP
  element. Below-the-fold reveals stay exactly as they are.
- **Risk: MEDIUM — this is the one finding that touches motion design.** The
  brief says do not change behaviour; this *is* a behaviour change, and
  `snap-pro-ui`/`senior-ui-ux` govern motion. **I will not touch it without your
  explicit go-ahead.** If you'd rather not, F2–F5 are still available and
  animation-free, but LCP will stay above 3.5 s.

### F2 — Fraunces *italic* (45.7 KB) is preloaded on every route
**Impact: high. Est. −45.7 KB of high-priority bytes per route.**

- **Routes:** all.
- **Evidence:** `<link rel="preload" as="font">` for
  `3c7c6164b2587822-s.p…woff2` present in the HTML of `/`, `/pricing`, **and**
  `/legal/privacy` (verified by `curl`). It is the largest single font file on
  the site — bigger than Fraunces normal. Italic is used in exactly two places:
  [`components/Hero.tsx:171`](../components/Hero.tsx#L171) and
  [`app/globals.css:193`](../app/globals.css#L193), plus `<em>` inside headings.
  Declared at [`app/layout.tsx:33`](../app/layout.tsx#L33) via
  `style: ["normal", "italic"]`, which makes `next/font` preload both faces
  unconditionally.
- **Proposed fix:** split into two `Fraunces` instances — normal keeps
  `preload: true`, italic gets `preload: false`. Same faces, same design; the
  italic simply stops being force-fetched ahead of first paint on routes that
  may never use it. This is exactly the pattern already applied to Syne at
  [`app/layout.tsx:45`](../app/layout.tsx#L45).
- **Risk: LOW.** Where italic *is* used it swaps in marginally later. No visual
  change at rest.

### F3 — The hero poster (91.9 KB) is preloaded at high priority but is not the LCP element
**Impact: medium-high. Est. −92 KB of contention on the LCP path.**

- **Routes:** `/`.
- **Evidence:** [`components/Hero.tsx:25`](../components/Hero.tsx#L25) calls
  `preload(…, { as: "image", fetchPriority: "high" })`. It is the single largest
  resource on the page (91.9 KB). But Lighthouse reports the LCP element as the
  hero `<p>`, not the poster — the poster sits behind a `<video>` held at
  `opacity: 0` until `isVisible` flips
  ([`components/HeroVideo.tsx`](../components/HeroVideo.tsx)), so it is never an
  LCP candidate. It is therefore competing at *high* priority against the fonts
  and CSS that the real LCP element needs.
- **Proposed fix:** drop `fetchPriority: "high"` (keep the preload), and ship a
  mobile-sized poster — it is a 1920×1080 JPEG rendered on a 412 px viewport.
- **Risk: LOW-MEDIUM.** Must confirm no black flash appears before the video
  fades in. Screenshot comparison required.

### F4 — Card poster images are heavy for their display size
**Impact: medium. Est. −80 to −100 KB on `/`.**

- **Routes:** `/` (271 KB images), `/learn` (169 KB).
- **Evidence:** individual `/_next/image?…&w=384&q=75` responses of **51.2 KB,
  47.3 KB, 27.1 KB, 24.5 KB** for cards that render at ~384 px wide. These are
  below-the-fold niche cards; they download during initial load because Chrome
  widens its lazy-load threshold to ~3000 px on slow connections.
  `next.config.ts` permits only `qualities: [75]`.
- **Proposed fix:** allow a lower quality (e.g. 60) and use it for card posters
  specifically. Source PNGs are photographic, so AVIF at q60 is typically
  30–40 % smaller with no visible difference at card size.
- **Risk: LOW-MEDIUM.** Needs a side-by-side check at card size before/after.

### F5 — One render-blocking stylesheet on every route
**Impact: medium. Lighthouse estimate 156–190 ms per route.**

- **Evidence:** `render-blocking-insight` flags
  `/_next/static/chunks/0b9hrerlo7-q6.css` (12.5 KB) on `/`, `/learn`, and
  `/legal/privacy`.
- **Assessment:** 12.5 KB compressed for a whole-site Tailwind v4 sheet is
  already lean, and Next.js has no first-class critical-CSS inlining. Lighthouse's
  "estimated savings" assumes the sheet vanishes, which it cannot.
- **Proposed fix:** none worth the complexity. **Recorded as checked, not
  actioned.** Revisit only if F1–F4 land and LCP is still short of target.

### F6 — 26 KB of unused JavaScript in the main shared chunk
**Impact: low-medium.**

- **Evidence:** `unused-javascript` reports **25.9 KB unused of 69.4 KB** in
  `10u3y4bw1ayzs.js` on every route.
- **Assessment:** this is the shared React/Next runtime + framework chunk.
  "Unused" at first paint is not the same as removable, and there is no safe
  route-level split for framework code.
- **Proposed fix:** investigate only after F1–F4; likely no action. Recorded for
  completeness.

### F7 — ~349 MB of unreferenced assets in `public/`
**Impact: zero on page load. Real impact on repo size, clone time, and Vercel deploy.**

I want to be precise about this, because it is the biggest number in the audit
and the most misleading: **these files are never requested by any page, so
deleting them will not make a single route faster.** It makes the repository and
every deploy dramatically smaller. Full evidence in §5.

---

## 3. Checked and already correct

These were investigated and need no work. Several contradict the stale
`PERF_BASELINE.md` in the repo root, which was written before any measurement
was possible.

| Area | Verdict | Evidence |
| --- | --- | --- |
| **Rendering strategy** | Correct. Every page is Static or SSG; only `/api/analytics/event` and `/api/feedback` are dynamic. Marketing and legal pages are already static. | `next build` route table — 368 prerendered pages |
| **Firebase code-splitting** | Correct, and the stale doc is wrong about this. `lib/firebase/client.ts` uses type-only imports and `await import()` inside function bodies; `lib/auth/service.ts` does the same. **Neither the 573 KB Firestore chunk nor the 127 KB Auth chunk is fetched on any measured route.** | Network logs, all 15 runs |
| **CSP blocking Firebase** | Already fixed. `connect-src` now lists the Firebase and identitytoolkit origins. | `next.config.ts` |
| **781 KB logo SVG** | Does not exist. All 5 SVGs are 1-byte stubs; the logo is a 127 KB PNG served through `next/image`. | `find public -name "*.svg"` |
| **Third-party scripts** | **None.** No analytics, tag manager, chat widget, or pixel. Only a ~200-byte inline RTL bootstrap. Nothing to defer or remove. | Source grep + network logs |
| **CLS** | **0.000 on all five routes.** Explicit dimensions/aspect ratios are being used correctly. | Baseline table |
| **Image optimisation** | Working. Same source returns 98 KB PNG without `Accept`, **27 KB AVIF** with it, and sends `Vary: Accept` — which is what keeps Cloudflare from poisoning the cache. | `curl -I` on `/_next/image` |
| **Cache headers** | Correct. `/_next/static` and `/assets/video` are `max-age=31536000, immutable`; HTML is `s-maxage=31536000`. | Response headers |
| **Raw `<img>` tags** | Only 4, all justified: two in `EditorCanvas` (user-supplied blob URLs), one in `FeedbackPanelContent`, one in `opengraph-image` (build-time OG generation). None on a measured route. | Source grep |
| **Font loading** | `font-display: swap` + `size-adjust` local fallbacks on all faces; Syne already `preload: false`. Only the italic preload (F2) is wrong. | Built CSS |
| **`.webm`/`.mp4` fallback** | Correct and deliberate — `LazyVideo` derives the WebM sibling at runtime. | `LazyVideo.tsx` |
| **Arabic font subsetting** | Not applicable **yet** — there is an RTL/`ar` locale path (`LocaleProvider`, `LOCALE_BOOTSTRAP`) but no Arabic webfont is loaded; Arabic currently falls back to system fonts. Flagged for when one is added, since Arabic faces are large. | `app/layout.tsx`, built CSS |

---

## 4. Duplicated code — assessed, nothing to consolidate

The brief asked for duplicated code consolidated into reusable components. I
looked and **I am not proposing any consolidation**, because I did not find
genuine duplicates — I found repetition that is already correctly factored:

- `LazyVideo`, `HeroVideo`, and `DeferredSection` are each used many times and
  are already the shared abstraction.
- The `fontFamily: "var(--font-geist-mono), monospace"` inline style appears
  127 times. That is repetitive, but it is a *style token* problem, not a
  component problem; collapsing it into a CSS class is a readability refactor
  with **zero byte impact** after compression, and it would touch ~60 files. It
  is not a performance change and I would be smuggling a refactor into a perf
  pass.
- The learning, legal, and editor feature components look similar in places but
  serve different data shapes.

Per the brief — "two components that look similar but serve different purposes
should stay separate" — **recommended action: none.** Say the word if you want
the `--font-geist-mono` token cleanup as a separate, clearly-labelled
readability commit.

---

## 5. Dead code and assets

### 5a. Method

Static analysers miss dynamically-built paths, and this codebase has them — so a
plain "unused" report would have been wrong. I built a corpus of every
`.ts/.tsx/.mjs/.js/.json/.css/.md` file under `app/`, `components/`,
`features/`, `lib/`, `scripts/` plus `next.config.ts`, then matched every one of
the 190 files in `public/assets` by **exact basename first, then filename stem**.
The stem pass exists specifically to catch:

- `LazyVideo` deriving `.webm` from `.mp4` (`src.replace(/\.mp4$/i, ".webm")`)
- `servicePoster()` deriving `.jpg` from `.mp4`
  ([`features/editor/data/services.ts:298`](../features/editor/data/services.ts#L298))
- `CreativePowerSection.tsx:764` building
  `` `/assets/images/carosel-images/${t.label.toLowerCase()}.png` ``

All three were caught by the stem pass and are **correctly classified as
referenced**. A basename-only tool would have deleted them and broken the site.

> A note on rigour: my first two attempts at this used shell `grep`, which was
> silently core-dumping in this Git Bash environment and reported `hero-main-web`
> as unreferenced — it is referenced, at [`components/Hero.tsx:10`](../components/Hero.tsx#L10).
> Every figure below comes from the Node reimplementation. I did not run `knip`
> or `ts-prune` for unused *exports*; that is still open (§7).

### 5b. Safe to delete — 0 references in any form

| Size | Path | Verification |
| --- | --- | --- |
| ~345 MB | `public/assets/video/educationals/` (9 MP4 + 9 JPG) | The string `educationals` appears **once** in the codebase, as a nav *label* `{ label: "Educationals", href: "/learn" }` ([`components/Navbar.tsx:427`](../components/Navbar.tsx#L427)) — unrelated to the directory. No file in it is referenced by name or stem. |
| 1.93 MB | `public/assets/images/AIbackground.png` | 0 hits |
| 1.61 MB | `public/assets/images/jewelry snap pro.png` | 0 hits |
| 0.64 MB | `public/assets/video/ugc-videos/UGC7_compressed.{mp4,webm}` | 0 hits |

**Total: ~349 MB (74 % of `public/`).**

Note the `.mp4` files here are 24–50 MB each — 100× the size of every shipped
clip on the site. They look like unprocessed masters that were never wired up.

### 5c. Candidates — needs human confirmation, I will not touch these

| Size | Path | Why I stopped |
| --- | --- | --- |
| 2.36 MB | `public/assets/images/old photo.png` | No exact-filename reference. It only matched the stem `old photo`, which collides with the *service name* `"Old Photo"` in `services.ts`/`studio.ts`. That is a text label, not a path — so this is **probably** dead, but "probably" is not good enough to delete. |

### 5d. Deletion plan

Per the brief, deletion goes in **its own commit**, separate from any
optimisation, so it can be reverted independently. Because these are large
binaries, note that `git rm` shrinks the checkout but **not** the history — repo
size only truly drops with a history rewrite, which I am not proposing.

---

## 6. Proposed batch order for Phase 2

Ordered by impact per unit of risk. Each batch = one commit, build + typecheck
green, before/after screenshots of every touched route, and a re-measure.

| # | Batch | Expected effect | Risk |
| --- | --- | --- | --- |
| 1 | Delete unreferenced assets (§5b only) | −349 MB repo/deploy. **No route gets faster.** | Very low |
| 2 | F2 — split Fraunces italic to `preload: false` | −45.7 KB high-priority bytes on every route | Low |
| 3 | F3 — drop `fetchPriority: high` on hero poster; ship mobile-sized poster | −92 KB contention on `/` | Low-med |
| 4 | F4 — allow q=60 for card posters | −80–100 KB on `/` | Low-med |
| 5 | **F1 — above-the-fold paint (gated on your approval)** | **−0.7 to −1.3 s LCP** | Med (motion design) |

Batches 2–4 are pure byte reductions with no design change. Batch 1 is
housekeeping. **Batch 5 is where the actual LCP win is, and it is the one I
cannot do without you agreeing to a motion change.**

Honest expectation: **batches 1–4 alone will barely move LCP.** LCP is currently
gated on paint scheduling, not download — shaving 130 KB off a page whose LCP
element is text that refuses to paint for 766 ms will show up mostly in Speed
Index and in bandwidth saved, not in LCP. If LCP is the goal, batch 5 is the
batch that matters.

---

## 7. Not done, and why

- **`knip` / `ts-prune` for unused exports and dependencies.** Not yet run. Worth
  doing in Phase 2; the asset analysis above covers `public/` only.
- **A real "before" for the uncommitted WIP.** Blocked on §0.
- **Production / edge measurement.** No production URL was supplied. Everything
  here is a local production build; TTFB and Cloudflare cache-hit behaviour for
  Egypt and Iraq are unmeasured and unmeasurable from here.
- **Authenticated route.** No Firebase credentials in the environment.
- **Real video cost during scroll.** Lighthouse fetches almost no video bytes
  (1.3 KB on `/`). A scripted scroll trace would be needed to quantify what a
  human actually pulls, and would likely be the largest real-world number on the
  site.
- **`/_next/image` behaviour behind Cloudflare.** `Vary: Accept` is set
  correctly, but whether Cloudflare honours it in this account's config can only
  be checked against production.

---

## 8. Recommended budgets (to enforce once Phase 3 lands)

| Metric | Proposed ceiling |
| --- | --- |
| JS transferred per route | 250 KB |
| Fonts per route | 100 KB |
| Total transfer, marketing routes | 700 KB |
| Total transfer, legal routes | 450 KB |
| LCP (Slow 4G, 4× CPU) | 2500 ms |
| CLS | 0.05 (currently 0 — protect it) |

Enforcement: run the Phase 0 harness in CI against a production build and fail
the job on regression. Concrete wiring to be proposed in Phase 3.

---

## Awaiting approval

Per the brief I am stopping here. Two things I need from you:

1. **§0** — how to handle the uncommitted WIP.
2. **F1 / batch 5** — whether I may change above-the-fold entrance motion. This
   is the only real LCP lever, and it is the one thing that conflicts with "do
   not change behaviour".
