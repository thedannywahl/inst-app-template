import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const baseButtonOverrides = (
  mode: Mode,
  ui: UI,
  isDark: boolean,
  isHighContrast: boolean,
) => {
  const color = colors[ui][mode];
  return {
    primaryColor: color.white,
    primaryBorderColor: color.infoHover,
    primaryBackground: color.info,
    primaryHoverBackground: color.infoHover,
    primaryActiveBackground: color.infoHover,
    primaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? color.info : isHighContrast ? "rgb(3, 45, 65)" : "rgb(1, 52, 81)"
    }`,
    primaryGhostColor: color.info,
    primaryGhostBorderColor: color.info,
    primaryGhostBackground: "transparent",
    primaryGhostHoverBackground: isHighContrast
      ? "rgba(7, 112, 163, 0.1)"
      : "rgba(3, 116, 181, 0.1)",
    primaryGhostActiveBackground: "transparent",
    primaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark
        ? color.info
        : isHighContrast
          ? "rgba(7, 112, 163, 0.28)"
          : "rgba(3, 116, 181, 0.28)"
    }`,
    secondaryColor: color.licorice,
    secondaryBorderColor: color.porcelainHover,
    secondaryBackground: color.porcelain,
    secondaryHoverBackground: color.porcelainHover,
    secondaryActiveBackground: color.porcelainHover,
    secondaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark
        ? "rgb(191, 191, 191)"
        : isHighContrast
          ? "rgb(230, 230, 230)"
          : "rgb(194, 194, 194)"
    }`,
    secondaryGhostColor: color.licorice,
    secondaryGhostBorderColor: color.licorice,
    secondaryGhostBackground: "transparent",
    secondaryGhostHoverBackground: isDark
      ? color.porcelain
      : "rgba(45, 59, 69, 0.1)",
    secondaryGhostActiveBackground: "transparent",
    secondaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 59, 69, 0.28)"
    }`,
    successColor: color.white,
    successBorderColor: color.successHover,
    successBackground: color.success,
    successHoverBackground: color.successHover,
    successActiveBackground: color.successHover,
    successActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isHighContrast ? "rgb(5, 33, 7)" : "rgb(3, 41, 23)"
    }`,
    successGhostColor: color.success,
    successGhostBorderColor: color.success,
    successGhostBackground: "transparent",
    successGhostHoverBackground: isHighContrast
      ? "rgba(18, 122, 27, 0.01)"
      : "rgba(11, 135, 75, 0.01)",
    successGhostActiveBackground: "transparent",
    successGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isHighContrast ? "rgba(18, 122, 27, 0.28)" : "rgba(11, 135, 75, 0.28)"
    }`,
    dangerColor: color.white,
    dangerBorderColor: color.dangerHover,
    dangerBackground: color.danger,
    dangerHoverBackground: color.dangerHover,
    dangerActiveBackground: color.dangerHover,
    dangerActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isHighContrast ? "rgb(117, 15, 14)" : "rgb(125, 3, 17)"
    }`,
    dangerGhostColor: color.danger,
    dangerGhostBorderColor: color.danger,
    dangerGhostBackground: "transparent",
    dangerGhostHoverBackground: isHighContrast
      ? "rgba(208, 26, 25, 0.1)"
      : "rgba(224, 6, 31, 0.1)",
    dangerGhostActiveBackground: "transparent",
    dangerGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isHighContrast ? "rgba(208, 26, 25, 0.28)" : "rgba(224, 6, 31, 0.28)"
    }`,
    primaryInverseColor: color.licorice,
    primaryInverseBorderColor: color.porcelainHover,
    primaryInverseBackground: color.porcelain,
    primaryInverseHoverBackground: color.porcelainHover,
    primaryInverseActiveBackground: color.porcelainHover,
    primaryInverseActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? color.porcelain : "rgb(191, 191, 191)"
    }`,
    primaryInverseGhostColor: color.white,
    primaryInverseGhostBorderColor: color.white,
    primaryInverseGhostBackground: "transparent",
    primaryInverseGhostHoverBackground: isDark
      ? `#${colors.fixed.white}1A`
      : `#${colors.fixed.black}1A`,
    primaryInverseGhostActiveBackground: "transparent",
    primaryInverseGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${
      isDark ? `#${colors.fixed.white}47` : `#${colors.fixed.black}47`
    }`,
  };
};

export default baseButtonOverrides;
