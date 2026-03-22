# FirearmSelect — Project Memory (CLAUDE.md)

## What This Project Is
FirearmSelect.com is an informational firearms directory connecting buyers with trusted local dealers, providing state-by-state gun law guides, and offering factual, non-partisan firearms education. Part of the Select Sites portfolio alongside AestheticSelect.com.

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

## Content Standards
- Never use superlative claims in dealer descriptions
- All descriptions factual only — licenses, services, location
- Every law references the actual statute
- No advocacy language — present law as it is
- Firearms-appropriate disclaimer on every page
- Colorado law, Durango/La Plata County venue, binding arbitration in TOS

## Current State
- [x] Project scaffolded with Broadsheet theme
- [x] 50 state gun law pages (full coverage)
- [x] 3 blog articles (constitutional carry, Bruen, first-time buyer)
- [x] Sample dealer data for 6 states (13 dealers across 12 cities)
- [x] City-level dealer architecture (/dealers/{state}/{city}/ hub pages)
- [x] State dealer pages (/dealers/{state}/ grouped by city)
- [x] Individual dealer detail pages (/dealers/{state}/{city}/{dealer}/)
- [x] Schema.org LocalBusiness structured data on dealer pages
- [x] Homepage with dealers above fold
- [x] Legal pages (privacy, terms, cookies)
- [x] Cookie consent banner
- [x] Dynamic sitemap and robots.txt (cities + dealers included)
- [ ] Google Analytics integration
- [ ] Google Search Console
- [x] Full 50-state coverage
- [ ] More dealers per state
