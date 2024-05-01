import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const checkboxOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const checkboxFacadeOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const toggleFacadeOverrides = (mode: Mode, ui: UI) => {
  return {
    color: colors[ui][mode].lightest,
    background: colors[ui][mode].lighter,
    borderColor: colors[ui][mode].medium,
    checkedBackground: colors[ui][mode].success,
    uncheckedIconColor: colors[ui][mode].darkest,
    checkedIconColor: colors[ui][mode].success,
    focusOutlineColor: colors[ui][mode].info,
    labelColor: colors[ui][mode].darkest,
  };
};

export { checkboxOverrides, checkboxFacadeOverrides, toggleFacadeOverrides };
