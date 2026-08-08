"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

interface BlurUpImageProps {
  src: string;
  alt: string;
  sizes: string;
  /** Classes for the full-quality image (object-cover, hover effects…). */
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  quality?: number;
}

/**
 * Progressive image for `fill` layouts: a tiny blurred preview (a few KB,
 * near-instant even on a cold server) appears first, and the full-quality
 * photo fades in over it once downloaded. Must be rendered inside a
 * `position: relative` container, like next/image with `fill`.
 */
export function BlurUpImage({
  src,
  alt,
  sizes,
  className = "object-cover",
  priority,
  loading,
  quality,
}: BlurUpImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // onLoad alone can miss images that were already in the browser cache
  // before hydration — check `complete` on mount as well.
  const handleRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth > 0) setIsLoaded(true);
  }, []);

  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes="128px"
        quality={60}
        priority={priority}
        loading={priority ? undefined : loading}
        className={`scale-110 object-cover blur-lg transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        ref={handleRef}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : loading}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </>
  );
}
