import type { ThemeOrOverride } from "@instructure/emotion/types/EmotionTypes";
import { canvas as standard, canvasHighContrast as highContrast } from "@instructure/ui";

const ThemeOverrides = (isDark: boolean): ThemeOrOverride | undefined => {

  const white = "#fff";
  const gray = "#f5f5f5";
  const black = "#000";
  const darkGray = standard.colors.oxford;
  const darkestGray = standard.colors.licorice;

  return {
    componentOverrides: {
      "TopNavBar.Layout": {
        desktopInlinePadding: "1.5rem !important",
        breakpoint: "684",
      },
    },
    themeOverrides: {
      canvas: {
        colors: {
          textDarkest: isDark ? standard.colors.textLightest : standard.colors.textDarkest,
        },
        componentOverrides: {
          Modal: {
            borderColor: isDark ? standard.colors.borderDark : standard.colors.borderMedium,
          },
          "Modal.Footer": {
            inverseBorderColor: standard.colors.backgroundDark
          },
          "Modal.Header": {
            inverseBorderColor: standard.colors.backgroundDark
          },
          "TopNavBar.Layout": {
            desktopBackground: darkestGray,
            desktopBackgroundInverse: gray,
            smallViewportBackgroundInverse: gray,
            desktopBottomBorder: `0.0625rem solid ${standard.colors.borderDark}`,
            desktopBottomBorderInverse: `0.0625rem solid ${standard.colors.borderMedium}`,
          },
          Tray: {
            background: isDark ? darkGray : white,
            borderColor: isDark ? standard.colors.oxford : white
          },
          View: {
            backgroundPrimary: isDark ? darkGray : white,
            color: isDark ? white : standard.colors.textDarkest,
          },
        },
      },
      "canvas-high-contrast": {
        colors: {
          textDarkest: isDark ? white : black,
        },
        componentOverrides: {
          Modal: {
            inverseBackground: black,
            borderColor: isDark ? white : black,
          },
          "Modal.Body": {
            inverseBackground: black
          },
          "Modal.Footer": {
            inverseBackground: black,
            inverseBorderColor: white
          },
          "Modal.Header": {
            inverseBackground: black,
            inverseBorderColor: white
          },
          "TopNavBar.Layout": {
            desktopBackground: black,
            desktopBottomBorder: "0.0625rem solid!important",
          },
          Tray: {
            background: isDark ? black : white,
            borderColor: isDark ? white : black
          },
          View: {
            backgroundPrimary: isDark ? black : white,
            color: isDark ? white : black,
          },
        },
      },
    },
  };
};

export { ThemeOverrides };
