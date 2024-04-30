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
    color: colors[ui][mode].text.lightest,
    background: colors[ui][mode].background.light,
    borderColor: colors[ui][mode].border.medium,
    checkedBackground: colors[ui][mode].background.success,
    uncheckedIconColor: colors[ui][mode].text.darkest,
    checkedIconColor: colors[ui][mode].text.success,
    focusOutlineColor: colors[ui][mode].border.info,
    labelColor: colors[ui][mode].text.darkest,
  };
};

export { checkboxOverrides, checkboxFacadeOverrides, toggleFacadeOverrides };
