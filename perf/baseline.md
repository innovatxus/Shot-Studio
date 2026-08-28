# Performance baseline — ShotStudio

**Measured:** 2026-08-28 · **Branch:** `perf/audit-2026-08` · **Commit base:** `7894375` **plus uncommitted working-tree changes** (see caveat 1).

All numbers below were produced by Lighthouse against a local production build. Nothing here is estimated.

---

## 1. Conditions (reproducible)

| Setting | Value |
| --- | --- |
| Framework | Next.js 16.2.6 (Turbopack), React 19.2.4, App Router |
| Build | `npm run build` (exit 0, TypeScript clean) |
| Server | `npm run start -- -p 3123` (Node, production mode) |
| Tool | Lighthouse 12.x via Node API + `chrome-launcher` |
| Browser | Chrome (system install), `--headless=new` |
| Form factor | Mobile, 412×823, DPR 1.75 |
| Throttling | `simulate`: 150 ms RTT, 1638.4 kbps down, **4× CPU slowdown** (= Slow 4G / mid-range Android) |
| Cache | Cold on every run (`disableStorageReset: false`) |
| Runs | **3 per route, median reported** |

Commands:

```bash
npm run build
npm run start -- -p 3123
# harness: scratchpad/perf-tools/run-lh.mjs
RUNS=3 LABEL=baseline OUT_DIR=./results node run-lh.mjs
```

The harness and raw Lighthouse JSON live in the session scratchpad
(`scratchpad/perf-tools/`). They are outside the repo so `package.json` stays
untouched; copy them in if these numbers need to be reproducible in CI.

---

## 2. Baseline — median of 3 runs

Byte columns are **transferred** (compressed) bytes, not raw.

| Route | LCP | CLS | TBT | FCP | Speed Index | Total KB | Reqs | JS KB | Img KB | Font KB | CSS KB | HTML KB | Perf score |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` (home) | **5285 ms** | 0 | 48 ms | 1217 ms | 2247 ms | 777 | 44 | 227 | 271 | 151 | 12.5 | 67 | 80 |
| `/pricing` | **3485 ms** | 0 | 22 ms | 908 ms | 908 ms | 545 | 36 | 235 | 98 | 136 | 12.5 | 14 | 91 |
| `/edit/fashion/ghost-mannequin` (tool) | **3772 ms** | 0 | 26 ms | 910 ms | 910 ms | 551 | 36 | 239 | 98 | 136 | 12.5 | 15 | 89 |
| `/legal/privacy` | **3563 ms** | 0 | 128 ms | 1068 ms | 1068 ms | 569 | 36 | 227 | 98 | 151 | 12.5 | 31 | 91 |
| `/learn` | **5061 ms** | 0 | 223 ms | 977 ms | 977 ms | 670 | 44 | 249 | 169 | 136 | 12.5 | 37 | 78 |

Supporting numbers (median):

| Route | Main-thread work | JS bootup | TTFB (local) |
| --- | --- | --- | --- |
| `/` | 1892 ms | 496 ms | 7 ms |
| `/pricing` | 954 ms | 330 ms | 4 ms |
| tool | 1107 ms | 362 ms | 5 ms |
| `/legal/privacy` | 1442 ms | 422 ms | 5 ms |
| `/learn` | 1942 ms | 497 ms | 6 ms |

---

## 3. Where the LCP time actually goes

This is the most important measurement in this document. **On every route the LCP
element is a block of text, not an image**, and almost all of its time is
*element render delay* — the element exists in the HTML but is painted late.

| Route | LCP element | TTFB | Element render delay |
| --- | --- | --- | --- |
| `/` | `p.mx-auto` — hero sub-headline | 12 ms | **766 ms** |
| `/learn` | `h1.font-fraunces` inside `div.reveal-blur` | 6 ms | **1309 ms** |
| `/legal/privacy` | first `<p>` of the article | 7 ms | 182 ms |

Cause, confirmed in source:

- `app/globals.css:617` — `.hero-animate { opacity: 0; animation: hero-rise 1.1s … forwards }`,
  with `.hero-animate-d3 { animation-delay: 0.48s }` on the home LCP element.
  The element is deliberately invisible until its animation runs.
- `app/globals.css:840` — `.reveal-blur { opacity: 0 }`. The `.in` class that makes
  it visible is added **only inside `useEffect`** (`components/ScrollReveal.tsx:33`),
  so above-the-fold content wrapped in `ScrollReveal` cannot paint until React has
  downloaded, parsed, and hydrated. That is the 1309 ms on `/learn`.

TTFB is 4–12 ms because the server is local. **TTFB here is not a real-world
number** — see caveat 2.

---

## 4. JavaScript

Built output, `.next/static`:

| Item | Value |
| --- | --- |
| Total JS on disk (raw) | 1742 KB across 29 files |
| Total CSS on disk (raw) | 51.2 KB (single file) |
| JS transferred per route | 227–249 KB |
| Largest chunk | `0lcjggmg30gc9.js` — 573 KB raw — **Firestore** |
| Second | `0uzjd-32uwdcl.js` — 127 KB raw — **Firebase Auth** |
| Largest chunk actually loaded on `/` | `10u3y4bw1ayzs.js` — 70.6 KB transferred, **26 KB unused** |

**The Firebase chunks are not fetched on any measured route.** Confirmed against
the network log — neither the 573 KB Firestore chunk nor the 127 KB Auth chunk
appears in any of the 15 runs. Code-splitting is working (see audit §"already correct").

Render-blocking: one stylesheet, `0b9hrerlo7-q6.css`, 12.5 KB — Lighthouse
estimates 156–190 ms of blocking on each route.

---

## 5. Fonts — 136–151 KB on every route

Five `woff2` files load on `/`. Mapped to families from the built CSS:

| File | Family / style | Transferred |
| --- | --- | --- |
| `3c7c6164b2587822-s.p` | **Fraunces italic**, latin, variable 100–900 | **45.7 KB** |
| `03bda585a99c6450-s.p` | Fraunces normal, latin, variable 100–900 | 36.9 KB |
| `caa3a2e1cccd8315-s.p` | Geist normal, latin | 29.8 KB |
| `797e433ab948586e-s.p` | Geist Mono, latin | 23.7 KB |
| `9f3a8f528b429e0d-s.0p` | Syne 700, latin | 15.0 KB |

Usage counts across `app/`, `components/`, `features/`:

| Family | `var(--font-…)` references |
| --- | --- |
| Geist Mono | 127 |
| Geist Sans | 70 |
| Fraunces | 10 (plus `h1,h2,h3` globally, `app/globals.css:169`) |
| Syne | 2 |

All five faces are `font-display: swap` with a `size-adjust` local fallback —
already correct.

---

## 6. Media inventory

`public/` totals **468 MB**.

| Type | Files | Size |
| --- | --- | --- |
| MP4 | 55 | 362.7 MB |
| PNG | 49 | 87.6 MB |
| WebM | 46 | 15.3 MB |
| JPG | 40 | 1.3 MB |
| SVG | 5 | 5 B (1-byte stubs) |

**`public/assets/video/educationals/` alone is ~345 MB** (9 MP4 + 9 JPG) and is
referenced nowhere in source — see audit §5.

Video essentially does not load during a Lighthouse run: `mediaBytes` was 1.3 KB
on `/` and 0 elsewhere. The lazy-load + admission-queue machinery
(`lib/media/videoScheduler.ts`) holds clips back. **This means these numbers do
not capture real video cost during a human scroll** — see caveat 3.

---

## 7. Caching and delivery — verified by response headers

| Path | `Cache-Control` | Verdict |
| --- | --- | --- |
| `/_next/static/**` | `public, max-age=31536000, immutable` | correct |
| `/assets/video/**` | `public, max-age=31536000, immutable` | correct |
| `/_next/image` | `public, max-age=2592000, must-revalidate` + `Vary: Accept` | correct |
| `/pricing` (HTML) | `s-maxage=31536000` | correct |

`/_next/image` negotiates correctly: the same source PNG returns **98 KB as
`image/png`** with no `Accept` header and **27 KB as `image/avif`** with a modern
one. AVIF/WebP conversion is working.

---

## 8. Caveats — read these before trusting any number above

1. **The working tree is dirty.** The baseline was measured on commit `7894375`
   *plus* ~98 uncommitted modified/untracked files, including a substantial
   in-flight performance pass (`components/DeferredSection.tsx`,
   `lib/media/policy.ts`, `lib/media/videoScheduler.ts`, rewritten `LazyVideo`
   and `HeroVideo`, re-encoded video assets, `scripts/optimize-*.mjs`). These
   numbers therefore describe **the code as it stands today, not what is
   deployed**. I did not measure `7894375` alone, because doing so means
   stashing or committing someone else's uncommitted work and I will not risk
   that without being asked. See audit §0.

2. **TTFB is not measurable here.** 4–12 ms is a loopback figure. The real
   audience is in Egypt and Iraq behind Vercel + Cloudflare; their TTFB is
   dominated by edge distance and cache-hit ratio, neither of which exists
   locally. No production URL was supplied, so I could not measure it. Any TTFB
   or CDN claim in this engagement is explicitly out of scope until a
   production URL is available.

3. **Video cost is under-measured.** Lighthouse loads the page and stops; the
   admission queue means almost no video bytes are fetched. A real user
   scrolling the home page will pull far more. Quantifying that needs a scripted
   scroll trace, which I have not run.

4. **No authenticated route was measured.** There is no `.env` file, so
   `isFirebaseConfigured` is `false` and `RequireAuth` never reaches a
   signed-in state. The tool route was measured in its signed-out form. An
   authenticated baseline requires Firebase credentials.

5. **Lab, not field.** These are simulated-throttle lab numbers. INP is not
   measurable in a lab run; **TBT is reported as its proxy**, as agreed.
