import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import * as colorOverrides from "./colorOverrides";

const baseButtonOverrides = (isDark: boolean, isHighContrast: boolean) => {
  const standardThemeOverride = {
    primaryColor: standard.colors.textLightest,
    primaryBorderColor: isDark
      ? colorOverrides.darkOxfordBrand
      : "rgb(2, 84, 131)",
    primaryBackground: isDark
      ? colorOverrides.darkStandardBrand
      : standard.colors.backgroundBrand,
    primaryHoverBackground: isDark
      ? colorOverrides.darkOxfordBrand
      : "rgb(2, 84, 131)",
    primaryActiveBackground: isDark
      ? colorOverrides.darkOxfordBrand
      : "rgb(2, 84, 131)",
    primaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? standard.colors.brand : "rgb(1, 52, 81)"
    }`,
    primaryGhostColor: isDark
      ? colorOverrides.darkStandardBrand
      : standard.colors.backgroundBrand,
    primaryGhostBorderColor: isDark
      ? colorOverrides.darkStandardBrand
      : standard.colors.backgroundBrand,
    primaryGhostBackground: "transparent",
    primaryGhostHoverBackground: "rgba(3, 116, 181, 0.1)",
    primaryGhostActiveBackground: "transparent",
    primaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? colorOverrides.darkOxfordBrand : "rgba(3, 116, 181, 0.28)"
    }`,
    secondaryColor: standard.colors.textDarkest,
    secondaryBorderColor: "rgb(219, 219, 219)",
    secondaryBackground: standard.colors.backgroundLight,
    secondaryHoverBackground: isDark
      ? "rgb(242, 242, 242)"
      : "rgb(219, 219, 219)",
    secondaryActiveBackground: isDark
      ? standard.colors.backgroundLightest
      : "rgb(219, 219, 219)",
    secondaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? "rgb(191, 191, 191)" : "rgb(194, 194, 194)"
    }`,
    secondaryGhostColor: isDark
      ? standard.colors.textLightest
      : standard.colors.textDarkest,
    secondaryGhostBorderColor: isDark
      ? standard.colors.borderLightest
      : standard.colors.borderDarkest,
    secondaryGhostBackground: "transparent",
    secondaryGhostHoverBackground: isDark
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(45, 59, 69, 0.1)",
    secondaryGhostActiveBackground: "transparent",
    secondaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 59, 69, 0.28)"
    }`,
  };

  const highContrastThemeOverride = {
    primaryColor: highContrast.colors.textLightest,
    primaryBorderColor: isDark
      ? colorOverrides.darkHighContrastBrandHover
      : "rgb(5, 78, 114)",
    primaryBackground: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.backgroundBrand,
    primaryHoverBackground: isDark
      ? colorOverrides.darkHighContrastBrandHover
      : "rgb(5, 78, 114)",
    primaryActiveBackground: isDark
      ? colorOverrides.darkHighContrastBrandHover
      : "rgb(5, 78, 114)",
    primaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? highContrast.colors.backgroundBrand : "rgb(3, 45, 65)"
    }`,
    primaryGhostColor: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.backgroundBrand,
    primaryGhostBorderColor: isDark
      ? colorOverrides.darkHighContrastBrand
      : highContrast.colors.backgroundBrand,
    primaryGhostBackground: "transparent",
    primaryGhostHoverBackground: "rgba(7, 112, 163, 0.1)",
    primaryGhostActiveBackground: "transparent",
    primaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark
        ? colorOverrides.darkHighContrastBrandHover
        : "rgba(7, 112, 163, 0.28)"
    }`,
    secondaryColor: highContrast.colors.textDarkest,
    secondaryBorderColor: highContrast.colors.borderDark,
    secondaryBackground: highContrast.colors.backgroundLight,
    secondaryHoverBackground: isDark
      ? "rgb(242, 242, 242)"
      : highContrast.colors.backgroundLight,
    secondaryActiveBackground: isDark
      ? highContrast.colors.backgroundLight
      : "rgb(230, 230, 230)",
    secondaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? "rgb(191, 191, 191)" : "rgb(230, 230, 230)"
    }`,
    secondaryGhostColor: isDark
      ? highContrast.colors.textLightest
      : colorOverrides.black,
    secondaryGhostBorderColor: isDark
      ? highContrast.colors.borderLight
      : highContrast.colors.borderDarkest,
    secondaryGhostBackground: "transparent",
    secondaryGhostHoverBackground: isDark
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(45, 59, 69, 0.1)",
    secondaryGhostActiveBackground: "transparent",
    secondaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 59, 69, 0.28)"
    }`,
  };

  return isHighContrast ? highContrastThemeOverride : standardThemeOverride;
};

export default baseButtonOverrides;
