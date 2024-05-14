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
    primaryColor: color.lightest,
    primaryBorderColor: color.infoHover,
    primaryBackground: color.info,
    primaryHoverBackground: color.infoHover,
    primaryActiveBackground: color.infoHover,
    primaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark ? color.info : isHighContrast ? "rgb(3, 45, 65)" : "rgb(1, 52, 81)"
      }`,
    primaryGhostColor: color.info,
    primaryGhostBorderColor: color.info,
    primaryGhostBackground: colors.fixed.transparent,
    primaryGhostHoverBackground: isHighContrast
      ? "rgba(7, 112, 163, 0.1)"
      : "rgba(3, 116, 181, 0.1)",
    primaryGhostActiveBackground: colors.fixed.transparent,
    primaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark
      ? color.info
      : isHighContrast
        ? "rgba(7, 112, 163, 0.28)"
        : "rgba(3, 116, 181, 0.28)"
      }`,
    secondaryColor: color.darkest,
    secondaryBorderColor: color.lighterHover,
    secondaryBackground: color.lighter,
    secondaryHoverBackground: color.lighterHover,
    secondaryActiveBackground: color.lighterHover,
    secondaryActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark
      ? "rgb(191, 191, 191)"
      : isHighContrast
        ? "rgb(230, 230, 230)"
        : "rgb(194, 194, 194)"
      }`,
    secondaryGhostColor: color.darkest,
    secondaryGhostBorderColor: color.darkest,
    secondaryGhostBackground: colors.fixed.transparent,
    secondaryGhostHoverBackground: isDark ? color.lighter : "rgba(45, 59, 69, 0.1)",
    secondaryGhostActiveBackground: colors.fixed.transparent,
    secondaryGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 59, 69, 0.28)"
      }`,
    successColor: color.lightest,
    successBorderColor: color.successHover,
    successBackground: color.success,
    successHoverBackground: color.successHover,
    successActiveBackground: color.successHover,
    successActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isHighContrast
      ? "rgb(5, 33, 7)"
      : "rgb(3, 41, 23)"
      }`,
    successGhostColor: color.success,
    successGhostBorderColor: color.success,
    successGhostBackground: colors.fixed.transparent,
    successGhostHoverBackground: isHighContrast
      ? "rgba(18, 122, 27, 0.01)"
      : "rgba(11, 135, 75, 0.01)",
    successGhostActiveBackground: colors.fixed.transparent,
    successGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isHighContrast
      ? "rgba(18, 122, 27, 0.28)"
      : "rgba(11, 135, 75, 0.28)"
      }`,
    dangerColor: color.lightest,
    dangerBorderColor: color.dangerHover,
    dangerBackground: color.danger,
    dangerHoverBackground: color.dangerHover,
    dangerActiveBackground: color.dangerHover,
    dangerActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isHighContrast
      ? "rgb(117, 15, 14)"
      : "rgb(125, 3, 17)"
      }`,
    dangerGhostColor: color.danger,
    dangerGhostBorderColor: color.danger,
    dangerGhostBackground: colors.fixed.transparent,
    dangerGhostHoverBackground: isHighContrast
      ? "rgba(208, 26, 25, 0.1)"
      : "rgba(224, 6, 31, 0.1)",
    dangerGhostActiveBackground: colors.fixed.transparent,
    dangerGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isHighContrast
      ? "rgba(208, 26, 25, 0.28)"
      : "rgba(224, 6, 31, 0.28)"
      }`,
    primaryInverseColor: color.darkest,
    primaryInverseBorderColor: color.lighterHover,
    primaryInverseBackground: color.lightest,
    primaryInverseHoverBackground: color.lighterHover,
    primaryInverseActiveBackground: color.lighterHover,
    primaryInverseActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark
      ? color.lighter
      : "rgb(191, 191, 191)"
      }`,
    primaryInverseGhostColor: color.lightest,
    primaryInverseGhostBorderColor: color.lightest,
    primaryInverseGhostBackground: colors.fixed.transparent,
    primaryInverseGhostHoverBackground: isDark
      ? `#${colors.fixed.white}1A`
      : `#${colors.fixed.black}1A`,
    primaryInverseGhostActiveBackground: colors.fixed.transparent,
    primaryInverseGhostActiveBoxShadow: `inset 0 0 0.1875rem 0.0625rem ${isDark
      ? `#${colors.fixed.white}47`
      : `#${colors.fixed.black}47`
      }`,
  };
};

export default baseButtonOverrides;
