import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const linkOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    color: color.info,
    focusOutlineColor: color.info,
    hoverColor: color.infoHover,
    colorInverse: color.porcelain,
    focusInverseOutlineColor: color.white,
    focusInverseIconOutlineColor: color.white,
  };
};

export default linkOverrides;
