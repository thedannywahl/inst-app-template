import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const radioInputOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    labelColor: color.darkest,
    background: color.lightest,
    /**
     * borderColor is a non-standard color definition
     * by default, so we have to use the base color name.
     */
    borderColor: color.tiara,
    hoverBorderColor: color.darkest,
    focusBorderColor: color.info,
  };
};

export default radioInputOverrides;
