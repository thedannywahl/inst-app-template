import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const formFieldOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const formFieldLabelOverrides = (mode: Mode, ui: UI) => {
  return {
    color: colors[ui][mode].darkest,
  };
};

const formFieldLayoutOverrides = (mode: Mode, ui: UI) => {
  return {};
};

const formFieldMessageOverrides = (mode: Mode, ui: UI) => {
  return {
    colorHint: colors[ui][mode].darkest,
    colorError: colors[ui][mode].danger,
    colorSuccess: colors[ui][mode].success,
  };
};

const formFieldMessagesOverrides = (mode: Mode, ui: UI) => {
  return {};
};

export {
  formFieldOverrides,
  formFieldLabelOverrides,
  formFieldLayoutOverrides,
  formFieldMessageOverrides,
  formFieldMessagesOverrides,
};
