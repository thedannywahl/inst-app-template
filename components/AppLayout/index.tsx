"use client";

import AppTray from "@/components/AppModal";
import AppNav from "@/components/AppNav";
import AppModal from "@/components/AppTray";
import { InstUISettingsProvider } from "@instructure/emotion";
import { View } from "@instructure/ui";
import { generateInstanceCounterMap } from "@instructure/ui-react-utils";
import { useContexts } from "context";
import type { Children } from "types";
import { ThemeOverrides } from "./props";

/**
 * Renders the InstUI component, which provides a layout for the application.
 *
 * @param children - The content to be rendered inside the InstUI component.
 * @returns The JSX element representing the InstUI component.
 */
export const InstUI: React.FC<Children> = ({
  children,
}: { children?: React.ReactNode }): JSX.Element => {
  const {
    App: { ui, theme, isDark },
  } = useContexts();

  const counter: Map<string, number> = generateInstanceCounterMap();
  counter.set("App", 0);

  const InstUI = ThemeOverrides(isDark);

  return (
    <InstUISettingsProvider theme={InstUI} instanceCounterMap={counter}>
      <View
        as="body"
        minHeight="100vh"
        position="relative"
        margin="0"
        padding="0"
        className={`${theme} ${ui}`}
        data-theme={theme}
        data-ui={ui}
        background="primary"
      >
        <AppNav />
        <View
          as="main"
          maxWidth="59.25rem"
          minWidth="20rem"
          /**
           * TopNavBar.Layout.desktopHeight + TopNavBar.Layout.desktopBottomBorder
           * @todo: calc height based on viewport width and top nav height + border
           * @default: calc(100vh - 4.0625rem)
           *
           * */
          minHeight={"calc(100vh - 4.0625rem)"}
          margin="0 auto"
        >
          {children}
        </View>
        <AppTray />
        <AppModal />
      </View>
    </InstUISettingsProvider>
  );
};
