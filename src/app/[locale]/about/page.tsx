import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallToAction } from "@/components/shared/CallToAction";
import { Gallery } from "@/components/shared/Gallery";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SplitSection } from "@/components/shared/SplitSection";
import { getSiteContent } from "@/content/site";
import { eventRoomSlides, siteImages } from "@/data/images";
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
  return buildPageMetadata({ ...meta.about, path: "/about", locale });
}

export default async function AboutPage(props: PageProps) {
  const locale = await resolveLocale(props);
  const siteContent = getSiteContent(locale);
  const content = siteContent.about;

  return (
    <>
      <PageHero
        image={siteImages.aboutHero}
        eyebrow={content.header.eyebrow}
        title={content.header.title}
        description={content.header.description}
      />

      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs locale={locale} items={[{ name: siteContent.nav.about }]} />
      </div>

      {/* ---------- Story ---------- */}
      <SplitSection
        eyebrow={content.story.eyebrow}
        title={content.story.title}
        paragraphs={content.story.paragraphs}
        image={siteImages.interiorOne}
      />

      {/* ---------- Concept ---------- */}
      <SplitSection
        eyebrow={content.concept.eyebrow}
        title={content.concept.title}
        paragraphs={content.concept.paragraphs}
        image={siteImages.tableSetting}
        imageFirst
        imageAspect="landscape"
        tinted
      />

      {/* ---------- Events & celebrations ---------- */}
      <SplitSection
        eyebrow={content.team.eyebrow}
        title={content.team.title}
        paragraphs={content.team.paragraphs}
        image={siteImages.eventroom}
        imageAspect="landscape"
        tinted
      />

      {/* ---------- Cuisine & hospitality ---------- */}
      <SplitSection
        eyebrow={content.cuisine.eyebrow}
        title={content.cuisine.title}
        paragraphs={content.cuisine.paragraphs}
        image={siteImages.dishWienerSchnitzel}
      />

      {/* ---------- Coffee & dessert experience ---------- */}
      <SplitSection
        eyebrow={content.coffee.eyebrow}
        title={content.coffee.title}
        paragraphs={content.coffee.paragraphs}
        image={siteImages.coffee}
        images={[siteImages.coffee, siteImages.latteMacchiato]}
        imageFirst
      />

      {/* ---------- Interior gallery ---------- */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.gallery.eyebrow}
              title={content.gallery.title}
              description={content.gallery.description}
              align="center"
            />
          </Reveal>
          <Gallery
            className="mt-14"
            images={[
              siteImages.moments1,
              siteImages.dishTunaCiabatta,
              siteImages.coffee,
              siteImages.dishBelgianWaffles,
              siteImages.putenstreifensalat,
            ]}
          />
          <p className="mt-6 text-center text-xs text-charcoal-500">
            {siteContent.common.placeholderNotice}
          </p>
        </div>
      </section>

      {/* ---------- Alpine surroundings ---------- */}
      <section className="relative overflow-hidden bg-charcoal-950">
        <div className="absolute inset-0">
          <Image
            src={siteImages.moments4.src}
            alt={siteImages.moments4.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/45 to-charcoal-950/80"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={content.surroundings.eyebrow}
              title={content.surroundings.title}
              tone="dark"
              align="center"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {content.surroundings.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Quality ingredients ----------
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.ingredients.eyebrow}
              title={content.ingredients.title}
              tone="dark"
              align="center"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {content.ingredients.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.ingredients.points.map((point, index) => (
              <Reveal key={point.title} delay={index * 110}>
                <div className="h-full rounded-lg border border-cream-50/12 bg-pine-800/60 p-7 sm:p-8">
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl text-copper-300"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-cream-50">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-100/75">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* ---------- Final call-to-action ---------- */}
      <div className="pt-20">
        <CallToAction
          locale={locale}
          title={content.cta.title}
          description={content.cta.description}
          showMenuLink
        />
      </div>
    </>
  );
}
