/**
 * ZENTRUM CAFÉ RESTAURANT — CENTRAL CONFIGURATION
 * ================================================
 * This is the single source of truth for all business information used
 * across the website (header, footer, contact page, SEO metadata and
 * JSON-LD structured data).
 *
 * HOW TO EDIT:
 * Replace every value wrapped in square brackets — e.g. "[PHONE_NUMBER]" —
 * with the real information for Zentrum Café Restaurant. Values in
 * brackets are treated as "not yet provided": they are shown as visible
 * placeholders in the UI and are automatically EXCLUDED from structured
 * data so no fake business details are ever published to search engines.
 */

import { localize, type LocalizedText } from "@/i18n/config";

export const restaurantConfig = {
  name: "Zentrum Café Restaurant",
  shortName: "Zentrum",
  city: "Ramsau am Dachstein",
  region: "Styria",
  /** Displayed country name per language (see src/i18n/config.ts). */
  country: {
    de: "Österreich",
    cs: "Rakousko",
    en: "Austria",
    pl: "Austria",
  } as LocalizedText,

  phone: "+43 664 2519009",
  /** Real email address, e.g. "info@zentrum-cafe.at" */
  email: "vazramsau@gmail.com",

  address: {
    street: "Ramsau 350",
    postalCode: "8972",
    city: "Ramsau am Dachstein",
    country: {
      de: "Österreich",
      cs: "Rakousko",
      en: "Austria",
      pl: "Austria",
    } as LocalizedText,
  },

  /**
   * The production domain, e.g. "www.zentrum-cafe.at".
   * Used for canonical URLs, the sitemap, robots.txt and Open Graph tags.
   * Until it is set, the reserved example domain below is used so that
   * builds and metadata remain valid.
   */
  domain: "[DOMAIN]",

  /**
   * A Google Maps link to the restaurant, e.g. a "share" link from
   * Google Maps. Used by every "Get Directions" button. Until it is set,
   * a generic Google Maps directions search for the restaurant name and
   * town is used as a sensible fallback.
   */
  mapUrl: "[GOOGLE_MAPS_URL]",

  /**
   * Geographic coordinates for local SEO (schema.org "geo").
   * Example: latitude "47.4216", longitude "13.6553".
   * Left as placeholders they are excluded from structured data.
   */
  geo: {
    latitude: "[LATITUDE]",
    longitude: "[LONGITUDE]",
  },

  cuisineTypes: ["Austrian", "European", "Café"],

  /** Schema.org price range, e.g. "€€" */
  priceRange: "[PRICE_RANGE]",

  /**
   * SOCIAL MEDIA LINKS
   * Paste full profile URLs here when they are available, e.g.
   *   instagram: "https://www.instagram.com/your-profile"
   * Any link left as an empty string is automatically hidden
   * everywhere on the website.
   */
  socialLinks: {
    instagram: "",
    facebook: "",
    tiktok: "",
    tripadvisor: "",
  },

  /**
   * Opening hours as displayed to visitors.
   * Day labels and hours carry one entry per website language
   * (hours may be a plain string when they need no translation).
   */
  openingHours: [
    {
      days: {
        de: "Montag",
        cs: "Pondělí",
        en: "Monday",
        pl: "Poniedziałek",
        hu: "Hétfő",
      } as LocalizedText,
      hours: {
        de: "Ruhetag",
        cs: "Zavřeno",
        en: "Closed",
        pl: "Nieczynne",
        hu: "Zárva",
      } as LocalizedText,
    },
    {
      days: {
        de: "Dienstag",
        cs: "Úterý",
        en: "Tuesday",
        pl: "Wtorek",
        hu: "Kedd",
      } as LocalizedText,
      hours: "11:00 – 19:00" as LocalizedText,
    },
    {
      days: {
        de: "Mittwoch – Samstag",
        cs: "Středa – sobota",
        en: "Wednesday – Saturday",
        pl: "Środa – sobota",
        hu: "Szerda – szombat",
      } as LocalizedText,
      hours: "10:00 – 19:00" as LocalizedText,
    },
    {
      days: {
        de: "Sonntag",
        cs: "Neděle",
        en: "Sunday",
        pl: "Niedziela",
        hu: "Vasárnap",
      } as LocalizedText,
      hours: "11:00 – 19:00" as LocalizedText,
    },
  ],

  /**
   * Machine-readable opening hours for JSON-LD structured data.
   * Closed days (Monday) are simply omitted.
   */
  structuredOpeningHours: [
    "Tu 11:00-19:00",
    "We-Sa 10:00-19:00",
    "Su 11:00-19:00",
  ] as string[],
};

export type RestaurantConfig = typeof restaurantConfig;
export type SocialPlatform = keyof typeof restaurantConfig.socialLinks;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * A value is considered a placeholder while it still contains
 * square brackets (e.g. "[PHONE_NUMBER]") or is empty.
 */
export function isPlaceholder(value: string): boolean {
  return value.trim() === "" || value.includes("[");
}

/**
 * Canonical site origin. Falls back to a reserved ".example" domain
 * (never a real website) until `domain` is configured.
 */
export function getSiteUrl(): string {
  if (isPlaceholder(restaurantConfig.domain)) {
    return "https://zentrum-cafe.example";
  }
  const domain = restaurantConfig.domain.replace(/^https?:\/\//, "");
  return `https://${domain}`;
}

/** `tel:` link target — strips spaces and separators from the number. */
export function getPhoneHref(): string {
  return `tel:${restaurantConfig.phone.replace(/[\s()/-]/g, "")}`;
}

/** `mailto:` link target. */
export function getEmailHref(): string {
  return `mailto:${restaurantConfig.email}`;
}

/**
 * Directions link used by every "Get Directions" button.
 * Uses the configured Google Maps URL when available; otherwise falls
 * back to a Google Maps directions search by name and town so the
 * button keeps working out of the box.
 */
export function getDirectionsUrl(): string {
  if (!isPlaceholder(restaurantConfig.mapUrl)) {
    return restaurantConfig.mapUrl;
  }
  const destination = encodeURIComponent(
    `${restaurantConfig.name}, ${restaurantConfig.city}, ${localize(restaurantConfig.country, "en")}`
  );
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

/** Social links that actually have a URL configured. */
export function getActiveSocialLinks(): { platform: SocialPlatform; url: string }[] {
  return (
    Object.entries(restaurantConfig.socialLinks) as [SocialPlatform, string][]
  )
    .filter(([, url]) => url.trim() !== "")
    .map(([platform, url]) => ({ platform, url }));
}
