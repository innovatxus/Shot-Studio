/**
 * Learning service.
 *
 * UI never talks to data sources directly. Components import ONLY from this
 * file. To swap from mock data to Firebase / Supabase / REST / GraphQL,
 * replace the implementations here — the public function signatures stay
 * stable.
 *
 * All read methods are async to keep the contract identical when a real
 * network call appears later. Today they resolve synchronously from the
 * compiled-in dataset, so they're free for RSC pre-rendering.
 */

import {
  CATEGORIES,
  CERTIFICATIONS,
  FAQS,
  LEARNING_PATHS,
  LEARNING_STATS,
  RESOURCES,
  TUTORIALS,
} from "../data/learning-data";
import type {
  Certification,
  FaqItem,
  LearningPath,
  LearningStats,
  Resource,
  SearchHit,
  Tutorial,
  TutorialCategory,
  TutorialCategoryId,
} from "../types";

// ─── Internal helpers ────────────────────────────────────────────────────────

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

const indexCategoriesByCount = (
  categories: TutorialCategory[],
  tutorials: Tutorial[],
): TutorialCategory[] => {
  const counts = new Map<
    TutorialCategoryId,
    { count: number; minutes: number }
  >();
  for (const t of tutorials) {
    const prev = counts.get(t.categoryId) ?? { count: 0, minutes: 0 };
    counts.set(t.categoryId, {
      count: prev.count + 1,
      minutes: prev.minutes + t.durationMin,
    });
  }
  return categories
    .map((c) => {
      const agg = counts.get(c.id) ?? { count: 0, minutes: 0 };
      return {
        ...c,
        tutorialCount: agg.count,
        totalDurationMin: agg.minutes,
      };
    })
    .sort(byOrder);
};

// ─── Public API ──────────────────────────────────────────────────────────────

export async function getStats(): Promise<LearningStats> {
  return LEARNING_STATS;
}

export async function listCategories(): Promise<TutorialCategory[]> {
  return indexCategoriesByCount(CATEGORIES, TUTORIALS);
}

export async function listFeaturedTutorials(limit = 8): Promise<Tutorial[]> {
  return TUTORIALS.filter((t) => t.isFeatured).slice(0, limit);
}

export async function listTutorialsByCategory(
  categoryId: TutorialCategoryId,
): Promise<Tutorial[]> {
  return TUTORIALS.filter((t) => t.categoryId === categoryId);
}

export async function listLearningPaths(): Promise<LearningPath[]> {
  return LEARNING_PATHS;
}

export async function listCertifications(): Promise<Certification[]> {
  return CERTIFICATIONS;
}

export async function listResources(): Promise<Resource[]> {
  return RESOURCES;
}

export async function listFaqs(): Promise<FaqItem[]> {
  return FAQS;
}

/**
 * Local in-memory search across tutorials, paths, categories, resources, FAQs.
 * Replaceable with a real search backend (Algolia, Typesense, MeiliSearch).
 */
export function searchAll(query: string, limit = 12): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const score = (haystack: string) => {
    const h = haystack.toLowerCase();
    if (h.startsWith(q)) return 3;
    if (h.includes(` ${q}`)) return 2;
    if (h.includes(q)) return 1;
    return 0;
  };

  const hits: (SearchHit & { _score: number })[] = [];

  for (const t of TUTORIALS) {
    const s = Math.max(score(t.title), score(t.blurb));
    if (s > 0) {
      hits.push({
        _score: s + (t.isFeatured ? 0.5 : 0),
        kind: "tutorial",
        id: t.id,
        title: t.title,
        blurb: t.blurb,
        href: `/learn/tutorials/${t.slug}`,
      });
    }
  }
  for (const c of CATEGORIES) {
    const s = Math.max(score(c.name), score(c.description));
    if (s > 0) {
      hits.push({
        _score: s,
        kind: "category",
        id: c.id,
        title: c.name,
        blurb: c.description,
        href: `/learn#${c.id}`,
      });
    }
  }
  for (const p of LEARNING_PATHS) {
    const s = Math.max(score(p.name), score(p.tagline));
    if (s > 0) {
      hits.push({
        _score: s,
        kind: "path",
        id: p.id,
        title: p.name,
        blurb: p.tagline,
        href: `/learn/paths/${p.slug}`,
      });
    }
  }
  for (const r of RESOURCES) {
    const s = Math.max(score(r.title), score(r.description));
    if (s > 0) {
      hits.push({
        _score: s,
        kind: "resource",
        id: r.id,
        title: r.title,
        blurb: r.description,
        href: `/learn#resources`,
      });
    }
  }
  for (const f of FAQS) {
    const s = Math.max(score(f.question), score(f.answer));
    if (s > 0) {
      hits.push({
        _score: s,
        kind: "faq",
        id: f.id,
        title: f.question,
        blurb: f.answer,
        href: `/learn#faq`,
      });
    }
  }

  hits.sort((a, b) => b._score - a._score);
  return hits.slice(0, limit).map(({ _score: _ignored, ...rest }) => {
    void _ignored;
    return rest;
  });
}
