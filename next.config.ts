/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" }, // Prevents Clickjacking
          { key: "X-Content-Type-Options", value: "nosniff" }, // Prevents MIME sniffing
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // Controls referrer info
          { key: "Permissions-Policy", value: "camera=(), microphone=()" }, // Restricts browser features
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }, // Forces HTTPS
          { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' data:;" } // Limits resource loading
        ],
      },
    ];
  },
};

module.exports = nextConfig;
