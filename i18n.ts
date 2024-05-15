import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Locale } from "./app/types";

// List of supported locales
export const locales: Locale[] = [
  "en", // Default locale
  "en-US",
  "de",
  "es",
  "pt",
] as const;

export const defaultLocale = "en";

export default getRequestConfig(async () => {
  // This can either be defined statically if only a single locale
  // is supported, or alternatively read from user settings
  const locale = defaultLocale;

  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
