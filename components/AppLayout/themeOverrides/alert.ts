import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const alertOverrides = (mode: Mode, ui: UI) => {
  return {
    background: colors[ui][mode].background.lightest,
    color: colors[ui][mode].text.darkest,
    infoBorderColor: colors[ui][mode].background.info,
    infoIconBackground: colors[ui][mode].background.info,
    successBorderColor: colors[ui][mode].background.success,
    successIconBackground: colors[ui][mode].background.success,
    warningBorderColor: colors[ui][mode].background.warning,
    warningIconBackground: colors[ui][mode].background.warning,
    errorBorderColor: colors[ui][mode].background.danger,
    errorIconBackground: colors[ui][mode].background.danger,
  };
};

export default alertOverrides;
