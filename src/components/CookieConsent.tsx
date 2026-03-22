"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const prefs = localStorage.getItem("cookie_prefs");
      if (!prefs) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    const prefs = { essential: true, analytics: true, timestamp: Date.now() };
    localStorage.setItem("cookie_prefs", JSON.stringify(prefs));
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie_consent_update", { detail: { prefs } }));
  };

  const reject = () => {
    const prefs = { essential: true, analytics: false, timestamp: Date.now() };
    localStorage.setItem("cookie_prefs", JSON.stringify(prefs));
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie_consent_update", { detail: { prefs } }));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink-900 border-t-2 border-ink-700 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-ink-200 leading-relaxed max-w-xl">
          We use cookies to analyze site traffic and improve your experience.
          See our <Link href="/cookies" className="text-steel-300 underline underline-offset-2">Cookie Policy</Link> for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={reject} className="font-sans text-xs uppercase tracking-widest px-5 py-2.5 border border-ink-500 text-ink-300 hover:text-white hover:border-ink-300 transition-colors">
            Reject
          </button>
          <button onClick={accept} className="font-sans text-xs uppercase tracking-widest px-5 py-2.5 bg-white text-ink-900 hover:bg-cream-200 transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
