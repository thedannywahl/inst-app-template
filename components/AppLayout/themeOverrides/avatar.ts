import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colors";

const avatarOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    background: isDark
      ? colorOverrides.darkStandardOxford
      : standard.colors.backgroundLightest,
    borderColor: isDark
      ? colorOverrides.darkStandardAsh
      : standard.colors.borderDark,
    boxShadowColor: isDark
      ? "rgba(255, 255, 255, 0.28)"
      : "rgba(45, 59, 69, 0.12)",
    color: isDark ? colorOverrides.darkOxfordBrand : standard.colors.textInfo,
    colorShamrock: isDark
      ? colorOverrides.darkOxfordShamrock
      : standard.colors.textSuccess,
    colorFire: isDark
      ? colorOverrides.darkOxfordFire
      : standard.colors.textWarning,
    colorCrimson: isDark
      ? colorOverrides.darkOxfordCrimson
      : standard.colors.textDanger,
    colorLicorice: isDark
      ? standard.colors.textLightest
      : standard.colors.textDarkest,
    colorBarney: isDark
      ? colorOverrides.darkOxfordBarney
      : standard.colors.textAlert,
    colorAsh: isDark ? colorOverrides.darkOxfordAsh : standard.colors.textDark,
  };

  const highContrastThemeOverride = {
    background: isDark
      ? colorOverrides.black
      : highContrast.colors.backgroundLightest,
    borderColor: isDark
      ? colorOverrides.darkHighContrastAsh
      : highContrast.colors.borderMedium,
    boxShadowColor: isDark
      ? "rgba(255, 255, 255, 0.28)"
      : "rgba(45, 59, 69, 0.12)",
    color: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.textInfo,
    colorShamrock: isDark
      ? colorOverrides.darkHighContrastShamrock
      : highContrast.colors.textSuccess,
    colorFire: isDark
      ? colorOverrides.darkHighContrastFire
      : highContrast.colors.textWarning,
    colorCrimson: isDark
      ? colorOverrides.darkHighContrastCrimson
      : highContrast.colors.textDanger,
    colorLicorice: isDark
      ? highContrast.colors.textLightest
      : highContrast.colors.textDarkest,
    colorBarney: isDark
      ? colorOverrides.darkHighContrastBarney
      : highContrast.colors.textAlert,
    colorAsh: isDark
      ? colorOverrides.darkHighContrastAsh
      : highContrast.colors.textDark,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default avatarOverrides;
