import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="font-serif text-display text-ink-900 mb-4">404</h1>
      <p className="text-ink-400 mb-8">This page could not be found.</p>
      <Link href="/" className="btn-primary">Back to Home</Link>
    </section>
  );
}
