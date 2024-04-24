import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const checkboxOverrides = (isDark: boolean, isHighContrast: boolean) => {
  return {};
};

const checkboxFacadeOverrides = (isDark: boolean, isHighContrast: boolean) => {
  return {};
};

const toggleFacadeOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    color: isDark ? standard.colors.textDarkest : standard.colors.textLightest,
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
  };

  const highContrastThemeOverride = {
    color: isDark ? colorOverrides.black : highContrast.colors.textLightest,
    background: isDark
      ? highContrast.colors.backgroundDarkest
      : highContrast.colors.backgroundMedium,
    borderColor: isDark
      ? highContrast.colors.borderLightest
      : highContrast.colors.borderDark,
    checkedBackground: isDark
      ? highContrast.colors.backgroundSuccess
      : highContrast.colors.backgroundSuccess,
    uncheckedIconColor: isDark
      ? colorOverrides.black
      : standard.colors.textDarkest,
    focusOutlineColor: isDark
      ? standard.colors.borderLightest
      : standard.colors.borderInfo,
    labelColor: isDark
      ? standard.colors.textLightest
      : standard.colors.textDarkest,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export { checkboxOverrides, checkboxFacadeOverrides, toggleFacadeOverrides };
