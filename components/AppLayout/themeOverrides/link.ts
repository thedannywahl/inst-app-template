import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";


const linkOverrides = (mode: Mode, ui: UI) => {
  return {
    color: colors[ui][mode].text.link,
    focusOutlineColor: colors[ui][mode].text.link,
    hoverColor: colors[ui][mode].text.linkHover,
    colorInverse: colors[ui][mode].text.light,
    focusInverseOutlineColor: colors[ui][mode].text.lightest,
    focusInverseIconOutlineColor: colors[ui][mode].text.lightest,
  };
};

export default linkOverrides;
