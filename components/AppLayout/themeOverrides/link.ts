import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colors";

const linkOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    color: isDark ? colorOverrides.darkStandardBrand : standard.colors.textLink,
    focusOutlineColor: isDark
      ? colorOverrides.darkStandardBrand
      : standard.colors.textLink,
    hoverColor: isDark ? colorOverrides.darkOxfordBrand : "rgb(2, 84, 131)",
    colorInverse: isDark
      ? standard.colors.textLight
      : standard.colors.textLight,
    focusInverseOutlineColor: isDark
      ? standard.colors.textLight
      : standard.colors.textLight,
    focusInverseIconOutlineColor: isDark
      ? standard.colors.textLight
      : standard.colors.textLight,
  };

  const highContrastThemeOverride = {
    color: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.textLink,
    focusOutlineColor: isDark
      ? colorOverrides.darkHighContrastBrand
      : standard.colors.textLink,
    hoverColor: isDark ? colorOverrides.darkOxfordBrand : "rgb(5, 78, 114)",
    colorInverse: isDark
      ? highContrast.colors.textLight
      : highContrast.colors.textLight,
    focusInverseOutlineColor: isDark
      ? highContrast.colors.textLight
      : highContrast.colors.textLight,
    focusInverseIconOutlineColor: isDark
      ? highContrast.colors.textLight
      : highContrast.colors.textLight,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default linkOverrides;
