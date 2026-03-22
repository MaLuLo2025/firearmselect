import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FirearmSelect terms of service governing your use of our website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-steel-500 text-[10px] uppercase tracking-[0.25em] mb-3">Legal</p>
          <h1 className="font-serif text-display-sm text-ink-900">Terms of Service</h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-3" />
          <p className="text-xs text-ink-300">Effective date: March 22, 2026</p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Acceptance of terms</h2>
            <p className="text-sm text-ink-400 leading-relaxed">By accessing or using FirearmSelect.com (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Site.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Nature of the Site</h2>
            <p className="text-sm text-ink-400 leading-relaxed">FirearmSelect is an informational directory. We do not sell firearms, ammunition, or accessories. We do not provide legal advice. All information on the Site is for general informational purposes only. Firearms laws vary by jurisdiction and change frequently. You are responsible for verifying all information and complying with all applicable federal, state, and local laws.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Dealer listings</h2>
            <p className="text-sm text-ink-400 leading-relaxed">Dealer listings on the Site are based on publicly available information. FirearmSelect does not endorse, recommend, or guarantee any specific dealer. You are responsible for verifying dealer credentials, licenses, and compliance with applicable laws before conducting any transaction.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Limitation of liability</h2>
            <p className="text-sm text-ink-400 leading-relaxed">FirearmSelect shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Site, reliance on information provided on the Site, or any transaction you enter into with a dealer listed on the Site.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Governing law and dispute resolution</h2>
            <p className="text-sm text-ink-400 leading-relaxed">These Terms shall be governed by the laws of the State of Colorado. Any dispute arising from these Terms or your use of the Site shall be resolved by binding arbitration administered in Durango, La Plata County, Colorado. You agree to waive any right to participate in a class action lawsuit or class-wide arbitration.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Changes to these terms</h2>
            <p className="text-sm text-ink-400 leading-relaxed">We may update these Terms from time to time. We will notify you of changes by posting the updated Terms on this page and updating the effective date.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink-900 mb-3">Contact us</h2>
            <p className="text-sm text-ink-400 leading-relaxed">If you have questions about these Terms, please contact us at <a href="mailto:legal@firearmselect.com" className="text-steel-500 underline underline-offset-2">legal@firearmselect.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
