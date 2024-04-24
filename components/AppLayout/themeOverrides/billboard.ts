import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const billboardOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    iconColor: isDark ? standard.colors.textLightest : standard.colors.textDark,
    iconHoverColor: isDark
      ? colorOverrides.darkOxfordBrand
      : standard.colors.textInfo,
    backgroundColor: isDark
      ? colorOverrides.darkStandardOxford
      : standard.colors.backgroundLight,
    iconHoverColorInverse: isDark
      ? standard.colors.textDarkest
      : standard.colors.textLight,
    messageColor: isDark
      ? standard.colors.textLightest
      : standard.colors.textDark,
    messageColorClickable: isDark
      ? colorOverrides.darkOxfordBrand
      : standard.colors.textInfo,
    messageColorInverse: isDark
      ? standard.colors.textDarkest
      : standard.colors.textLight,
    clickableActiveBg: isDark
      ? colorOverrides.darkOxfordBrand
      : standard.colors.backgroundInfo,
    clickableActiveText: isDark
      ? standard.colors.textDarkest
      : standard.colors.textLight,
  };

  const highContrastThemeOverride = {
    iconColor: isDark
      ? highContrast.colors.textLightest
      : highContrast.colors.textDark,
    iconHoverColor: isDark
      ? colorOverrides.darkHighContrastBrand
      : standard.colors.textInfo,
    backgroundColor: isDark
      ? colorOverrides.black
      : highContrast.colors.backgroundLight,
    iconHoverColorInverse: isDark
      ? colorOverrides.black
      : highContrast.colors.textLight,
    messageColor: isDark
      ? highContrast.colors.textLightest
      : highContrast.colors.textDark,
    messageColorClickable: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.textInfo,
    messageColorInverse: isDark
      ? colorOverrides.black
      : highContrast.colors.textLight,
    clickableActiveBg: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.backgroundInfo,
    clickableActiveText: isDark
      ? colorOverrides.black
      : highContrast.colors.textLight,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default billboardOverrides;
