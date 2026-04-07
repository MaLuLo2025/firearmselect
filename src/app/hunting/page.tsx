import { Metadata } from "next";
import Link from "next/link";
import { huntingStates } from "@/lib/hunting-data";
import { states } from "@/lib/states";
import { blogPosts } from "@/lib/blog";
import { getFaqsByCategory } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Hunting Seasons & Licensing by State | FirearmSelect",
  description:
    "State-by-state hunting season dates, licensing costs, tag requirements, and harvest reporting. Updated for 2025–2026 seasons.",
};

// Strip markdown link syntax [label](url) → label so JSON-LD text fields are clean.
function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export default function HuntingHub() {
  const activeStates = huntingStates.map((h) => h.stateSlug);
  const huntingPosts = blogPosts.filter((p) => p.categorySlug === "hunting");
  const huntingFaqs = getFaqsByCategory("Hunting");

  // FAQPage JSON-LD — built from the same data the FAQ component renders, so they cannot drift.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: huntingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkdownLinks(faq.answer),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li>
                <Link href="/" className="hover:text-ink-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-ink-500">Hunting</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Hunting Seasons &amp; Regulations
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            Hunting by State
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-6" />
          <p className="text-sm text-ink-500 leading-relaxed">
            Season dates, licensing requirements, tag and draw information, and
            harvest reporting rules for each state. All data is sourced from
            official state wildlife agency publications. Verify all dates and
            regulations with your state agency before hunting.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-heading text-ink-900 mb-6">
            Available State Guides
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {huntingStates
              .sort((a, b) => a.stateName.localeCompare(b.stateName))
              .map((h) => (
                <Link
                  key={h.stateSlug}
                  href={`/hunting/seasons/${h.stateSlug}`}
                  className="block px-4 py-3 border border-ink-100 hover:border-ink-300 hover:bg-cream-100 transition-colors"
                >
                  <span className="font-sans text-xs uppercase tracking-wider text-steel-500">
                    {h.stateAbbr}
                  </span>
                  <span className="block font-serif text-sm text-ink-900 mt-0.5">
                    {h.stateName}
                  </span>
                </Link>
              ))}
          </div>

          <div className="mt-12">
            <h2 className="font-serif text-heading text-ink-900 mb-4">
              More States Coming Soon
            </h2>
            <p className="text-sm text-ink-500 leading-relaxed mb-6">
              We are expanding our hunting guide coverage. The following states
              will be added in upcoming updates.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {states
                .filter((s) => !activeStates.includes(s.slug))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((s) => (
                  <span
                    key={s.slug}
                    className="font-sans text-xs text-ink-300 px-3 py-2"
                  >
                    {s.name}
                  </span>
                ))}
            </div>
          </div>

          {/* Hunting Articles */}
          {huntingPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-heading text-ink-900 mb-6">
                Hunting Guides &amp; Articles
              </h2>
              <div className="space-y-4">
                {huntingPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block border-2 border-ink-200 hover:border-ink-900 transition-colors px-6 py-5"
                  >
                    <p className="font-sans text-[11px] uppercase tracking-widest text-steel-700 mb-2 font-medium">
                      {post.category} &middot; {post.readTime}
                    </p>
                    <h3 className="font-serif text-lg text-ink-900 group-hover:text-steel-600 transition-colors leading-snug font-semibold mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-ink-500 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Hunting FAQ */}
          {huntingFaqs.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-heading text-ink-900 mb-6">
                Hunting FAQ
              </h2>
              <div className="space-y-4">
                {huntingFaqs.map((faq) => (
                  <div key={faq.id} className="border-b border-ink-100 pb-4">
                    <h3 className="font-serif text-base text-ink-900 font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-ink-500 leading-relaxed">
                      {faq.answer}
                    </p>
                    {faq.relatedLinks.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-3">
                        {faq.relatedLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="font-sans text-xs text-steel-500 hover:text-ink-900 hover:underline transition-colors"
                          >
                            {link.label} →
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/resources/faq"
                  className="font-sans text-xs uppercase tracking-wider text-steel-700 hover:text-ink-900 font-medium transition-colors"
                >
                  View all FAQs →
                </Link>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div
            className="mt-12 rounded-sm"
            style={{
              background: "rgba(90,106,122,0.06)",
              borderLeft: "3px solid #5a6a7a",
              padding: "16px 20px",
            }}
          >
            <p className="font-sans text-xs text-ink-400 leading-relaxed">
              <strong className="text-ink-500">Disclaimer:</strong> Season dates,
              bag limits, and regulations are based on the most recent published
              data from each state&apos;s wildlife agency and may not reflect
              last-minute changes. Always verify current regulations directly with
              your state wildlife agency before hunting. FirearmSelect is an
              informational resource and does not provide legal advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
