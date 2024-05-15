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
    desktopBackground: color.porcelain,
    desktopBackgroundInverse: color.oxford,
    desktopBottomBorder: `0.0625rem solid ${
      isHighContrast ? color.licorice : color.porcelain
    }`,
    desktopBottomBorderInverse: `0.0625rem solid ${
      isHighContrast ? color.white : color.ash
    }`,
    desktopUserSeparatorColor: color.ash,
    desktopUserSeparatorColorInverse: color.tiara,
    smallViewportBackground: color.porcelain,
    smallViewportBackgroundInverse: color.oxford,
    smallViewportBottomBorder: `0.0625rem solid ${
      isHighContrast ? color.licorice : color.tiara
    }`,
    smallViewportBottomBorderInverse: `0.0625rem solid ${
      isHighContrast ? color.white : color.ash
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
