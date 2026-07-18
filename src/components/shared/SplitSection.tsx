import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { SiteImage } from "@/data/images";

interface SplitSectionProps {
  eyebrow?: string;
  title: string;
  paragraphs: readonly string[];
  image: SiteImage;
  /** Places the image on the left on large screens. */
  imageFirst?: boolean;
  /** Portrait (4/5) or landscape (4/3) image framing. */
  imageAspect?: "portrait" | "landscape";
  /** Alternate warm background. */
  tinted?: boolean;
  children?: ReactNode;
}

/**
 * Editorial building block: generous whitespace, elegant heading,
 * flowing copy and one large photograph.
 */
export function SplitSection({
  eyebrow,
  title,
  paragraphs,
  image,
  imageFirst = false,
  imageAspect = "portrait",
  tinted = false,
  children,
}: SplitSectionProps) {
  return (
    <section
      className={`px-4 py-20 sm:px-6 sm:py-28 lg:px-8 ${tinted ? "bg-cream-100" : ""}`}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={imageFirst ? "order-1 lg:order-2" : ""}>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-600 sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          {children}
        </Reveal>

        <Reveal delay={120} className={imageFirst ? "order-2 lg:order-1" : ""}>
          <div
            className={`relative mx-auto max-w-md overflow-hidden rounded-lg shadow-lifted lg:max-w-none ${
              imageAspect === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1216px) 536px, (min-width: 1024px) 45vw, (min-width: 640px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
