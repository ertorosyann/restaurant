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

interface ContactDetailsProps {
  locale: Locale;
}

/**
 * All essential contact information in one card — driven entirely by
 * src/config/restaurant.ts.
 */
export function ContactDetails({ locale }: ContactDetailsProps) {
  const siteContent = getSiteContent(locale);
  const content = siteContent.contact;
  const { address } = restaurantConfig;

  return (
    <div className="rounded-lg border border-charcoal-900/8 bg-white p-7 shadow-soft sm:p-9">
      <h2 className="font-display text-2xl text-charcoal-900">
        {content.detailsTitle}
      </h2>
      <p className="mt-1 text-sm text-charcoal-500">
        {restaurantConfig.city}, {localize(restaurantConfig.country, locale)}
      </p>

      <dl className="mt-8 space-y-6">
        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.2em] text-copper-700">
            {content.addressTitle}
          </dt>
          <dd className="mt-2 text-base leading-relaxed text-charcoal-700">
            <address className="not-italic">
              {!isPlaceholder(address.street) ? address.street : "[STREET_ADDRESS]"}
              <br />
              {!isPlaceholder(address.postalCode)
                ? address.postalCode
                : "[POSTAL_CODE]"}{" "}
              {address.city}
              <br />
              {localize(address.country, locale)}
            </address>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.2em] text-copper-700">
            {content.phoneTitle}
          </dt>
          <dd className="mt-2">
            <a
              href={getPhoneHref()}
              className="text-base text-charcoal-700 underline decoration-copper-400 underline-offset-4 transition-colors hover:text-pine-800"
            >
              {restaurantConfig.phone}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.2em] text-copper-700">
            {content.emailTitle}
          </dt>
          <dd className="mt-2">
            <a
              href={getEmailHref()}
              className="break-all text-base text-charcoal-700 underline decoration-copper-400 underline-offset-4 transition-colors hover:text-pine-800"
            >
              {restaurantConfig.email}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.2em] text-copper-700">
            {siteContent.common.openingHours}
          </dt>
          <dd className="mt-3">
            <OpeningHours locale={locale} />
            <p className="mt-3 text-xs text-charcoal-500">{content.hoursNote}</p>
          </dd>
        </div>

        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.2em] text-copper-700">
            {siteContent.common.followUs}
          </dt>
          <dd className="mt-3">
            <SocialLinks emptyNote={siteContent.footer.socialNote} />
          </dd>
        </div>
      </dl>
    </div>
  );
}
