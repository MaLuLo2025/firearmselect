import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FirearmSelect",
  description: "FirearmSelect is the informed firearms directory — connecting buyers with trusted dealers and providing factual, non-partisan firearms education.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-steel-500 text-[10px] uppercase tracking-[0.25em] mb-3">About</p>
          <h1 className="font-serif text-display-sm text-ink-900">The informed firearms directory</h1>
          <div className="section-divider mt-6" />
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">What we believe</h2>
            <p className="text-sm text-ink-500 leading-relaxed">The Second Amendment is a fundamental constitutional right. Exercising that right responsibly requires accurate information — about the laws that govern firearms ownership in your state, about the dealers and ranges in your community, and about the practical realities of safe, responsible gun ownership.</p>
            <p className="text-sm text-ink-500 leading-relaxed mt-4">FirearmSelect exists to provide that information in one place, without advocacy, without spin, and without paid placements that compromise trust.</p>
          </div>
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">What we do</h2>
            <div className="space-y-5">
              {[
                { title: "Connect buyers with trusted dealers", text: "Find local gun shops, FFL dealers, shooting ranges, and certified instructors. Every listing links directly to the dealer's own website — no lead capture, no middlemen." },
                { title: "Explain the law, state by state", text: "Firearms laws are complex and vary dramatically by state. We summarize each state's laws in plain language and link to the actual statutes so you can verify everything yourself." },
                { title: "Educate without advocating", text: "Our blog covers constitutional law, carry regulations, safety practices, and buying guides. Every article is factual, non-partisan, and cited to primary sources. We present the law as it is, not as we wish it were." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-0.5 bg-ink-900 shrink-0" />
                  <div>
                    <h3 className="font-serif text-subheading text-ink-900">{item.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Our standards</h2>
            <p className="text-sm text-ink-500 leading-relaxed">Every law we reference links to the actual statute. Every dealer listing is factual — certifications, services, location, and verifiable information only. We never use superlative claims, unverifiable rankings, or language that implies we endorse one dealer over another. We are a resource, not an advocate.</p>
          </div>
        </div>
      </section>
    </>
  );
}
