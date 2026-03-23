import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getStateBySlug, states } from "@/lib/states";
import { getStateResources } from "@/lib/state-resources";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const state = getStateBySlug(params.state);
  if (!state) return {};
  const title = `${state.name} Gun Laws — Carry, Purchase & Ownership Guide`;
  const description = `Comprehensive guide to ${state.name} firearms laws including concealed carry, open carry, purchase requirements, and prohibited locations. Updated for 2026.`;
  return { title, description, openGraph: { title, description } };
}

export default function StateGunLawsPage({ params }: { params: { state: string } }) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  const resources = getStateResources(state.slug);

  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/states" className="hover:text-ink-900 transition-colors">State Laws</Link></li>
              <li>/</li>
              <li className="text-ink-500">{state.name}</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            State Laws &middot; {state.abbr}
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            {state.name} Gun Laws
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <div className="flex gap-3 mt-4">
            <span className={`font-sans text-[10px] uppercase tracking-wider px-3 py-1 ${state.constitutionalCarry ? "bg-ink-900 text-white" : "bg-cream-200 text-ink-500"}`}>
              {state.constitutionalCarry ? "Constitutional carry" : "Permit required"}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Overview</h2>
            <p className="text-sm text-ink-500 leading-relaxed">{state.description}</p>
          </div>

          <div className="bg-cream-100 border-l-[3px] border-ink-900 px-5 py-4">
            <p className="font-serif text-sm text-ink-900 mb-1">Legal disclaimer</p>
            <p className="font-sans text-xs text-ink-400 leading-relaxed">
              This summary is for informational purposes only. Firearms laws change frequently.
              Always verify current statutes and consult a qualified attorney before making legal decisions.
            </p>
          </div>

          <div className="text-center py-8 border border-ink-100">
            <p className="font-serif text-sm text-ink-900 mb-2">More {state.name} content coming soon</p>
            <p className="font-sans text-xs text-ink-400 mb-4">Detailed law breakdowns and carry-specific guides.</p>
            <Link href={`/dealers/${state.slug}`}
              className="font-sans text-[10px] uppercase tracking-widest text-steel-500 hover:text-ink-900 transition-colors">
              Find shops &amp; ranges in {state.name} &rarr;
            </Link>
          </div>

          {/* Sources & official resources */}
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Sources &amp; official resources</h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="w-0.5 bg-ink-900 shrink-0" />
                <div>
                  <h3 className="font-serif text-subheading text-ink-900">Federal firearms laws</h3>
                  <a href="https://www.atf.gov/rules-and-regulations/laws-alcohol-tobacco-firearms-and-explosives" target="_blank" rel="noopener noreferrer"
                    className="text-xs text-steel-500 hover:text-ink-900 transition-colors">
                    ATF.gov — Laws: Alcohol, Tobacco, Firearms &amp; Explosives &rarr;
                  </a>
                </div>
              </div>
              {resources && (
                <>
                  <div className="flex gap-4">
                    <div className="w-0.5 bg-ink-900 shrink-0" />
                    <div>
                      <h3 className="font-serif text-subheading text-ink-900">{state.name} statutes</h3>
                      <a href={resources.legislature.url} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-steel-500 hover:text-ink-900 transition-colors">
                        {resources.legislature.name} &rarr;
                      </a>
                      {!/statutes|statute|firearms|weapons/i.test(resources.legislature.url) && (
                        <p className="text-xs italic text-ink-300 mt-1">
                          This link goes to {state.name}&apos;s legislative website. To find specific firearms statutes,
                          search for terms like &quot;concealed carry,&quot; &quot;firearms,&quot; or &quot;weapons permit&quot; in the site&apos;s search function.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-0.5 bg-ink-900 shrink-0" />
                    <div>
                      <h3 className="font-serif text-subheading text-ink-900">Permits &amp; licensing</h3>
                      <a href={resources.permits.url} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-steel-500 hover:text-ink-900 transition-colors">
                        {resources.permits.name} &rarr;
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
