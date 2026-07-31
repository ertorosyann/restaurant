"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getDietaryLabelText, type MenuItemData } from "@/data/menu";
import { localize, type Locale, type LocalizedText } from "@/i18n/config";

interface MenuItemProps {
  item: MenuItemData;
  locale: Locale;
}

const closeLabel: LocalizedText = {
  de: "Schließen",
  cs: "Zavřít",
  en: "Close",
  pl: "Zamknij",
};

const viewPhotoLabel: LocalizedText = {
  de: "Foto ansehen",
  cs: "Zobrazit fotografii",
  en: "View photo",
  pl: "Zobacz zdjęcie",
};

/**
 * A single dish: photo thumbnail on the left, name, dotted price leader,
 * description and dietary labels. Dishes with a photo can be clicked to
 * open a lightbox with a large view of the plate.
 */
export function MenuItem({ item, locale }: MenuItemProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const dietaryLabelText = getDietaryLabelText(locale);

  const details = (
    <>
      {item.image && (
        <div className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-md sm:h-20 sm:w-20">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="80px"
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-110"
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-lg leading-snug text-charcoal-900">
            {item.name}
          </h3>
          {item.price && (
            <>
              <span
                aria-hidden="true"
                className="min-w-4 flex-1 border-b border-dotted border-charcoal-900/25"
              />
              <p className="whitespace-nowrap font-display text-lg text-copper-700">
                {item.price}
              </p>
            </>
          )}
        </div>
        {item.description && (
          <p className="mt-1.5 text-sm leading-relaxed text-charcoal-600">
            {item.description}
          </p>
        )}
        {item.labels && item.labels.length > 0 && (
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {item.labels.map((label) => (
              <li
                key={label}
                className="rounded-full bg-pine-50 px-2.5 py-0.5 text-xs font-medium uppercase tracking-[0.08em] text-pine-800"
              >
                {dietaryLabelText[label]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  if (!item.image) {
    return <article className="flex gap-4">{details}</article>;
  }

  return (
    <article>
      <button
        type="button"
        onClick={() => setIsLightboxOpen(true)}
        aria-haspopup="dialog"
        title={localize(viewPhotoLabel, locale)}
        className="group flex w-full cursor-pointer gap-4 rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper-500"
      >
        {details}
      </button>
      {isLightboxOpen && (
        <MenuItemLightbox
          item={item}
          locale={locale}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </article>
  );
}

interface MenuItemLightboxProps {
  item: MenuItemData;
  locale: Locale;
  onClose: () => void;
}

/** Full-screen overlay with a large photo of the dish. */
function MenuItemLightbox({ item, locale, onClose }: MenuItemLightboxProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  if (!item.image) return null;

  // Portal to <body>: ancestors of the menu item carry CSS transforms
  // (scroll-reveal animation), which would otherwise turn this fixed
  // overlay into one positioned inside the tiny menu-item box.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-cream-50 shadow-2xl">
        <div className="relative aspect-[4/3] bg-charcoal-900">
          {/* Instant blurred stand-in — reuses the tiny thumbnail variant
              the browser already has, so something shows immediately. */}
          <Image
            src={item.image.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="96px"
            className={`scale-110 object-cover blur-lg transition-opacity duration-300 ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 768px) 672px, 100vw"
            onLoad={() => setIsLoaded(true)}
            className={`object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                aria-hidden="true"
                className="h-10 w-10 animate-spin rounded-full border-[3px] border-cream-50/25 border-t-cream-50"
              />
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label={localize(closeLabel, locale)}
            className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-charcoal-950/60 text-cream-50 transition-colors hover:bg-charcoal-950/80 focus-visible:outline-2 focus-visible:outline-cream-50"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-xl leading-snug text-charcoal-900 sm:text-2xl">
              {item.name}
            </h3>
            {item.price && (
              <>
                <span
                  aria-hidden="true"
                  className="min-w-4 flex-1 border-b border-dotted border-charcoal-900/25"
                />
                <p className="whitespace-nowrap font-display text-xl text-copper-700 sm:text-2xl">
                  {item.price}
                </p>
              </>
            )}
          </div>
          {item.description && (
            <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
