/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://*.supabase.co https://api.stripe.com https://*.google-analytics.com https://*.analytics.google.com https://select-admin-teal.vercel.app",
      "frame-src https://js.stripe.com",
    ].join('; ')
  }
];

const nextConfig = {
  reactStrictMode: true,
  // 301s for consolidated near-duplicate posts (older slug -> newer survivor).
  async redirects() {
    return [
      {
        source: '/blog/firearm-storage-laws-by-state',
        destination: '/blog/firearm-storage-laws-state-2026',
        statusCode: 301,
      },
      {
        source: '/blog/self-defense-legal-insurance',
        destination: '/blog/self-defense-insurance-comparison-2026',
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
