import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Hidden admin page for editing opening hours.
      disallow: ["/changetimes", "/*/changetimes"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
