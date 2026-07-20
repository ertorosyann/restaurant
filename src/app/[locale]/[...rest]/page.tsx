import { notFound } from "next/navigation";

/**
 * Catch-all for unknown paths inside a locale (e.g. /de/xyz) — renders
 * the localized 404 page in src/app/[locale]/not-found.tsx with a real
 * 404 status.
 */
export default function CatchAllNotFound() {
  notFound();
}
