/**
 * Converts the still art under `public/assets/` from PNG to WebP and rewrites
 * every source reference to match.
 *
 * Every one of these files is a photograph or a photographic render stored in
 * a lossless format built for line art, which is why 53 images weigh 88 MB.
 * `next/image` already re-encodes them to AVIF/WebP before they reach a
 * browser, so the size never hurt the visitor directly — it hurt the deploy,
 * and it hurt whoever triggered a cold optimizer pass, because transforming a
 * 3 MB PNG is far slower than transforming a 200 KB WebP.
 *
 * Images are also capped at `IMAGE_MAX_DIM` on the long edge. The widest box
 * any of them render into is roughly 700 CSS px, so nothing above that cap is
 * ever shown at full resolution.
 *
 * Usage:
 *   node scripts/optimize-images.mjs --audit   # report only, write nothing
 *   node scripts/optimize-images.mjs           # convert and rewrite imports
 */
import {
  existsSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { IMAGE_MAX_DIM, IMAGE_QUALITY } from "./media-config.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ASSET_ROOT = path.join(ROOT, "public", "assets");
const SOURCE_DIRS = ["app", "components", "features", "lib"];

const AUDIT = process.argv.includes("--audit");
const kb = (p) => Math.round(statSync(p).size / 1024);

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const pngs = walk(ASSET_ROOT).filter((f) => /\.png$/i.test(f));

let before = 0;
let after = 0;
/** publicUrl(.png) -> publicUrl(.webp), used to rewrite source references. */
const rewrites = new Map();
const rows = [];

for (const file of pngs) {
  const sizeBefore = kb(file);
  before += sizeBefore;

  const webpPath = file.replace(/\.png$/i, ".webp");
  const publicUrl = (p) =>
    "/" + path.relative(path.join(ROOT, "public"), p).split(path.sep).join("/");

  if (AUDIT) {
    const meta = await sharp(file).metadata();
    rows.push(
      `${String(sizeBefore).padStart(5)}KB  ${meta.width}x${meta.height}` +
        `${meta.hasAlpha ? " alpha" : ""}  ${publicUrl(file)}`,
    );
    continue;
  }

  const image = sharp(file);
  const meta = await image.metadata();
  await image
    .resize({
      width: Math.min(meta.width ?? IMAGE_MAX_DIM, IMAGE_MAX_DIM),
      height: Math.min(meta.height ?? IMAGE_MAX_DIM, IMAGE_MAX_DIM),
      fit: "inside",
      withoutEnlargement: true,
    })
    // `effort: 6` is the slowest/smallest setting; this runs once, offline.
    .webp({ quality: IMAGE_QUALITY, effort: 6, alphaQuality: 100 })
    .toFile(webpPath);

  const sizeAfter = kb(webpPath);
  after += sizeAfter;
  rewrites.set(publicUrl(file), publicUrl(webpPath));
  rmSync(file);
  rows.push(
    `${String(sizeBefore).padStart(5)}KB → ${String(sizeAfter).padStart(4)}KB  ${publicUrl(webpPath)}`,
  );
}

/**
 * Paths built at runtime from a template literal cannot be matched against a
 * concrete filename, so the few that exist are rewritten by their template.
 * Keep this in step with the call sites — `--audit` will not catch a miss,
 * but a 404 on the affected card will.
 */
const TEMPLATE_REWRITES = [
  [
    "/assets/images/carosel-images/${t.label.toLowerCase()}.png",
    "/assets/images/carosel-images/${t.label.toLowerCase()}.webp",
  ],
];

// Rewrite every reference in one pass. Encoded forms matter too: several of
// these filenames contain spaces, and a few call sites URL-encode them.
let filesTouched = 0;
if (!AUDIT && rewrites.size > 0) {
  const sourceFiles = SOURCE_DIRS.flatMap((dir) =>
    walk(path.join(ROOT, dir)).filter((f) => /\.(tsx?|css)$/.test(f)),
  );

  for (const file of sourceFiles) {
    const original = readFileSync(file, "utf8");
    let next = original;
    for (const [from, to] of rewrites) {
      next = next.split(from).join(to);
      next = next.split(encodeURI(from)).join(encodeURI(to));
    }
    for (const [from, to] of TEMPLATE_REWRITES) {
      next = next.split(from).join(to);
    }
    if (next !== original) {
      writeFileSync(file, next);
      filesTouched += 1;
    }
  }
}

for (const row of rows.sort()) console.log(row);
console.log(
  `\n${pngs.length} PNG files: ${(before / 1024).toFixed(1)} MB → ${(after / 1024).toFixed(1)} MB` +
    (AUDIT
      ? "  (audit only — nothing written)"
      : `\n${filesTouched} source file(s) updated to the new paths.`),
);
