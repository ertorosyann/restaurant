import { createHash } from "node:crypto";

/**
 * Minimal auth for the /changetimes admin page. The password is NOT
 * stored in the code — set it on the server as an environment variable:
 *
 *   ADMIN_PASSWORD=your-secret-password
 *
 * (e.g. in a `.env.local` file next to package.json, then restart the
 * server). While it is unset, the admin page refuses to work.
 */

export const ADMIN_COOKIE = "zentrum_admin";

/** Session cookie value derived from the password — no secrets in the cookie. */
export function adminSessionToken(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return createHash("sha256").update(`zentrum-admin:${password}`).digest("hex");
}

export function isValidAdminSession(cookieValue: string | undefined): boolean {
  const expected = adminSessionToken();
  return !!expected && !!cookieValue && cookieValue === expected;
}
