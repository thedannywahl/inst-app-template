import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const alertOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    background: isDark
      ? colorOverrides.darkStandardOxford
      : standard.colors.backgroundLightest,
    color: isDark ? standard.colors.textLight : standard.colors.textDarkest,
    infoBorderColor: isDark
      ? colorOverrides.darkStandardBrand
      : standard.colors.backgroundInfo,
    infoIconBackground: isDark
      ? colorOverrides.darkStandardBrand
      : standard.colors.backgroundInfo,
    successBorderColor: isDark
      ? colorOverrides.darkStandardShamrock
      : standard.colors.backgroundSuccess,
    successIconBackground: isDark
      ? colorOverrides.darkStandardShamrock
      : standard.colors.backgroundSuccess,
    warningBorderColor: standard.colors.backgroundWarning,
    warningIconBackground: standard.colors.backgroundWarning,
    errorBorderColor: isDark
      ? colorOverrides.darkStandardCrimson
      : standard.colors.backgroundDanger,
    errorIconBackground: isDark
      ? colorOverrides.darkStandardCrimson
      : standard.colors.backgroundDanger,
  };

  const highContrastThemeOverride = {
    background: isDark
      ? colorOverrides.black
      : highContrast.colors.backgroundLightest,
    color: isDark ? highContrast.colors.textLightest : colorOverrides.black,
    successBorderColor: isDark
      ? colorOverrides.darkHighContrastShamrock
      : highContrast.colors.backgroundSuccess,
    successIconBackground: isDark
      ? colorOverrides.darkHighContrastShamrock
      : highContrast.colors.backgroundSuccess,
    warningBorderColor: isDark
      ? colorOverrides.darkHighContrastFire
      : highContrast.colors.backgroundWarning,
    warningIconBackground: isDark
      ? colorOverrides.darkHighContrastFire
      : highContrast.colors.backgroundWarning,
    errorBorderColor: isDark
      ? colorOverrides.darkHighContrastCrimson
      : highContrast.colors.backgroundDanger,
    errorIconBackground: isDark
      ? colorOverrides.darkHighContrastCrimson
      : highContrast.colors.backgroundDanger,
    infoBorderColor: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.backgroundInfo,
    infoIconBackground: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.backgroundInfo,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default alertOverrides;
