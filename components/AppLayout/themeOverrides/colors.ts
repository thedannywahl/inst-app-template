import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";

/*
export const darkOxfordBrand = "#059bf2";
export const darkOxfordShamrock = "#1aae26";
export const darkOxfordCrimson = "#ff5e5e";
export const darkOxfordFire = "#fc661f";
export const darkOxfordBarney = "#d96fc5";
export const darkOxfordAsh = "#78858e";
export const darkOxfordLicorice = standard.colors.porcelain;
*/

const colors = {
  standard: {
    light: {
      brand: standard.colors.brand,
      link: standard.colors.link,
      electric: standard.colors.electric,
      shamrock: standard.colors.shamrock,
      barney: standard.colors.barney,
      crimson: standard.colors.crimson,
      fire: standard.colors.fire,
      licorice: standard.colors.licorice,
      oxford: standard.colors.oxford,
      ash: standard.colors.ash,
      slate: standard.colors.slate,
      tiara: standard.colors.tiara,
      porcelain: standard.colors.porcelain,
      white: standard.colors.white,
      text: {
        darkest: standard.colors.licorice,
        dark: standard.colors.ash,
        light: standard.colors.porcelain,
        lightest: standard.colors.white,
        brand: standard.colors.brand,
        link: standard.colors.link,
        linkHover: "rgb(2, 84, 131)",
        alert: standard.colors.barney,
        info: standard.colors.brand,
        success: standard.colors.shamrock,
        danger: standard.colors.crimson,
        warning: standard.colors.fire,
      },
      background: {
        darkest: standard.colors.licorice,
        darker: standard.colors.oxford,
        dark: standard.colors.ash,
        medium: standard.colors.tiara,
        light: standard.colors.porcelain,
        lightest: standard.colors.white,
        brand: standard.colors.brand,
        brandSecondary: standard.colors.oxford,
        alert: standard.colors.barney,
        info: standard.colors.brand,
        success: standard.colors.shamrock,
        danger: standard.colors.crimson,
        warning: standard.colors.fire,
      },
      border: {
        lightest: standard.colors.white,
        light: standard.colors.porcelain,
        medium: standard.colors.tiara,
        dark: standard.colors.ash,
        darkest: standard.colors.licorice,
        brand: standard.colors.brand,
        alert: standard.colors.barney,
        info: standard.colors.brand,
        success: standard.colors.shamrock,
        danger: standard.colors.crimson,
        warning: standard.colors.fire,
        debug: standard.colors.crimson,
      },
    },
    dark: {
      brand: "#0489D5",
      link: "#0489D5",
      electric: "#0489D5",
      shamrock: "#0c9854",
      barney: "#d14fb8",
      crimson: "#FA3249",
      fire: standard.colors.fire,
      licorice: standard.colors.white,
      oxford: standard.colors.porcelain,
      ash: standard.colors.tiara,
      slate: standard.colors.slate,
      tiara: standard.colors.ash,
      porcelain: standard.colors.oxford,
      white: standard.colors.licorice,
      text: {
        get darkest() {
          return colors.standard.dark.licorice;
        },
        get dark() {
          return colors.standard.dark.ash;
        },
        get light() {
          return colors.standard.dark.porcelain;
        },
        get lightest() {
          return colors.standard.dark.white;
        },
        get brand() {
          return colors.standard.dark.brand;
        },
        get link() {
          return colors.standard.dark.link;
        },
        linkHover: "#059bf2",
        get alert() {
          return colors.standard.dark.barney;
        },
        get info() {
          return colors.standard.dark.brand;
        },
        get success() {
          return colors.standard.dark.shamrock;
        },
        get danger() {
          return colors.standard.dark.crimson;
        },
        get warning() {
          return colors.standard.dark.fire;
        },
      },
      background: {
        get darkest() {
          return colors.standard.dark.licorice;
        },
        get darker() {
          return colors.standard.dark.oxford;
        },
        get dark() {
          return colors.standard.dark.ash;
        },
        get medium() {
          return colors.standard.dark.tiara;
        },
        get light() {
          return colors.standard.dark.porcelain;
        },
        get lightest() {
          return colors.standard.dark.white;
        },
        get brand() {
          return colors.standard.dark.brand;
        },
        get brandSecondary() {
          return colors.standard.dark.oxford;
        },
        get alert() {
          return colors.standard.dark.barney;
        },
        get info() {
          return colors.standard.dark.brand;
        },
        get success() {
          return colors.standard.dark.shamrock;
        },
        get danger() {
          return colors.standard.dark.crimson;
        },
        get warning() {
          return colors.standard.dark.fire;
        },
      },
      border: {
        get lightest() {
          return colors.standard.dark.white;
        },
        get light() {
          return colors.standard.dark.porcelain;
        },
        get medium() {
          return colors.standard.dark.tiara;
        },
        get dark() {
          return colors.standard.dark.ash;
        },
        get darkest() {
          return colors.standard.dark.licorice;
        },
        get brand() {
          return colors.standard.dark.brand;
        },
        get alert() {
          return colors.standard.dark.barney;
        },
        get info() {
          return colors.standard.dark.brand;
        },
        get success() {
          return colors.standard.dark.shamrock;
        },
        get danger() {
          return colors.standard.dark.crimson;
        },
        get warning() {
          return colors.standard.dark.fire;
        },
        get debug() {
          return colors.standard.dark.crimson;
        },
      },
    },
  },
  highContrast: {
    light: {
      brand: highContrast.colors.brand,
      link: highContrast.colors.link,
      electric: highContrast.colors.electric,
      shamrock: highContrast.colors.shamrock,
      barney: highContrast.colors.barney,
      crimson: highContrast.colors.crimson,
      fire: highContrast.colors.fire,
      licorice: highContrast.colors.licorice,
      oxford: highContrast.colors.oxford,
      ash: highContrast.colors.ash,
      slate: highContrast.colors.slate,
      tiara: highContrast.colors.tiara,
      porcelain: highContrast.colors.porcelain,
      white: highContrast.colors.white,
      text: {
        darkest: highContrast.colors.licorice,
        dark: highContrast.colors.ash,
        light: highContrast.colors.porcelain,
        lightest: highContrast.colors.white,
        brand: highContrast.colors.brand,
        link: highContrast.colors.link,
        linkHover: "rgb(5, 78, 114)",
        alert: highContrast.colors.barney,
        info: highContrast.colors.brand,
        success: highContrast.colors.shamrock,
        danger: highContrast.colors.crimson,
        warning: highContrast.colors.fire,
      },
      background: {
        darkest: highContrast.colors.licorice,
        darker: highContrast.colors.oxford,
        dark: highContrast.colors.ash,
        medium: highContrast.colors.tiara,
        light: highContrast.colors.porcelain,
        lightest: highContrast.colors.white,
        brand: highContrast.colors.brand,
        brandSecondary: highContrast.colors.oxford,
        alert: highContrast.colors.barney,
        info: highContrast.colors.brand,
        success: highContrast.colors.shamrock,
        danger: highContrast.colors.crimson,
        warning: highContrast.colors.fire,
      },
      border: {
        lightest: highContrast.colors.white,
        light: highContrast.colors.porcelain,
        medium: highContrast.colors.tiara,
        dark: highContrast.colors.ash,
        darkest: highContrast.colors.licorice,
        brand: highContrast.colors.brand,
        alert: highContrast.colors.barney,
        info: highContrast.colors.brand,
        success: highContrast.colors.shamrock,
        danger: highContrast.colors.crimson,
        warning: highContrast.colors.fire,
        debug: highContrast.colors.crimson,
      },
    },
    dark: {
      brand: "#037abf",
      link: "#037abf",
      electric: "#037abf",
      shamrock: standard.colors.shamrock,
      barney: "#ca35ad",
      crimson: "#eb0621",
      fire: standard.colors.fire,
      licorice: highContrast.colors.white,
      oxford: highContrast.colors.white,
      ash: standard.colors.ash,
      slate: standard.colors.ash,
      tiara: standard.colors.ash,
      porcelain: "#000000",
      white: "#000000",
      text: {
        get darkest() {
          return colors.highContrast.dark.licorice;
        },
        get dark() {
          return colors.highContrast.dark.ash;
        },
        get light() {
          return colors.highContrast.dark.porcelain;
        },
        get lightest() {
          return colors.highContrast.dark.white;
        },
        get brand() {
          return colors.highContrast.dark.brand;
        },
        get link() {
          return colors.highContrast.dark.link;
        },
        get linkHover() {
          return colors.standard.dark.text.linkHover;
        },
        get alert() {
          return colors.highContrast.dark.barney;
        },
        get info() {
          return colors.highContrast.dark.brand;
        },
        get success() {
          return colors.highContrast.dark.shamrock;
        },
        get danger() {
          return colors.highContrast.dark.crimson;
        },
        get warning() {
          return colors.highContrast.dark.fire;
        },
      },
      background: {
        get darkest() {
          return colors.highContrast.dark.licorice;
        },
        get darker() {
          return colors.highContrast.dark.oxford;
        },
        get dark() {
          return colors.highContrast.dark.ash;
        },
        get medium() {
          return colors.highContrast.dark.tiara;
        },
        get light() {
          return colors.highContrast.dark.porcelain;
        },
        get lightest() {
          return colors.highContrast.dark.white;
        },
        get brand() {
          return colors.highContrast.dark.brand;
        },
        get brandSecondary() {
          return colors.highContrast.dark.oxford;
        },
        get alert() {
          return colors.highContrast.dark.barney;
        },
        get info() {
          return colors.highContrast.dark.brand;
        },
        get success() {
          return colors.highContrast.dark.shamrock;
        },
        get danger() {
          return colors.highContrast.dark.crimson;
        },
        get warning() {
          return colors.highContrast.dark.fire;
        },
      },
      border: {
        get lightest() {
          return colors.highContrast.dark.white;
        },
        get light() {
          return colors.highContrast.dark.porcelain;
        },
        get medium() {
          return colors.highContrast.dark.tiara;
        },
        get dark() {
          return colors.highContrast.dark.ash;
        },
        get darkest() {
          return colors.highContrast.dark.licorice;
        },
        get brand() {
          return colors.highContrast.dark.brand;
        },
        get alert() {
          return colors.highContrast.dark.barney;
        },
        get info() {
          return colors.highContrast.dark.brand;
        },
        get success() {
          return colors.highContrast.dark.shamrock;
        },
        get danger() {
          return colors.highContrast.dark.crimson;
        },
        get warning() {
          return colors.highContrast.dark.fire;
        },
        get debug() {
          return colors.highContrast.dark.crimson;
        },
      },
    },
  },
};

export default colors;
