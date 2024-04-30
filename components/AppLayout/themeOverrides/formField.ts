import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const formFieldLabelOverrides = (mode: Mode, ui: UI) => {
  return {
    color: colors[ui][mode].text.darkest,
  };
};

const formFieldMessageOverrides = (mode: Mode, ui: UI) => {
  return {
    colorHint: colors[ui][mode].text.darkest,
    colorError: colors[ui][mode].text.danger,
    colorSuccess: colors[ui][mode].text.success,
  };

};

export { formFieldLabelOverrides, formFieldMessageOverrides };
