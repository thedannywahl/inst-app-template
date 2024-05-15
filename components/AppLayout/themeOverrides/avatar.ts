import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const avatarOverrides = (
  mode: Mode,
  ui: UI,
  isDark: boolean,
  isHighContrast: boolean,
) => {
  const color = colors[ui][mode];
  return {
    background: color.white,
    borderColor: color.slate,
    boxShadowColor: isHighContrast
      ? isDark
        ? "rgba(255, 255, 255, 0.28)"
        : "rgba(45, 59, 69, 0.12)"
      : isDark
        ? "rgba(255, 255, 255, 0.28)"
        : "rgba(45, 59, 69, 0.12)",
    color: color.info,
    colorShamrock: color.success,
    colorFire: color.warning,
    colorCrimson: color.danger,
    colorLicorice: color.licorice,
    colorBarney: color.alert,
    colorAsh: color.ash,
  };
};

export default avatarOverrides;
