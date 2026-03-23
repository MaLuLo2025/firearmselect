import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Firearms Safety & Storage — Responsible Gun Ownership Guide",
  description: "Comprehensive guide to firearms safety and secure storage. Learn the fundamental rules of gun safety, safe storage practices, and responsible ownership principles.",
};

export default function SafetyPage() {
  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-ink-500">Safety &amp; Storage</li>
            </ol>
          </nav>
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-steel-500 mb-3">
            Responsible Ownership
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">
            Firearms Safety &amp; Storage
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <p className="text-sm text-ink-400 max-w-lg">
            Owning a firearm is a constitutional right that comes with serious responsibility.
            Safe handling and secure storage are foundational to responsible gun ownership.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">The Four Fundamental Rules</h2>
            <p className="text-xs text-ink-400 mb-4">
              These rules, developed by firearms safety experts over decades, are universally accepted.
              Following all four simultaneously prevents virtually all negligent discharges.
            </p>
            <div className="space-y-4">
              {[
                { num: "1", title: "Treat every firearm as if it is loaded", text: "Always assume a firearm is loaded until you have personally verified otherwise. Even after verifying, continue to handle it with the same care you would a loaded weapon. This mindset prevents complacency." },
                { num: "2", title: "Never point the muzzle at anything you are not willing to destroy", text: "Be aware of your muzzle direction at all times — while carrying, handling, cleaning, and storing. If a negligent discharge occurs, the only thing that determines the outcome is where the muzzle was pointed." },
                { num: "3", title: "Keep your finger off the trigger until ready to fire", text: "Your trigger finger should rest along the frame or slide (indexed) until your sights are on target and you have made the decision to shoot. This applies during drawing, holstering, and all manipulation." },
                { num: "4", title: "Be sure of your target and what is beyond it", text: "Positively identify your target before firing. Know what is behind and around your target — bullets can pass through targets, miss, or ricochet. You are responsible for every round you fire." },
              ].map((rule) => (
                <div key={rule.num} className="border border-ink-100 p-5">
                  <div className="flex gap-4 items-start">
                    <span className="font-serif text-display-sm text-ink-200 leading-none">{rule.num}</span>
                    <div>
                      <h3 className="font-serif text-subheading text-ink-900">{rule.title}</h3>
                      <p className="text-xs text-ink-400 leading-relaxed mt-2">{rule.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Secure Storage</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              Secure storage prevents unauthorized access — particularly by children, untrained individuals,
              and thieves. Several states now have safe storage laws with criminal penalties for failing to
              secure firearms, but responsible storage is important regardless of legal requirements.
            </p>
            <div className="space-y-4 mt-6">
              {[
                { title: "Gun safes", text: "A dedicated gun safe is the most secure option. Look for safes that are fire-rated, pry-resistant, and heavy enough to resist removal. Bolt floor safes to the foundation when possible. Electronic and biometric locks offer faster access than combination locks." },
                { title: "Lock boxes and cable locks", text: "For individual firearms, a lock box or cable lock provides basic security at lower cost. Many firearms come with a cable lock included. These are suitable for preventing casual access but are less secure than a full safe." },
                { title: "Trigger locks", text: "Trigger locks prevent the trigger from being pulled. They are inexpensive and widely available. However, they do not prevent the firearm from being stolen, and some models can be defeated relatively easily." },
                { title: "Ammunition storage", text: "Store ammunition separately from firearms when possible, especially if children are present. Keep ammunition in a cool, dry location in its original packaging or in ammo cans. Do not store ammunition in areas subject to extreme heat." },
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

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Children &amp; Firearms</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              If there are children in your home or children who visit, securing firearms is not optional — it
              is a critical responsibility. Curiosity is natural, and children may encounter firearms at friends&apos;
              homes even if you do not own one. Consider these principles:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Store all firearms locked and unloaded, with ammunition stored separately",
                "Educate children that if they find a firearm, they should stop, not touch it, leave the area, and tell an adult",
                "Do not rely on hiding a firearm as a substitute for locking it — children find hidden objects",
                "If your child visits other homes, ask whether firearms are present and how they are stored",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-xs text-ink-400 leading-relaxed">
                  <span className="text-ink-300 shrink-0">&mdash;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Cleaning &amp; Maintenance</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              Regular cleaning and maintenance keeps firearms functioning safely and reliably.
              Always verify a firearm is unloaded before cleaning. Clean in a well-ventilated area —
              cleaning solvents produce fumes that should not be inhaled. Follow the manufacturer&apos;s
              recommended maintenance schedule and use appropriate cleaning supplies for your firearm type.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-heading text-ink-900 mb-4">Resources</h2>
            <div className="space-y-2">
              <a href="https://home.nra.org" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-steel-500 hover:text-ink-900 transition-colors">
                NRA — Firearms Safety &rarr;
              </a>
              <a href="https://projectchildsafe.org" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-steel-500 hover:text-ink-900 transition-colors">
                Project ChildSafe — Safe Storage &amp; Education &rarr;
              </a>
              <a href="https://www.atf.gov/rules-and-regulations/laws-alcohol-tobacco-firearms-and-explosives" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-steel-500 hover:text-ink-900 transition-colors">
                ATF.gov — Laws: Alcohol, Tobacco, Firearms &amp; Explosives &rarr;
              </a>
            </div>
          </div>

          <div className="bg-cream-100 border-l-[3px] border-ink-900 px-5 py-4">
            <p className="font-serif text-sm text-ink-900 mb-1">Training matters</p>
            <p className="font-sans text-xs text-ink-400 leading-relaxed">
              Reading about safety is a starting point, not a substitute for hands-on training.
              Take a firearms safety course from a certified instructor — especially if you are a new
              gun owner. Many states require training for a carry permit, but training is valuable even
              where not legally required.{" "}
              <Link href="/dealers" className="text-steel-500 hover:text-ink-900 transition-colors">
                Find instructors near you &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-cream-100 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] text-ink-300 leading-relaxed">
            This page is for informational purposes only. FirearmSelect is not a substitute for professional
            firearms training. Always follow manufacturer instructions and consult a certified instructor.
          </p>
        </div>
      </section>
    </>
  );
}
