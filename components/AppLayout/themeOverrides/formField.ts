import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const formFieldOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const formFieldLabelOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    color: color.darkest,
  };
};

const formFieldLayoutOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

const formFieldMessageOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    colorHint: color.darkest,
    colorError: color.danger,
    colorSuccess: color.success,
  };
};

const formFieldMessagesOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

export {
  formFieldOverrides,
  formFieldLabelOverrides,
  formFieldLayoutOverrides,
  formFieldMessageOverrides,
  formFieldMessagesOverrides,
};
