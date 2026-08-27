<div align="center">

  <img src="public/logo/snap-pro-logo.svg" alt="Shot Studio" width="80" />

# Shot Studio

**AI-powered product photo editing for e-commerce sellers, photographers, and
content creators.**

![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61dafb?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![Version](https://img.shields.io/badge/version-1.0.0-silver)

</div>

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Deployment](#deployment)
- [Environment configuration](#environment-configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Shot Studio is a web-based AI photo editing studio that transforms raw product
photographs into publication-ready assets. Users upload an image, select a
niche-specific tool from a curated catalogue, and receive an edited result in
seconds — no design software, no photography studio, no technical skill
required.

The primary audience is e-commerce sellers who need consistent, professional
imagery across product listings, marketplace platforms, and social media
channels. Shot Studio covers 20 commercial verticals — from fashion and jewelry
to real estate and automotive — each with a hand-tuned service catalogue. A
separate social format engine handles every major platform's export dimensions
(Facebook, Instagram, TikTok, Twitter/X, LinkedIn, Pinterest, Snapchat,
YouTube), so a single edited image can be correctly sized for any channel
without manual cropping.

What separates Shot Studio from a generic image editor is vertical specificity.
Every tool preset is named, priced, and tuned for its domain: Ghost Mannequin
for fashion, Room Stage for furniture, Twilight Convert for real estate, Sparkle
Boost for jewelry. The editor surface is fully data-driven; adding a niche or
tool in `features/editor/data/niches.ts` propagates it to the marketing page,
editor routes, and static generation with no further changes.

The application ships at version 1.0.0 as a fully rendered marketing and editor
front-end. The editor UI presents a simulated AI pipeline — progress bar,
before/after compare slider, credit cost — ready for a real inference backend to
be wired to the `onApply` handler in
`features/editor/components/EditorCanvas.tsx`. The learning center, pricing,
template gallery, and all static routes are production-ready.

---

## Features

### Niche-specific photo editor

The core editing surface lives at `features/editor/components/EditorCanvas.tsx`.
It renders a drag-and-drop upload zone, a scrollable tool rail showing every
preset for the active niche, a before/after compare slider, and an apply bar
with a per-tool credit cost indicator. The editor operates in two modes:
full-niche (all tools available) and focused (single tool, reached via
`/edit/[niche]/[tool]`). Both modes are statically generated at build time for
every niche and tool in the catalogue.

### 20 primary industry niches

Defined in `features/editor/data/niches.ts`, the primary niche list covers
Fashion, Textile, Real Estate, Electronics, Beauty, Antiques, Furniture,
Automotive, Jewelry, Products, Events, Food & Drink, E-commerce, Hotels,
Weddings, Construction, Creators, Cafés, Travel, and Editorial. Each niche ships
with 2–9 presets tailored to that vertical.

### 16 sub-tool categories

`features/editor/data/niches.ts` also defines `SUB_TOOLS`: a second set of
purpose-built niches covering personal use cases (Graduations, Hajj & Umrah,
Face Recognition, Gym Staging) and business documents (Digital Brochure, Brand
Kit, Product Catalogues, Business Cards, Logo Creation). All sub-tools resolve
through the same `/edit/[niche]` route and `getNicheBySlug` lookup as primary
niches.

### Social platform size presets

`features/editor/data/social.ts` defines export size presets for Facebook,
Instagram, TikTok, Twitter/X, LinkedIn, Pinterest, Snapchat, and YouTube. Each
platform's sizes are exposed as a `Niche`-shaped editor surface under
`/edit/social-[platform]`, so the existing editor UI handles format delivery
without additional code.

### Unified studio tool catalogue

`features/editor/data/studio.ts` defines 17 cross-niche tools grouped into four
categories: cut (Background Remove, Ghost Mannequin, Object Erase), stage (Auto
Backdrop, Room Stage, Cast Shadow, Glass Reflection, Sky Replace, Room
Declutter, Showroom Gen, Perspective Fix, Studio White, Twilight Convert),
enhance (HDR Balance, Upscale 4K, Macro Sharpen, Color Match), and format
(Marketplace Resize). The studio niche is accessible at `/edit/studio`.

### Learning center

A full learning hub lives at `/learn` (`app/learn/page.tsx`) backed by the
`features/learning/` module. It includes a featured tutorial carousel,
categorized tutorials with difficulty levels, learning paths, downloadable
resources, certification cards, FAQ accordion, progress tracker, and a help
center. User progress (started, completed, and saved tutorials; watch ratio;
streaks; badges) persists to `localStorage` via a custom `useSyncExternalStore`
hook in `features/learning/hooks/useLearningProgress.ts`.

### Template gallery

`app/templates/page.tsx` presents a gallery across 12 industries. Each industry
shows a collage of source images alongside four finished template cards, giving
prospective customers a before/after view of output quality at scale.

### Subscription pricing

Four tiers are defined in `components/Pricing.tsx`: Free ($0/mo, 1 image per
day), Starter ($6.99/mo, 100 images per month), Mid ($25/mo, up to 350 images
per month), and Ultra ($75/mo, up to 1,250 images per month). Paid allowances
reset each monthly billing cycle; the Free allowance resets daily.

### Scroll-reveal and motion system

`components/ScrollReveal.tsx` provides an `IntersectionObserver`-based reveal
component with four animation variants (fade, blur, slide, scale) and
configurable stagger. All animations respect `prefers-reduced-motion` via a
global CSS reset and per-component guards. Only composited properties
(`transform`, `opacity`) are animated throughout the codebase.

### Marketing landing page

`app/page.tsx` assembles 13 sections: Hero with fullscreen video background,
NichesSection, CreativePowerSection, SubCategoriesSection, ServicesSection,
PhoneShowcase, BeforeAfterGallery, SocialSizes, Pricing, Integrations,
AIFeaturesSection, BentoSection, and FinalCTA. Each section is a server
component where possible; client interactivity is scoped to leaf components.

---

## Tech stack

| Category       | Technology           | Version |
| -------------- | -------------------- | ------- |
| Framework      | Next.js              | 16.2.6  |
| Language       | TypeScript           | 5.x     |
| UI library     | React                | 19.2.4  |
| Styling        | Tailwind CSS         | 4.x     |
| PostCSS plugin | @tailwindcss/postcss | 4.x     |
| Fonts          | next/font/google     | bundled |
| Linting        | ESLint               | 9.x     |
| ESLint config  | eslint-config-next   | 16.2.6  |
| Type defs      | @types/node          | 20.x    |
| Type defs      | @types/react         | 19.x    |
| Type defs      | @types/react-dom     | 19.x    |

---

## Project structure

```
shot-studio/
├── app/                         # Next.js App Router pages and layouts
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── edit/
│   │   └── [niche]/
│   │       ├── page.tsx         # Niche-level editor
│   │       └── [tool]/
│   │           └── page.tsx     # Single-tool focused editor
│   ├── learn/
│   │   └── page.tsx             # Learning center
│   ├── templates/
│   │   └── page.tsx             # Template gallery
│   ├── globals.css              # Design tokens, keyframes, utility classes
│   ├── icon.svg                 # App icon (all sizes)
│   ├── layout.tsx               # Root layout: fonts, metadata, skip link
│   └── page.tsx                 # Marketing landing page
├── components/                  # Shared UI components
│   ├── AIFeaturesSection.tsx
│   ├── BeforeAfterGallery.tsx
│   ├── BentoSection.tsx
│   ├── CreativePowerSection.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HeroVideo.tsx
│   ├── Integrations.tsx
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── NichesSection.tsx
│   ├── PhoneShowcase.tsx
│   ├── Pricing.tsx
│   ├── ScrollFloater.tsx
│   ├── ScrollReveal.tsx
│   ├── ServicesSection.tsx
│   ├── SocialSizes.tsx
│   └── SubCategoriesSection.tsx
├── features/                    # Feature modules
│   ├── editor/
│   │   ├── components/
│   │   │   └── EditorCanvas.tsx # Upload, tool rail, compare slider, apply bar
│   │   └── data/
│   │       ├── niches.ts        # All niches, sub-tools, slug helpers
│   │       ├── social.ts        # Social platform size presets
│   │       └── studio.ts        # Unified 17-tool studio catalogue
│   └── learning/
│       ├── components/          # Carousel, accordion, cards, progress UI
│       ├── data/
│       │   └── learning-data.ts # Static tutorial and course content
│       ├── hooks/
│       │   └── useLearningProgress.ts  # localStorage-backed progress store
│       ├── services/
│       │   └── learning-service.ts     # Data access layer
│       └── types/
│           └── index.ts         # Tutorial, Course, Resource, Progress types
├── public/                      # Static assets served at /
│   ├── assets/video/            # Demo and niche card videos
│   ├── logo/
│   │   └── snap-pro-logo.svg
│   └── *.svg                    # UI icons
├── AGENTS.md                    # AI agent workflow rules
├── CLAUDE.md                    # Claude Code project instructions
├── eslint.config.mjs            # ESLint flat config
├── next.config.ts               # Next.js configuration
├── package.json
├── postcss.config.mjs           # PostCSS / Tailwind pipeline
└── tsconfig.json                # TypeScript strict-mode configuration
```

---

## Getting started

### Prerequisites

- Node.js 20 or later
- npm (a `package-lock.json` is committed; use npm to keep the lockfile in sync)

### Installation

```bash
# Clone the repository
git clone https://github.com/innovatxus/snap-pro.git
cd snap-pro

# Install dependencies
npm install
```

### Environment variables

Snap Pro has no required environment variables in its current state. The editor
UI is fully client-rendered and does not connect to an external API. When a
backend inference service is added, environment variables should be defined in a
`.env.local` file at the project root and prefixed with `NEXT_PUBLIC_` for
browser-accessible values.

### Running locally

```bash
npm run dev
```

The development server starts at `http://localhost:3000`.

---

## Available scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the development server with Turbopack   |
| `npm run build` | Compile and statically generate the full site |
| `npm run start` | Serve the production build on port 3000       |
| `npm run lint`  | Run ESLint across all source files            |

---

## Deployment

### Vercel

Snap Pro is a standard Next.js application and deploys directly to Vercel with
no additional configuration.

1. Push the repository to GitHub (remote:
   `https://github.com/innovatxus/snap-pro.git`).
2. Import the repository in the [Vercel dashboard](https://vercel.com/new).
3. Accept the default build settings (`npm run build`, output directory
   `.next`).
4. Deploy.

Every push to the default branch triggers a production deployment. Branch pushes
create preview deployments automatically.

### Manual deployment

```bash
# Build the production output
npm run build

# Start the production server
npm run start
```

The production server listens on port 3000 by default. Set the `PORT`
environment variable to override.

---

## Environment configuration

The application behaves identically across environments. There are no feature
flags, environment-specific API endpoints, or runtime secrets in the current
codebase.

When adding a backend, use the standard Next.js `.env` hierarchy:

| File               | Scope                        |
| ------------------ | ---------------------------- |
| `.env`             | All environments (committed) |
| `.env.local`       | Local only (not committed)   |
| `.env.production`  | Production builds only       |
| `.env.development` | Development server only      |

Values prefixed with `NEXT_PUBLIC_` are inlined into the browser bundle at build
time. All other values remain server-side only.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature-name`
3. Commit your changes following the conventions below.
4. Push to the branch: `git push origin feat/your-feature-name`
5. Open a pull request against `main`.

### Commit conventions

This project follows
[Conventional Commits](https://www.conventionalcommits.org/):

| Prefix      | Use for                                         |
| ----------- | ----------------------------------------------- |
| `feat:`     | New feature or user-visible addition            |
| `fix:`      | Bug fix                                         |
| `perf:`     | Performance improvement without behavior change |
| `refactor:` | Code change that is neither a fix nor a feature |
| `docs:`     | Documentation only                              |
| `chore:`    | Maintenance, dependency updates, tooling        |
| `test:`     | Adding or updating tests                        |

Commit messages must be imperative, present tense, and 72 characters or fewer.

### Adding a niche or tool

To add a new industry niche, append an entry to the `NICHES` array in
`features/editor/data/niches.ts`. The niche appears automatically in the
marketing grid, the niche editor, and `generateStaticParams`. No additional code
changes are required.

To add a tool to an existing niche, append a `NicheService` entry to that
niche's `services` array. Use `featured: true` on the primary tool only.

---

## License

No `LICENSE` file is present in this repository. All rights reserved by
Innovatx.
