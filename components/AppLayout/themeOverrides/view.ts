import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const viewOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    backgroundPrimary: color.lightest,
    color: color.darkest,
  };
};

export default viewOverrides;
