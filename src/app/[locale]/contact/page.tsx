import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getSiteContent } from "@/content/site";
import {
  getDirectionsUrl,
  getEmailHref,
  getPhoneHref,
} from "@/config/restaurant";
import { siteImages } from "@/data/images";
import { buildPageMetadata } from "@/lib/seo";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

async function resolveLocale({ params }: PageProps): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : defaultLocale;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(props);
  const { meta } = getSiteContent(locale);
  return buildPageMetadata({ ...meta.contact, path: "/contact", locale });
}

export default async function ContactPage(props: PageProps) {
  const locale = await resolveLocale(props);
  const siteContent = getSiteContent(locale);
  const content = siteContent.contact;

  return (
    <>
      <PageHero
        image={siteImages.contactHero}
        eyebrow={content.header.eyebrow}
        title={content.header.title}
        description={content.header.description}
      />

      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs locale={locale} items={[{ name: siteContent.nav.contact }]} />
      </div>

      {/* ---------- Prominent quick actions ---------- */}
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-3.5 sm:grid-cols-3">
            <ButtonLink href={getPhoneHref()} variant="primary" className="w-full">
              {siteContent.common.callNow}
            </ButtonLink>
            <ButtonLink href={getEmailHref()} variant="outline" className="w-full">
              {siteContent.common.sendEmail}
            </ButtonLink>
            <ButtonLink
              href={getDirectionsUrl()}
              variant="outline"
              newTab
              className="w-full"
            >
              {siteContent.common.getDirections}
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* ---------- Details & form ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <ContactDetails locale={locale} />
          </Reveal>
          <Reveal delay={110}>
            <ContactForm locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={siteContent.home.location.eyebrow}
            title={content.map.title}
            description={content.map.description}
          />
        </Reveal>
        <Reveal delay={110}>
          <div className="mt-10">
            <MapSection locale={locale} />
          </div>
        </Reveal>
      </section>
    </>
  );
}
