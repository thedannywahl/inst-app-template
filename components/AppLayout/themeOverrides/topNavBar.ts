import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const topNavBarOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const topNavBarActionItemsOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const topNavBarBrandOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const topNavBarBreadcrumbOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const topNavBarItemOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const topNavBarLayoutOverrides = (
  mode: Mode,
  ui: UI,
  isHighContrast: boolean,
) => {
  const color = colors[ui][mode];
  return {
    desktopInlinePadding: "1.5rem !important",
    breakpoint: "684",
    desktopBackground: color.lighter,
    desktopBackgroundInverse: color.darker,
    desktopBottomBorder: `0.0625rem solid ${
      isHighContrast ? color.darkest : color.light
    }`,
    desktopBottomBorderInverse: `0.0625rem solid ${
      isHighContrast ? color.lightest : color.dark
    }`,
    desktopUserSeparatorColor: color.dark,
    desktopUserSeparatorColorInverse: color.light,
    smallViewportBackground: color.lighter,
    smallViewportBackgroundInverse: color.darker,
    smallViewportBottomBorder: `0.0625rem solid ${
      isHighContrast ? color.darkest : color.light
    }`,
    smallViewportBottomBorderInverse: `0.0625rem solid ${
      isHighContrast ? color.lightest : color.dark
    }`,
  };
};

const topNavBarMenuItemsOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const topNavBarUserOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
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
