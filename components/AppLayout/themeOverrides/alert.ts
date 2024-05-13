import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const alertOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    background: color.lightest,
    color: color.darkest,
    infoBorderColor: color.info,
    infoIconBackground: color.info,
    successBorderColor: color.success,
    successIconBackground: color.success,
    warningBorderColor: color.warning,
    warningIconBackground: color.warning,
    errorBorderColor: color.danger,
    errorIconBackground: color.danger,
  };
};

export default alertOverrides;
