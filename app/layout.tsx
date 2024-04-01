import { InstUI } from "@/components/AppLayout";
import "@/public/globals.css";
import { ContextProvider } from "context";

/**
 * Renders the root layout of the application.
 *
 * @param children - The content to be rendered within the layout.
 * @param params - The parameters for the layout.
 * @param params.locale - The locale for the layout.
 * @returns The JSX element representing the root layout.
 */
function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>): JSX.Element {
  return (
    <ContextProvider>
      <html lang={locale}>
        <InstUI>{children}</InstUI>
      </html>
    </ContextProvider>
  );
}

export const runtime = "edge";

export default RootLayout;
