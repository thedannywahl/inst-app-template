import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const viewOverrides = (mode: Mode, ui: UI) => {
  return {
    backgroundPrimary: colors[ui][mode].lightest,
    color: colors[ui][mode].darkest,
  };
};

export default viewOverrides;
