import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Locale } from "types";

// List of supported locales
export const locales: Locale[] = [
  "en", // Default locale
  "en-US",
  "de",
  "es",
  "pt",
] as const;

export const defaultLocale = locales[0] as Locale;

export default getRequestConfig(async () => {
  // This can either be defined statically if only a single locale
  // is supported, or alternatively read from user settings
  const locale = defaultLocale;

  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    messages: (
      await (locale === defaultLocale
        ? import(`@/messages/${defaultLocale}.json`)
        : import(`@/messages/${locale}.json`))
    ).default,
  };
});
