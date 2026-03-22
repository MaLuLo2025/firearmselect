import Link from "next/link";
import { states } from "@/lib/states";
import { cities } from "@/lib/cities";
import { categories } from "@/lib/categories";
import { getRecentPosts } from "@/lib/blog";
import DealerSearch from "@/components/DealerSearch";
import LawSearch from "@/components/LawSearch";

export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  const stateOptions = states.map((s) => ({ name: s.name, slug: s.slug }));
  const cityOptions = cities.map((c) => ({
    name: c.name,
    slug: c.slug,
    stateSlug: c.stateSlug,
  }));

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-steel-500 mb-4">
            The Informed Firearms Directory
          </p>
          <h1 className="font-serif text-display-sm sm:text-display text-ink-900 text-balance">
            Find trusted dealers, ranges &amp; instructors.{" "}
            <span className="border-b-2 border-steel-500 pb-0.5">Know your rights.</span>
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mx-auto mt-8 mb-6" />
          <p className="text-ink-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Local gun shops, shooting ranges, certified instructors, state-by-state gun laws,
            and educational content for responsible gun owners — all in one place.
          </p>
          <p className="text-steel-500 text-sm italic max-w-md mx-auto mt-3 leading-relaxed">
            The Second Amendment is a fundamental constitutional right. Exercising it
            responsibly starts with the right dealer and the right information.
          </p>
        </div>
      </section>

      {/* Dealer categories */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-2">
              Find local dealers &amp; ranges
            </p>
            <h2 className="font-serif text-display-sm text-ink-900">
              Trusted shops &amp; ranges near you
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4">
            {categories.map((cat, i) => (
              <Link key={cat.slug} href="/dealers"
                className={`group text-center py-6 px-4 border border-ink-100 ${i > 0 ? "-ml-px" : ""} hover:bg-cream-100 transition-colors`}>
                {cat.slug === "gun-shops" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <rect x="8" y="16" width="24" height="18" rx="2" />
                    <path d="M8 16 L20 6 L32 16" strokeLinejoin="round" />
                    <rect x="16" y="24" width="8" height="10" />
                  </svg>
                )}
                {cat.slug === "ffl-dealers" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <rect x="8" y="8" width="24" height="24" rx="2" />
                    <line x1="8" y1="16" x2="32" y2="16" />
                    <circle cx="14" cy="12" r="1.5" fill="#5a6a7a" stroke="none" />
                    <circle cx="20" cy="12" r="1.5" fill="#5a6a7a" stroke="none" />
                    <line x1="14" y1="22" x2="26" y2="22" strokeWidth="0.8" opacity="0.4" />
                    <line x1="14" y1="27" x2="22" y2="27" strokeWidth="0.8" opacity="0.4" />
                  </svg>
                )}
                {cat.slug === "ranges" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <circle cx="20" cy="20" r="14" />
                    <circle cx="20" cy="20" r="9" strokeWidth="0.8" opacity="0.5" />
                    <circle cx="20" cy="20" r="4" strokeWidth="0.8" opacity="0.5" />
                    <circle cx="20" cy="20" r="1.5" fill="#5a6a7a" stroke="none" />
                  </svg>
                )}
                {cat.slug === "instructors" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <circle cx="20" cy="14" r="6" />
                    <path d="M10 34 Q10 24 20 24 Q30 24 30 34" />
                  </svg>
                )}
                <p className="font-serif text-xs text-ink-900">{cat.name}</p>
                <p className="font-sans text-[9px] text-ink-300 mt-1">{cat.shortDescription}</p>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4 border border-ink-100 px-6 py-4 flex items-center justify-between">
            <div>
              <p className="font-serif text-sm text-ink-900">Find shops &amp; ranges in your state</p>
              <p className="font-sans text-xs text-ink-300 mt-1">Factual listings. Direct links to dealer websites. No paid placements.</p>
            </div>
            <Link href="/dealers" className="btn-primary shrink-0">Find local shops &amp; ranges</Link>
          </div>
        </div>
      </section>

      {/* Dealer search — cascading state/city dropdowns */}
      <section className="py-12 sm:py-16 border-t border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-2">
              Search by location
            </p>
            <h2 className="font-serif text-heading text-ink-900">
              Find shops, ranges &amp; instructors near you
            </h2>
          </div>
          <DealerSearch states={stateOptions} cities={cityOptions} />
          <p className="text-center text-[10px] text-ink-300 mt-4">
            Select a state, then a city to see local shops, ranges &amp; instructors.
          </p>
        </div>
      </section>

      {/* Laws & education */}
      <section className="py-12 sm:py-16 border-t border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-2">
              Know the law
            </p>
            <h2 className="font-serif text-display-sm text-ink-900">
              Rights, laws &amp; education
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3">
            {[
              { title: "State gun laws", sub: "50 state guides", href: "/states", icon: "document" },
              { title: "Carry laws", sub: "Concealed & open", href: "/carry-laws", icon: "shield" },
              { title: "Travel guide", sub: "Across state lines", href: "/reciprocity", icon: "map" },
              { title: "Safety & storage", sub: "Responsible ownership", href: "/safety", icon: "safe" },
              { title: "New buyer guide", sub: "First-time owners", href: "/blog/first-time-gun-buyer-guide", icon: "person" },
              { title: "Red flag laws", sub: "State-by-state", href: "/red-flag-laws", icon: "clock" },
            ].map((item) => (
              <Link key={item.title} href={item.href}
                className="group text-center py-6 px-4 border border-ink-100 hover:bg-cream-100 transition-colors">
                {item.icon === "document" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <rect x="8" y="6" width="24" height="28" rx="2" />
                    <line x1="14" y1="14" x2="26" y2="14" strokeWidth="0.8" opacity="0.4" />
                    <line x1="14" y1="19" x2="26" y2="19" strokeWidth="0.8" opacity="0.4" />
                    <line x1="14" y1="24" x2="22" y2="24" strokeWidth="0.8" opacity="0.4" />
                  </svg>
                )}
                {item.icon === "shield" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <path d="M20 6 L6 14 L6 26 Q6 34 20 38 Q34 34 34 26 L34 14 Z" />
                  </svg>
                )}
                {item.icon === "map" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3" strokeLinejoin="round">
                    <path d="M8 30 L8 12 L16 6 L24 12 L32 6 L32 24 L24 30 L16 24 Z" />
                  </svg>
                )}
                {item.icon === "safe" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <rect x="10" y="10" width="20" height="16" rx="2" />
                    <path d="M14 10 L14 6 L26 6 L26 10" />
                    <line x1="20" y1="14" x2="20" y2="22" strokeWidth="1.2" />
                  </svg>
                )}
                {item.icon === "person" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <circle cx="20" cy="14" r="6" />
                    <path d="M10 34 Q10 24 20 24 Q30 24 30 34" />
                  </svg>
                )}
                {item.icon === "clock" && (
                  <svg width="24" height="24" viewBox="0 0 40 40" className="mx-auto mb-3" fill="none" stroke="#111110" strokeWidth="1.3">
                    <circle cx="20" cy="20" r="14" />
                    <path d="M20 10 L20 20 L28 24" strokeLinecap="round" />
                  </svg>
                )}
                <p className="font-serif text-xs text-ink-900">{item.title}</p>
                <p className="font-sans text-[9px] text-ink-300 mt-1">{item.sub}</p>
              </Link>
            ))}
          </div>

          {/* Law search dropdown */}
          <div className="mt-8">
            <div className="text-center mb-4">
              <p className="font-serif text-sm text-ink-900">Look up your state&apos;s gun laws</p>
            </div>
            <LawSearch states={stateOptions} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-4 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-100 border-l-[3px] border-ink-900 px-5 py-4">
            <p className="font-serif text-sm text-ink-900 mb-1">Factual. Non-partisan. Cited to primary sources.</p>
            <p className="font-sans text-xs text-ink-400 leading-relaxed">
              Every law links to the actual statute. Every right comes with its responsibility.
              We connect buyers with trusted shops, ranges, and instructors — and arm everyone with accurate information.
            </p>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-12 sm:py-16 border-t border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-2">
              Latest
            </p>
            <h2 className="font-serif text-heading text-ink-900">
              Analysis &amp; legal updates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group border-t-2 border-ink-900 pt-4">
                <p className="font-sans text-[9px] uppercase tracking-widest text-steel-500 mb-2">
                  {post.category}
                </p>
                <h3 className="font-serif text-sm text-ink-900 group-hover:text-steel-600 transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="font-sans text-[10px] text-ink-300">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Firearms disclaimer */}
      <section className="py-6 bg-cream-100 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] text-ink-300 leading-relaxed text-center">
            FirearmSelect is an informational directory and does not sell firearms, ammunition, or accessories.
            All firearms laws referenced on this site are summaries — consult the actual statutes and a qualified
            attorney for legal advice. FirearmSelect does not endorse or recommend any specific dealer. Always
            verify dealer credentials and comply with all applicable federal, state, and local laws.
          </p>
        </div>
      </section>
    </>
  );
}
