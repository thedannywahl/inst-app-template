import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

/**
 * @todo: typing `Locales` as a string pattern causes `AvailableLocale`
 * to be `string` instead of a union of the `locales` array.
 * const str: AvailableLocale = "fr"; // This should cause a TypeScript error
 * const arr: AvailableLocale[] = ["fr"]; // This should cause a TypeScript error
 */
type Locale = Lowercase<string>
  | `${Lowercase<string>}-${Uppercase<string>}`;

export const locales: Locale[] = [
  "en", // Default locale
  "en-US",
  "de",
  "es",
  "pt",
] as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    messages: (
      await (locale === locales[0]
        ? import(`@/messages/${locales[0]}.json`)
        : import(`@/messages/${locale}.json`))
    ).default,
  };
});
