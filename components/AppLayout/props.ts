import type { ThemeOrOverride } from "@instructure/emotion/types/EmotionTypes";
import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";

const ThemeOverrides = (isDark: boolean): ThemeOrOverride | undefined => {
  const white = "#fff";
  const gray = "#f5f5f5";
  const black = "#000";

  const darkHighContrastBrand = "#037abf";
  const darkHighContrastShamrock = standard.colors.shamrock;
  const darkHighContrastCrimson = "#eb0621";
  const darkHighContrastFire = standard.colors.fire;
  const darkHighContrastBarney = "#ca35ad";
  const darkHighContrastAsh = standard.colors.ash;

  const darkStandardOxford = standard.colors.oxford;
  const darkStandardBrand = "#0489D5";
  const darkStandardShamrock = "#0c9854";
  const darkStandardCrimson = "#FA3249";
  const darkStandardFire = standard.colors.fire;
  const darkStandardBarney = "#d14fb8";
  const darkStandardAsh = "#78858e";

  const darkOxfordBrand = "#059bf2";
  const darkOxfordShamrock = "#1aae26";
  const darkOxfordCrimson = "#ff5e5e";
  const darkOxfordFire = "#fc661f";
  const darkOxfordBarney = "#d96fc5";
  const darkOxfordAsh = "#78858e";
  const darkOxfordLicorice = standard.colors.porcelain;

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
              ? darkStandardOxford
              : standard.colors.backgroundLightest,
            color: isDark
              ? standard.colors.textLight
              : standard.colors.textDarkest,
            infoBorderColor: isDark
              ? darkStandardBrand
              : standard.colors.backgroundInfo,
            infoIconBackground: isDark
              ? darkStandardBrand
              : standard.colors.backgroundInfo,
            successBorderColor: isDark
              ? darkStandardShamrock
              : standard.colors.backgroundSuccess,
            successIconBackground: isDark
              ? darkStandardShamrock
              : standard.colors.backgroundSuccess,
            warningBorderColor: standard.colors.backgroundWarning,
            warningIconBackground: standard.colors.backgroundWarning,
            errorBorderColor: isDark
              ? darkStandardCrimson
              : standard.colors.backgroundDanger,
            errorIconBackground: isDark
              ? darkStandardCrimson
              : standard.colors.backgroundDanger,
          },
          Avatar: {
            background: isDark
              ? darkStandardOxford
              : standard.colors.backgroundLightest,
            borderColor: isDark ? darkStandardAsh : standard.colors.borderDark,
            boxShadowColor: isDark
              ? "rgba(255, 255, 255, 0.28)"
              : "rgba(45, 59, 69, 0.12)",
            color: isDark ? darkOxfordBrand : standard.colors.textInfo,
            colorShamrock: isDark
              ? darkOxfordShamrock
              : standard.colors.textSuccess,
            colorFire: isDark ? darkOxfordFire : standard.colors.textWarning,
            colorCrimson: isDark
              ? darkOxfordCrimson
              : standard.colors.textDanger,
            colorLicorice: isDark
              ? standard.colors.textLightest
              : standard.colors.textDarkest,
            colorBarney: isDark ? darkOxfordBarney : standard.colors.textAlert,
            colorAsh: isDark ? darkOxfordAsh : standard.colors.textDark,
          },
          Badge: {
            color: standard.colors.textLight,
            colorInverse: standard.colors.textDarkest,
            colorDanger: isDark
              ? darkStandardCrimson
              : standard.colors.textDanger,
            colorSuccess: isDark
              ? darkStandardShamrock
              : standard.colors.textSuccess,
            colorPrimary: isDark ? darkStandardBrand : standard.colors.textInfo,
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
          Billboard: {
            iconColor: isDark
              ? standard.colors.textLightest
              : standard.colors.textDark,
            iconHoverColor: isDark ? darkOxfordBrand : standard.colors.textInfo,
            backgroundColor: isDark
              ? darkStandardOxford
              : standard.colors.backgroundLight,
            iconHoverColorInverse: isDark
              ? standard.colors.textDarkest
              : standard.colors.textLight,
            messageColor: isDark
              ? standard.colors.textLightest
              : standard.colors.textDark,
            messageColorClickable: isDark
              ? darkOxfordBrand
              : standard.colors.textInfo,
            messageColorInverse: isDark
              ? standard.colors.textDarkest
              : standard.colors.textLight,
            clickableActiveBg: isDark
              ? darkOxfordBrand
              : standard.colors.backgroundInfo,
            clickableActiveText: isDark
              ? standard.colors.textDarkest
              : standard.colors.textLight,
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
            successBorderColor: isDark
              ? darkHighContrastShamrock
              : highContrast.colors.backgroundSuccess,
            successIconBackground: isDark
              ? darkHighContrastShamrock
              : highContrast.colors.backgroundSuccess,
            warningBorderColor: isDark
              ? darkHighContrastFire
              : highContrast.colors.backgroundWarning,
            warningIconBackground: isDark
              ? darkHighContrastFire
              : highContrast.colors.backgroundWarning,
            errorBorderColor: isDark
              ? darkHighContrastCrimson
              : highContrast.colors.backgroundDanger,
            errorIconBackground: isDark
              ? darkHighContrastCrimson
              : highContrast.colors.backgroundDanger,
            infoBorderColor: isDark
              ? darkHighContrastBrand
              : highContrast.colors.backgroundInfo,
            infoIconBackground: isDark
              ? darkHighContrastBrand
              : highContrast.colors.backgroundInfo,
          },
          Avatar: {
            background: isDark ? black : highContrast.colors.backgroundLightest,
            borderColor: isDark
              ? darkHighContrastAsh
              : highContrast.colors.borderMedium,
            boxShadowColor: isDark
              ? "rgba(255, 255, 255, 0.28)"
              : "rgba(45, 59, 69, 0.12)",
            color: isDark
              ? darkHighContrastBrand
              : highContrast.colors.textInfo,
            colorShamrock: isDark
              ? darkHighContrastShamrock
              : highContrast.colors.textSuccess,
            colorFire: isDark
              ? darkHighContrastFire
              : highContrast.colors.textWarning,
            colorCrimson: isDark
              ? darkHighContrastCrimson
              : highContrast.colors.textDanger,
            colorLicorice: isDark
              ? highContrast.colors.textLightest
              : highContrast.colors.textDarkest,
            colorBarney: isDark
              ? darkHighContrastBarney
              : highContrast.colors.textAlert,
            colorAsh: isDark
              ? darkHighContrastAsh
              : highContrast.colors.textDark,
          },
          Badge: {
            color: highContrast.colors.textLight,
            colorInverse: highContrast.colors.textDarkest,
            colorDanger: isDark
              ? darkHighContrastCrimson
              : highContrast.colors.textDanger,
            colorSuccess: isDark
              ? darkHighContrastShamrock
              : highContrast.colors.textSuccess,
            colorPrimary: isDark
              ? darkHighContrastBrand
              : highContrast.colors.textInfo,
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
          Billboard: {
            iconColor: isDark
              ? highContrast.colors.textLightest
              : highContrast.colors.textDark,
            iconHoverColor: isDark
              ? darkHighContrastBrand
              : standard.colors.textInfo,
            backgroundColor: isDark
              ? black
              : highContrast.colors.backgroundLight,
            iconHoverColorInverse: isDark
              ? black
              : highContrast.colors.textLight,
            messageColor: isDark
              ? highContrast.colors.textLightest
              : highContrast.colors.textDark,
            messageColorClickable: isDark
              ? darkHighContrastBrand
              : highContrast.colors.textInfo,
            messageColorInverse: isDark ? black : highContrast.colors.textLight,
            clickableActiveBg: isDark
              ? darkHighContrastBrand
              : highContrast.colors.backgroundInfo,
            clickableActiveText: isDark ? black : highContrast.colors.textLight,
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
