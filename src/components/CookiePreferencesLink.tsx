"use client";

import { openPreferences } from "@/lib/cookieConsent";

// Small isolated client component so Footer itself can stay a server
// component — this button is the only interactive piece it needs.
export default function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-sm text-ink-300 hover:text-steel-300 transition-colors"
    >
      Cookie Preferences
    </button>
  );
}
