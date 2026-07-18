import Image from "next/image";
import type { SiteImage } from "@/data/images";

interface PageHeroProps {
  image: SiteImage;
  eyebrow: string;
  title: string;
  description?: string;
}

/**
 * Photographic page header for the sub-pages (About, Menu, Contact).
 * The hero image loads with priority; overlay text animates in gently
 * with pure CSS (disabled automatically under reduced motion).
 */
export function PageHero({ image, eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52svh] items-end overflow-hidden bg-charcoal-950 sm:min-h-[56svh]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover motion-safe:animate-slow-zoom"
        />
      </div>
      {/* Legibility overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/40 to-charcoal-950/30"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-40 sm:px-6 sm:pb-16 lg:px-8">
        <p className="ornament-rule mb-4 text-xs font-medium uppercase tracking-[0.22em] text-copper-300 motion-safe:animate-fade-up">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-tight text-cream-50 sm:text-5xl motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-100/85 sm:text-lg motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
