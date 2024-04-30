import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const modalOverrides = (mode: Mode, ui: UI) => {
  return {
    textColor: colors[ui][mode].text.darkest,
    background: colors[ui][mode].background.lightest,
    borderColor: colors[ui][mode].border.medium,
    inverseBackground: colors[ui][mode].background.darkest,
    inverseTextColor: colors[ui][mode].text.lightest,
  };
};

const modalBodyOverrides = (mode: Mode, ui: UI) => {
  return {
    inverseBackground: colors[ui][mode].background.darker,
  };
};

const modalFooterOverrides = (mode: Mode, ui: UI) => {
  return {
    background: colors[ui][mode].background.light,
    borderColor: colors[ui][mode].border.medium,
    inverseBackground: colors[ui][mode].background.darker,
    inverseBorderColor: colors[ui][mode].border.darkest,
  };
};

const modalHeaderOverrides = (mode: Mode, ui: UI) => {
  return {
    background: colors[ui][mode].background.lightest,
    borderColor: colors[ui][mode].border.medium,
    inverseBackground: colors[ui][mode].background.darkest,
    inverseBorderColor: colors[ui][mode].border.darkest,
  };
};

export {
  modalOverrides,
  modalBodyOverrides,
  modalFooterOverrides,
  modalHeaderOverrides,
};
