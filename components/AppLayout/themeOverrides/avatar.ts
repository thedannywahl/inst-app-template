import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const avatarOverrides = (
  mode: Mode,
  ui: UI,
  isDark: boolean,
  isHighContrast: boolean,
) => {
  return {
    background: colors[ui][mode].background.lightest,
    borderColor: colors[ui][mode].border.medium,
    boxShadowColor: isHighContrast
      ? isDark
        ? "rgba(255, 255, 255, 0.28)"
        : "rgba(45, 59, 69, 0.12)"
      : isDark
        ? "rgba(255, 255, 255, 0.28)"
        : "rgba(45, 59, 69, 0.12)",
    color: colors[ui][mode].text.brand,
    colorShamrock: colors[ui][mode].text.success,
    colorFire: colors[ui][mode].text.warning,
    colorCrimson: colors[ui][mode].text.danger,
    colorLicorice: colors[ui][mode].text.darkest,
    colorBarney: colors[ui][mode].text.alert,
    colorAsh: colors[ui][mode].text.dark,
  };
};

export default avatarOverrides;
