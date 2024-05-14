import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const linkOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    color: color.info,
    focusOutlineColor: color.info,
    hoverColor: color.infoHover,
    colorInverse: color.lighter,
    focusInverseOutlineColor: color.lightest,
    focusInverseIconOutlineColor: color.lightest,
  };
};

export default linkOverrides;
