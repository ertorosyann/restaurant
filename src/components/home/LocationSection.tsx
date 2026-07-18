import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteContent } from "@/content/site";
import { getDirectionsUrl } from "@/config/restaurant";
import { siteImages } from "@/data/images";

/**
 * Alpine location section: full-bleed Dachstein scenery with the
 * village facts and a directions action.
 */
export function LocationSection() {
  const { location } = siteContent.home;

  return (
    <section className="relative overflow-hidden bg-charcoal-950">
      <div className="absolute inset-0">
        <Image
          src={siteImages.mountains.src}
          alt={siteImages.mountains.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/60 to-charcoal-950/30"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={location.eyebrow}
            title={location.title}
            tone="dark"
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-cream-100/85 sm:text-lg">
            {location.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <dl className="mt-10 grid max-w-xl gap-x-8 gap-y-6 sm:grid-cols-3">
            {location.facts.map((fact) => (
              <div key={fact.label} className="border-l border-copper-400/60 pl-4">
                <dt className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-copper-300">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-cream-50">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-11">
            <ButtonLink href={getDirectionsUrl()} variant="light-outline" newTab>
              {siteContent.common.getDirections}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
