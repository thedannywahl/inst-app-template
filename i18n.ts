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

export default getRequestConfig(async () => {
  // This can either be defined statically if only a single locale
  // is supported, or alternatively read from user settings
  const locale = locales[0];

  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    messages: (
      await (locale === locales[0]
        ? import(`@/messages/${locales[0]}.json`)
        : import(`@/messages/${locale}.json`))
    ).default,
  };
});
