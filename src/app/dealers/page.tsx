import { Metadata } from "next";
import Link from "next/link";
import { dealers } from "@/lib/dealers";
import { states, getStateBySlug } from "@/lib/states";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Find Firearms Dealers — Gun Shops, FFLs, Ranges & Instructors",
  description: "Browse trusted firearms dealers by state. Find local gun shops, FFL transfer dealers, shooting ranges, and certified instructors near you.",
};

export default function DealersPage() {
  const statesWithDealers = states.filter((s) =>
    dealers.some((d) => d.state === s.slug)
  );

  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-steel-500 mb-3">
            Directory
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">Find dealers</h1>
          <div className="section-divider mt-6 mb-6" />
          <p className="text-sm text-ink-400 max-w-md mx-auto">
            Browse trusted firearms dealers by state. Factual listings with direct links
            to dealer websites. No paid placements.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-ink-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <span key={cat.slug} className="font-sans text-[10px] uppercase tracking-wider text-ink-400 border border-ink-100 px-4 py-2">
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Dealers by state */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {statesWithDealers.map((state) => {
            const stateDealers = dealers.filter((d) => d.state === state.slug);
            return (
              <div key={state.slug}>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="font-serif text-heading text-ink-900">{state.name}</h2>
                  <Link href={`/${state.slug}/gun-laws`}
                    className="font-sans text-[9px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors">
                    View {state.abbr} gun laws
                  </Link>
                </div>
                <div className="space-y-3">
                  {stateDealers.map((d) => (
                    <div key={d.id} className="border border-ink-100 p-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-subheading text-ink-900">
                          <Link href={`/dealers/${d.state}/${d.citySlug}/${d.slug}`} className="hover:text-steel-600 transition-colors">
                            {d.name}
                          </Link>
                        </h3>
                        <p className="font-sans text-xs text-ink-400 mt-1">
                          <Link href={`/dealers/${d.state}/${d.citySlug}`} className="hover:text-ink-900 transition-colors">
                            {d.city}
                          </Link>
                          , {state.abbr} &middot;{" "}
                          {d.categories.map((c) => c.replace(/-/g, " ")).join(", ")}
                        </p>
                        <p className="text-xs text-ink-400 mt-2 leading-relaxed">{d.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-sans text-xs text-ink-500">{d.rating} ({d.reviewCount})</p>
                        <Link href={`/dealers/${d.state}/${d.citySlug}/${d.slug}`}
                          className="inline-block mt-2 font-sans text-[10px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors">
                          View details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-6 bg-cream-100 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] text-ink-300 leading-relaxed">
            FirearmSelect does not endorse or recommend any specific dealer. Listings are based on publicly available
            information. Verify dealer credentials and comply with all applicable laws before conducting any transaction.
          </p>
        </div>
      </section>
    </>
  );
}
