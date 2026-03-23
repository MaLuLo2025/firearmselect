import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s),]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      // Extract display text — use domain + path
      const display = part.replace(/^https?:\/\/(?:www\.)?/, "").replace(/\/$/, "");
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer"
          className="text-steel-500 hover:text-ink-900 transition-colors">
          {display}
        </a>
      );
    }
    // Clean up surrounding text like "(full opinion: " or ")"
    return part;
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const sections = post.content.split(/\n## /).map((s, i) => {
    if (i === 0) return { heading: null, body: s.trim() };
    const lines = s.split("\n");
    return { heading: lines[0].trim(), body: lines.slice(1).join("\n").trim() };
  });

  return (
    <>
      <section className="py-12 sm:py-16 border-b border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-ink-300">
              <li><Link href="/" className="hover:text-ink-900 transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-ink-900 transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-ink-500 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>
          <p className="font-sans text-[9px] uppercase tracking-widest text-steel-500 mb-3">
            {post.category}
          </p>
          <h1 className="font-serif text-display-sm text-ink-900 text-balance">
            {post.title}
          </h1>
          <div className="w-10 h-0.5 bg-ink-900 mt-6 mb-4" />
          <p className="font-sans text-xs text-ink-300">{post.readTime} &middot; {post.publishedAt}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-serif text-heading text-ink-900 mb-4">{section.heading}</h2>
                )}
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-ink-500 text-sm leading-relaxed mb-4">
                    {renderTextWithLinks(para)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-cream-100 border-t border-ink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] text-ink-300 leading-relaxed">
            This article is for informational purposes only and does not constitute legal advice.
            Firearms laws vary by jurisdiction and change frequently. Consult a qualified attorney
            and verify current statutes before making legal decisions.
          </p>
        </div>
      </section>
    </>
  );
}
