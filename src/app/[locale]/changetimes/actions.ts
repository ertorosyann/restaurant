"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_COOKIE,
  adminSessionToken,
  isValidAdminSession,
} from "@/lib/admin-auth";
import { restaurantConfig } from "@/config/restaurant";
import { writeHoursOverride } from "@/lib/opening-hours";
import { defaultLocale, isLocale } from "@/i18n/config";

function formLocale(formData: FormData): string {
  const value = String(formData.get("locale") ?? "");
  return isLocale(value) ? value : defaultLocale;
}

export async function loginAction(formData: FormData): Promise<void> {
  const locale = formLocale(formData);
  const expected = process.env.ADMIN_PASSWORD;
  const given = String(formData.get("password") ?? "");

  if (!expected || given !== expected) {
    redirect(`/${locale}/changetimes?error=1`);
  }

  const token = adminSessionToken();
  if (token) {
    (await cookies()).set(ADMIN_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
  }
  redirect(`/${locale}/changetimes`);
}

export async function logoutAction(formData: FormData): Promise<void> {
  const locale = formLocale(formData);
  (await cookies()).delete(ADMIN_COOKIE);
  redirect(`/${locale}/changetimes`);
}

export async function saveHoursAction(formData: FormData): Promise<void> {
  const locale = formLocale(formData);

  const session = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!isValidAdminSession(session)) {
    redirect(`/${locale}/changetimes?error=1`);
  }

  const rows = restaurantConfig.openingHours.map((_, index) => ({
    closed: formData.get(`closed-${index}`) === "on",
    hours: String(formData.get(`hours-${index}`) ?? "").trim(),
  }));

  writeHoursOverride({ rows, updatedAt: new Date().toISOString() });

  // Refresh every cached page in every language so visitors see the
  // new times immediately.
  revalidatePath("/", "layout");
  redirect(`/${locale}/changetimes?saved=1`);
}
