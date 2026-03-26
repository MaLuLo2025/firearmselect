import Link from "next/link";
import { states } from "@/lib/states";

export default function Header() {
  return (
    <header className="border-b-2 border-ink-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" stroke="#111110" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="34" stroke="#5a6a7a" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="22" stroke="#111110" strokeWidth="1" />
            <text x="50" y="58" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fill="#111110">F</text>
          </svg>
          <span className="font-serif text-2xl text-ink-900 tracking-tight">
            Firearm<span className="text-steel-500">Select</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/dealers" className="font-sans text-xs uppercase tracking-widest text-steel-700 hover:text-ink-900 transition-colors">
            Shops &amp; Ranges
          </Link>
          <div className="relative group">
            <span className="font-sans text-xs uppercase tracking-widest text-steel-700 hover:text-ink-900 transition-colors cursor-pointer">
              States
            </span>
            <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-48 bg-white border-2 border-ink-200 shadow-sm z-50 max-h-64 overflow-y-auto">
              {states.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/gun-laws`}
                  className="block px-4 py-2 text-sm text-ink-500 hover:bg-cream-100 hover:text-ink-900 transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative group">
            <span className="font-sans text-xs uppercase tracking-widest text-steel-700 hover:text-ink-900 transition-colors cursor-pointer">
              Resources
            </span>
            <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 bg-white border-2 border-ink-200 shadow-sm z-50">
              <Link href="/blog" className="block px-4 py-2 text-sm text-ink-500 hover:bg-cream-100 hover:text-ink-900 transition-colors">
                Blog
              </Link>
              <Link href="/resources/videos" className="block px-4 py-2 text-sm text-ink-500 hover:bg-cream-100 hover:text-ink-900 transition-colors">
                Video Library
              </Link>
              <Link href="/resources/faq" className="block px-4 py-2 text-sm text-ink-500 hover:bg-cream-100 hover:text-ink-900 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          <Link href="/about" className="font-sans text-xs uppercase tracking-widest text-steel-700 hover:text-ink-900 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
