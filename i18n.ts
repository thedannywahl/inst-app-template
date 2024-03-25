import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Locale, AvailableLocale } from "types";

const locales: Locale[] = [
  "en", // Default locale
  "en-US",
  "de",
  "es",
  "pt",
] as const;

export const availableLocales = [...locales] as const;
export const localePrefix = undefined;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as AvailableLocale)) notFound();

  return {
    messages: (
      await (locale === locales[0]
        ? import(`@/messages/${locales[0]}.json`)
        : import(`@/messages/${locale}.json`))
    ).default,
  };
});
