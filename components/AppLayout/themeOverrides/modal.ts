import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const modalOverrides = (mode: Mode, ui: UI) => {
  return {
    textColor: colors[ui][mode].darkest,
    background: colors[ui][mode].lightest,
    borderColor: colors[ui][mode].medium,
    inverseBackground: colors[ui][mode].darkest,
    inverseTextColor: colors[ui][mode].lightest,
  };
};

const modalBodyOverrides = (mode: Mode, ui: UI) => {
  return {
    inverseBackground: colors[ui][mode].darker,
  };
};

const modalFooterOverrides = (mode: Mode, ui: UI) => {
  return {
    background: colors[ui][mode].lighter,
    borderColor: colors[ui][mode].medium,
    inverseBackground: colors[ui][mode].darker,
    inverseBorderColor: colors[ui][mode].darkest,
  };
};

const modalHeaderOverrides = (mode: Mode, ui: UI) => {
  return {
    background: colors[ui][mode].lightest,
    borderColor: colors[ui][mode].medium,
    inverseBackground: colors[ui][mode].darkest,
    inverseBorderColor: colors[ui][mode].darkest,
  };
};

export {
  modalOverrides,
  modalBodyOverrides,
  modalFooterOverrides,
  modalHeaderOverrides,
};
