/**
 * The site's absolute base URL, used wherever a crawler needs a real address:
 * `metadataBase` in the root layout, `robots.ts` and `sitemap.ts`.
 *
 * Resolution order:
 *   1. `NEXT_PUBLIC_SITE_URL` — the explicit override. Set this once a custom
 *      domain is live and it wins everywhere.
 *   2. `VERCEL_PROJECT_PRODUCTION_URL` — supplied automatically by Vercel and
 *      equal to the project's production domain (no protocol). This is what
 *      keeps deployments correct before a custom domain exists.
 *   3. `localhost:3000` for local builds.
 *
 * The previous default was a hardcoded `https://shotstudio.ai`, repeated in
 * three files. That domain does not resolve, so production was advertising
 * unreachable URLs to every crawler: `og:image` and `twitter:image` pointed at
 * a dead host, `robots.txt` published it as `Host:` and `Sitemap:`, and every
 * `<loc>` in the sitemap used it. Falling back to the deployment's own domain
 * fails visibly (wrong-but-reachable) instead of silently (unreachable).
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
