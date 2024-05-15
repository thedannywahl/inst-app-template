import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const radioInputOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    labelColor: color.licorice,
    background: color.white,
    borderColor: color.tiara,
    hoverBorderColor: color.licorice,
    focusBorderColor: color.info,
  };
};

export default radioInputOverrides;
