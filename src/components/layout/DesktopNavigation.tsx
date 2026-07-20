import Link from "next/link";
import { getNavLinks } from "@/components/layout/nav-links";
import { getSiteContent } from "@/content/site";
import { localeHref, type Locale } from "@/i18n/config";

interface DesktopNavigationProps {
  pathname: string;
  /** True while the header floats transparently over the page hero. */
  overHero: boolean;
  locale: Locale;
}

export function DesktopNavigation({ pathname, overHero, locale }: DesktopNavigationProps) {
  const content = getSiteContent(locale);

  return (
    <div className="hidden items-center gap-8 lg:flex">
      <ul className="flex items-center gap-7">
        {getNavLinks(locale).map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-sm font-medium uppercase tracking-[0.14em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive ? "after:scale-x-100" : ""
                } ${
                  overHero
                    ? "text-cream-50/90 hover:text-white"
                    : "text-charcoal-700 hover:text-charcoal-950"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href={localeHref(locale, "/contact")}
        className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium uppercase tracking-[0.12em] transition-colors ${
          overHero
            ? "border border-white/50 text-white hover:border-white hover:bg-white/10"
            : "bg-pine-800 text-cream-50 hover:bg-pine-900"
        }`}
      >
        {content.common.contactUs}
      </Link>
    </div>
  );
}
