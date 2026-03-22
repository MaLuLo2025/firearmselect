import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Firearms Laws, Education & Analysis",
  description: "In-depth articles on state gun laws, constitutional carry, firearms safety, and responsible ownership. Factual, non-partisan, cited to primary sources.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-steel-500 mb-3">
            Analysis &amp; Education
          </p>
          <h1 className="font-serif text-display-sm text-ink-900">Blog</h1>
          <div className="section-divider mt-6" />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group block border-t-2 border-ink-900 pt-6">
              <p className="font-sans text-[9px] uppercase tracking-widest text-steel-500 mb-2">
                {post.category}
              </p>
              <h2 className="font-serif text-heading text-ink-900 group-hover:text-steel-600 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-ink-400 leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <p className="font-sans text-[10px] text-ink-300">{post.readTime} &middot; {post.publishedAt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
