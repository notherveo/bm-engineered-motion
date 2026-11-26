Build a complete, production-quality multi-page Next.js (App Router) website — an **industrial / B2B equipment manufacturer** (pumps, motors, specialty components). The feeling: "technical drawing comes alive" — an engineering blueprint aesthetic with real product depth.

## Routes
`/`, `/products`, `/products/[slug]`, `/applications`, `/resources`, `/contact`

**Dynamic route note (Next.js 15):** `app/products/[slug]/page.tsx`:
```ts
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}
```
Export `generateStaticParams()`.

## Design language
- Palette: blueprint navy `#0F2A44`, drafting white, safety orange `#FF6B1A` accent, steel gray.
- Type: monospace for specs/labels + a strong industrial sans for headlines.
- Layout: grid-paper backgrounds, dimension lines & callouts as decoration, spec tables as first-class design elements.

## Motion language (signature — no WebGL)
- **Scroll-driven exploded view**: an SVG/CSS-3D flagship product whose components separate and annotate as you scroll.
- **Product selector / sizing calculator**: enter application parameters (flow rate, head, voltage, environment) -> matching models animate in.
- **Spec comparison tables** with downloadable datasheet links.

Write: `components/reveal.tsx`, `components/exploded-view.tsx`, `components/product-selector.tsx`, `components/spec-table.tsx`, `components/counter.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`. Create `lib/products.ts` (slug, name, category, specs, applications).

## Content — fictional manufacturer "ENGINEERED MOTION INDUSTRIES"
- `/` — technical hero; category overview; the exploded-view feature; sizing calculator teaser; applications; resources; quote CTA.
- `/products` — category grid; filterable.
- `/products/[slug]` — deep spec page per product (spec table, applications, downloads).
- `/applications` — industries served (water, HVAC, oil & gas, food processing...).
- `/resources` — CAD/datasheets/manuals resource library (cards + filters).
- `/contact` — request-a-quote (RFQ) form (name / company / email / application / parameters / message) with validation.

All specs/products are illustrative fictional data.

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`
- NO 3D/WebGL/map libraries. Do NOT import `three`, `@react-three/*`, `mapbox-gl`, `maplibre-gl`, `d3`, etc. (not installed). Build any "3D"/interactive visuals with CSS 3D transforms, inline SVG, gradients, and motion.

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` -> `{ Button }`
- `@/components/ui/card` -> `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` -> `{ Badge }`
- `@/components/ui/input` -> `{ Input }`
- `@/components/ui/label` -> `{ Label }`
Everything else you MUST write yourself under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1. (A dynamic route page with `generateStaticParams`/`generateMetadata` stays a SERVER component; put interactive UI in `"use client"` children.)
2. Icons are components: `<ArrowUpRight className="size-4" />`. Never `{icon.size}`. JSX component names MUST be Capitalized (never `<icon />`).
3. Shared chrome (header/nav, footer) lives in `app/layout.tsx`, rendered EXACTLY once; pages must NOT render it.
4. Import every symbol you use; no unused imports; no `any`; type props explicitly.
5. Photos: plain `<img loading="lazy" alt="..." className="... object-cover">`; use `https://picsum.photos/seed/<unique-slug>/<w>/<h>`; graphics via CSS gradients / inline SVG. No empty src.
6. Respect reduced motion (`useReducedMotion()`); skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy (fictional business). No lorem ipsum / TODO / sample text.
8. Responsive mobile-first; never overflow horizontally.
9. Clearly label testimonials, results, figures, and imagery as illustrative demo content. Use a FICTIONAL business name + sample contact details; never present invented credentials, results, certifications, or reviews as verified facts.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="...">...</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route, every component, and any `lib/*` data module you reference.
