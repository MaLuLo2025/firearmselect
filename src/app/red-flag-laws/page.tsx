import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Red Flag Laws by State — Extreme Risk Protection Orders Explained",
  description: "Comprehensive state-by-state guide to red flag laws (Extreme Risk Protection Orders). Understand how ERPOs work, which states have them, and the legal process involved.",
};

const redFlagStates = [
  { name: "California", slug: "california", year: 2014, note: "Gun Violence Restraining Order (GVRO). Petitioners: family/household members, law enforcement, employers, coworkers, school employees. Duration: up to 1 year with renewal." },
  { name: "Colorado", slug: "colorado", year: 2020, note: "Extreme Risk Protection Order. Petitioners: family/household members, law enforcement. Duration: up to 364 days with renewal." },
  { name: "Connecticut", slug: "connecticut", year: 1999, note: "Risk Warrant. The first state to adopt a red flag law. Petitioners: state's attorney or law enforcement. Duration: up to 1 year." },
  { name: "Delaware", slug: "delaware", year: 2018, note: "Lethal Violence Protection Order. Petitioners: family members, law enforcement. Duration: up to 1 year with renewal." },
  { name: "Florida", slug: "florida", year: 2018, note: "Risk Protection Order. Enacted after the Parkland shooting under the Marjory Stoneman Douglas Act. Petitioners: law enforcement only. Duration: up to 1 year with renewal." },
  { name: "Hawaii", slug: "hawaii", year: 2020, note: "Gun Violence Protective Order. Petitioners: family/household members, law enforcement, medical professionals, educators. Duration: up to 1 year." },
  { name: "Illinois", slug: "illinois", year: 2019, note: "Firearms Restraining Order. Petitioners: family members, law enforcement. Duration: up to 6 months with renewal." },
  { name: "Indiana", slug: "indiana", year: 2005, note: "Dangerous Person Seizure. Law enforcement may seize firearms from individuals deemed dangerous. Court hearing required within 14 days." },
  { name: "Maryland", slug: "maryland", year: 2018, note: "Extreme Risk Protective Order. Petitioners: family/household members, law enforcement, medical professionals, certain others. Duration: up to 1 year with renewal." },
  { name: "Massachusetts", slug: "massachusetts", year: 2018, note: "Extreme Risk Protection Order. Petitioners: family/household members, law enforcement. Duration: up to 1 year with renewal." },
  { name: "Michigan", slug: "michigan", year: 2024, note: "Extreme Risk Protection Order. Petitioners: family/household members, law enforcement, medical professionals. Duration: up to 1 year." },
  { name: "Minnesota", slug: "minnesota", year: 2023, note: "Extreme Risk Protection Order. Petitioners: family/household members, law enforcement. Duration: up to 1 year with renewal." },
  { name: "Nevada", slug: "nevada", year: 2020, note: "High-Risk Protection Order. Petitioners: family/household members, law enforcement. Duration: up to 1 year with renewal." },
  { name: "New Jersey", slug: "new-jersey", year: 2019, note: "Extreme Risk Protective Order. Petitioners: family/household members, law enforcement. Duration: up to 1 year with renewal." },
  { name: "New Mexico", slug: "new-mexico", year: 2020, note: "Extreme Risk Firearm Protection Order. Petitioners: law enforcement only. Duration: up to 1 year." },
  { name: "New York", slug: "new-york", year: 2019, note: "Extreme Risk Protection Order. Petitioners: family/household members, law enforcement, school administrators, medical professionals. Duration: up to 1 year with renewal." },
  { name: "Oregon", slug: "oregon", year: 2018, note: "Extreme Risk Protection Order. Petitioners: family/household members, law enforcement. Duration: up to 1 year with renewal." },
  { name: "Rhode Island", slug: "rhode-island", year: 2018, note: "Extreme Risk Protection Order. Petitioners: law enforcement only. Duration: up to 1 year with renewal." },
  { name: "Vermont", slug: "vermont", year: 2018, note: "Extreme Risk Protection Order. Petitioners: state's attorney or law enforcement. Duration: up to 6 months with renewal." },
  { name: "Virginia", slug: "virginia", year: 2020, note: "Substantial Risk Order. Petitioners: law enforcement, attorney for the Commonwealth. Duration: up to 180 days." },
  { name: "Washington", slug: "washington", year: 2017, note: "Extreme Risk Protection Order. Petitioners: family/household members, law enforcement. Duration: up to 1 year with renewal." },
];

export default function RedFlagLawsPage() {
  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-ink-500">Red Flag Laws</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Know the Law
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            Red Flag Laws by State
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <p className="text-sm text-ink-400 max-w-lg">
            Red flag laws — formally known as Extreme Risk Protection Orders (ERPOs) — allow courts to
            temporarily remove firearms from individuals determined to pose a danger to themselves or others.
            Currently {redFlagStates.length} states and Washington, D.C. have enacted some form of red flag law.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">How ERPOs Work</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              The general process follows a consistent pattern across states, though specific details vary:
            </p>
            <div className="space-y-4 mt-4">
              {[
                { title: "Petition filed", text: "An eligible petitioner (varies by state — typically family members, law enforcement, or in some states medical professionals and educators) files a petition with the court describing why the individual poses an extreme risk." },
                { title: "Temporary order", text: "A judge may issue an ex parte (without the respondent present) temporary order, typically lasting 7–21 days, if there is probable cause to believe the individual poses an immediate danger. Firearms are surrendered or seized." },
                { title: "Full hearing", text: "A hearing is held where the respondent can present evidence and argue against the order. The petitioner must demonstrate by a preponderance of evidence (or clear and convincing evidence, depending on the state) that the respondent poses a significant risk." },
                { title: "Final order", text: "If granted, a final ERPO typically lasts 6 months to 1 year. The respondent is prohibited from possessing or purchasing firearms for the duration. Most states allow renewal petitions before expiration." },
                { title: "Termination", text: "The respondent may petition the court to terminate the order early by demonstrating they no longer pose a risk. When the order expires or is terminated, firearms are returned." },
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
            <p className="font-serif text-sm text-ink-900 mb-1">Due process protections</p>
            <p className="font-sans text-xs text-ink-400 leading-relaxed">
              Red flag laws have been subject to legal challenges on due process grounds, particularly regarding
              ex parte temporary orders issued before the respondent has an opportunity to be heard. Courts have
              generally upheld these laws, finding that the temporary nature and subsequent hearing requirements
              provide sufficient procedural protections. The legal landscape continues to evolve.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">States with Red Flag Laws</h2>
            <div className="space-y-3">
              {redFlagStates.map((s) => (
                <div key={s.slug} className="border border-ink-100 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link href={`/${s.slug}/gun-laws`} className="font-serif text-subheading text-ink-900 hover:text-steel-600 transition-colors">
                      {s.name}
                    </Link>
                    <span className="font-sans text-[9px] uppercase tracking-wider text-ink-300">
                      Since {s.year}
                    </span>
                  </div>
                  <p className="text-xs text-ink-400 leading-relaxed">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Federal Red Flag Legislation</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              The Bipartisan Safer Communities Act, signed into law in June 2022, provides federal funding to
              incentivize states to implement red flag laws and crisis intervention programs. The law does not
              create a federal ERPO — it provides grants to states that enact or already have such laws. It also
              enhanced the background check process for firearm purchasers under 21.
            </p>
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
