/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'; frame-src 'self' https://open.spotify.com; script-src 'self' 'unsafe-inline' https://open.spotify.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://open.spotify.com;",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN", // Allows embeds from same origin, but denies clickjacking
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
