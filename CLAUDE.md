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
/{state}/gun-laws/                      → State gun law guide (50 states + DC)
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
- Dealer listings (names, ratings, descriptions) ONLY render on /dealers/ pages — never on gun-laws, blog, or other pages

## Content Standards
- Never use superlative claims in dealer descriptions
- All descriptions factual only — licenses, services, location
- Every law references the actual statute — statute names should link to the text (law.cornell.edu, congress.gov, or state legislature sites)
- ATF links: use /rules-and-regulations/laws-alcohol-tobacco-firearms-and-explosives (NOT /firearms/federal-law which 404s)
- ATF state laws publication: use 36th edition URL (/firearms/state-laws-and-published-ordinances-firearms-36th-edition)
- All outbound links open in new tabs with rel="noopener noreferrer"
- No advocacy language — present law as it is
- Firearms-appropriate disclaimer on every page (include dealers, ranges, and instructors)
- Colorado law, Durango/La Plata County venue, binding arbitration in TOS

## Current State
- [x] Project scaffolded with Broadsheet theme
- [x] 50 state + DC gun law pages (all with detailed multi-section statutory content)
- [x] 3 blog articles (constitutional carry, Bruen, first-time buyer)
- [x] 50 cities from top US MSAs (1.5M+ population) with SEO pages
- [x] 502 dealer listings across all 50 cities (Tier 1: 15 per city, Tier 2: 10, Tier 3: 8)
- [x] City pages with "coming soon" placeholder when no dealers listed
- [x] City-level dealer architecture (/dealers/{state}/{city}/ hub pages)
- [x] State dealer pages (/dealers/{state}/ grouped by city)
- [x] Individual dealer detail pages (/dealers/{state}/{city}/{dealer}/)
- [x] Schema.org LocalBusiness structured data on dealer pages
- [x] Cascading state→city dropdown search on homepage (client component)
- [x] Separate state dropdown for gun law lookup on homepage
- [x] Homepage layout: hero → search dropdowns → category cards → CTA bar → law section
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
- [x] Google Analytics integration (G-5PMR8Q3KDL, consent-aware — only loads after cookie accept)
- [x] Google Search Console (verified via GA)
- [x] Outbound links to authoritative sources on all law/safety pages
- [x] State gun law pages: ATF, state legislature, and state police .gov links for all 50 states
- [x] state-resources.ts with .gov URLs for all 50 state legislatures and permit agencies (all verified working)
- [x] Blog renderer auto-converts URLs to clickable outbound links
- [x] Full dealer coverage across all 50 cities (502 dealers, 8-15 per city)
- [x] Fake dealer website URLs removed — only verified real URLs kept
- [x] Legislature links: helper note on 48 states with general homepages (auto-suppressed for FL/MN which link to statute pages)
- [x] state-law-details.ts with detailed statutory content for all 50 states + DC
- [x] DC added to states.ts, state-resources.ts, and gun-laws routing
