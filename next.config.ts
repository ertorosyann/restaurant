import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only: AVIF encodes 5-10x slower, which makes the FIRST request
    // for each image size painfully slow on a small server.
    formats: ["image/webp"],
    // Keep optimized variants for 31 days (default is only 60 seconds,
    // which forces the server to re-encode the same photos over and over).
    minimumCacheTTL: 2678400,
    // Placeholder photography is loaded from Unsplash during development.
    // Once real Zentrum Café Restaurant photos are added to /public or a CDN,
    // these remote patterns can be narrowed or removed.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
    qualities: [60, 75, 85],
  },
};

export default nextConfig;
