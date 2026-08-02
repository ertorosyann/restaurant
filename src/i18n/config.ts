/**
 * INTERNATIONALIZATION — Zentrum Café Restaurant
 * ===============================================
 * The website is served in five languages under locale-prefixed routes
 * (/de, /cs, /en, /pl, /hu). German is the main language: visitors landing on
 * "/" are redirected by src/proxy.ts to their preferred language, falling
 * back to German.
 *
 * HOW TO EDIT:
 * - Site copy lives in src/content/site.<locale>.ts (one file per language).
 * - Menu dishes carry their translations inline in src/data/menu.ts.
 * - Adding a language: extend `locales` and `localeNames`, add a
 *   site.<locale>.ts file and register it in src/content/site.ts, then
 *   fill in the new language across src/data/menu.ts.
 */

export const locales = ["de", "cs", "en", "pl", "hu"] as const;

export type Locale = (typeof locales)[number];

/** The site's main language. */
export const defaultLocale: Locale = "de";

/** Native-language names shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  cs: "Čeština",
  en: "English",
  pl: "Polski",
  hu: "Magyar",
};

/** Open Graph locale codes per language. */
export const ogLocales: Record<Locale, string> = {
  de: "de_AT",
  cs: "cs_CZ",
  en: "en_GB",
  pl: "pl_PL",
  hu: "hu_HU",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * A text value that differs per language. A plain string means "the same
 * in every language" (e.g. dish names like "Wiener Schnitzel"). Otherwise
 * German is required and missing languages fall back to it.
 */
export type LocalizedText =
  | string
  | ({ de: string } & Partial<Record<Locale, string>>);

export function localize(value: LocalizedText, locale: Locale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.de;
}

/** Prefixes an application path with the locale, e.g. ("/menu", "cs") → "/cs/menu". */
export function localeHref(locale: Locale, path: string = "/"): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Cookie remembering the visitor's explicit language choice — read by
 * src/proxy.ts when redirecting bare, locale-less URLs like "/".
 */
export const LOCALE_COOKIE = "NEXT_LOCALE";
