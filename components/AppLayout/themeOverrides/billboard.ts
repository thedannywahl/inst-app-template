import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const billboardOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    iconColor: color.ash,
    iconHoverColor: color.info,
    backgroundColor: color.white,
    iconHoverColorInverse: color.white,
    messageColor: color.ash,
    messageColorClickable: color.info,
    messageColorInverse: color.porcelain,
    clickableActiveBg: color.info,
    clickableActiveText: color.white,
  };
};

export default billboardOverrides;
