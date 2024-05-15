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
    color: color.white,
    background: color.white,
    borderColor: color.slate,
    checkedBackground: color.success,
    uncheckedIconColor: color.licorice,
    checkedIconColor: color.success,
    focusOutlineColor: color.info,
    labelColor: color.licorice,
  };
};

export { checkboxOverrides, checkboxFacadeOverrides, toggleFacadeOverrides };
