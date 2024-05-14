import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const radioInputOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    labelColor: color.darkest,
    background: color.lightest,
    borderColor: color.light,
    hoverBorderColor: color.darkest,
    focusBorderColor: color.info,
  };
};

export default radioInputOverrides;
