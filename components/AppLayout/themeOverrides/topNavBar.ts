import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colors";

const topNavBarOverrides = (isDark: boolean, isHighContrast: boolean) => {
  return {};
};

const topNavBarActionItemsOverrides = (
  isDark: boolean,
  isHighContrast: boolean,
) => {
  return {};
};

const topNavBarBrandOverrides = (isDark: boolean, isHighContrast: boolean) => {
  return {};
};

const topNavBarBreadcrumbOverrides = (
  isDark: boolean,
  isHighContrast: boolean,
) => {
  return {};
};

const topNavBarItemOverrides = (isDark: boolean, isHighContrast: boolean) => {
  return {};
};

const topNavBarLayoutOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const componentOverride = {
    desktopInlinePadding: "1.5rem !important",
    breakpoint: "684",
  };

  const standardThemeOverride = {
    desktopBackground: standard.colors.backgroundBrandSecondary,
    desktopBackgroundInverse: colorOverrides.gray,
    smallViewportBackgroundInverse: colorOverrides.gray,
    desktopBottomBorder: `0.0625rem solid ${standard.colors.borderDark}`,
    desktopBottomBorderInverse: `0.0625rem solid ${standard.colors.borderMedium}`,
  };

  const highContrastThemeOverride = {
    desktopBackground: colorOverrides.black,
    desktopBottomBorder: "0.0625rem solid!important",
  };

  return {
    ...componentOverride,
    ...(isHighContrast ? highContrastThemeOverride : standardThemeOverride),
  };
};

const topNavBarMenuItemsOverrides = (
  isDark: boolean,
  isHighContrast: boolean,
) => {
  return {};
};

const topNavBarUserOverrides = (isDark: boolean, isHighContrast: boolean) => {
  return {};
};

export {
  topNavBarOverrides,
  topNavBarActionItemsOverrides,
  topNavBarBrandOverrides,
  topNavBarBreadcrumbOverrides,
  topNavBarItemOverrides,
  topNavBarLayoutOverrides,
  topNavBarMenuItemsOverrides,
  topNavBarUserOverrides,
};
