import Image from "next/image";
import type { SiteImage } from "@/data/images";
import { Reveal } from "@/components/shared/Reveal";

interface GalleryProps {
  images: SiteImage[];
  className?: string;
}

/**
 * Editorial image mosaic: the first image is displayed larger, the rest
 * fill a balanced grid. All images lazy-load and reveal gently on scroll.
 */
export function Gallery({ images, className = "" }: GalleryProps) {
  if (images.length === 0) return null;

  const [lead, ...rest] = images;

  return (
    <div className={`grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 ${className}`}>
      <Reveal className="col-span-2 row-span-2">
        <div className="group relative h-full min-h-64 overflow-hidden rounded-lg sm:min-h-80">
          <Image
            src={lead.src}
            alt={lead.alt}
            fill
            sizes="(min-width: 1216px) 568px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
          />
        </div>
      </Reveal>
      {rest.map((image, index) => (
        <Reveal key={`${image.src}-${index}`} delay={(index % 2) * 90}>
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1216px) 276px, (min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
