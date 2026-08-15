"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DEFAULT_PREFS,
  OPEN_PREFERENCES_EVENT,
  getStoredConsent,
  getStoredPrefs,
  saveConsent,
  type CookiePreferences,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>(DEFAULT_PREFS);

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) {
      setVisible(true);
    } else {
      setPrefs(getStoredPrefs());
    }
  }, []);

  // Re-entry point: the footer "Cookie Preferences" link dispatches this to
  // reopen the panel directly (skipping the initial Accept/Reject banner),
  // pre-populated with whatever is currently saved — not defaults.
  useEffect(() => {
    function handleOpenPreferences() {
      setPrefs(getStoredPrefs());
      setShowPrefs(true);
      setVisible(true);
    }
    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
    return () =>
      window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  const accept = () => {
    const allPrefs = { essential: true, analytics: true };
    setPrefs({ ...allPrefs, timestamp: Date.now() });
    saveConsent("accepted", allPrefs);
    setVisible(false);
  };

  const reject = () => {
    const minPrefs = { essential: true, analytics: false };
    setPrefs({ ...minPrefs, timestamp: Date.now() });
    saveConsent("rejected", minPrefs);
    setVisible(false);
  };

  const savePrefs = () => {
    saveConsent("custom", { essential: prefs.essential, analytics: prefs.analytics });
    setVisible(false);
    setShowPrefs(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink-900 border-t-2 border-ink-700 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        {!showPrefs ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-ink-200 leading-relaxed max-w-xl">
              We use cookies to analyze site traffic and improve your experience.
              See our <Link href="/cookies" className="text-steel-300 underline underline-offset-2">Cookie Policy</Link> for details.
            </p>
            <div className="flex gap-3 shrink-0 flex-wrap">
              <button
                onClick={() => setShowPrefs(true)}
                className="font-sans text-xs uppercase tracking-widest px-5 py-2.5 border border-ink-500 text-ink-300 hover:text-white hover:border-ink-300 transition-colors"
              >
                Manage
              </button>
              <button onClick={reject} className="font-sans text-xs uppercase tracking-widest px-5 py-2.5 border border-ink-500 text-ink-300 hover:text-white hover:border-ink-300 transition-colors">
                Reject
              </button>
              <button onClick={accept} className="font-sans text-xs uppercase tracking-widest px-5 py-2.5 bg-white text-ink-900 hover:bg-cream-200 transition-colors">
                Accept
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-serif text-base text-white mb-4">Cookie preferences</p>

            <div className="mb-3">
              <label className="flex items-start gap-2.5 cursor-default">
                <input type="checkbox" checked disabled className="mt-1" />
                <div>
                  <span className="text-sm font-medium text-white">Essential cookies</span>
                  <span className="text-[10px] text-ink-300 ml-1.5 uppercase tracking-wide">Always active</span>
                  <p className="text-xs text-ink-300 mt-0.5">Required for the website to function. Cannot be disabled.</p>
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="mt-1"
                />
                <div>
                  <span className="text-sm font-medium text-white">Analytics cookies</span>
                  <p className="text-xs text-ink-300 mt-0.5">
                    Help us understand how visitors use the site so we can improve it.
                    Data is collected anonymously.
                  </p>
                </div>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPrefs(false)}
                className="font-sans text-xs uppercase tracking-widest px-5 py-2.5 border border-ink-500 text-ink-300 hover:text-white hover:border-ink-300 transition-colors"
              >
                Back
              </button>
              <button onClick={savePrefs} className="font-sans text-xs uppercase tracking-widest px-5 py-2.5 bg-white text-ink-900 hover:bg-cream-200 transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
