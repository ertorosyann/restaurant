import type { Metadata } from "next";
import { restaurantConfig, getSiteUrl } from "@/config/restaurant";
import { ogImage } from "@/data/images";
import {
  defaultLocale,
  localeHref,
  locales,
  ogLocales,
  type Locale,
} from "@/i18n/config";

/**
 * Canonical site origin used across metadata, sitemap and robots.
 * Configure the real domain in src/config/restaurant.ts (`domain`).
 */
export const siteUrl = getSiteUrl();

interface PageMetadataInput {
  title: string;
  description: string;
  /** Locale-less route path beginning with "/" — e.g. "/menu" */
  path: string;
  locale: Locale;
}

/**
 * Builds consistent, unique metadata for a page: title, description,
 * canonical URL, hreflang alternates for every language, Open Graph
 * and Twitter cards.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  locale,
}: PageMetadataInput): Metadata {
  const canonical = localeHref(locale, path);

  /* hreflang alternates: one per language plus x-default → German. */
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((entry) => [entry, localeHref(entry, path)])
  );
  languages["x-default"] = localeHref(defaultLocale, path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: restaurantConfig.name,
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((entry) => entry !== locale)
        .map((entry) => ogLocales[entry]),
      type: "website",
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.src],
    },
  };
}
