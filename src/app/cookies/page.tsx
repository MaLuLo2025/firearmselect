import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "FirearmSelect cookie policy — what cookies we use and how to manage them.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-steel-500 text-[10px] uppercase tracking-[0.25em] mb-3">Legal</p>
          <h1 className="font-serif text-display-sm text-ink-900">Cookie Policy</h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-3" />
          <p className="text-xs text-ink-300">Effective date: August 15, 2026</p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">What are cookies</h2>
            <p className="text-sm text-ink-400 leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. Some of what we describe below is stored as a cookie; some is stored using your browser&apos;s local storage instead. We say which is which below.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Cookies and local storage we use</h2>
            <p className="text-sm text-ink-400 leading-relaxed mb-3">
              <strong className="text-ink-600">Essential.</strong> Required for the Site to function — for example, remembering your cookie consent choice so we don&apos;t ask you again every visit, and basic security and navigation. These cannot be disabled.
            </p>
            <p className="text-sm text-ink-400 leading-relaxed">
              <strong className="text-ink-600">Analytics.</strong> Controls whether Google Analytics 4 is allowed to measure your visit. When this is on, Google Analytics sets cookies named <code className="text-ink-600">_ga</code> and <code className="text-ink-600">_ga_*</code> to distinguish visitors and sessions, and we use the resulting data to understand how the Site is used and improve it. When this is off, those cookies are not set. See &ldquo;Google Analytics&rdquo; below for full detail.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">How your consent choice is stored</h2>
            <p className="text-sm text-ink-400 leading-relaxed">
              Your Essential/Analytics choices are stored in your browser&apos;s local storage (not a cookie), under the keys <code className="text-ink-600">cookie_consent</code> and <code className="text-ink-600">cookie_prefs</code>. Local storage isn&apos;t cleared on any fixed schedule — it persists until you clear your browser&apos;s site data for this domain, or until you change your preferences again through Cookie Preferences, described below.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Google Analytics</h2>
            <p className="text-sm text-ink-400 leading-relaxed mb-3">
              We use Google Analytics 4, which operates under Google&apos;s Consent Mode. Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-ink-400 leading-relaxed mb-3">
              <li>Analytics cookies (<code className="text-ink-600">_ga</code>, <code className="text-ink-600">_ga_*</code>) are <strong className="text-ink-600">not set</strong> unless you grant Analytics consent, either by clicking &ldquo;Accept&rdquo; or by turning on Analytics in Cookie Preferences.</li>
              <li>If you later turn Analytics off, any Analytics cookies already on your device are <strong className="text-ink-600">actively deleted</strong>, not just left to expire.</li>
            </ul>
            <p className="text-sm text-ink-400 leading-relaxed mb-3">
              When Analytics consent is denied, Google&apos;s tag may still send a limited, anonymized signal to Google for basic aggregate measurement. This signal does not include a cookie and does not include any identifier that persists across visits or links back to you individually. It is not the same as the tracking that happens once you grant consent, and we do not use it to build a profile of you.
            </p>
            <p className="text-sm text-ink-400 leading-relaxed">
              Google&apos;s own use of this data is governed by{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-steel-500 underline underline-offset-2">
                Google&apos;s Privacy Policy
              </a>.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Managing your preferences</h2>
            <p className="text-sm text-ink-400 leading-relaxed mb-3">
              You can change or withdraw your consent at any time using the <strong className="text-ink-600">Cookie Preferences</strong> link in the site footer. Opening it shows your currently saved choices — not defaults — and any change takes effect immediately, without needing to reload the page.
            </p>
            <p className="text-sm text-ink-400 leading-relaxed">
              You can also control cookies through your browser&apos;s own settings, which will affect this and every other site you visit; see your browser&apos;s help documentation for instructions. Disabling cookies at the browser level may affect Site functionality beyond what our own Analytics toggle controls.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Contact us</h2>
            <p className="text-sm text-ink-400 leading-relaxed">
              If you have questions about our cookie practices, contact us at{" "}
              <a href="mailto:privacy@firearmselect.com" className="text-steel-500 underline underline-offset-2">
                privacy@firearmselect.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
