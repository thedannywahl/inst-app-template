import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const alertOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    background: color.white,
    color: color.licorice,
    infoBorderColor: color.info,
    infoIconBackground: color.info,
    successBorderColor: color.success,
    successIconBackground: color.success,
    warningBorderColor: color.warning,
    warningIconBackground: color.warning,
    dangerBorderColor: color.danger,
    dangerIconBackground: color.danger,
  };
};

export default alertOverrides;
