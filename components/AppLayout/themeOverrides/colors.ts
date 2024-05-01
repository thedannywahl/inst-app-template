import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";

/**
 * Color Palette
 * -----------------------------------------------------------------
 * | Shade    | Name      | Light   | Dark    | HC Light | HC Dark |
 * -----------------------------------------------------------------
 * | Darkest  | Licorice  | #2D3B45 | #FFFFFF | #000000  | #FFFFFF |
 * | Darker   | Oxford    | #394B58 | #F5F5F5 | #000000  | #FFFFFF |
 * | Dark     | Ash       | #6B7780 | #C7CDD1 | #556572  | #6B7780 |
 * | Medium   | Slate     | #8B969E | #8B969E | #556572  | #6B7780 |
 * | Light    | Tiara     | #C7CDD1 | #6B7780 | #556572  | #6B7780 |
 * | Lighter  | Porcelain | #F5F5F5 | #394B58 | #FFFFFF  | #000000 |
 * | Lightest | White     | #FFFFFF | #2D3B45 | #FFFFFF  | #000000 |
 * | Success  | Shamrock  | #0B874B | #0C9854 | #127A1B  | #0B874B |
 * | Alert    | Barney    | #BF32A4 | #D14EB8 | #B8309E  | #CA35AD |
 * | Danger   | Crimson   | #E0061F | #FA3249 | #D01A19  | #EB0621 |
 * | Warning  | Fire      | #FC5E13 | #FC5E13 | #C23C0D  | #FC5E13 |
 * | Info     | Brand     | #0374B5 | #0489D5 | #0770A3  | #037ABF |
 * | -        | Electric  | #0374B5 | #0489D5 | #0770A3  | #037ABF |
 * | -        | Link      | #0374B5 | #0489D5 | #0770A3  | #037ABF |
 * | -        | LinkHover | #025483 | #059BF2 | #054E72  | #037CC2 |
 * -----------------------------------------------------------------
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
 * | LinkHover   |  3.82:1  |  3.00:1 |    X    |    X    |    X    |    X    |  3.00:1 |
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
 * | LinkHover   |  8.97:1  |  8.97:1 |    X    |    X    |    X    |    X    |    X    |
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
 * | LinkHover   |  5.92:1  |  5.92:1 |    X    |    X    |    X    |    X    |    X    |
 * --------------------------------------------------------------------------------------
 */

const colors = {
  standard: {
    light: {
      brand: standard.colors.brand,
      link: standard.colors.link,
      linkHover: "#054E72",
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
      black: "#000000",
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
      get lightest() {
        return colors.standard.light.white;
      },
      get info() {
        return colors.standard.light.brand;
      },
      get alert() {
        return colors.standard.light.barney;
      },
      get success() {
        return colors.standard.light.shamrock;
      },
      get danger() {
        return colors.standard.light.crimson;
      },
      get warning() {
        return colors.standard.light.fire;
      },
    },
    dark: {
      brand: "#0489D5",
      get link() {
        return colors.standard.dark.brand;
      },
      linkHover: "#059BF2",
      get electric() {
        return colors.standard.dark.brand;
      },
      shamrock: "#0C9854",
      barney: "#D14EB8",
      crimson: "#FA3249",
      fire: standard.colors.fire,
      licorice: standard.colors.white,
      oxford: standard.colors.porcelain,
      ash: standard.colors.tiara,
      slate: standard.colors.slate,
      tiara: standard.colors.ash,
      porcelain: standard.colors.oxford,
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
      get lightest() {
        return colors.standard.dark.white;
      },
      get info() {
        return colors.standard.dark.brand;
      },
      get alert() {
        return colors.standard.dark.barney;
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
  },
  highContrast: {
    light: {
      brand: highContrast.colors.brand,
      link: highContrast.colors.link,
      linkHover: "#054E72",
      electric: highContrast.colors.electric,
      shamrock: highContrast.colors.shamrock,
      barney: highContrast.colors.barney,
      crimson: highContrast.colors.crimson,
      fire: highContrast.colors.fire,
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
      get lightest() {
        return colors.highContrast.light.white;
      },
      get info() {
        return colors.highContrast.light.brand;
      },
      get alert() {
        return colors.highContrast.light.barney;
      },
      get success() {
        return colors.highContrast.light.shamrock;
      },
      get danger() {
        return colors.highContrast.light.crimson;
      },
      get warning() {
        return colors.highContrast.light.fire;
      },
    },
    dark: {
      brand: "#037ABF",
      get link() {
        return colors.highContrast.dark.brand;
      },
      linkHover: "#037CC2",
      get electric() {
        return colors.highContrast.dark.brand;
      },
      shamrock: standard.colors.shamrock,
      barney: "#CA35AD",
      crimson: "#EB0621",
      fire: standard.colors.fire,
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
      get white() {
        return colors.standard.light.black;
      },
      black: standard.colors.white,
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
      get lightest() {
        return colors.highContrast.light.white;
      },
      get info() {
        return colors.highContrast.light.brand;
      },
      get alert() {
        return colors.highContrast.light.barney;
      },
      get success() {
        return colors.highContrast.light.shamrock;
      },
      get danger() {
        return colors.highContrast.light.crimson;
      },
      get warning() {
        return colors.highContrast.light.fire;
      },
    },
  },
};

export default colors;
