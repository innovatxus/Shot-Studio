/**
 * The service catalogue — the single source for the cards in ServicesSection
 * and the rows in the header's Tools dropdown. Both used to keep their own
 * list, which drifted: the dropdown advertised five tools that had no card.
 */
export interface ServiceCard {
  id: number;
  name: string;
  italic: string;
  cat: "cut" | "stage" | "enhance" | "format";
  catLabel: string;
  credit: string;
  desc: string;
  video?: string;
  videoZoom?: number;
  comingSoon?: boolean;
}

export const SERVICES: ServiceCard[] = [
  // ── CUT (4) ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Background",
    italic: "Remove",
    cat: "cut",
    catLabel: "CUT",
    credit: "1 cr",
    desc: "Pixel-perfect cutout, hair and fur included. Auto-detects subject in 0.4s.",
    video: "/assets/video/tools-videos/background-remove.mp4",
  },
  {
    id: 2,
    name: "Virtual",
    italic: "Modeling",
    cat: "cut",
    catLabel: "CUT",
    credit: "2 cr",
    desc: "Puts your garment on a photoreal AI model. No casting, no shoot day.",
    // Awaiting its own footage — it previously reused the ghost-mannequin clip,
    // which shows a garment with no model and misrepresents this tool. Falls
    // back to the category mark until the real clip lands.
  },
  {
    id: 3,
    name: "Object",
    italic: "Erase",
    cat: "cut",
    catLabel: "CUT",
    credit: "1 cr",
    desc: "Tap any unwanted element — props, hands, watermarks. Gone in one stroke.",
    video: "/assets/video/tools-videos/object-erase.mp4",
  },
  {
    id: 31,
    name: "Ghost",
    italic: "Mannequin",
    cat: "cut",
    catLabel: "CUT",
    credit: "2 cr",
    desc: "Auto-fills the inside of garments. Perfect for apparel listings.",
    video: "/assets/video/tools-videos/ghost-mannequin.mp4",
  },
  // ── STAGE (11) ───────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Auto",
    italic: "Backdrop",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Eight studio scenes. Light intensity and shadow depth in two sliders.",
    video: "/assets/video/tools-videos/auto-backdrop.mp4",
    // Source clip has ~280px of pillarboxing baked into each side of a
    // 1280px-wide frame (content is only the center 719px). Zoom past it.
    videoZoom: 1.4,
  },
  {
    id: 5,
    name: "Room",
    italic: "Stage",
    cat: "stage",
    catLabel: "STAGE",
    credit: "3 cr",
    desc: "Place furniture in a styled room — kitchen, living, bedroom, patio.",
    video: "/assets/video/tools-videos/room-stage.mp4",
  },
  {
    id: 6,
    name: "Cast",
    italic: "Shadow",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Realistic ground or wall shadows. Direction, blur, and opacity controls.",
    video: "/assets/video/tools-videos/cast-shadow.mp4",
  },
  {
    id: 7,
    name: "Glass",
    italic: "Reflection",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Adds a tabletop mirror reflection — perfect for bottles, jars, watches.",
    video: "/assets/video/tools-videos/mirror-reflection.mp4",
  },
  {
    id: 8,
    name: "Sky",
    italic: "Replace",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Swap gray skies for golden hour, blue noon, or stormy drama. Auto-matches subject lighting.",
    video: "/assets/video/tools-videos/sky-replace.mp4",
  },
  {
    id: 9,
    name: "Room",
    italic: "Declutter",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Remove furniture and clutter from room photos. Clean canvas for real-estate virtual staging.",
    video: "/assets/video/tools-videos/room-declutter.mp4",
  },
  {
    id: 10,
    name: "Showroom",
    italic: "Gen",
    cat: "stage",
    catLabel: "STAGE",
    credit: "3 cr",
    desc: "Photorealistic automotive showroom scenes. Floor reflections and directional lighting included.",
    video: "/assets/video/tools-videos/showroom-gen.mp4",
  },
  {
    id: 21,
    name: "Perspective",
    italic: "Fix",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Correct wide-angle distortion and converging verticals. Furniture, real estate, architecture.",
    video: "/assets/video/tools-videos/perspective-fix.mp4",
  },
  {
    id: 22,
    name: "Studio",
    italic: "White",
    cat: "stage",
    catLabel: "STAGE",
    credit: "1 cr",
    desc: "Pure white studio isolation with zero shadow bleed. Required for Amazon, eBay, and packaging.",
    video: "/assets/video/tools-videos/studio-white.mp4",
  },
  {
    id: 23,
    name: "Twilight",
    italic: "Convert",
    cat: "stage",
    catLabel: "STAGE",
    credit: "3 cr",
    desc: "Day-to-dusk sky swap with auto-matched interior warm lighting. Real estate hero shots.",
    video: "/assets/video/tools-videos/twilight-convert.mp4",
  },
  {
    id: 24,
    name: "Box",
    italic: "Mockup",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Generate 3D packaging mockups from flat artwork. Lid-open, angled, and flat views.",
    video: "/assets/video/tools-videos/box-mockup.mp4",
  },
  // ── ENHANCE (12) ─────────────────────────────────────────────────────────
  {
    id: 13,
    name: "Wrinkle",
    italic: "Smooth",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "1 cr",
    desc: "Removes garment creases without losing fabric texture.",
    video: "/assets/video/tools-videos/wrinkle-smooth.mp4",
  },
  {
    id: 14,
    name: "Reflection",
    italic: "Clean",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Removes lens glare, fingerprints, and ambient light from glossy surfaces.",
    video: "/assets/video/tools-videos/reflection-clean.mp4",
  },
  {
    id: 16,
    name: "Crowd",
    italic: "Blur",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Selectively blur or remove background people. Faces preserved on subjects you mark.",
    video: "/assets/video/tools-videos/crowd-blur.mp4",
  },
  {
    id: 17,
    name: "Light &",
    italic: "Mood",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "3 cr",
    desc: "Cinematic lighting and atmosphere edit. Directional light, golden hour, or dramatic studio.",
    video: "/assets/video/tools-videos/light-and-mood.mp4",
  },
  {
    id: 25,
    name: "Color",
    italic: "Variants",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Generate multiple colorway versions from a single source image. Textiles, apparel, and product lines.",
    video: "/assets/video/tools-videos/color-variants.mp4",
  },
  {
    id: 27,
    name: "Old Photo",
    italic: "Restore",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "3 cr",
    desc: "Repair damaged, faded, or torn archival photos. Face recovery and color grading included.",
    video: "/assets/video/tools-videos/old-photo-restore.mp4",
  },
  // ── FORMAT (3) ───────────────────────────────────────────────────────────
  {
    id: 20,
    name: "360°",
    italic: "Spin",
    cat: "format",
    catLabel: "FORMAT",
    credit: "3 cr",
    desc: "Generate a 24-frame product spin from 6 source angles.",
    video: "/assets/video/tools-videos/360-spin.mp4",
    // Source clip has pillarboxing baked in (content is ~73% of frame width).
    // Plain cover crop falls just short of clearing it — nudge further.
    videoZoom: 1.15,
  },
  {
    id: 30,
    name: "PDF",
    italic: "Export",
    cat: "format",
    catLabel: "FORMAT",
    credit: "2 cr",
    desc: "Auto-layout product grid with SKU and price injection. One-click catalog or linesheet PDF.",
    video: "/assets/video/tools-videos/pdf-export.mp4",
  },
  // ── COMING SOON — no demo video yet ───────────────────────────────────────
  {
    id: 11,
    name: "Upscale",
    italic: "4K",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "3 cr",
    desc: "2× to 4× resolution. Detail recovery for printable catalogs and Amazon zoom.",
    video: "/assets/video/tools-videos/upscale-4k.mp4",
    comingSoon: true,
  },
  {
    id: 19,
    name: "Pattern",
    italic: "Repeat",
    cat: "format",
    catLabel: "FORMAT",
    credit: "2 cr",
    desc: "Tileable patterns from a single fabric swatch. Seam-blended automatically.",
    comingSoon: true,
  },
];

/** Stable anchor for a service card, e.g. `service-background-remove`. */
export function serviceId(svc: ServiceCard): string {
  return (
    "service-" +
    `${svc.name} ${svc.italic}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

/** Poster still for a service, or null while it is awaiting footage. */
export function servicePoster(svc: ServiceCard): string | null {
  return svc.video ? svc.video.replace(/\.mp4$/i, ".jpg") : null;
}

export const LIVE_SERVICES = SERVICES.filter((s) => !s.comingSoon);

/**
 * Rows shown in the header dropdown: the first two live services from each
 * category, so every row has a real card to jump to and the four groups stay
 * evenly represented.
 */
export const NAV_SERVICES: ServiceCard[] = (
  ["cut", "stage", "enhance", "format"] as const
).flatMap((cat) => LIVE_SERVICES.filter((s) => s.cat === cat).slice(0, 2));

export const SERVICE_ACCENT: Record<ServiceCard["cat"], string> = {
  cut: "#38BDF8",
  stage: "#A8AEB8",
  enhance: "#FFC857",
  format: "#C8B6FF",
};

const CATEGORY_COPY: Record<ServiceCard["cat"], { label: string; desc: string }> = {
  cut: { label: "Cut", desc: "Remove & isolate" },
  stage: { label: "Stage", desc: "Scene & studio" },
  enhance: { label: "Enhance", desc: "Polish & refine" },
  format: { label: "Format", desc: "Resize & export" },
};

/**
 * Category tiles for the header dropdown. Counts and artwork are derived, so
 * they track the catalogue instead of the hand-maintained figures that had
 * drifted to 5/6/4/4 against a real 4/11/5/3.
 */
export const NAV_CATEGORIES = (
  ["cut", "stage", "enhance", "format"] as const
).map((cat) => {
  const live = LIVE_SERVICES.filter((s) => s.cat === cat);
  return {
    key: cat,
    ...CATEGORY_COPY[cat],
    count: live.length,
    accent: SERVICE_ACCENT[cat],
    poster: live.map(servicePoster).find(Boolean) ?? null,
  };
});
