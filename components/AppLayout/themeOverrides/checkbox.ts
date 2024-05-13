import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const checkboxOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const checkboxFacadeOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const toggleFacadeOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    color: color.lightest,
    background: color.lighter,
    borderColor: color.medium,
    checkedBackground: color.success,
    uncheckedIconColor: color.darkest,
    checkedIconColor: color.success,
    focusOutlineColor: color.info,
    labelColor: color.darkest,
  };
};

export { checkboxOverrides, checkboxFacadeOverrides, toggleFacadeOverrides };
