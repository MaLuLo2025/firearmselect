import { Metadata } from "next";
import Link from "next/link";
import { states } from "@/lib/states";

export const metadata: Metadata = {
  title: "Gun Laws by State — All 50 States Carry, Purchase & Ownership Guide",
  description: "Comprehensive state-by-state guide to firearms laws across all 50 US states. Constitutional carry status, permit requirements, and key regulations for each state.",
};

export default function StatesPage() {
  const ccStates = states.filter((s) => s.constitutionalCarry);
  const permitStates = states.filter((s) => !s.constitutionalCarry);

  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-ink-500">State Gun Laws</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Know the Law
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            Gun Laws by State
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <p className="text-sm text-ink-400 max-w-lg">
            Every state has different firearms laws governing carry, purchase, and ownership.
            Select a state below for a detailed summary with links to the actual statutes.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-heading text-ink-900">Constitutional Carry States</h2>
              <span className="font-sans text-[10px] uppercase tracking-wider bg-ink-900 text-white px-3 py-1">
                {ccStates.length} states
              </span>
            </div>
            <p className="text-xs text-ink-400 mb-6 max-w-lg">
              These states allow adults who are legally permitted to possess firearms to carry concealed without a government-issued permit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ccStates.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/gun-laws`}
                  className="border border-ink-100 p-4 hover:border-ink-300 transition-colors group">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-subheading text-ink-900 group-hover:text-steel-600 transition-colors">
                      {s.name}
                    </h3>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-ink-300">{s.abbr}</span>
                  </div>
                  <p className="text-xs text-ink-400 leading-relaxed line-clamp-2">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-heading text-ink-900">Permit-Required States</h2>
              <span className="font-sans text-[10px] uppercase tracking-wider bg-cream-200 text-ink-500 px-3 py-1">
                {permitStates.length} states
              </span>
            </div>
            <p className="text-xs text-ink-400 mb-6 max-w-lg">
              These states require a government-issued permit or license for concealed carry.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {permitStates.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/gun-laws`}
                  className="border border-ink-100 p-4 hover:border-ink-300 transition-colors group">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-subheading text-ink-900 group-hover:text-steel-600 transition-colors">
                      {s.name}
                    </h3>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-ink-300">{s.abbr}</span>
                  </div>
                  <p className="text-xs text-ink-400 leading-relaxed line-clamp-2">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-cream-100 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] text-ink-300 leading-relaxed">
            This page is for informational purposes only. Firearms laws change frequently.
            Always verify current statutes and consult a qualified attorney before making legal decisions.
          </p>
        </div>
      </section>
    </>
  );
}
