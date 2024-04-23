import type { ThemeOrOverride } from "@instructure/emotion/types/EmotionTypes";
import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";

const ThemeOverrides = (isDark: boolean): ThemeOrOverride | undefined => {
  const white = "#fff";
  const gray = "#f5f5f5";
  const black = "#000";

  return {
    componentOverrides: {
      "TopNavBar.Layout": {
        desktopInlinePadding: "1.5rem !important",
        breakpoint: "684",
      },
    },
    themeOverrides: {
      canvas: {
        componentOverrides: {
          Alert: {
            background: isDark
              ? standard.colors.oxford
              : standard.colors.backgroundLightest,
            color: isDark
              ? standard.colors.textLight
              : standard.colors.textDarkest,
          },
          Avatar: {
            background: isDark
              ? standard.colors.oxford
              : standard.colors.backgroundLightest,
            borderColor: isDark
              ? standard.colors.borderDark
              : standard.colors.tiara,
            boxShadowColor: isDark
              ? "rgba(255, 255, 255, 0.28)"
              : "rgba(45, 59, 69, 0.12)",
            color: isDark
              ? standard.colors.textLight
              : standard.colors.textInfo,
          },
          BaseButton: {
            secondaryColor: standard.colors.textDarkest,
            secondaryBorderColor: "rgb(219, 219, 219)",
            secondaryBackground: standard.colors.backgroundLight,
            secondaryHoverBackground: isDark
              ? "rgb(242, 242, 242)"
              : "rgb(219, 219, 219)",
            secondaryActiveBackground: isDark
              ? standard.colors.backgroundLightest
              : "rgb(219, 219, 219)",
            secondaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
              isDark ? "rgb(191, 191, 191)" : "rgb(194, 194, 194)"
            }`,
            secondaryGhostColor: isDark
              ? standard.colors.textLightest
              : standard.colors.textDarkest,
            secondaryGhostBorderColor: isDark
              ? standard.colors.borderLightest
              : standard.colors.borderDarkest,
            secondaryGhostBackground: "transparent",
            secondaryGhostHoverBackground: isDark
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(45, 59, 69, 0.1)",
            secondaryGhostActiveBackground: "transparent",
            secondaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
              isDark ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 59, 69, 0.28)"
            }`,
          },
          FormFieldLabel: {
            color: isDark
              ? standard.colors.textLight
              : standard.colors.textDarkest,
          },
          FormFieldMessage: {
            color: isDark
              ? standard.colors.textLight
              : standard.colors.textDarkest,
          },
          Modal: {
            borderColor: isDark
              ? standard.colors.borderDark
              : standard.colors.borderMedium,
            inverseBackground: isDark
              ? standard.colors.backgroundDarkest
              : standard.colors.backgroundLightest,
          },
          "Modal.Body": {
            inverseBackground: isDark
              ? standard.colors.backgroundDarkest
              : standard.colors.backgroundLightest,
          },
          "Modal.Footer": {
            inverseBorderColor: standard.colors.backgroundDark,
            inverseBackground: isDark
              ? standard.colors.backgroundBrandSecondary
              : standard.colors.backgroundLight,
          },
          "Modal.Header": {
            inverseBorderColor: standard.colors.backgroundDark,
          },
          RadioInput: {
            labelColor: isDark
              ? standard.colors.textLight
              : standard.colors.textDarkest,
            focusBorderColor: isDark
              ? standard.colors.borderLightest
              : standard.colors.borderInfo,
          },
          ToggleFacade: {
            color: isDark
              ? standard.colors.textDarkest
              : standard.colors.textLightest,
            background: isDark
              ? standard.colors.backgroundDark
              : standard.colors.backgroundLight,
            borderColor: standard.colors.borderMedium,
            checkedBackground: isDark
              ? standard.colors.backgroundSuccess
              : standard.colors.backgroundSuccess,
            uncheckedIconColor: standard.colors.textDarkest,
            focusOutlineColor: isDark
              ? standard.colors.borderLightest
              : standard.colors.borderInfo,
            labelColor: isDark
              ? standard.colors.textLight
              : standard.colors.textDarkest,
          },
          "TopNavBar.Layout": {
            desktopBackground: standard.colors.backgroundBrandSecondary,
            desktopBackgroundInverse: gray,
            smallViewportBackgroundInverse: gray,
            desktopBottomBorder: `0.0625rem solid ${standard.colors.borderDark}`,
            desktopBottomBorderInverse: `0.0625rem solid ${standard.colors.borderMedium}`,
          },
          Tray: {
            background: isDark ? standard.colors.backgroundDarkest : white,
            borderColor: isDark ? standard.colors.oxford : white,
          },
          View: {
            backgroundPrimary: isDark
              ? standard.colors.backgroundDarkest
              : white,
            color: isDark
              ? standard.colors.textLight
              : standard.colors.textDarkest,
          },
        },
      },
      "canvas-high-contrast": {
        componentOverrides: {
          Alert: {
            background: isDark ? black : highContrast.colors.backgroundLightest,
            color: isDark ? highContrast.colors.textLightest : black,
          },
          BaseButton: {
            secondaryColor: highContrast.colors.textDarkest,
            secondaryBorderColor: highContrast.colors.borderDark,
            secondaryBackground: highContrast.colors.backgroundLight,
            secondaryHoverBackground: isDark
              ? "rgb(242, 242, 242)"
              : highContrast.colors.backgroundLight,
            secondaryActiveBackground: isDark
              ? highContrast.colors.backgroundLight
              : "rgb(230, 230, 230)",
            secondaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
              isDark ? "rgb(191, 191, 191)" : "rgb(230, 230, 230)"
            }`,
            secondaryGhostColor: isDark
              ? highContrast.colors.textLightest
              : black,
            secondaryGhostBorderColor: isDark
              ? highContrast.colors.borderLight
              : highContrast.colors.borderDarkest,
            secondaryGhostBackground: "transparent",
            secondaryGhostHoverBackground: isDark
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(45, 59, 69, 0.1)",
            secondaryGhostActiveBackground: "transparent",
            secondaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
              isDark ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 59, 69, 0.28)"
            }`,
          },
          FormFieldLabel: {
            color: isDark ? highContrast.colors.textLightest : black,
          },
          FormFieldMessage: {
            color: isDark ? highContrast.colors.textLightest : black,
          },
          Modal: {
            inverseBackground: black,
            borderColor: isDark ? highContrast.colors.borderLightest : black,
          },
          "Modal.Body": {
            inverseBackground: black,
          },
          "Modal.Footer": {
            inverseBackground: black,
            inverseBorderColor: white,
          },
          "Modal.Header": {
            inverseBackground: black,
            inverseBorderColor: white,
          },
          RadioInput: {
            labelColor: isDark ? highContrast.colors.textLightest : black,
            focusBorderColor: isDark
              ? highContrast.colors.borderLightest
              : highContrast.colors.borderInfo,
          },
          ToggleFacade: {
            color: isDark ? black : highContrast.colors.textLightest,
            background: isDark
              ? highContrast.colors.backgroundDarkest
              : highContrast.colors.backgroundMedium,
            borderColor: isDark
              ? highContrast.colors.borderLightest
              : highContrast.colors.borderDark,
            checkedBackground: isDark
              ? highContrast.colors.backgroundSuccess
              : highContrast.colors.backgroundSuccess,
            uncheckedIconColor: isDark ? black : standard.colors.textDarkest,
            focusOutlineColor: isDark
              ? standard.colors.borderLightest
              : standard.colors.borderInfo,
            labelColor: isDark
              ? standard.colors.textLightest
              : standard.colors.textDarkest,
          },
          "TopNavBar.Layout": {
            desktopBackground: black,
            desktopBottomBorder: "0.0625rem solid!important",
          },
          Tray: {
            background: isDark ? black : highContrast.colors.backgroundLightest,
            borderColor: isDark ? highContrast.colors.borderLightest : black,
          },
          View: {
            backgroundPrimary: isDark
              ? black
              : highContrast.colors.backgroundLightest,
            color: isDark ? highContrast.colors.textLightest : black,
          },
        },
      },
    },
  };
};

export { ThemeOverrides };
