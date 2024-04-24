import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const trayOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    background: isDark
      ? standard.colors.backgroundDarkest
      : colorOverrides.white,
    borderColor: isDark ? standard.colors.oxford : colorOverrides.white,
  };

  const highContrastThemeOverride = {
    background: isDark
      ? colorOverrides.black
      : highContrast.colors.backgroundLightest,
    borderColor: isDark
      ? highContrast.colors.borderLightest
      : colorOverrides.black,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default trayOverrides;
