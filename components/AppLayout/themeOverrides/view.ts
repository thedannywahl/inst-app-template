import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const viewOverrides = (mode: Mode, ui: UI) => {
  return {
    backgroundPrimary: colors[ui][mode].background.lightest,
    color: colors[ui][mode].text.darkest,
  };
};

export default viewOverrides;
