import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { localeHref, locales } from "@/i18n/config";

const pages: {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/menu", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

/** Every page in every language, cross-linked via hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localeHref(locale, page.path)}`,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((entry) => [entry, `${siteUrl}${localeHref(entry, page.path)}`])
        ),
      },
    }))
  );
}
