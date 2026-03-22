import { Metadata } from "next";
import Link from "next/link";
import { states } from "@/lib/states";

export const metadata: Metadata = {
  title: "Interstate Carry Reciprocity — Which States Honor Your Permit",
  description: "Understand interstate firearms carry reciprocity. Learn which states honor out-of-state concealed carry permits and how to legally transport firearms across state lines.",
};

export default function ReciprocityPage() {
  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-ink-500">Reciprocity &amp; Travel</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Know the Law
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            Interstate Carry Reciprocity
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <p className="text-sm text-ink-400 max-w-lg">
            Concealed carry permits are issued by individual states, and each state decides which
            out-of-state permits it will honor. Understanding reciprocity is essential before
            traveling with a firearm.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">How Reciprocity Works</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              Reciprocity agreements are arrangements between states to honor each other&apos;s concealed carry
              permits. These agreements are not uniform — State A may honor State B&apos;s permit while State B
              does not honor State A&apos;s. Some states honor all out-of-state permits, some honor none, and
              most fall somewhere in between.
            </p>
            <p className="text-sm text-ink-500 leading-relaxed mt-3">
              Constitutional carry states generally allow any person who meets their carry requirements
              to carry within their borders, regardless of residency. However, this does not mean your
              home state&apos;s constitutional carry status extends to other states — it does not.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Key Principles for Interstate Travel</h2>
            <div className="space-y-4">
              {[
                { title: "Research every state on your route", text: "You must comply with the laws of each state you pass through, not just your destination. A legal firearm in your home state may be illegal in a state you drive through." },
                { title: "Federal Peaceable Journey law (FOPA)", text: "Under 18 U.S.C. § 926A, you may transport a firearm through a state where it would otherwise be illegal, provided the firearm is unloaded, not readily accessible, and legal at both your origin and destination. This is a narrow protection — stops, detours, or overnight stays may void it." },
                { title: "Flying with firearms", text: "TSA allows firearms in checked baggage only. The firearm must be unloaded, in a hard-sided locked case, and declared at check-in. Ammunition must be in its original packaging or a container designed for it. Check your airline's specific policies in addition to TSA rules." },
                { title: "Vehicle storage requirements vary", text: "Some states require firearms to be stored in the trunk or a locked container while in a vehicle. Others allow loaded firearms in the passenger compartment with or without a permit. These rules differ significantly and can result in criminal charges if violated." },
                { title: "Magazine and ammunition restrictions", text: "Some states restrict magazine capacity (commonly 10 or 15 rounds) or ban certain types of ammunition. A magazine that is legal in your home state may be a criminal offense in your destination state. Check before you travel." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-0.5 bg-ink-900 shrink-0" />
                  <div>
                    <h3 className="font-serif text-subheading text-ink-900">{item.title}</h3>
                    <p className="text-xs text-ink-400 leading-relaxed mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream-100 border-l-[3px] border-ink-900 px-5 py-4">
            <p className="font-serif text-sm text-ink-900 mb-1">No federal concealed carry reciprocity</p>
            <p className="font-sans text-xs text-ink-400 leading-relaxed">
              There is currently no federal law requiring states to honor out-of-state concealed carry permits.
              Several bills have been introduced in Congress over the years, but none have been enacted.
              Until such a law passes, reciprocity is governed entirely by individual state agreements.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Check Your State&apos;s Laws</h2>
            <p className="text-xs text-ink-400 mb-4">
              Select your state to see its full gun law summary, including carry permit details.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {states.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/gun-laws`}
                  className="border border-ink-100 px-3 py-2 hover:border-ink-300 transition-colors">
                  <span className="font-sans text-xs text-ink-700">{s.name}</span>
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
            Always verify current statutes and consult a qualified attorney before traveling with firearms.
          </p>
        </div>
      </section>
    </>
  );
}
