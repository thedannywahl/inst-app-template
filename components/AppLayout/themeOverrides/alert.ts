import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const alertOverrides = (mode: Mode, ui: UI) => {
  return {
    background: colors[ui][mode].lightest,
    color: colors[ui][mode].darkest,
    infoBorderColor: colors[ui][mode].info,
    infoIconBackground: colors[ui][mode].info,
    successBorderColor: colors[ui][mode].success,
    successIconBackground: colors[ui][mode].success,
    warningBorderColor: colors[ui][mode].warning,
    warningIconBackground: colors[ui][mode].warning,
    errorBorderColor: colors[ui][mode].danger,
    errorIconBackground: colors[ui][mode].danger,
  };
};

export default alertOverrides;
