/**
 * Per-section media budgets.
 *
 * `maxDim` is the longest edge the encode is allowed to keep. It is derived
 * from the largest on-screen box for that card type at DPR 2 — anything above
 * that is bytes the user downloads and the GPU scales back down again.
 *
 * `budgetKb` mirrors the file budgets in `.claude/skills/snap-pro-ui/SKILL.md`
 * §5. The encoder treats it as a hard ceiling and re-encodes at a lower
 * quality until the output fits.
 *
 * `poster` is only true for the sections whose component derives the poster
 * from the clip path (`src.replace(/\.mp4$/, ".jpg")`). Niche and UGC cards
 * pass their own curated poster art, so generating a sibling JPG there would
 * ship bytes nothing ever requests.
 */
export const VIDEO_CLASSES = {
  "hero-videos": { maxDim: 1280, budgetKb: 1200, posterQ: 3, poster: false },
  "niches-videos": { maxDim: 960, budgetKb: 700, posterQ: 4, poster: false },
  "carosel-videos": { maxDim: 640, budgetKb: 260, posterQ: 4, poster: true },
  "tools-videos": { maxDim: 854, budgetKb: 340, posterQ: 4, poster: true },
  "ugc-videos": { maxDim: 720, budgetKb: 620, posterQ: 4, poster: false },
};

/** Longest edge kept for still images, by directory. Photographic PNGs are
 *  re-encoded to WebP — every one of them is a photo, and PNG is simply the
 *  wrong container for that content. */
export const IMAGE_MAX_DIM = 1400;
export const IMAGE_QUALITY = 82;
