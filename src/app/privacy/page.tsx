import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FirearmSelect privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-steel-500 text-[10px] uppercase tracking-[0.25em] mb-3">Legal</p>
          <h1 className="font-serif text-display-sm text-ink-900">Privacy Policy</h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-3" />
          <p className="text-xs text-ink-300">Effective date: March 22, 2026</p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Introduction</h2>
            <p className="text-sm text-ink-400 leading-relaxed">FirearmSelect (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website firearmselect.com (the &ldquo;Site&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site. By using the Site, you consent to the practices described in this Privacy Policy.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Information we collect</h2>
            <p className="text-sm text-ink-400 leading-relaxed mb-3"><strong className="text-ink-600">Personal data.</strong> Personally identifiable information that you voluntarily provide when you fill out a form or otherwise interact with the Site.</p>
            <p className="text-sm text-ink-400 leading-relaxed mb-3"><strong className="text-ink-600">Derivative data.</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed.</p>
            <p className="text-sm text-ink-400 leading-relaxed"><strong className="text-ink-600">Analytics data.</strong> We may use third-party analytics tools (such as Google Analytics) that collect information about your use of the Site in aggregate form.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">How we use your information</h2>
            <p className="text-sm text-ink-400 leading-relaxed">We use information collected about you to operate and maintain the Site, to connect you with firearms dealers listed on our directory, to improve the user experience, to monitor and analyze usage trends, and to comply with applicable laws and regulations.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Disclosure of your information</h2>
            <p className="text-sm text-ink-400 leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share information with third-party service providers that perform services for us, such as website hosting and data analysis. We may also disclose your information if required by law.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Cookies</h2>
            <p className="text-sm text-ink-400 leading-relaxed">We may use cookies and similar tracking technologies. For more information, see our <Link href="/cookies" className="text-steel-500 underline underline-offset-2">Cookie Policy</Link>.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Contact us</h2>
            <p className="text-sm text-ink-400 leading-relaxed">If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@firearmselect.com" className="text-steel-500 underline underline-offset-2">privacy@firearmselect.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
