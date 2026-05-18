@AGENTS.md

# WeightLossInjections.ca - Codebase Guide

## Stack
- **Next.js 16** (App Router), React 19, TypeScript, Tailwind CSS v4
- No backend or database - static + SSR only
- No API authentication

## File Map

```
src/
  app/
    layout.tsx          Root layout: fonts, global metadata (metadataBase, hreflang, JSON-LD), Header + Footer
    globals.css         Tailwind import + .prose-editorial article styles
    page.tsx            Homepage: hero, featured articles, quick links, ProvinceGrid, FelixBanner, newsletter
    robots.ts           robots.txt generation (allows all AI crawlers)
    sitemap.ts          sitemap.xml generation (all routes, en-CA alternates)
    semaglutide/        Article: Ozempic & Wegovy guide
    tirzepatide/        Article: Mounjaro guide
    compare/            Comparison table page
    cost/               Article: province-by-province pricing
    insurance-coverage/ Article: insurance guide
    ontario/            Article: Ontario ODB guide
    oral-glp1/          Article: Rybelsus / oral GLP-1 guide
    disclaimer/         Legal page: medical disclaimer, province availability, affiliate disclosure
    api/
      medications/      GET /api/medications - JSON data for GLP-1 medications
      provinces/        GET /api/provinces   - province availability + coverage data
      site-info/        GET /api/site-info   - site metadata for AI tools

  components/
    Header.tsx          Sticky nav (uses NAV_LINKS from constants), mobile hamburger
    Footer.tsx          Dark footer: province notice, disclaimers, API links, llms.txt link
    ArticleLayout.tsx   Two-column layout: article + sidebar (FelixSidebar + TOC + Related)
    ArticleHeader.tsx   Editorial header: category, date, border-left headline, standfirst
    FelixAd.tsx         Three ad variants: FelixBanner (wide), FelixSidebar, FelixInline
    ProvinceGrid.tsx    9-province grid linking to Felix affiliate

  lib/
    constants.ts        FELIX_LINK, SITE_URL, SITE_NAME, SITE_DESCRIPTION,
                        MEDICAL_DISCLAIMER, PROVINCE_DISCLAIMER,
                        NAV_LINKS, PROVINCES

public/
  llms.txt              AI/LLM site guide (content index, province availability, API list)
```

## Key Constants (src/lib/constants.ts)
- `SITE_URL` = "https://weightlossinjections.ca"
- `FELIX_LINK` = affiliate URL (always use `rel="noopener sponsored"`)
- `MEDICAL_DISCLAIMER` / `PROVINCE_DISCLAIMER` = reusable disclaimer text
- `PROVINCES` = 9 provinces (AB BC MB NB NL NS ON PE SK) - Quebec and territories excluded

## Design Rules
- **No em dashes** anywhere in the codebase - use regular hyphens instead
- **No emoji as decorative icons** in article heroes or card thumbnails (editorial style)
- **Brand color**: `#0F6E56` (green); accent: `#E1F5EE` (pale mint); dark: `#063D2B`
- **Fonts**: `--font-playfair` for display/headlines, `--font-source-serif` for body, `--font-inter` for UI
- Article prose uses `.prose-editorial` class (defined in globals.css)
- All sponsored/affiliate links: `rel="noopener sponsored"` + clearly labelled
- Keep design genuinely editorial - avoid SaaS landing page patterns (gradient cards, emoji heroes, uniform pill badges)

## SEO / GEO Setup
- `metadataBase` set in layout.tsx to `SITE_URL`
- All pages export `alternates.canonical` and `alternates.languages["en-CA"]`
- Root layout injects hreflang `<link>` tags + Organization + WebSite JSON-LD
- `robots.ts` explicitly permits 15+ AI crawlers (GPTBot, Claude-Web, Perplexity, etc.)
- `sitemap.ts` covers all 9 routes with priorities and `en-CA` alternates
- `public/llms.txt` for AI model consumption

## Adding a New Page
1. Create `src/app/<slug>/page.tsx`
2. Export `metadata` with `title`, `description`, and `alternates.canonical`
3. Use `ArticleLayout` + `ArticleHeader` for article pages
4. Add the route to `src/app/sitemap.ts`
5. Add a nav link to `src/lib/constants.ts` (NAV_LINKS) if it belongs in the main nav

## Province Coverage Notes
Felix Health (affiliate) serves: AB, BC, MB, NB, NL, NS, ON, PE, SK
NOT served: Quebec, Northwest Territories, Nunavut, Yukon
All province-gating logic lives in `PROVINCE_DISCLAIMER` constant and the `/api/provinces` route.
