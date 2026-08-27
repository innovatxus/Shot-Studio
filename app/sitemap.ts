import type { MetadataRoute } from "next";
import {
  NICHES,
  SOCIAL_NICHES,
  STUDIO_NICHE,
  SUB_TOOLS,
  toolSlug,
} from "@/features/editor/data/niches";
import { LEGAL_PAGES, POLICY_PAGES, TRUST_PAGES } from "@/lib/legal";
import { MARKETING_PAGES } from "@/lib/legal/marketing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shotstudio.ai";

/**
 * Production sitemap.
 *
 * Rules:
 * - Legal/trust/policy pages with status "draft" are excluded until counsel signs off.
 * - Marketing stub pages with draft:true are excluded (they carry noindex meta too).
 * - /trust hub is excluded while every trust page is still draft.
 * - Editor and niche routes are always included (real, indexable content).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/templates`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/accessibility`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Non-draft marketing stub pages only.
  const marketingRoutes: MetadataRoute.Sitemap = MARKETING_PAGES.filter(
    (p) => !p.draft,
  ).map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const allNiches = [...NICHES, ...SUB_TOOLS, ...SOCIAL_NICHES, STUDIO_NICHE];

  const nicheRoutes: MetadataRoute.Sitemap = allNiches.map((n) => ({
    url: `${SITE_URL}/edit/${n.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const toolRoutes: MetadataRoute.Sitemap = allNiches.flatMap((n) =>
    n.services.map((s) => ({
      url: `${SITE_URL}/edit/${n.id}/${toolSlug(s.name)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  );

  // Only include legal/trust/policy pages that have been signed off by counsel.
  const legalRoutes: MetadataRoute.Sitemap = [
    ...LEGAL_PAGES.filter((p) => p.status === "final").map((p) => ({
      url: `${SITE_URL}/legal/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...POLICY_PAGES.filter((p) => p.status === "final").map((p) => ({
      url: `${SITE_URL}/policies/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...TRUST_PAGES.filter((p) => p.status === "final").map((p) => ({
      url: `${SITE_URL}/trust/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];

  return [
    ...staticRoutes,
    ...marketingRoutes,
    ...nicheRoutes,
    ...toolRoutes,
    ...legalRoutes,
  ];
}
