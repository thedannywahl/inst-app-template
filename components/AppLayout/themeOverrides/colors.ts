import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";

/**
 * Color Palette
 * ---------------------------------------------------------------------
 * | Shade    | Name          | Light   | Dark    | HC Light | HC Dark |
 * ---------------------------------------------------------------------
 * | Darkest  | Licorice      | #2D3B45 | #FFFFFF | #000000  | #FFFFFF |
 * | Darker   | Oxford        | #394B58 | #F5F5F5 | #000000  | #FFFFFF |
 * | Dark     | Ash           | #6B7780 | #C7CDD1 | #556572  | #6B7780 |
 * | Medium   | Slate         | #8B969E | #8B969E | #556572  | #6B7780 |
 * | Light    | Tiara         | #C7CDD1 | #6B7780 | #556572  | #6B7780 |
 * | Lighter  | Porcelain     | #F5F5F5 | #394B58 | #FFFFFF  | #000000 |
 * |          | LighterHover  | #DBDBDB | #475E6E | #E6E6E6  | #777777 |
 * | Lightest | White         | #FFFFFF | #2D3B45 | #FFFFFF  | #000000 |
 * | Success  | Shamrock      | #0B874B | #0C9854 | #127A1B  | #0B874B |
 * |          | ShamrockHover | #075831 | #0DD85D | #0B4E11  | #0C9854 |
 * | Alert    | Barney        | #BF32A4 | #D14EB8 | #B8309E  | #CA35AD |
 * |          | BarneyHover   | #B5309C | #D357BC | #AF2E96  | #D14EB8 |
 * | Danger   | Crimson       | #E0061F | #FA3249 | #D01A19  | #EB0621 |
 * |          | CrimsonHover  | #AE0518 | #EE0621 | #A21414  | #E0061F |
 * | Warning  | Fire          | #FC5E13 | #FC5E13 | #C23C0D  | #FC5E13 |
 * |          | FireHover     | #FC5506 | #FC661F | #B8390C  | #FC661F |
 * | Info     | Brand         | #0374B5 | #0489D5 | #0770A3  | #037ABF |
 * | -        | Electric      | #0374B5 | #0489D5 | #0770A3  | #037ABF |
 * | -        | Link          | #0374B5 | #0489D5 | #0770A3  | #037ABF |
 * | -        | LinkHover     | #025483 | #059BF2 | #025483  | #0390E1 |
 * ---------------------------------------------------------------------
 * The ColorOverrides Pallete (called Standard) is substantially different from the
 * `canvas` and `canvas-high-contrast` color palettes. It adds additional shades:
 * `Darker` and `Lighter`, and changes the former `Light` to `Lighter`.
 *  It also adds a new state name `linkHover`.
 *
 * Here is a comparison of the color shades between the `canvas` Theme and `standard` (this Theme):
 * --------------------------------------------------------------------------------
 * |__________| Licorice | Oxford | Ash   | Slate  | Tiara | Porcelain | White    |
 * | Canvas   | Darkest  |        | Dark  | Medium |       | Light     | Lightest |
 * | Standard | Darkest  | Darker | Dark  | Medium | Light | Lighter   | Lightest |
 * --------------------------------------------------------------------------------
 * This is convenient for Components which manually define colors as `tiara` or `oxford` and gives a
 * standard interface for color definitions.
 *
 * LinkHover is defined in the `standard` palette and replaces manual `rgb()` declarations in Components.
 *
 * Generally Lightest/Lighter on Darkest or Darkest/Darker on Lightest are recommended for sufficient contrast.
 *
 *
 * Color Contrasts
 *
 * Standard Light
 * --------------------------------------------------------------------------------------
 * | FG ↓ / BG → | Lightest | Lighter | Light   | Medium  | Dark    | Darker  | Darkest |
 * |------------------------------------------------------------------------------------|
 * | Lightest    |     X    |    X    |    X    |  3.01:1 |  4.58:1 |  9.04:1 | 11.51:1 |
 * | Lighter     |     X    |    X    |    X    |    X    |  4.20:1 |  8.29:1 | 10.56:1 |
 * | Light       |     X    |    X    |    X    |    X    |    X    |  5.63:1 |  7.17:1 |
 * | Medium      |  3.01:1  |    X    |    X    |    X    |    X    |    X    |  3.81:1 |
 * | Dark        |  4.58:1  |  4.20:1 |    X    |    X    |    X    |    X    |    X    |
 * | Darker      |  9.04:1  |  8.29:1 |  5.63:1 |    X    |    X    |    X    |    X    |
 * | Darkest     | 11.51:1  | 10.56:1 |  7.17:1 |  3.81:1 |    X    |    X    |    X    |
 * |------------------------------------------------------------------------------------|
 * | Success     |  4.58:1  |  4.20:1 |    X    |    X    |    X    |    X    |    X    |
 * | Alert       |  4.99:1  |  4.57:1 |  3.10:1 |    X    |    X    |    X    |    X    |
 * | Danger      |  4.98:1  |  4.56:1 |  3.10:1 |    X    |    X    |    X    |    X    |
 * | Warning     |  3.11:1  |    X    |    X    |    X    |    X    |    X    |  3.70:1 |
 * | Info        |  5.03:1  |  4.61:1 |  3.13:1 |    X    |    X    |    X    |    X    |
 * | LinkHover   |  8.08:1  |  7.41:1 |  5.03:1 |    X    |    X    |    X    |    X    |
 * --------------------------------------------------------------------------------------
 *
 * Standard Dark
 * --------------------------------------------------------------------------------------
 * | FG ↓ / BG → | Lightest | Lighter | Light   | Medium  | Dark    | Darker  | Darkest |
 * --------------------------------------------------------------------------------------
 * | Lightest    |     X    |    X    |    X    |  3.81:1 |  7.17:1 | 10.56:1 | 11.51:1 |
 * | Lighter     |     X    |    X    |    X    |    X    |  5.63:1 |  8.29:1 |  9.04:1 |
 * | Light       |     X    |    X    |    X    |    X    |    X    |  4.20:1 |  4.58:1 |
 * | Medium      |  3.81:1  |    X    |    X    |    X    |    X    |    X    |  3.01:1 |
 * | Dark        |  7.17:1  |  5.63:1 |    X    |    X    |    X    |    X    |    X    |
 * | Darker      | 10.56:1  |  8.29:1 |  4.20:1 |    X    |    X    |    X    |    X    |
 * | Darkest     | 11.51:1  |  9.04:1 |  4.58:1 |  3.01:1 |    X    |    X    |    X    |
 * |------------------------------------------------------------------------------------|
 * | Success     |  3.09:1  |    X    |    X    |    X    |    X    |  3.41:1 |  3.72:1 |
 * | Alert       |  3.01:1  |    X    |    X    |    X    |    X    |  3.50:1 |  3.82:1 |
 * | Danger      |  3.08:1  |    X    |    X    |    X    |    X    |  3.42:1 |  3.73:1 |
 * | Warning     |  3.70:1  |    X    |    X    |    X    |    X    |    X    |  3.11:1 |
 * | Info        |  3.04:1  |    X    |    X    |    X    |    X    |  3.47:1 |  3.78:1 |
 * --------------------------------------------------------------------------------------
 *
 * High Contrast Light
 * --------------------------------------------------------------------------------------
 * | FG ↓ / BG → | Lightest | Lighter | Light   | Medium  | Dark    | Darker  | Darkest |
 * --------------------------------------------------------------------------------------
 * | Lightest    |     X    |    X    |  6.01:1 |  6.01:1 |  6.01:1 | 21.00:1 | 21.00:1 |
 * | Lighter     |     X    |    X    |  6.01:1 |  6.01:1 |  6.01:1 | 21.00:1 | 21.00:1 |
 * | Light       |  6.01:1  |  6.01:1 |    X    |    X    |    X    |    X    |    X    |
 * | Medium      |  6.01:1  |  6.01:1 |    X    |    X    |    X    |    X    |    X    |
 * | Dark        |  6.01:1  |  6.01:1 |    X    |    X    |    X    |    X    |    X    |
 * | Darker      | 21.00:1  |  6.01:1 |    X    |    X    |    X    |    X    |    X    |
 * | Darkest     | 21.00:1  |  6.01:1 |    X    |    X    |    X    |    X    |    X    |
 * |------------------------------------------------------------------------------------|
 * | Success     |  5.48:1  |  5.48:1 |    X    |    X    |    X    |    X    |    X    |
 * | Alert       |  5.31:1  |  5.31:1 |    X    |    X    |    X    |    X    |    X    |
 * | Danger      |  5.46:1  |  5.46:1 |    X    |    X    |    X    |    X    |    X    |
 * | Warning     |  5.32:1  |  5.32:1 |    X    |    X    |    X    |    X    |    X    |
 * | Info        |  5.44:1  |  5.44:1 |    X    |    X    |    X    |    X    |    X    |
 * --------------------------------------------------------------------------------------
 *
 * High Contrast Dark
 * --------------------------------------------------------------------------------------
 * | FG ↓ / BG → | Lightest | Lighter | Light   | Medium  | Dark    | Darker  | Darkest |
 * --------------------------------------------------------------------------------------
 * | Lightest    |    X     |    X    |  4.57:1 |  4.57:1 |  4.57:1 | 21.00:1 | 21.00:1 |
 * | Lighter     |    X     |    X    |  4.57:1 |  4.57:1 |  4.57:1 | 21.00:1 | 21.00:1 |
 * | Light       |  4.57:1  |  4.57:1 |    X    |    X    |    X    |    X    |    X    |
 * | Medium      |  4.57:1  |  4.57:1 |    X    |    X    |    X    |    X    |    X    |
 * | Dark        |  4.57:1  |  4.57:1 |    X    |    X    |    X    |    X    |    X    |
 * | Darker      | 21.00:1  | 21.00:1 |    X    |    X    |    X    |    X    |    X    |
 * | Darkest     | 21.00:1  | 21.00:1 |    X    |    X    |    X    |    X    |    X    |
 * |------------------------------------------------------------------------------------|
 * | Success     |  4.58:1  |  4.58:1 |    X    |    X    |    X    |  4.58:1 |  4.58:1 |
 * | Alert       |  4.62:1  |  4.62:1 |    X    |    X    |    X    |  4.54:1 |  4.54:1 |
 * | Danger      |  4.58:1  |  4.58:1 |    X    |    X    |    X    |  4.58:1 |  4.58:1 |
 * | Warning     |  6.74:1  |  6.74:1 |    X    |    X    |    X    |    X    |    X    |
 * | Info        |  4.54:1  |  4.54:1 |    X    |    X    |    X    |  4.62:1 |  4.62:1 |
 * --------------------------------------------------------------------------------------
 */

const colors = {
  fixed: {
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent",
  },
  standard: {
    light: {
      brand: standard.colors.brand,
      brandHover: "#054E72",
      link: standard.colors.link,
      get linkHover() {
        return colors.standard.light.brandHover;
      },
      electric: standard.colors.electric,
      get electricHover() {
        return colors.standard.light.brandHover;
      },
      shamrock: standard.colors.shamrock,
      shamrockHover: "#075831",
      barney: standard.colors.barney,
      barneyHover: "#B5309C",
      crimson: standard.colors.crimson,
      crimsonHover: "#AE0518",
      fire: standard.colors.fire,
      fireHover: "#FC5506",
      licorice: standard.colors.licorice,
      oxford: standard.colors.oxford,
      ash: standard.colors.ash,
      slate: standard.colors.slate,
      tiara: standard.colors.tiara,
      porcelain: standard.colors.porcelain,
      porcelainHover: "#DBDBDB",
      get white() { return colors.fixed.white; },
      get black() { return colors.fixed.black; },
      get darkest() {
        return colors.standard.light.licorice;
      },
      get darker() {
        return colors.standard.light.oxford;
      },
      get dark() {
        return colors.standard.light.ash;
      },
      get medium() {
        return colors.standard.light.slate;
      },
      get light() {
        return colors.standard.light.tiara;
      },
      get lighter() {
        return colors.standard.light.porcelain;
      },
      get lighterHover() {
        return colors.standard.light.porcelainHover;
      },
      get lightest() {
        return colors.standard.light.white;
      },
      get info() {
        return colors.standard.light.brand;
      },
      get infoHover() {
        return colors.standard.light.brandHover;
      },
      get alert() {
        return colors.standard.light.barney;
      },
      get alertHover() {
        return colors.standard.light.barneyHover;
      },
      get success() {
        return colors.standard.light.shamrock;
      },
      get successHover() {
        return colors.standard.light.shamrockHover;
      },
      get danger() {
        return colors.standard.light.crimson;
      },
      get dangerHover() {
        return colors.standard.light.crimsonHover;
      },
      get warning() {
        return colors.standard.light.fire;
      },
      get warningHover() {
        return colors.standard.light.fireHover;
      }
    },
    dark: {
      brand: "#0489D5",
      brandHover: "#059BF2",
      get link() {
        return colors.standard.dark.brand;
      },
      get linkHover() {
        return colors.standard.dark.brandHover;
      },
      get electric() {
        return colors.standard.dark.brand;
      },
      get electricHover() {
        return colors.standard.dark.brandHover;
      },
      shamrock: "#0C9854",
      shamrockHover: "#0DD85D",
      barney: "#D14EB8",
      barneyHover: "#D357BC",
      crimson: "#FA3249",
      crimsonHover: "#EE0621",
      fire: standard.colors.fire,
      fireHover: "#FC661F",
      licorice: standard.colors.white,
      oxford: standard.colors.porcelain,
      ash: standard.colors.tiara,
      slate: standard.colors.slate,
      tiara: standard.colors.ash,
      porcelain: standard.colors.oxford,
      porcelainHover: "#475E6E",
      white: standard.colors.licorice,
      black: standard.colors.white,
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
        return colors.standard.dark.slate;
      },
      get light() {
        return colors.standard.dark.tiara;
      },
      get lighter() {
        return colors.standard.dark.porcelain;
      },
      get lighterHover() {
        return colors.standard.dark.porcelainHover;
      },
      get lightest() {
        return colors.standard.dark.white;
      },
      get info() {
        return colors.standard.dark.brand;
      },
      get infoHover() {
        return colors.standard.dark.brandHover;
      },
      get alert() {
        return colors.standard.dark.barney;
      },
      get alertHover() {
        return colors.standard.dark.barneyHover;
      },
      get success() {
        return colors.standard.dark.shamrock;
      },
      get successHover() {
        return colors.standard.dark.shamrockHover;
      },
      get danger() {
        return colors.standard.dark.crimson;
      },
      get dangerHover() {
        return colors.standard.dark.crimsonHover;
      },
      get warning() {
        return colors.standard.dark.fire;
      },
      get warningHover() {
        return colors.standard.dark.fireHover;
      }
    },
  },
  highContrast: {
    light: {
      brand: highContrast.colors.brand,
      get brandHover() {
        return colors.standard.light.brandHover;
      },
      get link() {
        return colors.highContrast.light.brand;
      },
      get linkHover() {
        return colors.highContrast.light.brandHover;
      },
      get electric() {
        return colors.highContrast.light.brand;
      },
      get electricHover() {
        return colors.highContrast.light.brandHover;
      },
      shamrock: highContrast.colors.shamrock,
      shamrockHover: "#0B4E11",
      barney: highContrast.colors.barney,
      barneyHover: "#AF2E96",
      crimson: highContrast.colors.crimson,
      crimsonHover: "#A21414",
      fire: highContrast.colors.fire,
      fireHover: "#B8390C",
      get licorice() {
        return colors.highContrast.light.black;
      },
      get oxford() {
        return colors.highContrast.light.black;
      },
      ash: "#556572",
      get slate() {
        return colors.highContrast.light.ash;
      },
      get tiara() {
        return colors.highContrast.light.ash;
      },
      get porcelain() {
        return colors.highContrast.light.white;
      },
      porcelainHover: "#E6E6E6",
      white: highContrast.colors.white,
      get black() {
        return colors.standard.light.black;
      },
      get darkest() {
        return colors.highContrast.light.licorice;
      },
      get darker() {
        return colors.highContrast.light.oxford;
      },
      get dark() {
        return colors.highContrast.light.ash;
      },
      get medium() {
        return colors.highContrast.light.slate;
      },
      get light() {
        return colors.highContrast.light.tiara;
      },
      get lighter() {
        return colors.highContrast.light.porcelain;
      },
      get lighterHover() {
        return colors.highContrast.light.porcelainHover;
      },
      get lightest() {
        return colors.highContrast.light.white;
      },
      get info() {
        return colors.highContrast.light.brand;
      },
      get infoHover() {
        return colors.highContrast.light.brandHover;
      },
      get alert() {
        return colors.highContrast.light.barney;
      },
      get alertHover() {
        return colors.highContrast.light.barneyHover;
      },
      get success() {
        return colors.highContrast.light.shamrock;
      },
      get successHover() {
        return colors.highContrast.light.shamrockHover;
      },
      get danger() {
        return colors.highContrast.light.crimson;
      },
      get dangerHover() {
        return colors.highContrast.light.crimsonHover;
      },
      get warning() {
        return colors.highContrast.light.fire;
      },
      get warningHover() {
        return colors.highContrast.light.fireHover;
      },
    },
    dark: {
      brand: "#037ABF",
      brandHover: "#0390E1",
      get link() {
        return colors.highContrast.dark.brand;
      },
      get linkHover() {
        return colors.highContrast.dark.brandHover;
      },
      get electric() {
        return colors.highContrast.dark.brand;
      },
      get electricHover() {
        return colors.highContrast.dark.brandHover;
      },
      shamrock: standard.colors.shamrock,
      get shamrockHover() {
        return colors.standard.dark.shamrock;
      },
      barney: "#CA35AD",
      get barneyHover() {
        return colors.standard.dark.barney;
      },
      crimson: "#EB0621",
      crimsonHover: "#E0061F",
      fire: standard.colors.fire,
      get fireHover() {
        return colors.standard.dark.fireHover;
      },
      licorice: highContrast.colors.white,
      oxford: highContrast.colors.white,
      ash: "#6B7780",
      get slate() {
        return colors.highContrast.dark.ash;
      },
      get tiara() {
        return colors.highContrast.dark.ash;
      },
      get porcelain() {
        return colors.highContrast.dark.white;
      },
      porcelainHover: "#777777",
      get white() {
        return colors.standard.light.black;
      },
      black: standard.colors.white,
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
        return colors.highContrast.dark.slate;
      },
      get light() {
        return colors.highContrast.dark.tiara;
      },
      get lighter() {
        return colors.highContrast.dark.porcelain;
      },
      get lighterHover() {
        return colors.highContrast.dark.porcelainHover;
      },
      get lightest() {
        return colors.highContrast.dark.white;
      },
      get info() {
        return colors.highContrast.dark.brand;
      },
      get infoHover() {
        return colors.highContrast.dark.brandHover;
      },
      get alert() {
        return colors.highContrast.dark.barney;
      },
      get alertHover() {
        return colors.highContrast.dark.barneyHover;
      },
      get success() {
        return colors.highContrast.dark.shamrock;
      },
      get successHover() {
        return colors.highContrast.dark.shamrockHover;
      },
      get danger() {
        return colors.highContrast.dark.crimson;
      },
      get dangerHover() {
        return colors.highContrast.dark.crimsonHover;
      },
      get warning() {
        return colors.highContrast.dark.fire;
      },
      get warningHover() {
        return colors.highContrast.dark.fireHover;
      },
    },
  },
};

export default colors;
