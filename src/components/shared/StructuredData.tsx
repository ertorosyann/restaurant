import {
  restaurantConfig,
  getActiveSocialLinks,
  isPlaceholder,
} from "@/config/restaurant";
import { siteUrl } from "@/lib/seo";
import { ogImage } from "@/data/images";

/**
 * JSON-LD structured data (schema.org "Restaurant") for local SEO.
 *
 * Every field is driven by src/config/restaurant.ts. Fields still set to
 * "[PLACEHOLDER]" values are automatically omitted, so incomplete or fake
 * business details are never published to search engines. Once the real
 * phone number, address, price range, coordinates and opening hours are
 * configured, they appear here automatically.
 */
export function StructuredData() {
  const { address, geo } = restaurantConfig;
  const socialUrls = getActiveSocialLinks().map((link) => link.url);

  const postalAddress: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: address.city,
    addressCountry: "AT",
  };
  if (!isPlaceholder(address.street)) postalAddress.streetAddress = address.street;
  if (!isPlaceholder(address.postalCode)) postalAddress.postalCode = address.postalCode;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurantConfig.name,
    description: restaurantConfig.description,
    url: siteUrl,
    servesCuisine: restaurantConfig.cuisineTypes,
    address: postalAddress,
    hasMenu: `${siteUrl}/menu`,
  };

  /* The image is only published once it no longer points at placeholder
     stock photography — search engines must never index a stock photo as
     the restaurant itself. Swap ogImage (src/data/images.ts) to a real
     photo and it appears here automatically. */
  if (!ogImage.src.includes("unsplash")) {
    data.image = ogImage.src;
  }

  if (!isPlaceholder(restaurantConfig.phone)) {
    data.telephone = restaurantConfig.phone;
  }
  if (!isPlaceholder(restaurantConfig.email)) {
    data.email = restaurantConfig.email;
  }
  if (!isPlaceholder(restaurantConfig.priceRange)) {
    data.priceRange = restaurantConfig.priceRange;
  }
  if (!isPlaceholder(geo.latitude) && !isPlaceholder(geo.longitude)) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    };
  }
  if (restaurantConfig.structuredOpeningHours.length > 0) {
    data.openingHours = restaurantConfig.structuredOpeningHours;
  }
  if (socialUrls.length > 0) {
    data.sameAs = socialUrls;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
