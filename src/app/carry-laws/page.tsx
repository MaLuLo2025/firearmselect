import { Metadata } from "next";
import Link from "next/link";
import { states } from "@/lib/states";

export const metadata: Metadata = {
  title: "Concealed Carry & Open Carry Laws — State-by-State Guide",
  description: "Understand concealed carry and open carry laws across all 50 US states. Constitutional carry, permit requirements, restricted locations, and key distinctions explained.",
};

export default function CarryLawsPage() {
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
              <li className="text-ink-500">Carry Laws</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Know the Law
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            Concealed Carry &amp; Open Carry Laws
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <p className="text-sm text-ink-400 max-w-lg">
            Carry laws vary dramatically by state. This guide covers the three primary frameworks
            governing how Americans legally carry firearms in public.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Constitutional Carry</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              Constitutional carry — also called permitless carry — allows adults who are legally permitted
              to possess firearms to carry concealed without a government-issued permit. The term references
              the Second Amendment as the only &quot;permit&quot; needed. As of 2026, {ccStates.length} states
              have adopted some form of constitutional carry.
            </p>
            <p className="text-sm text-ink-500 leading-relaxed mt-3">
              Even in constitutional carry states, most still issue carry permits voluntarily. These permits
              are useful for interstate reciprocity — many states that require permits will honor permits
              from other states but will not recognize permitless carry from out of state.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Concealed Carry with a Permit</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              {permitStates.length} states require a government-issued permit or license to carry a concealed
              firearm. Requirements vary but typically include a background check, firearms safety training,
              and an application fee. Some states are &quot;shall-issue&quot; (must issue if requirements are met)
              while others are &quot;may-issue&quot; (issuing authority has discretion).
            </p>
            <p className="text-sm text-ink-500 leading-relaxed mt-3">
              The 2022 Supreme Court decision in{" "}
              <a href="https://www.law.cornell.edu/supremecourt/text/20-843" target="_blank" rel="noopener noreferrer" className="text-steel-500 hover:text-ink-900 transition-colors"><em>New York State Rifle &amp; Pistol Association v. Bruen</em></a> struck
              down &quot;proper cause&quot; requirements, holding that states may not require applicants to demonstrate
              a special need for self-defense. This shifted several may-issue states toward shall-issue frameworks.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Open Carry</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              Open carry refers to carrying a firearm visibly in public. Laws vary widely: some states allow
              open carry without any permit, others require a permit, and some prohibit it entirely.
              Open carry laws often differ between handguns and long guns. Many states that adopted
              constitutional carry for concealed weapons already permitted open carry.
            </p>
          </div>

          <div className="bg-cream-100 border-l-[3px] border-ink-900 px-5 py-4">
            <p className="font-serif text-sm text-ink-900 mb-1">Restricted locations</p>
            <p className="font-sans text-xs text-ink-400 leading-relaxed">
              Even in states that allow permitless carry, firearms are typically prohibited in certain
              locations including federal buildings, courthouses, schools, airports (beyond security),
              and establishments that post signage prohibiting firearms. Specific restricted locations
              vary by state — always check your state&apos;s law for a complete list.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Federal resources</h2>
            <div className="space-y-2 mb-8">
              <a href="https://www.atf.gov/firearms/state-laws-and-published-ordinances-firearms-44th-edition" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-steel-500 hover:text-ink-900 transition-colors">
                ATF.gov — State Laws and Published Ordinances &rarr;
              </a>
              <a href="https://www.atf.gov/firearms/federal-law" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-steel-500 hover:text-ink-900 transition-colors">
                ATF.gov — Federal Firearms Laws &rarr;
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Carry Laws by State</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {states.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/gun-laws`}
                  className="border border-ink-100 px-3 py-2 hover:border-ink-300 transition-colors flex items-center justify-between">
                  <span className="font-sans text-xs text-ink-700">{s.name}</span>
                  <span className={`font-sans text-[8px] uppercase tracking-wider px-2 py-0.5 ${s.constitutionalCarry ? "bg-ink-900 text-white" : "bg-cream-200 text-ink-500"}`}>
                    {s.constitutionalCarry ? "Permitless" : "Permit req."}
                  </span>
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
