import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern formats are served automatically when the browser supports them.
    formats: ["image/avif", "image/webp"],
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
