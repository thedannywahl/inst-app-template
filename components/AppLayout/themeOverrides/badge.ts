import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const badgeOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    color: standard.colors.textLight,
    colorInverse: standard.colors.textDarkest,
    colorDanger: isDark
      ? colorOverrides.darkStandardCrimson
      : standard.colors.textDanger,
    colorSuccess: isDark
      ? colorOverrides.darkStandardShamrock
      : standard.colors.textSuccess,
    colorPrimary: isDark
      ? colorOverrides.darkStandardBrand
      : standard.colors.textInfo,
  };

  const highContrastThemeOverride = {
    color: highContrast.colors.textLight,
    colorInverse: highContrast.colors.textDarkest,
    colorDanger: isDark
      ? colorOverrides.darkHighContrastCrimson
      : highContrast.colors.textDanger,
    colorSuccess: isDark
      ? colorOverrides.darkHighContrastShamrock
      : highContrast.colors.textSuccess,
    colorPrimary: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.textInfo,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default badgeOverrides;
