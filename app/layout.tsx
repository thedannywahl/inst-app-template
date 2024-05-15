import { InstUI } from "@/components/AppLayout";
import "@/public/globals.css";
import { ContextProvider } from "context";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

/**
 * Renders the root layout of the application.
 *
 * @param children - The content to be rendered within the layout.
 * @returns a Promise representing the root layout.
 */
async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <ContextProvider>
      <NextIntlClientProvider messages={messages}>
        <html lang={locale}>
          <InstUI>{children}</InstUI>
        </html>
      </NextIntlClientProvider>
    </ContextProvider>
  );
}

export const runtime = "edge";

export default RootLayout;
