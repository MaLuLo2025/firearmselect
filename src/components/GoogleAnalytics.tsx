"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-5PMR8Q3KDL";

export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cookie_prefs");
      if (raw) {
        const prefs = JSON.parse(raw);
        if (prefs.analytics) setAllowed(true);
      }
    } catch {}

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.prefs?.analytics) {
        setAllowed(true);
      } else {
        setAllowed(false);
      }
    };

    window.addEventListener("cookie_consent_update", handler);
    return () => window.removeEventListener("cookie_consent_update", handler);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
