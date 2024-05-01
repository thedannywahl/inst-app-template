import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const topNavBarOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const topNavBarActionItemsOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const topNavBarBrandOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const topNavBarBreadcrumbOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const topNavBarItemOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const topNavBarLayoutOverrides = (mode: Mode, ui: UI, isHighContrast: boolean) => {
  return {
    desktopInlinePadding: "1.5rem !important",
    breakpoint: "684",
    desktopBackground: colors[ui][mode].lighter,
    desktopBackgroundInverse: colors[ui][mode].darker,
    desktopBottomBorder: `0.0625rem solid ${isHighContrast ? colors[ui][mode].darkest : colors[ui][mode].light}`,
    desktopBottomBorderInverse: `0.0625rem solid ${isHighContrast ? colors[ui][mode].lightest : colors[ui][mode].dark}`,
    desktopUserSeparatorColor: colors[ui][mode].dark,
    desktopUserSeparatorColorInverse: colors[ui][mode].light,
    smallViewportBackground: colors[ui][mode].lighter,
    smallViewportBackgroundInverse: colors[ui][mode].darker,
    smallViewportBottomBorder: `0.0625rem solid ${isHighContrast ? colors[ui][mode].darkest : colors[ui][mode].light}`,
    smallViewportBottomBorderInverse: `0.0625rem solid ${isHighContrast ? colors[ui][mode].lightest : colors[ui][mode].dark}`,
  };
};

const topNavBarMenuItemsOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const topNavBarUserOverrides = (mode: Mode, ui: UI) => {
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
