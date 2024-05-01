import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const billboardOverrides = (mode: Mode, ui: UI) => {
  return {
    iconColor: colors[ui][mode].dark,
    iconHoverColor: colors[ui][mode].info,
    backgroundColor: colors[ui][mode].lightest,
    iconHoverColorInverse: colors[ui][mode].lightest,
    messageColor: colors[ui][mode].dark,
    messageColorClickable: colors[ui][mode].info,
    messageColorInverse: colors[ui][mode].lighter,
    clickableActiveBg: colors[ui][mode].info,
    clickableActiveText: colors[ui][mode].lightest,
  };
};

export default billboardOverrides;
