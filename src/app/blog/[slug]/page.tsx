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
  const description = post.metaDescription ?? post.excerpt;
  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: { title: post.title, description },
    twitter: { title: post.title, description },
  };
}

const LINK_CLASS = "text-steel-500 hover:text-ink-900 transition-colors";

// Parses ** first, then *, then [text](url) and bare URLs. Bold/italic recurse so
// links and emphasis can nest inside each other.
function renderInline(text: string, keyPrefix = "i"): React.ReactNode[] {
  const tokenRegex =
    /(\*\*.+?\*\*|\*[^*\s](?:[^*]*[^*\s])?\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s),*]+)/g;
  const parts = text.split(tokenRegex);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-ink-900">
          {renderInline(part.slice(2, -2), key)}
        </strong>
      );
    }
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
      return <em key={key}>{renderInline(part.slice(1, -1), key)}</em>;
    }
    const mdMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdMatch) {
      const [, label, href] = mdMatch;
      const isExternal = /^https?:\/\//.test(href);
      return (
        <a
          key={key}
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={LINK_CLASS}
        >
          {label}
        </a>
      );
    }
    if (/^https?:\/\//.test(part)) {
      const display = part.replace(/^https?:\/\/(?:www\.)?/, "").replace(/\/$/, "");
      return (
        <a key={key} href={part} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {display}
        </a>
      );
    }
    return part;
  });
}

// Block-level parser: ###/#### headings, --- rules, grouped -/1. lists, and
// paragraphs (consecutive text lines joined; blank line ends a paragraph).
function renderBody(body: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let para: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let n = 0;

  const flushPara = () => {
    if (!para.length) return;
    const k = n++;
    out.push(
      <p key={k} className="text-ink-500 text-sm leading-relaxed mb-4">
        {renderInline(para.join(" "), `p${k}`)}
      </p>
    );
    para = [];
  };
  const flushList = () => {
    if (!list) return;
    const k = n++;
    const Tag = list.ordered ? "ol" : "ul";
    out.push(
      <Tag
        key={k}
        className={`${list.ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2 mb-4 text-ink-500 text-sm leading-relaxed marker:text-ink-300`}
      >
        {list.items.map((item, j) => (
          <li key={j}>{renderInline(item, `l${k}-${j}`)}</li>
        ))}
      </Tag>
    );
    list = null;
  };

  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flushPara(); // a blank line ends a paragraph but not a list
      continue;
    }
    const h4 = line.match(/^####\s+(.*)$/);
    const h3 = line.match(/^###\s+(.*)$/);
    const ul = line.match(/^-\s+(.*)$/);
    const ol = line.match(/^\d+\.\s+(.*)$/);
    if (h4 || h3 || /^-{3,}$/.test(line)) {
      flushPara();
      flushList();
      const k = n++;
      if (h4) {
        out.push(
          <h4 key={k} className="font-sans text-sm font-semibold text-ink-900 mt-4 mb-2">
            {renderInline(h4[1], `h${k}`)}
          </h4>
        );
      } else if (h3) {
        out.push(
          <h3 key={k} className="font-serif text-lg font-semibold text-ink-900 mt-6 mb-2">
            {renderInline(h3[1], `h${k}`)}
          </h3>
        );
      } else {
        out.push(<hr key={k} className="my-8 border-t border-ink-100" />);
      }
    } else if (ul || ol) {
      flushPara();
      const ordered = !!ol;
      if (list && list.ordered !== ordered) flushList();
      if (!list) list = { ordered, items: [] };
      list.items.push((ul ?? ol)![1]);
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return out;
}

const BASE = "https://www.firearmselect.com";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const sections = post.content.split(/\n## /).map((s, i) => {
    if (i === 0) return { heading: null, body: s.trim() };
    const lines = s.split("\n");
    return { heading: lines[0].trim(), body: lines.slice(1).join("\n").trim() };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "FirearmSelect", url: BASE },
    publisher: { "@type": "Organization", name: "FirearmSelect", url: BASE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                  <h2 className="font-serif text-heading text-ink-900 mb-4">
                    {renderInline(section.heading, `h2-${i}`)}
                  </h2>
                )}
                {renderBody(section.body)}
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
