import Link from "next/link";
import { states } from "@/lib/states";
import { categories } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="46" stroke="#e8e4de" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="34" stroke="#8a9aaa" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="22" stroke="#e8e4de" strokeWidth="1" />
                <text x="50" y="58" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fill="#e8e4de">F</text>
              </svg>
              <span className="font-serif text-lg text-white">
                Firearm<span className="text-steel-400">Select</span>
              </span>
            </div>
            <p className="text-sm text-ink-300 leading-relaxed max-w-xs">
              The informed firearms directory. Find trusted shops, ranges, and instructors.
              Understand state laws and own responsibly.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm text-white uppercase tracking-wider mb-4">Shops &amp; Ranges</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href="/dealers" className="text-sm text-ink-300 hover:text-steel-300 transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-white uppercase tracking-wider mb-4">State Laws</h4>
            <ul className="space-y-2">
              {states.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/gun-laws`} className="text-sm text-ink-300 hover:text-steel-300 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-ink-300 hover:text-steel-300 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-ink-300 hover:text-steel-300 transition-colors">Blog</Link></li>
              <li><Link href="/privacy" className="text-sm text-ink-300 hover:text-steel-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-ink-300 hover:text-steel-300 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm text-ink-300 hover:text-steel-300 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-400 text-sm">
            &copy; {new Date().getFullYear()} FirearmSelect. All rights reserved.
          </p>
          <p className="text-ink-400 text-sm font-serif italic">
            Find dealers. Know the law. Own responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
