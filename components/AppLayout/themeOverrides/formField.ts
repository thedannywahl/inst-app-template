import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const formFieldLabelOverrides = (mode: Mode, ui: UI) => {
  return {
    color: colors[ui][mode].darkest,
  };
};

const formFieldMessageOverrides = (mode: Mode, ui: UI) => {
  return {
    colorHint: colors[ui][mode].darkest,
    colorError: colors[ui][mode].danger,
    colorSuccess: colors[ui][mode].success,
  };
};

export { formFieldLabelOverrides, formFieldMessageOverrides };
