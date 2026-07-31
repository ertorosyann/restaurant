import Link from "next/link";
import { getNavLinks } from "@/components/layout/nav-links";
import { CurrentYear } from "@/components/shared/CurrentYear";
import { OpeningHours } from "@/components/shared/OpeningHours";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { getSiteContent } from "@/content/site";
import {
  restaurantConfig,
  getEmailHref,
  getPhoneHref,
  isPlaceholder,
} from "@/config/restaurant";
import { localize, type Locale } from "@/i18n/config";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const content = getSiteContent(locale);
  const { address } = restaurantConfig;

  return (
    <footer className="bg-pine-950 text-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-cream-50">
              {restaurantConfig.shortName}
            </p>
            <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-copper-300">
              {content.common.brandTagline}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
              {content.meta.siteDescription}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-copper-300">
              {content.footer.navigationTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {getNavLinks(locale).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100/85 transition-colors hover:text-copper-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-copper-300">
              {content.footer.contactTitle}
            </h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-cream-100/85">
              <p>
                {!isPlaceholder(address.street) && (
                  <>
                    {address.street}
                    <br />
                  </>
                )}
                {!isPlaceholder(address.postalCode) && `${address.postalCode} `}
                {address.city}
                <br />
                {localize(address.country, locale)}
              </p>
              <p>
                <a
                  href={getPhoneHref()}
                  className="transition-colors hover:text-copper-200"
                >
                  {restaurantConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={getEmailHref()}
                  className="break-all transition-colors hover:text-copper-200"
                >
                  {restaurantConfig.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours + social */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-copper-300">
              {content.footer.hoursTitle}
            </h2>
            <OpeningHours locale={locale} tone="dark" className="mt-5" />
            <div className="mt-6">
              <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-copper-300">
                {content.common.followUs}
              </h2>
              <SocialLinks
                tone="dark"
                className="mt-4"
                emptyNote={content.footer.socialNote}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-50/15 pt-7 text-xs leading-relaxed text-cream-100/55">
          <p>
            © <CurrentYear initialYear={new Date().getFullYear()} />{" "}
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
