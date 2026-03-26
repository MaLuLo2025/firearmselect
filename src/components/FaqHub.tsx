"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import type { FaqEntry } from "@/lib/faq";

interface FaqHubProps {
  faqData: FaqEntry[];
  categories: string[];
}

export default function FaqHub({ faqData, categories }: FaqHubProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounce search input
  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDebouncedQuery(value);
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Fuse.js instance
  const fuse = useMemo(
    () =>
      new Fuse(faqData, {
        keys: [
          { name: "question", weight: 0.6 },
          { name: "answer", weight: 0.3 },
          { name: "keywords", weight: 0.5 },
          { name: "category", weight: 0.1 },
        ],
        threshold: 0.4,
        distance: 100,
        minMatchCharLength: 2,
        includeScore: true,
        includeMatches: true,
        ignoreLocation: true,
      }),
    [faqData]
  );

  // Filter results
  const results = useMemo(() => {
    let items: FaqEntry[];

    if (debouncedQuery.trim().length >= 2) {
      items = fuse.search(debouncedQuery).map((r) => r.item);
    } else {
      items = faqData;
    }

    if (activeCategory) {
      items = items.filter((faq) => faq.category === activeCategory);
    }

    return items;
  }, [debouncedQuery, activeCategory, fuse, faqData]);

  // Group by category when not searching
  const isSearching = debouncedQuery.trim().length >= 2;

  const groupedResults = useMemo(() => {
    if (isSearching) return null;
    const groups: Record<string, FaqEntry[]> = {};
    for (const faq of results) {
      if (!groups[faq.category]) groups[faq.category] = [];
      groups[faq.category].push(faq);
    }
    return groups;
  }, [results, isSearching]);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      {/* Search bar */}
      <div className="mb-8">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-300"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search questions... (e.g., &quot;concealed carry&quot;, &quot;storage&quot;, &quot;background check&quot;)"
            className="w-full pl-12 pr-4 py-4 border-2 border-ink-200 text-base text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none transition-colors font-sans"
          />
        </div>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 text-xs uppercase tracking-widest font-sans font-medium border-2 transition-colors ${
            activeCategory === null
              ? "border-ink-900 bg-ink-900 text-white"
              : "border-ink-200 text-ink-500 hover:border-ink-900 hover:text-ink-900"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-4 py-2 text-xs uppercase tracking-widest font-sans font-medium border-2 transition-colors ${
              activeCategory === cat
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-ink-200 text-ink-500 hover:border-ink-900 hover:text-ink-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="text-center py-12">
          <p className="font-serif text-heading text-ink-900 mb-2">No results found</p>
          <p className="text-sm text-ink-500">
            Try different keywords or browse by category above.
          </p>
        </div>
      ) : isSearching ? (
        /* Flat list when searching */
        <div className="space-y-3">
          {results.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleAccordion(faq.id)}
              showCategory
            />
          ))}
        </div>
      ) : (
        /* Grouped by category when not searching */
        <div className="space-y-10">
          {(activeCategory ? [activeCategory] : categories).map((cat) => {
            const items = groupedResults?.[cat];
            if (!items || items.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="font-serif text-heading text-ink-900 mb-4 pb-2 border-b-2 border-ink-900">
                  {cat}
                </h2>
                <div className="space-y-3">
                  {items.map((faq) => (
                    <FaqAccordionItem
                      key={faq.id}
                      faq={faq}
                      isOpen={openId === faq.id}
                      onToggle={() => toggleAccordion(faq.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
  showCategory,
}: {
  faq: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
  showCategory?: boolean;
}) {
  return (
    <div className="border-2 border-ink-200">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-cream-100 transition-colors"
      >
        <div className="flex-1">
          {showCategory && (
            <span className="inline-block font-sans text-[11px] uppercase tracking-widest text-steel-700 font-medium mb-1">
              {faq.category}
            </span>
          )}
          <h3 className="font-serif text-base text-ink-900 font-semibold leading-snug">
            {faq.question}
          </h3>
        </div>
        <svg
          className={`shrink-0 mt-1 text-ink-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 border-t border-ink-100">
          <p className="text-sm text-ink-500 leading-relaxed mt-4">{faq.answer}</p>

          {faq.relatedLinks.length > 0 && (
            <div className="mt-4 pt-3 border-t border-ink-100">
              <p className="font-sans text-[11px] uppercase tracking-widest text-steel-700 font-medium mb-2">
                Related Resources
              </p>
              <div className="flex flex-wrap gap-2">
                {faq.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-block text-xs text-ink-900 border-2 border-ink-200 px-3 py-1.5 hover:border-ink-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
