import { Metadata } from "next";
import Link from "next/link";
import { faqData, faqCategories } from "@/lib/faq";
import FaqHub from "@/components/FaqHub";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about firearms, safety, gun laws, concealed carry, and buying your first firearm. Sourced from authoritative references.",
  keywords: [
    "firearm FAQ",
    "gun safety questions",
    "concealed carry FAQ",
    "buying first gun",
    "gun laws questions",
    "firearm storage",
    "background check",
  ],
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="py-10 sm:py-14 border-b-2 border-ink-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-500">
              <li>
                <Link href="/" className="hover:text-ink-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-ink-900">FAQ</li>
            </ol>
          </nav>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-steel-700 font-medium mb-3">
            Resources
          </p>
          <h1 className="font-serif text-display-sm sm:text-display text-ink-900">
            Frequently Asked Questions
          </h1>
          <div className="w-12 h-1 bg-ink-900 mt-6 mb-5" />
          <p className="text-ink-500 text-lg max-w-2xl leading-relaxed">
            Answers to common questions about firearms, safety, and the law.
            Sourced from authoritative references.
          </p>
        </div>
      </section>

      {/* FAQ Hub (client component) */}
      <section className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqHub
            faqData={faqData}
            categories={[...faqCategories]}
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-cream-100 border-t-2 border-ink-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-ink-500 leading-relaxed text-center">
            FirearmSelect is an informational directory and does not provide legal advice.
            All information is for general educational purposes — consult the actual statutes and
            a qualified attorney for legal guidance specific to your situation.
          </p>
        </div>
      </section>
    </>
  );
}
