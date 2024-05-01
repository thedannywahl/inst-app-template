import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const avatarOverrides = (
  mode: Mode,
  ui: UI,
  isDark: boolean,
  isHighContrast: boolean,
) => {
  return {
    background: colors[ui][mode].lightest,
    borderColor: colors[ui][mode].medium,
    boxShadowColor: isHighContrast
      ? isDark
        ? "rgba(255, 255, 255, 0.28)"
        : "rgba(45, 59, 69, 0.12)"
      : isDark
        ? "rgba(255, 255, 255, 0.28)"
        : "rgba(45, 59, 69, 0.12)",
    color: colors[ui][mode].info,
    colorShamrock: colors[ui][mode].success,
    colorFire: colors[ui][mode].warning,
    colorCrimson: colors[ui][mode].danger,
    colorLicorice: colors[ui][mode].darkest,
    colorBarney: colors[ui][mode].alert,
    colorAsh: colors[ui][mode].dark,
  };
};

export default avatarOverrides;
