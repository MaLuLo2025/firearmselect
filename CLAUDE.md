**BEFORE ANY DEPLOYMENT: Re-read this entire file. Confirm compliance with every item before marking any task complete.**

# FirearmSelect — Project Memory (CLAUDE.md)

## What This Project Is
FirearmSelect.com is an informational firearms directory connecting buyers with trusted local gun shops, shooting ranges, FFL dealers, and certified instructors. Provides state-by-state gun law guides and factual, non-partisan firearms education. Part of the Select Sites portfolio alongside AestheticSelect.com.

## Core Philosophy
The Second Amendment is a fundamental constitutional right. This site is NOT an advocacy platform — it's an information resource. Rights AND responsibilities. Every law links to the actual statute. No gun/bullet imagery. Serious, editorial tone.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom Broadsheet theme
- **Hosting**: Vercel
- **Canonical hostname**: `https://www.firearmselect.com` (apex 307s to www)
- **Language**: TypeScript

## SEO Foundation (see global Section 20)

This project must follow **Section 20 (SEO Foundation)** of the global `~/.claude/CLAUDE.md`. Read it before any content addition or template change.

Project-specific notes:
- Canonical hostname: `https://www.firearmselect.com` — `metadataBase` is set in `src/app/layout.tsx`
- Sitemap base URL constant in `src/app/sitemap.ts` must match `metadataBase`
- robots.ts sitemap reference must match the canonical hostname
- New blog posts, hunting content, and state law pages must appear in the dynamic sitemap on the next deploy — verify before marking work done
- Title suffix: `| FirearmSelect`
- Every blog post must have `Article` JSON-LD
- Hub pages with FAQ sections (e.g., `/hunting`) must include `FAQPage` JSON-LD — `/hunting` already has this and must not regress
- Dealer detail pages should have `LocalBusiness` JSON-LD

## File Output
All generated files for this project go to `~/Claude Files/firearmselect/` — never `~/Downloads/`.

## ECC Workflow

- `/plan` before any non-trivial change
- `/security-scan` before deploying any new endpoint or data change
- `/code-review` before every deploy
- Log any mistakes to the Deployment Gotchas section of this file
- Run `/learn` at session end

## Connected Projects
- **GoldSilverSelect** (`~/Projects/goldsilverselect`) — sister Select Sites directory, reference implementation for UX patterns
- **AestheticSelect** (`~/Projects/aestheticselect`) — original reference implementation for geography-first search UX

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
/resources/videos/                      → Firearms education video library
/resources/faq/                         → FAQ hub with fuzzy search
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

## External Link Verification (Non-Negotiable)
- Every external URL must be verified (curl, WebFetch, or browser) before deploying
- State .gov sites restructure frequently — never trust a URL from memory
- Run link verification as a separate step before any deploy that includes outbound links
- If a URL redirects to a generic/homepage rather than the specific page intended:
  - Do NOT use that link — it will confuse users
  - Instead, link to the agency's main site and add helper text: "Search for '[specific topic]' on the [Agency Name] website"
  - Example: if the PA Game Commission hunting seasons page redirects to the generic agency homepage, link to the homepage and add: "Search for 'hunting seasons and bag limits' on the Pennsylvania Game Commission website"
- This applies to ALL outbound links on ALL Select Sites

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
- [x] Video Hub page (/resources/videos) with 12 curated educational videos
- [x] FAQ Hub page (/resources/faq) with 18 entries and Fuse.js fuzzy search
- [x] FAQ accordion with category filters and cross-links to videos/blog/state laws
- [x] Schema.org FAQPage structured data on FAQ page
- [x] Resources dropdown in nav (Blog, Video Library, FAQ)
- [x] Sitemap updated with /resources/videos and /resources/faq

## Video Hub

### Location
`/resources/videos`

### Approved Video Sources (Non-Political Only)
- NSSF (National Shooting Sports Foundation) — official industry safety education
- Project ChildSafe (NSSF program) — family safety focus
- Lucky Gunner / Chris Baker — ammunition testing and education
- Honest Outlaw — straightforward reviews, no political content

### Editorial Standards for Video Summaries
- 3-4 sentences per summary
- Broadsheet voice: factual, authoritative, no opinion, no advocacy
- Always identify the source/channel
- Never editorialize on political topics (2A, legislation, etc.)
- Never link to videos that contain political commentary

### Video Categories
1. Safety & Storage
2. First-Time Buyers
3. Caliber & Ammunition
4. Concealed Carry
5. Range & Marksmanship
6. Cleaning & Maintenance

---

## FAQ Hub

### Location
`/resources/faq`

### Fuzzy Search (Fuse.js)
- Threshold: 0.4
- Keys: question (weight 0.6), answer (0.3), keywords (0.5), category (0.1)
- Debounce: 300ms
- Minimum match length: 2 characters
- Location-independent matching (ignoreLocation: true)

### FAQ Categories
1. Gun Laws (tied to state law pages)
2. Buying Your First Firearm
3. Safety & Storage
4. Concealed Carry

### Cross-Linking Rules
- Every FAQ answer that references state-specific information links to relevant state law pages
- Every FAQ with a related video links to that video's entry in the video hub
- Every FAQ with a related blog post links to that blog post
- Consistent "Related Resources" block at bottom of each answer

## Deployment Gotchas (Non-Negotiable)

### 2026-03-31 — Deployed hunting section with 13 broken external URLs
- **What went wrong:** Deployed 10 state hunting pages without verifying any of the 30 external wildlife agency URLs. 13 of them were 404s or redirected to wrong pages.
- **Root cause:** Skipped the CLAUDE.md verification step ("Never mark a task complete without proof"). Used training data URLs without checking if state agencies had restructured their websites.
- **Rule going forward:** Every external URL must be verified (curl or WebFetch) before deploying. State .gov sites restructure frequently — never trust a URL from memory. Run link verification as a separate step before any deploy that includes outbound links.

---

## Security Standards (Non-Negotiable)

These apply to ALL projects. No exceptions without explicit owner approval.

### Authentication
- All internal user accounts require 2FA via authenticator app (TOTP)
  — no SMS 2FA, no email 2FA for internal users
- Use Supabase Auth as the standard auth provider across all projects
- Passwords: minimum 12 characters, bcrypt hashing (Supabase handles this)
- Session tokens: httpOnly cookies, secure flag, sameSite=strict
- Never store plaintext passwords, tokens, or secrets anywhere

### API Keys & Secrets
- All secrets in environment variables — never hardcoded, never committed
- `.env` is always in `.gitignore` — verify before every commit
- `.env.example` documents required variables without values
- Rotate any key that is accidentally exposed immediately
- Run `/security-scan` after adding any new API integration

### Database (Supabase)
- Row Level Security (RLS) enabled on every table — no exceptions
- Never expose the Supabase service role key to the client
- Use the anon key on the frontend, service role only in server-side code
- All PII columns encrypted at rest
- Database backups enabled and tested

### Data Handling
- Collect only what you need — no speculative data collection
- PII (names, emails, addresses) stored in Supabase only — never in
  logs, never in third-party analytics
- Health/medical data: treated as PHI regardless of HIPAA status —
  same protection level, no exceptions
- Financial data: use Stripe for all payment processing — never store
  card numbers or CVVs anywhere
- User data deletion must be complete — all tables, all backups

### Frontend Security
- Content Security Policy (CSP) headers on all projects
- HTTPS enforced — no mixed content
- All user inputs sanitized and validated server-side (never trust
  the client)
- Run `/security-scan` before every production deploy

### Incident Protocol
- If a breach is suspected: take affected system offline first,
  investigate second
- Notify affected users within 72 hours of confirmed breach
- Document everything — what happened, when, what data was affected,
  what was done
