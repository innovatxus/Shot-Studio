/**
 * Re-encodes every clip under `public/assets/video/<class>/` down to the
 * per-section budget in `media-config.mjs`, and guarantees each clip has the
 * full set of siblings the player expects: an H.264 MP4, a VP9 WebM and a
 * poster JPG.
 *
 * Why all three: `LazyVideo`/`HeroVideo` list `<source>` WebM-first with an
 * MP4 fallback. A missing MP4 sibling is a 404 plus a dead card on every
 * browser without VP9-in-WebM; a missing poster is a blank well while the
 * clip buffers.
 *
 * The encoder is size-driven rather than quality-driven: it encodes, measures,
 * and retries at a lower quality until the output is inside budget, so the
 * budgets in the skill file are enforced by the tool instead of by review.
 *
 * Usage:
 *   node scripts/optimize-video.mjs            # encode everything out of budget
 *   node scripts/optimize-video.mjs --audit    # report only, write nothing
 *   node scripts/optimize-video.mjs --force    # re-encode even if in budget
 *   node scripts/optimize-video.mjs --only tools-videos
 */
import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";
import { VIDEO_CLASSES } from "./media-config.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const VIDEO_ROOT = path.join(ROOT, "public", "assets", "video");
const TMP = path.join(ROOT, ".media-tmp");

const args = process.argv.slice(2);
const AUDIT = args.includes("--audit");
const FORCE = args.includes("--force");
const ONLY = args.includes("--only") ? args[args.indexOf("--only") + 1] : null;

const kb = (p) => (existsSync(p) ? Math.round(statSync(p).size / 1024) : 0);

/** Blocking sleep — this script is deliberately serial, and the retry below
 *  needs to actually wait for memory pressure to pass. */
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function ffmpeg(cliArgs) {
  const argv = ["-hide_banner", "-loglevel", "error", "-y", ...cliArgs];
  for (let attempt = 0; ; attempt += 1) {
    try {
      return execFileSync(ffmpegPath, argv, {
        stdio: ["ignore", "pipe", "pipe"],
        maxBuffer: 1 << 26,
      });
    } catch (err) {
      // x264 and libvpx allocate their frame buffers up front and simply fail
      // if the machine is momentarily short of memory — which it will be,
      // running alongside a dev server and a browser. That is a transient
      // condition, not a bad input, so back off and try the same encode again.
      const message = String(err.stderr ?? err.message ?? "");
      const isMemory = /malloc|Memory allocation|Cannot allocate/i.test(message);
      if (!isMemory || attempt >= 2) throw err;
      sleep(4000 * (attempt + 1));
    }
  }
}

/** Reads width/height/duration by parsing the stream banner ffmpeg prints on
 *  stderr — ffmpeg-static does not ship a separate ffprobe binary. */
function probe(file) {
  let out = "";
  try {
    execFileSync(ffmpegPath, ["-hide_banner", "-i", file], {
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (err) {
    out = String(err.stderr ?? "");
  }
  const dim = out.match(/,\s(\d{2,5})x(\d{2,5})/);
  const dur = out.match(/Duration:\s(\d+):(\d+):([\d.]+)/);
  if (!dim) return null;
  return {
    width: Number(dim[1]),
    height: Number(dim[2]),
    duration: dur
      ? Number(dur[1]) * 3600 + Number(dur[2]) * 60 + Number(dur[3])
      : 8,
  };
}

/** Longest edge clamped to `maxDim`, both edges forced even (yuv420p needs it). */
function scaleFilter(meta, maxDim) {
  const ratio = Math.min(1, maxDim / Math.max(meta.width, meta.height));
  const w = Math.max(2, Math.round((meta.width * ratio) / 2) * 2);
  const h = Math.max(2, Math.round((meta.height * ratio) / 2) * 2);
  return { w, h, filter: `scale=${w}:${h}:flags=lanczos` };
}

/**
 * Bitrate the clip may average and still land inside its byte budget, with
 * ~8% held back for container overhead. Driving both encoders from this rather
 * than from quality alone is what makes a single attempt land in budget
 * instead of walking a quality ladder.
 */
function targetKbps(meta, budgetKb) {
  return Math.max(120, Math.round((budgetKb * 8 * 0.92) / Math.max(1, meta.duration)));
}

function encodeMp4(src, dest, meta, maxDim, budgetKb, crf) {
  const rate = targetKbps(meta, budgetKb);
  ffmpeg([
    "-i", src,
    "-an",
    "-c:v", "libx264",
    "-profile:v", "high",
    "-pix_fmt", "yuv420p",
    "-vf", scaleFilter(meta, maxDim).filter,
    // `medium` + a bounded thread count keeps peak RSS low enough to survive
    // a workstation that is also running a dev server and a browser; `slow`
    // with 20 frame threads reliably hit x264 malloc failures here.
    "-preset", "medium",
    "-threads", "2",
    // CRF sets the quality floor; the VBV cap stops complex clips from
    // blowing past the budget on the sections where every card autoplays.
    "-crf", String(crf),
    "-maxrate", `${Math.round(rate * 1.05)}k`,
    "-bufsize", `${rate * 2}k`,
    "-g", "48",
    "-movflags", "+faststart",
    dest,
  ]);
}

function encodeWebm(src, dest, meta, maxDim, budgetKb, crf) {
  // VP9 constrained-quality mode: -crf with a non-zero -b:v means "this
  // quality, but never average more than this bitrate".
  ffmpeg([
    "-i", src,
    "-an",
    "-c:v", "libvpx-vp9",
    "-pix_fmt", "yuv420p",
    "-vf", scaleFilter(meta, maxDim).filter,
    "-crf", String(crf),
    "-b:v", `${targetKbps(meta, budgetKb)}k`,
    "-g", "48",
    "-row-mt", "1",
    "-threads", "2",
    "-deadline", "good",
    "-cpu-used", "3",
    dest,
  ]);
}

function encodePoster(src, dest, meta, maxDim, quality) {
  ffmpeg([
    "-ss", "0.4",
    "-i", src,
    "-frames:v", "1",
    "-vf", scaleFilter(meta, maxDim).filter,
    "-q:v", String(quality),
    dest,
  ]);
}

/** Encodes down an escalating quality ladder until the result fits the budget.
 *  The last rung is kept even if it overshoots, and flagged in the report. */
function encodeToBudget(encode, src, dest, meta, maxDim, budgetKb, ladder) {
  mkdirSync(TMP, { recursive: true });
  const tmp = path.join(TMP, `out-${path.basename(dest)}`);
  for (const crf of ladder) {
    encode(src, tmp, meta, maxDim, budgetKb, crf);
    const size = kb(tmp);
    const isLastRung = crf === ladder[ladder.length - 1];
    if (size <= budgetKb || isLastRung) {
      renameSync(tmp, dest);
      return { size, crf, withinBudget: size <= budgetKb };
    }
    rmSync(tmp, { force: true });
  }
  return { size: 0, crf: 0, withinBudget: false };
}

// The rate cap does most of the work; these rungs only catch clips whose
// content is complex enough that CRF alone would still overshoot.
const MP4_LADDER = [28, 32, 36];
const WEBM_LADDER = [34, 38, 42];

const report = [];
let kbBefore = 0;
let kbAfter = 0;
let failures = 0;

for (const [className, cfg] of Object.entries(VIDEO_CLASSES)) {
  if (ONLY && ONLY !== className) continue;
  const dir = path.join(VIDEO_ROOT, className);
  if (!existsSync(dir)) continue;

  // Group siblings by stem so foo.mp4 / foo.webm / foo.jpg are a single job.
  const stems = [
    ...new Set(
      readdirSync(dir)
        .filter((f) => /\.(mp4|webm)$/i.test(f))
        .map((f) => f.replace(/\.(mp4|webm)$/i, "")),
    ),
  ].sort();

  for (const stem of stems) {
    const mp4 = path.join(dir, `${stem}.mp4`);
    const webm = path.join(dir, `${stem}.webm`);
    const jpg = path.join(dir, `${stem}.jpg`);

    // Prefer the MP4 as the encode source — generally the higher-bitrate
    // master. Fall back to the WebM for stems that only ever shipped one.
    const source =
      existsSync(mp4) && kb(mp4) >= kb(webm)
        ? mp4
        : existsSync(webm)
          ? webm
          : mp4;
    const meta = probe(source);
    if (!meta) {
      report.push({ className, stem, note: "UNREADABLE — skipped" });
      continue;
    }

    const before = kb(mp4) + kb(webm);
    kbBefore += before;

    const mp4Over = !existsSync(mp4) || kb(mp4) > cfg.budgetKb;
    const webmOver =
      !existsSync(webm) ||
      kb(webm) > cfg.budgetKb ||
      // Also out of spec if VP9 lost to H.264 — see the webmBudget note below.
      (existsSync(mp4) && kb(webm) > kb(mp4) * 0.9);
    const posterMissing = cfg.poster && !existsSync(jpg);

    if (!FORCE && !mp4Over && !webmOver && !posterMissing) {
      kbAfter += before;
      report.push({ className, stem, before, after: before, note: "in budget" });
      continue;
    }

    if (AUDIT) {
      report.push({
        className,
        stem,
        before,
        after: 0,
        note: [
          !existsSync(mp4)
            ? "MP4 MISSING"
            : mp4Over
              ? `mp4 ${kb(mp4)}KB over`
              : null,
          !existsSync(webm)
            ? "WEBM MISSING"
            : webmOver
              ? `webm ${kb(webm)}KB over`
              : null,
          posterMissing ? "POSTER MISSING" : null,
        ]
          .filter(Boolean)
          .join(" · "),
      });
      continue;
    }

    // Copy the chosen source aside first: encoding a file in place onto itself
    // would truncate the input mid-read.
    mkdirSync(TMP, { recursive: true });
    const master = path.join(TMP, `master-${stem}${path.extname(source)}`);

    // One clip failing to encode must not cost the whole run — the source
    // files are left untouched and the failure is surfaced in the report,
    // so a re-run picks up exactly what is still out of budget.
    try {
      ffmpeg(["-i", source, "-an", "-c:v", "copy", master]);

      const m =
        FORCE || mp4Over
          ? encodeToBudget(encodeMp4, master, mp4, meta, cfg.maxDim, cfg.budgetKb, MP4_LADDER)
          : { size: kb(mp4), withinBudget: true };

      // The players list the WebM <source> first, so it is the file most
      // browsers actually download — it has to be the smaller of the pair or
      // the MP4 fallback would have been the better default all along. VP9
      // only reliably beats x264 at these card sizes when it is asked to.
      const webmBudget = Math.min(cfg.budgetKb, Math.round(m.size * 0.9));
      const w =
        FORCE || webmOver || kb(webm) > webmBudget
          ? encodeToBudget(encodeWebm, master, webm, meta, cfg.maxDim, webmBudget, WEBM_LADDER)
          : { size: kb(webm), withinBudget: true };
      if (cfg.poster && (posterMissing || FORCE)) {
        encodePoster(master, jpg, meta, cfg.maxDim, cfg.posterQ);
      }

      const after = m.size + w.size;
      kbAfter += after;
      report.push({
        className,
        stem,
        before,
        after,
        note:
          `${scaleFilter(meta, cfg.maxDim).w}px · mp4 ${m.size}KB · webm ${w.size}KB` +
          (!m.withinBudget || !w.withinBudget ? " · STILL OVER BUDGET" : ""),
      });
    } catch (err) {
      failures += 1;
      kbAfter += before;
      const detail = String(err.stderr ?? err.message ?? err)
        .split("\n")
        .find((line) => line.trim()) ?? "unknown error";
      report.push({ className, stem, note: `FAILED — ${detail.trim()}` });
    } finally {
      rmSync(master, { force: true });
    }
  }
}

rmSync(TMP, { recursive: true, force: true });

let currentClass = null;
for (const row of report) {
  if (row.className !== currentClass) {
    currentClass = row.className;
    console.log(
      `\n── ${currentClass} (budget ${VIDEO_CLASSES[currentClass].budgetKb} KB) ──`,
    );
  }
  const delta = row.before && row.after ? ` (${row.before} → ${row.after} KB)` : "";
  console.log(`  ${row.stem.padEnd(38)} ${row.note ?? ""}${delta}`);
}

console.log(
  `\nTotal: ${(kbBefore / 1024).toFixed(1)} MB → ${(kbAfter / 1024).toFixed(1)} MB` +
    (AUDIT ? "  (audit only — nothing written)" : ""),
);
if (failures > 0) {
  console.error(`
${failures} clip(s) failed to encode — re-run to retry just those.`);
  process.exitCode = 1;
}
