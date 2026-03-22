import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlug } from "@/lib/states";
import { getCityBySlug } from "@/lib/cities";
import { dealers, getDealersByCity } from "@/lib/dealers";

export function generateStaticParams() {
  return dealers.map((d) => ({
    state: d.state,
    city: d.citySlug,
    dealer: d.slug,
  }));
}

export function generateMetadata({ params }: { params: { state: string; city: string; dealer: string } }): Metadata {
  const state = getStateBySlug(params.state);
  const dealer = dealers.find((d) => d.slug === params.dealer && d.state === params.state);
  if (!state || !dealer) return {};
  const title = `${dealer.name} — ${dealer.city}, ${state.abbr}`;
  const description = dealer.description;
  return { title, description, openGraph: { title, description } };
}

export default function DealerDetailPage({ params }: { params: { state: string; city: string; dealer: string } }) {
  const state = getStateBySlug(params.state);
  const city = getCityBySlug(params.state, params.city);
  const dealer = dealers.find(
    (d) => d.slug === params.dealer && d.state === params.state && d.citySlug === params.city
  );
  if (!state || !city || !dealer) notFound();

  const relatedDealers = getDealersByCity(state.slug, city.slug).filter((d) => d.id !== dealer.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: dealer.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: dealer.address,
      addressLocality: dealer.city,
      addressRegion: state.abbr,
    },
    telephone: dealer.phone,
    ...(dealer.website && { url: dealer.website }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: dealer.rating,
      reviewCount: dealer.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/dealers" className="hover:text-ink-900 transition-colors">Dealers</Link></li>
              <li>/</li>
              <li><Link href={`/${state.slug}/gun-laws`} className="hover:text-ink-900 transition-colors">{state.name}</Link></li>
              <li>/</li>
              <li><Link href={`/${state.slug}/${city.slug}`} className="hover:text-ink-900 transition-colors">{city.name}</Link></li>
              <li>/</li>
              <li className="text-ink-500">{dealer.name}</li>
            </ol>
          </nav>
          <div className="flex gap-2 flex-wrap mb-3">
            {dealer.categories.map((cat) => (
              <span key={cat} className="font-sans text-[10px] uppercase tracking-wider text-ink-400 border border-ink-100 px-3 py-1">
                {cat.replace(/-/g, " ")}
              </span>
            ))}
            {dealer.featured && (
              <span className="font-sans text-[10px] uppercase tracking-wider bg-ink-900 text-white px-3 py-1">
                Featured
              </span>
            )}
          </div>
          <h1 className="font-serif text-display-sm text-ink-900">{dealer.name}</h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <p className="font-sans text-xs text-ink-400">
            {dealer.city}, {state.abbr} &middot; {dealer.rating} ({dealer.reviewCount} reviews)
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">About</h2>
            <p className="text-sm text-ink-500 leading-relaxed">{dealer.description}</p>
          </div>

          <div className="border border-ink-100 p-5 space-y-3">
            <h3 className="font-serif text-subheading text-ink-900 mb-3">Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-ink-400">Address</span>
                <span className="text-ink-700 text-right">{dealer.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-400">Phone</span>
                <a href={`tel:${dealer.phone}`} className="text-ink-700 hover:text-steel-600 transition-colors">{dealer.phone}</a>
              </div>
              {dealer.website && (
                <div className="flex justify-between">
                  <span className="text-ink-400">Website</span>
                  <a href={dealer.website} target="_blank" rel="noopener noreferrer"
                    className="text-steel-500 hover:text-ink-900 transition-colors">
                    Visit website &rarr;
                  </a>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-ink-400">Rating</span>
                <span className="text-ink-700">{dealer.rating} ({dealer.reviewCount} reviews)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-400">Categories</span>
                <span className="text-ink-700 text-right">{dealer.categories.map((c) => c.replace(/-/g, " ")).join(", ")}</span>
              </div>
            </div>
          </div>

          {relatedDealers.length > 0 && (
            <div>
              <h2 className="font-serif text-heading text-ink-900 mb-4">
                Other dealers in {city.name}
              </h2>
              <div className="space-y-3">
                {relatedDealers.map((d) => (
                  <Link key={d.id} href={`/${state.slug}/${city.slug}/${d.slug}`}
                    className="block border border-ink-100 p-4 hover:border-ink-300 transition-colors">
                    <h3 className="font-serif text-subheading text-ink-900">{d.name}</h3>
                    <p className="font-sans text-xs text-ink-400 mt-1">
                      {d.categories.map((c) => c.replace(/-/g, " ")).join(", ")} &middot; {d.rating} ({d.reviewCount})
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 flex-wrap">
            <Link href={`/${state.slug}/${city.slug}`}
              className="font-sans text-[10px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors">
              All {city.name} dealers &rarr;
            </Link>
            <Link href={`/${state.slug}/gun-laws`}
              className="font-sans text-[10px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors">
              {state.name} gun laws &rarr;
            </Link>
          </div>
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
