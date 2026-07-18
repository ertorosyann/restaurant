import type { Metadata } from "next";
import { restaurantConfig, getSiteUrl } from "@/config/restaurant";
import { ogImage } from "@/data/images";

/**
 * Canonical site origin used across metadata, sitemap and robots.
 * Configure the real domain in src/config/restaurant.ts (`domain`).
 */
export const siteUrl = getSiteUrl();

interface PageMetadataInput {
  title: string;
  description: string;
  /** Route path beginning with "/" — e.g. "/menu" */
  path: string;
}

/**
 * Builds consistent, unique metadata for a page: title, description,
 * canonical URL, Open Graph and Twitter cards.
 */
export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: restaurantConfig.name,
      locale: "en_US",
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
