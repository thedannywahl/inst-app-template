import type { ThemeOrOverride } from "@instructure/emotion/types/EmotionTypes";
import { canvas as standard, canvasHighContrast as highContrast } from "@instructure/ui";

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
          BaseButton: {
            secondaryColor: standard.colors.textDarkest,
            secondaryBorderColor: "rgb(219, 219, 219)",
            secondaryBackground: standard.colors.backgroundLight,
            secondaryHoverBackground: isDark ? "rgb(242, 242, 242)" : "rgb(219, 219, 219)",
            secondaryActiveBackground: isDark ? standard.colors.backgroundLightest : "rgb(219, 219, 219)",
            secondaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark ? "rgb(191, 191, 191)" : "rgb(194, 194, 194)"}`,
            secondaryGhostColor: isDark ? standard.colors.textLightest : standard.colors.textDarkest,
            secondaryGhostBorderColor: isDark ? standard.colors.borderLightest : standard.colors.borderDarkest,
            secondaryGhostBackground: "transparent",
            secondaryGhostHoverBackground: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(45, 59, 69, 0.1)",
            secondaryGhostActiveBackground: "transparent",
            secondaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 59, 69, 0.28)"}`
          },
          FormFieldLabel: {
            color: isDark ? standard.colors.textLight : standard.colors.textDarkest,
          },
          FormFieldMessage: {
            color: isDark ? standard.colors.textLight : standard.colors.textDarkest,
          },
          Modal: {
            borderColor: isDark ? standard.colors.borderDark : standard.colors.borderMedium,
            inverseBackground: isDark ? standard.colors.backgroundDarkest : standard.colors.backgroundLightest,
          },
          "Modal.Body": {
            inverseBackground: isDark ? standard.colors.backgroundDarkest : standard.colors.backgroundLightest
          },
          "Modal.Footer": {
            inverseBorderColor: standard.colors.backgroundDark,
            inverseBackground: isDark ? standard.colors.backgroundBrandSecondary : standard.colors.backgroundLight
          },
          "Modal.Header": {
            inverseBorderColor: standard.colors.backgroundDark
          },
          RadioInput: {
            labelColor: isDark ? standard.colors.textLight : standard.colors.textDarkest,
            focusBorderColor: isDark ? standard.colors.borderLightest : standard.colors.borderInfo,
          },
          ToggleFacade: {
            color: isDark ? standard.colors.textDarkest : standard.colors.textLightest,
            background: isDark ? standard.colors.backgroundDark : standard.colors.backgroundLight,
            borderColor: standard.colors.borderMedium,
            checkedBackground: isDark ? standard.colors.backgroundSuccess : standard.colors.backgroundSuccess,
            uncheckedIconColor: isDark ? standard.colors.textDarkest : standard.colors.textDarkest,
            focusOutlineColor: isDark ? standard.colors.borderLightest : standard.colors.borderInfo,
            labelColor: isDark ? standard.colors.textLight : standard.colors.textDarkest,
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
            borderColor: isDark ? standard.colors.oxford : white
          },
          View: {
            backgroundPrimary: isDark ? standard.colors.backgroundDarkest : white,
            color: isDark ? standard.colors.textLight : standard.colors.textDarkest,
          },
        },
      },
      "canvas-high-contrast": {
        componentOverrides: {
          BaseButton: {
            secondaryColor: standard.colors.textDarkest,
            secondaryBorderColor: standard.colors.borderDark,
            secondaryBackground: standard.colors.backgroundLight,
            secondaryHoverBackground: isDark ? "rgb(242, 242, 242)" : standard.colors.backgroundLight,
            secondaryActiveBackground: isDark ? standard.colors.backgroundLight : "rgb(230, 230, 230)",
            secondaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark ? "rgb(191, 191, 191)" : "rgb(230, 230, 230)"}`,
            secondaryGhostColor: isDark ? standard.colors.textLight : standard.colors.textDarkest,
            secondaryGhostBorderColor: isDark ? standard.colors.borderLight : standard.colors.borderDarkest,
            secondaryGhostBackground: "transparent",
            secondaryGhostHoverBackground: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(45, 59, 69, 0.1)",
            secondaryGhostActiveBackground: "transparent",
            secondaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 59, 69, 0.28)"}`
          },
          FormFieldLabel: {
            color: isDark ? standard.colors.textLightest : standard.colors.textDarkest,
          },
          FormFieldMessage: {
            color: isDark ? standard.colors.textLightest : standard.colors.textDarkest,
          },
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
          RadioInput: {
            labelColor: isDark ? standard.colors.textLightest : standard.colors.textDarkest,
            focusBorderColor: isDark ? standard.colors.borderLightest : standard.colors.borderInfo,
          },
          ToggleFacade: {
            color: isDark ? standard.colors.textDarkest : standard.colors.textLightest,
            background: isDark ? standard.colors.backgroundDarkest : standard.colors.backgroundLightest,
            borderColor: standard.colors.borderMedium,
            checkedBackground: isDark ? standard.colors.backgroundSuccess : standard.colors.backgroundSuccess,
            uncheckedIconColor: isDark ? standard.colors.textDarkest : standard.colors.textDarkest,
            focusOutlineColor: isDark ? standard.colors.borderLightest : standard.colors.borderInfo,
            labelColor: isDark ? standard.colors.textLightest : standard.colors.textDarkest,
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
