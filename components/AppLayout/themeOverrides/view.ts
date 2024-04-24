import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const viewOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    backgroundPrimary: isDark
      ? standard.colors.backgroundDarkest
      : colorOverrides.white,
    color: isDark ? standard.colors.textLight : standard.colors.textDarkest,
  };

  const highContrastThemeOverride = {
    backgroundPrimary: isDark
      ? colorOverrides.black
      : highContrast.colors.backgroundLightest,
    color: isDark ? highContrast.colors.textLightest : colorOverrides.black,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default viewOverrides;
