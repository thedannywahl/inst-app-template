import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const radioInputOverrides = (mode: Mode, ui: UI) => {
  return {
    labelColor: colors[ui][mode].darkest,
    background: colors[ui][mode].lightest,
    /**
     * borderColor is a non-standard color definition
     * by default, so we have to use the base color name.
     */
    borderColor: colors[ui][mode].tiara,
    hoverBorderColor: colors[ui][mode].darkest,
    focusBorderColor: colors[ui][mode].info,
  };
};

export default radioInputOverrides;
