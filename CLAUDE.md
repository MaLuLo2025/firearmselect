# FirearmSelect — Project Memory (CLAUDE.md)

## What This Project Is
FirearmSelect.com is an informational firearms directory connecting buyers with trusted local gun shops, shooting ranges, FFL dealers, and certified instructors. Provides state-by-state gun law guides and factual, non-partisan firearms education. Part of the Select Sites portfolio alongside AestheticSelect.com.

## Core Philosophy
The Second Amendment is a fundamental constitutional right. This site is NOT an advocacy platform — it's an information resource. Rights AND responsibilities. Every law links to the actual statute. No gun/bullet imagery. Serious, editorial tone.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom Broadsheet theme
- **Hosting**: Vercel
- **Language**: TypeScript

## Brand System — "Broadsheet" Theme
- **Colors**: Near-black (#111110), white background, steel blue (#5a6a7a) accent
- **Typography**: Georgia (serif, headings) + Helvetica Neue (sans, body)
- **Logo**: Triple concentric ring mark with serif "F" center + "FirearmSelect" wordmark
- **Tone**: High-contrast editorial. Serious, informational, newspaper feel. No tactical/gun imagery.
- **Tagline**: "Find dealers. Know the law. Own responsibly."

## URL Architecture
```
/                                       → Homepage (dealers above fold)
/{state}/gun-laws/                      → State gun law guide
/states/                                → All 50 states index (CC vs permit)
/carry-laws/                            → Concealed & open carry overview
/reciprocity/                           → Interstate carry reciprocity guide
/safety/                                → Firearms safety & storage guide
/red-flag-laws/                         → Red flag / ERPO laws by state
/dealers/                               → Main dealer directory
/dealers/{state}/                       → State dealers (grouped by city)
/dealers/{state}/{city}/                → City dealer hub
/dealers/{state}/{city}/{dealer}/       → Individual dealer detail page
/blog/                                  → Blog listing
/blog/{slug}/                           → Blog article
/about/                                 → About page
/privacy/                               → Privacy policy
/terms/                                 → Terms of service
/cookies/                               → Cookie policy
```

## Dealer Categories
1. gun-shops — Gun Shops (buy & browse)
2. ffl-dealers — FFL Dealers (licensed transfers)
3. ranges — Shooting Ranges (shoot & practice)
4. instructors — Firearms Instructors (classes & certs)

## Terminology
- Never say just "dealers" when describing the site — always include ranges and instructors
- Use "shops, ranges & instructors" or "gun shops, ranges & instructors" in headings/copy
- "Find local shops & ranges" (not "Browse dealers")

## Link Rules
- Links labeled "gun laws" or "state laws" → must point to /{state}/gun-laws/
- Links labeled "find shops" or dealer-related → must point to /dealers/{state}/ or /dealers/{state}/{city}/
- All dealer page links use the /dealers/ prefix — never /{state}/{city}/ at root
- Gun-laws pages link to /dealers/{state}/ for "find shops & ranges"
- Dealer/city pages link to /{state}/gun-laws for "view gun laws"

## Content Standards
- Never use superlative claims in dealer descriptions
- All descriptions factual only — licenses, services, location
- Every law references the actual statute
- No advocacy language — present law as it is
- Firearms-appropriate disclaimer on every page (include dealers, ranges, and instructors)
- Colorado law, Durango/La Plata County venue, binding arbitration in TOS

## Current State
- [x] Project scaffolded with Broadsheet theme
- [x] 50 state gun law pages (full coverage)
- [x] 3 blog articles (constitutional carry, Bruen, first-time buyer)
- [x] 50 cities from top US MSAs (1.5M+ population) with SEO pages
- [x] Sample dealer data for 6 states (13 dealers across 12 cities)
- [x] City pages with "coming soon" placeholder when no dealers listed
- [x] City-level dealer architecture (/dealers/{state}/{city}/ hub pages)
- [x] State dealer pages (/dealers/{state}/ grouped by city)
- [x] Individual dealer detail pages (/dealers/{state}/{city}/{dealer}/)
- [x] Schema.org LocalBusiness structured data on dealer pages
- [x] Cascading state→city dropdown search on homepage (client component)
- [x] Separate state dropdown for gun law lookup on homepage
- [x] Homepage with category cards above search, then law section
- [x] Legal pages (privacy, terms, cookies)
- [x] Cookie consent banner
- [x] Dynamic sitemap and robots.txt (all cities + dealers included)
- [x] Full 50-state coverage
- [x] All internal links audited and verified (law links → gun-laws, dealer links → /dealers/)
- [x] /states/ index page (constitutional carry vs permit-required grouping)
- [x] /carry-laws/ page (concealed, open carry, Bruen, restricted locations)
- [x] /reciprocity/ page (interstate travel, FOPA, flying, vehicle storage)
- [x] /safety/ page (four rules, secure storage, children, maintenance)
- [x] /red-flag-laws/ page (ERPO process, 21 states detailed, federal legislation)
- [x] Google Analytics integration (G-5PMR8Q3KDL)
- [ ] Google Search Console
- [ ] More dealers per city
