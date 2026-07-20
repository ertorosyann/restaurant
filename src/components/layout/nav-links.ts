import { getSiteContent } from "@/content/site";
import { localeHref, type Locale } from "@/i18n/config";

export interface NavLink {
  href: string;
  label: string;
}

/** Main navigation links, localized and prefixed with the locale. */
export function getNavLinks(locale: Locale): NavLink[] {
  const content = getSiteContent(locale);
  return [
    { href: localeHref(locale), label: content.nav.home },
    { href: localeHref(locale, "/about"), label: content.nav.about },
    { href: localeHref(locale, "/menu"), label: content.nav.menu },
    { href: localeHref(locale, "/contact"), label: content.nav.contact },
  ];
}
