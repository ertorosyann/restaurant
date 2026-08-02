/**
 * SITE COPY — Zentrum Café Restaurant
 * ====================================
 * All user-facing text lives in one file PER LANGUAGE so it is easy to
 * review, refine and translate:
 *
 *   site.de.ts — Deutsch (main language, defines the structure)
 *   site.cs.ts — Čeština
 *   site.en.ts — English
 *   site.pl.ts — Polski
 *   site.hu.ts — Magyar
 *
 * Every file follows exactly the same structure (`SiteContent`), enforced
 * by TypeScript. Components receive the right language via
 * `getSiteContent(locale)` — no component needs to change when copy is
 * edited or a language is added (see src/i18n/config.ts).
 */

import type { Locale } from "@/i18n/config";
import { siteContentDe } from "./site.de";
import { siteContentCs } from "./site.cs";
import { siteContentEn } from "./site.en";
import { siteContentPl } from "./site.pl";
import { siteContentHu } from "./site.hu";

/** The shape every language file must follow — derived from the German copy. */
export type SiteContent = typeof siteContentDe;

const contentByLocale: Record<Locale, SiteContent> = {
  de: siteContentDe,
  cs: siteContentCs,
  en: siteContentEn,
  pl: siteContentPl,
  hu: siteContentHu,
};

export function getSiteContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}
