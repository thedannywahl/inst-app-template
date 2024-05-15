import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import { darken, lighten } from "@instructure/ui-color-utils";

const colors = {
  fixed: {
    white: "rgb(255, 255, 255)",
    black: "rgb(0, 0, 0)",
  },
  standard: {
    light: {
      licorice: standard.colors.licorice,
      oxford: standard.colors.oxford,
      ash: standard.colors.ash,
      slate: standard.colors.slate,
      tiara: standard.colors.tiara,
      porcelain: standard.colors.porcelain,
      get porcelainHover() {
        return darken(colors.standard.light.porcelain, 10);
      },
      white: standard.colors.white,
      info: standard.colors.brand,
      get infoHover() {
        return darken(colors.standard.light.info, 10);
      },
      alert: standard.colors.barney,
      get alertHover() {
        return darken(colors.standard.light.alert, 10);
      },
      success: standard.colors.shamrock,
      get successHover() {
        return darken(colors.standard.light.success, 10);
      },
      danger: standard.colors.crimson,
      get dangerHover() {
        return darken(colors.standard.light.danger, 10);
      },
      warning: standard.colors.fire,
      get warningHover() {
        return darken(colors.standard.light.warning, 10);
      },
    },
    dark: {
      licorice: standard.colors.white,
      oxford: standard.colors.porcelain,
      ash: standard.colors.tiara,
      slate: standard.colors.slate,
      tiara: standard.colors.ash,
      porcelain: standard.colors.oxford,
      get porcelainHover() {
        return lighten(colors.standard.dark.porcelain, 10);
      },
      white: standard.colors.licorice,
      info: "rgb(4, 137, 213)",
      get infoHover() {
        return lighten(colors.standard.dark.info, 10);
      },
      alert: "rgb(209, 78, 184)",
      get alertHover() {
        return lighten(colors.standard.dark.alert, 5);
      },
      success: "rgb(12, 152, 84)",
      get successHover() {
        return lighten(colors.standard.dark.success, 5);
      },
      danger: "rgb(255, 31, 57)",
      get dangerHover() {
        return lighten(colors.standard.dark.danger, 5);
      },
      warning: standard.colors.fire,
      get warningHover() {
        return lighten(colors.standard.dark.warning, 5);
      },
    },
  },
  highContrast: {
    light: {
      get licorice() {
        return colors.fixed.black;
      },
      get oxford() {
        return colors.fixed.black;
      },
      ash: "rgb(85, 101, 114)",
      get slate() {
        return colors.highContrast.light.ash;
      },
      get tiara() {
        return colors.highContrast.light.ash;
      },
      porcelain: highContrast.colors.white,
      get porcelainHover() {
        return darken(colors.highContrast.light.porcelain, 50);
      },
      white: highContrast.colors.white,
      info: highContrast.colors.brand,
      get infoHover() {
        return darken(colors.highContrast.light.info, 15);
      },
      alert: highContrast.colors.barney,
      get alertHover() {
        return darken(colors.highContrast.light.alert, 15);
      },
      success: highContrast.colors.shamrock,
      get successHover() {
        return darken(colors.highContrast.light.success, 15);
      },
      danger: highContrast.colors.crimson,
      get dangerHover() {
        return darken(colors.highContrast.light.danger, 15);
      },
      warning: standard.colors.fire,
      get warningHover() {
        return darken(colors.standard.light.warning, 10);
      },
    },
    dark: {
      shamrock: standard.colors.shamrock,
      barney: "rgb(202, 53, 173)",
      crimson: "rgb(235, 6, 33)",
      fire: standard.colors.fire,
      licorice: highContrast.colors.white,
      oxford: highContrast.colors.white,
      ash: "rgb(107, 119, 128)",
      get slate() {
        return colors.highContrast.dark.ash;
      },
      get tiara() {
        return colors.highContrast.dark.ash;
      },
      get porcelain() {
        return colors.fixed.black;
      },
      get porcelainHover() {
        return lighten(colors.highContrast.dark.porcelain, 50);
      },
      get white() {
        return colors.fixed.black;
      },
      info: "rgb(3, 122, 191)",
      get infoHover() {
        return lighten(colors.highContrast.dark.info, 15);
      },
      alert: "rgb(202, 53, 173)",
      get alertHover() {
        return lighten(colors.highContrast.dark.alert, 15);
      },
      success: standard.colors.shamrock,
      get successHover() {
        return lighten(colors.highContrast.dark.success, 15);
      },
      danger: "rgb(235, 6, 33)",
      get dangerHover() {
        return lighten(colors.highContrast.dark.danger, 15);
      },
      warning: standard.colors.fire,
      get warningHover() {
        return lighten(colors.standard.dark.warning, 15);
      },
    },
  },
};

export default colors;
