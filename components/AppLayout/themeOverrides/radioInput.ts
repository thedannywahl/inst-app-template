import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colors";

const radioInputOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    labelColor: isDark
      ? standard.colors.textLight
      : standard.colors.textDarkest,
    focusBorderColor: isDark
      ? standard.colors.borderLightest
      : standard.colors.borderInfo,
  };

  const highContrastThemeOverride = {
    labelColor: isDark
      ? highContrast.colors.textLightest
      : colorOverrides.black,
    focusBorderColor: isDark
      ? highContrast.colors.borderLightest
      : highContrast.colors.borderInfo,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default radioInputOverrides;
