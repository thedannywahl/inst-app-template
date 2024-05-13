import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const billboardOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    iconColor: color.dark,
    iconHoverColor: color.info,
    backgroundColor: color.lightest,
    iconHoverColorInverse: color.lightest,
    messageColor: color.dark,
    messageColorClickable: color.info,
    messageColorInverse: color.lighter,
    clickableActiveBg: color.info,
    clickableActiveText: color.lightest,
  };
};

export default billboardOverrides;
