import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const billboardOverrides = (mode: Mode, ui: UI) => {
  return {
    iconColor: colors[ui][mode].text.dark,
    iconHoverColor: colors[ui][mode].text.info,
    backgroundColor: colors[ui][mode].background.lightest,
    iconHoverColorInverse: colors[ui][mode].text.lightest,
    messageColor: colors[ui][mode].text.dark,
    messageColorClickable: colors[ui][mode].text.info,
    messageColorInverse: colors[ui][mode].text.light,
    clickableActiveBg: colors[ui][mode].background.info,
    clickableActiveText: colors[ui][mode].text.lightest,
  };
};

export default billboardOverrides;
