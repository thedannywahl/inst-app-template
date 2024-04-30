import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colors";

const modalOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    borderColor: isDark
      ? standard.colors.borderDark
      : standard.colors.borderMedium,
    inverseBackground: isDark
      ? standard.colors.backgroundDarkest
      : standard.colors.backgroundLightest,
  };

  const highContrastThemeOverride = {
    inverseBackground: colorOverrides.black,
    borderColor: isDark
      ? highContrast.colors.borderLightest
      : colorOverrides.black,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

const modalBodyOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    inverseBackground: isDark
      ? standard.colors.backgroundDarkest
      : standard.colors.backgroundLightest,
  };

  const highContrastThemeOverride = {
    inverseBackground: colorOverrides.black,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

const modalFooterOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    inverseBorderColor: standard.colors.backgroundDark,
    inverseBackground: isDark
      ? standard.colors.backgroundBrandSecondary
      : standard.colors.backgroundLight,
  };

  const highContrastThemeOverride = {
    inverseBackground: colorOverrides.black,
    inverseBorderColor: colorOverrides.white,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

const modalHeaderOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    inverseBorderColor: standard.colors.backgroundDark,
  };

  const highContrastThemeOverride = {
    inverseBackground: colorOverrides.black,
    inverseBorderColor: colorOverrides.white,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export {
  modalOverrides,
  modalBodyOverrides,
  modalFooterOverrides,
  modalHeaderOverrides,
};
