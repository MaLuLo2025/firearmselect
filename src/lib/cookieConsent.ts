// Shared cookie-consent storage schema + gtag Consent Mode v2 mapping.
// Ported from AestheticSelect (src/lib/cookieConsent.ts) — this is the
// same portfolio-wide schema and enforcement pattern, kept identical across
// Select sites on purpose.
//
// One intentional FS-specific difference: `timestamp` (when consent was last
// set) is preserved from FS's pre-port implementation, which AS does not
// currently have. TODO: reconcile — AS should probably gain this field too,
// since consent age is something regulators ask about.

export type ConsentState = "pending" | "accepted" | "rejected" | "custom";

export interface CookiePreferences {
  essential: boolean; // always true
  analytics: boolean;
  timestamp: number; // FS-only field, not present in AS's schema — see note above
}

export const DEFAULT_PREFS: CookiePreferences = {
  essential: true,
  analytics: false,
  timestamp: 0, // sentinel: never actually saved, only used as an in-memory fallback
};

const CONSENT_KEY = "cookie_consent";
const PREFS_KEY = "cookie_prefs";

// Dispatched by saveConsent() whenever the user's choice changes.
// GoogleAnalytics.tsx listens for this to call gtag('consent', 'update', ...)
// without requiring a page reload.
export const CONSENT_UPDATE_EVENT = "cookie_consent_update";

// Dispatched by the footer "Cookie Preferences" link. CookieConsent.tsx
// listens for this to reopen itself directly into the preferences panel,
// pre-populated with whatever is currently saved.
export const OPEN_PREFERENCES_EVENT = "open_cookie_preferences";

// MIGRATION: FS's pre-port implementation only ever wrote "cookie_prefs"
// ({essential, analytics, timestamp}) — there was no separate "cookie_consent"
// state key. A returning visitor from before this port has real, meaningful
// consent already on file; treating them as unconsented (and re-showing the
// banner) would be wrong. If "cookie_consent" is missing but "cookie_prefs"
// exists, derive the state from the stored analytics choice and persist it,
// so this only has to run once per visitor.
export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
  if (stored) return stored;

  try {
    const rawPrefs = localStorage.getItem(PREFS_KEY);
    if (rawPrefs) {
      const prefs = JSON.parse(rawPrefs);
      if (typeof prefs.analytics === "boolean") {
        const derived: ConsentState = prefs.analytics ? "accepted" : "rejected";
        localStorage.setItem(CONSENT_KEY, derived);
        return derived;
      }
    }
  } catch {
    // Malformed stored value — fall through and treat as a first-time visitor.
  }

  return null;
}

export function getStoredPrefs(): CookiePreferences {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  try {
    const stored = localStorage.getItem(PREFS_KEY);
    if (stored) return { ...DEFAULT_PREFS, ...JSON.parse(stored) };
  } catch {
    // Malformed stored value — fall back to defaults rather than throw.
  }
  return DEFAULT_PREFS;
}

export function saveConsent(
  state: ConsentState,
  prefs: Omit<CookiePreferences, "timestamp">
): void {
  const stamped: CookiePreferences = { ...prefs, timestamp: Date.now() };
  localStorage.setItem(CONSENT_KEY, state);
  localStorage.setItem(PREFS_KEY, JSON.stringify(stamped));
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATE_EVENT, { detail: { state, prefs: stamped } })
  );
}

export function openPreferences(): void {
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

// Consent Mode v2 payload for a given preferences object. functionality_storage
// is not user-gated — it's granted unconditionally in ConsentDefaults and never
// revisited here, since essential site functionality isn't a consent choice.
export function prefsToConsentUpdate(prefs: CookiePreferences) {
  return {
    analytics_storage: prefs.analytics ? "granted" : "denied",
  } as const;
}
