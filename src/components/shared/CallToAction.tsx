import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { siteContent } from "@/content/site";
import { getEmailHref, getPhoneHref } from "@/config/restaurant";

interface CallToActionProps {
  title: string;
  description?: string;
  /** Adds a "View Menu" button next to the contact actions. */
  showMenuLink?: boolean;
}

/**
 * Closing call-to-action panel used at the bottom of pages:
 * deep alpine green, warm copper accents, direct call/email actions.
 */
export function CallToAction({ title, description, showMenuLink = false }: CallToActionProps) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-xl bg-pine-900 px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Subtle decorative mountain line */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-pine-950/60"
          >
            <path
              d="M0 220 L180 90 L320 170 L520 40 L720 160 L900 70 L1060 150 L1200 90 L1200 220 Z"
              fill="currentColor"
            />
          </svg>

          <div className="relative">
            <p className="ornament-rule mb-5 justify-center text-xs font-medium uppercase tracking-[0.22em] text-copper-300">
              {siteContent.home.hero.eyebrow}
            </p>
            <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-cream-50 sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
                {description}
              </p>
            )}
            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <ButtonLink href={getPhoneHref()} variant="copper">
                {siteContent.common.callNow}
              </ButtonLink>
              <ButtonLink href={getEmailHref()} variant="light-outline">
                {siteContent.common.sendEmail}
              </ButtonLink>
              {showMenuLink && (
                <ButtonLink href="/menu" variant="light-outline">
                  {siteContent.common.viewMenu}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
