import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlug, states } from "@/lib/states";
import { getDealersByState } from "@/lib/dealers";
import { getCitiesByState } from "@/lib/cities";
import { categories } from "@/lib/categories";

export function generateStaticParams() {
  return states
    .filter((s) => getDealersByState(s.slug).length > 0)
    .map((s) => ({ state: s.slug }));
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const state = getStateBySlug(params.state);
  if (!state) return {};
  const title = `Firearms Dealers in ${state.name} — Gun Shops, Ranges & FFLs by City`;
  const description = `Browse trusted firearms dealers in ${state.name} by city. Find local gun shops, FFL transfer dealers, shooting ranges, and certified instructors.`;
  return { title, description, openGraph: { title, description } };
}

export default function StateDealersPage({ params }: { params: { state: string } }) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const stateDealers = getDealersByState(state.slug);
  if (stateDealers.length === 0) notFound();

  const stateCities = getCitiesByState(state.slug);

  const activeCats = categories.filter((cat) =>
    stateDealers.some((d) => d.categories.includes(cat.slug))
  );

  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/dealers" className="hover:text-ink-900 transition-colors">Dealers</Link></li>
              <li>/</li>
              <li className="text-ink-500">{state.name}</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Dealers &middot; {state.abbr}
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            Firearms Dealers in {state.name}
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <p className="text-sm text-ink-400">
            {stateDealers.length} {stateDealers.length === 1 ? "dealer" : "dealers"} in {stateCities.length} {stateCities.length === 1 ? "city" : "cities"}
          </p>
        </div>
      </section>

      {activeCats.length > 0 && (
        <section className="py-8 border-b border-ink-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-4 flex-wrap">
              {activeCats.map((cat) => (
                <span key={cat.slug} className="font-sans text-[10px] uppercase tracking-wider text-ink-400 border border-ink-100 px-4 py-2">
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {stateCities.map((city) => {
            const cityDealers = stateDealers.filter((d) => d.citySlug === city.slug);
            return (
              <div key={city.slug}>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="font-serif text-heading text-ink-900">
                    <Link href={`/dealers/${state.slug}/${city.slug}`} className="hover:text-steel-600 transition-colors">
                      {city.name}
                    </Link>
                  </h2>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-ink-300">
                    {cityDealers.length} {cityDealers.length === 1 ? "dealer" : "dealers"}
                  </span>
                </div>
                <div className="space-y-3">
                  {cityDealers.map((d) => (
                    <div key={d.id} className="border border-ink-100 p-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-subheading text-ink-900">
                          <Link href={`/dealers/${state.slug}/${city.slug}/${d.slug}`} className="hover:text-steel-600 transition-colors">
                            {d.name}
                          </Link>
                        </h3>
                        <p className="font-sans text-xs text-ink-400 mt-1">
                          {d.categories.map((c) => c.replace(/-/g, " ")).join(", ")}
                        </p>
                        <p className="text-xs text-ink-400 mt-2 leading-relaxed">{d.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-sans text-xs text-ink-500">{d.rating} ({d.reviewCount})</p>
                        <Link href={`/dealers/${state.slug}/${city.slug}/${d.slug}`}
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

      <section className="py-12 sm:py-16 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${state.slug}/gun-laws`}
            className="font-sans text-[10px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors">
            View {state.name} gun laws &rarr;
          </Link>
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
