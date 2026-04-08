import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlug } from "@/lib/states";
import { cities, getCitiesByState, getCityBySlug } from "@/lib/cities";
import { getDealersByCity } from "@/lib/dealers";
import { categories } from "@/lib/categories";
import TrackedListingMount from "@/components/TrackedListingMount";

export function generateStaticParams() {
  return cities.map((c) => ({ state: c.stateSlug, city: c.slug }));
}

export function generateMetadata({ params }: { params: { state: string; city: string } }): Metadata {
  const state = getStateBySlug(params.state);
  const city = getCityBySlug(params.state, params.city);
  if (!state || !city) return {};
  const title = `Gun Shops, Ranges & Instructors in ${city.name}, ${state.abbr}`;
  const description = `Find trusted gun shops, shooting ranges, FFL dealers, and firearms instructors in ${city.name}, ${state.name}. Factual listings with direct links.`;
  return { title, description, openGraph: { title, description } };
}

export default function CityDealersPage({ params }: { params: { state: string; city: string } }) {
  const state = getStateBySlug(params.state);
  const city = getCityBySlug(params.state, params.city);
  if (!state || !city) notFound();

  const cityDealers = getDealersByCity(state.slug, city.slug);
  const otherCities = getCitiesByState(state.slug).filter((c) => c.slug !== city.slug);

  const activeCats = categories.filter((cat) =>
    cityDealers.some((d) => d.categories.includes(cat.slug))
  );

  return (
    <>
      <TrackedListingMount
        category="all_dealers"
        city={city.name}
        state={state.abbr}
        resultCount={cityDealers.length}
      />
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/dealers" className="hover:text-ink-900 transition-colors">Shops &amp; Ranges</Link></li>
              <li>/</li>
              <li><Link href={`/dealers/${state.slug}`} className="hover:text-ink-900 transition-colors">{state.name}</Link></li>
              <li>/</li>
              <li className="text-ink-500">{city.name}</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Shops, Ranges &amp; Instructors &middot; {state.abbr}
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            Gun Shops, Ranges &amp; Instructors in {city.name}, {state.abbr}
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          {cityDealers.length > 0 ? (
            <p className="text-sm text-ink-400">
              {cityDealers.length} {cityDealers.length === 1 ? "listing" : "listings"}
            </p>
          ) : (
            <p className="text-sm text-ink-400">
              Listings coming soon
            </p>
          )}
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

      {cityDealers.length > 0 ? (
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            {cityDealers.map((d) => (
              <div key={d.id} className="border border-ink-100 p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-subheading text-ink-900">
                    <Link href={`/dealers/${state.slug}/${city.slug}/${d.slug}`} className="hover:text-steel-600 transition-colors">
                      {d.name}
                    </Link>
                  </h3>
                  <p className="font-sans text-xs text-ink-400 mt-1">
                    {d.city}, {state.abbr} &middot;{" "}
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
        </section>
      ) : (
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12 border border-ink-100">
              <p className="font-serif text-sm text-ink-900 mb-2">
                Gun shops, ranges &amp; instructors in {city.name} coming soon
              </p>
              <p className="font-sans text-xs text-ink-400 mb-6 max-w-sm mx-auto">
                We&apos;re adding verified listings for {city.name}, {state.abbr}. Check back soon or browse other locations.
              </p>
              <div className="flex justify-center gap-4">
                <Link href={`/dealers/${state.slug}`}
                  className="font-sans text-[10px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors border border-ink-100 px-4 py-2">
                  All {state.name} listings
                </Link>
                <Link href="/dealers"
                  className="font-sans text-[10px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors border border-ink-100 px-4 py-2">
                  All states
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-4">
            <Link href={`/${state.slug}/gun-laws`}
              className="font-sans text-[10px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors">
              View {state.name} gun laws &rarr;
            </Link>
          </div>
          {otherCities.length > 0 && (
            <div>
              <p className="font-sans text-[10px] uppercase tracking-wider text-ink-400 mb-3">
                Other cities in {state.name}
              </p>
              <div className="flex gap-3 flex-wrap">
                {otherCities.map((c) => (
                  <Link key={c.slug} href={`/dealers/${state.slug}/${c.slug}`}
                    className="font-sans text-xs text-steel-500 hover:text-ink-900 transition-colors border border-ink-100 px-3 py-1">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-6 bg-cream-100 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] text-ink-300 leading-relaxed">
            FirearmSelect does not endorse or recommend any specific dealer, range, or instructor. Listings are based on publicly available
            information. Verify credentials and comply with all applicable laws before conducting any transaction.
          </p>
        </div>
      </section>
    </>
  );
}
