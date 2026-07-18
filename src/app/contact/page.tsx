import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteContent } from "@/content/site";
import {
  getDirectionsUrl,
  getEmailHref,
  getPhoneHref,
} from "@/config/restaurant";
import { siteImages } from "@/data/images";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact | Zentrum Café Restaurant Ramsau am Dachstein",
  description:
    "Contact Zentrum Café Restaurant in Ramsau am Dachstein: telephone, email, address, opening hours and directions. We look forward to your visit in the Dachstein region.",
  path: "/contact",
});

export default function ContactPage() {
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
        <Breadcrumbs items={[{ name: siteContent.nav.contact }]} />
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
            <ContactDetails />
          </Reveal>
          <Reveal delay={110}>
            <ContactForm />
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
            <MapSection />
          </div>
        </Reveal>
      </section>
    </>
  );
}
