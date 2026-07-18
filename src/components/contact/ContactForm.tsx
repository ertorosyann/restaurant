"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { siteContent } from "@/content/site";

/**
 * Contact form — FRONTEND DEMONSTRATION ONLY.
 * ============================================
 * There is intentionally no backend: submitting shows a success state
 * without sending anything, and this is clearly communicated to the
 * visitor.
 *
 * CONNECTING A REAL EMAIL SERVICE LATER
 * -------------------------------------
 * Option A — Formspree (no backend code):
 *   1. Create a form at https://formspree.io and copy its endpoint.
 *   2. In handleSubmit, replace the simulated block with:
 *        await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *          method: "POST",
 *          headers: { "Content-Type": "application/json", Accept: "application/json" },
 *          body: JSON.stringify(values),
 *        });
 *
 * Option B — Web3Forms (no backend code):
 *   Same as above with endpoint "https://api.web3forms.com/submit" and
 *   your access_key included in the JSON body.
 *
 * Option C — Resend (email API via a route handler):
 *   1. `npm install resend`, set RESEND_API_KEY in .env.local.
 *   2. Create src/app/api/contact/route.ts that validates the payload
 *      and calls `resend.emails.send(...)`.
 *   3. POST `values` to "/api/contact" here.
 */

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FieldName = keyof FormValues;
type FormStatus = "idle" | "submitting" | "success";

const initialValues: FormValues = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const content = siteContent.contact.form;
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  /* When the form is replaced by the success panel, move keyboard focus
     to the confirmation heading so focus is not dropped to <body>. */
  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

  const setValue = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!values.name.trim()) nextErrors.name = content.errorRequired;
    if (!values.email.trim()) {
      nextErrors.email = content.errorRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = content.errorEmail;
    }
    if (!values.message.trim()) nextErrors.message = content.errorRequired;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    /* ⬇️ Replace this simulated delay with a real request — see the
       integration notes at the top of this file. */
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("success");
    setValues(initialValues);
  };

  /* Persistent live region: it exists in both render states, so screen
     readers reliably announce the text change on successful submission. */
  const liveRegion = (
    <p aria-live="polite" className="sr-only">
      {status === "success" ? content.successTitle : ""}
    </p>
  );

  if (status === "success") {
    return (
      <>
        {liveRegion}
        <div className="flex h-full flex-col items-start justify-center rounded-lg border border-pine-200 bg-pine-50 p-8 sm:p-10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 text-pine-700"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m8.5 12.5 2.5 2.5 5-6" />
          </svg>
          <h3
            ref={successHeadingRef}
            tabIndex={-1}
            className="mt-5 font-display text-2xl text-charcoal-900 outline-none"
          >
            {content.successTitle}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
            {content.successText}
          </p>
        </div>
      </>
    );
  }

  const inputClasses = (field: FieldName) =>
    `w-full rounded-md border bg-cream-50 px-4 py-3.5 text-base text-charcoal-900 placeholder:text-charcoal-500 transition-colors focus:border-pine-700 focus:outline-none focus:ring-2 focus:ring-pine-700/20 ${
      errors[field] ? "border-red-700" : "border-charcoal-900/15"
    }`;

  return (
    <>
      {liveRegion}
      <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-charcoal-900/8 bg-white p-7 shadow-soft sm:p-9">
      <h2 className="font-display text-2xl text-charcoal-900">{content.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
        {content.description}
      </p>
      <p className="mt-3 inline-block rounded-full bg-copper-100 px-3 py-1 text-xs font-medium text-copper-800">
        {content.demoNotice}
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-charcoal-800"
          >
            {content.nameLabel}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => setValue("name", event.target.value)}
            placeholder={content.namePlaceholder}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClasses("name")}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-sm font-medium text-charcoal-800"
            >
              {content.emailLabel}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(event) => setValue("email", event.target.value)}
              placeholder={content.emailPlaceholder}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={inputClasses("email")}
            />
            {errors.email && (
              <p id="contact-email-error" className="mt-1.5 text-sm text-red-700">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-1.5 block text-sm font-medium text-charcoal-800"
            >
              {content.phoneLabel}
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => setValue("phone", event.target.value)}
              placeholder={content.phonePlaceholder}
              className={inputClasses("phone")}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-charcoal-800"
          >
            {content.messageLabel}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={(event) => setValue("message", event.target.value)}
            placeholder={content.messagePlaceholder}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={`${inputClasses("message")} resize-y`}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1.5 text-sm text-red-700">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-pine-800 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-cream-50 shadow-soft transition-all duration-200 hover:bg-pine-900 hover:shadow-lifted disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? content.submitting : content.submit}
        </button>
      </div>
      </form>
    </>
  );
}
