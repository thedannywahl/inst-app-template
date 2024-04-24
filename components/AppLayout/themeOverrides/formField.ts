import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const formFieldLabelOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    color: isDark ? standard.colors.textLight : standard.colors.textDarkest,
  };

  const highContrastThemeOverride = {
    color: isDark ? highContrast.colors.textLightest : colorOverrides.black,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

const formFieldMessageOverrides = (
  isDark: boolean,
  isHighContrast: boolean,
) => {
  const standardThemeOverride = {
    color: isDark ? standard.colors.textLight : standard.colors.textDarkest,
  };

  const highContrastThemeOverride = {
    color: isDark ? highContrast.colors.textLightest : colorOverrides.black,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export { formFieldLabelOverrides, formFieldMessageOverrides };
