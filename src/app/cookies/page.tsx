import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "FirearmSelect cookie policy — what cookies we use and how to manage them.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-steel-500 text-[10px] uppercase tracking-[0.25em] mb-3">Legal</p>
          <h1 className="font-serif text-display-sm text-ink-900">Cookie Policy</h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-3" />
          <p className="text-xs text-ink-300">Effective date: March 22, 2026</p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">What are cookies</h2>
            <p className="text-sm text-ink-400 leading-relaxed">Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you use the site.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Cookies we use</h2>
            <p className="text-sm text-ink-400 leading-relaxed mb-3"><strong className="text-ink-600">Essential cookies.</strong> Required for the Site to function. These cannot be disabled. They include cookies that remember your cookie consent preferences.</p>
            <p className="text-sm text-ink-400 leading-relaxed"><strong className="text-ink-600">Analytics cookies.</strong> We use Google Analytics to understand how visitors use our Site. These cookies collect anonymous data about pages visited, time on site, and traffic sources. You can opt out of analytics cookies through the cookie consent banner or by adjusting your browser settings.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Managing cookies</h2>
            <p className="text-sm text-ink-400 leading-relaxed">You can manage your cookie preferences through the consent banner that appears when you first visit the Site. You can also disable cookies in your browser settings, though this may affect Site functionality. To reset your cookie preferences, clear your browser cookies and revisit the Site.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Contact us</h2>
            <p className="text-sm text-ink-400 leading-relaxed">If you have questions about our cookie practices, contact us at <a href="mailto:privacy@firearmselect.com" className="text-steel-500 underline underline-offset-2">privacy@firearmselect.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
