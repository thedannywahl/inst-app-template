import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const breadcrumbOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    separatorColor: isDark
      ? colorOverrides.darkStandardAsh
      : standard.colors.textDark,
  };

  const highContrastThemeOverride = {
    separatorColor: isDark
      ? colorOverrides.darkHighContrastAsh
      : highContrast.colors.textDark,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default breadcrumbOverrides;
