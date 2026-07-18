"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Renders the current year. The server/build snapshot is the build-time
 * year; after hydration the visitor's clock takes over, so the footer
 * copyright never goes stale on a long-lived static deployment.
 */
export function CurrentYear({ initialYear }: { initialYear: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => initialYear
  );
  return <>{year}</>;
}
