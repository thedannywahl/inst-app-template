import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const linkOverrides = (mode: Mode, ui: UI) => {
  return {
    color: colors[ui][mode].info,
    focusOutlineColor: colors[ui][mode].info,
    hoverColor: colors[ui][mode].linkHover,
    colorInverse: colors[ui][mode].lighter,
    focusInverseOutlineColor: colors[ui][mode].lightest,
    focusInverseIconOutlineColor: colors[ui][mode].lightest,
  };
};

export default linkOverrides;
