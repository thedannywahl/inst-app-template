import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const modalOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    textColor: color.darkest,
    background: color.lightest,
    borderColor: color.medium,
    inverseBackground: color.darkest,
    inverseTextColor: color.lightest,
  };
};

const modalBodyOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    inverseBackground: color.darker,
  };
};

const modalFooterOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    background: color.lighter,
    borderColor: color.medium,
    inverseBackground: color.darker,
    inverseBorderColor: color.darkest,
  };
};

const modalHeaderOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    background: color.lightest,
    borderColor: color.medium,
    inverseBackground: color.darkest,
    inverseBorderColor: color.darkest,
  };
};

export {
  modalOverrides,
  modalBodyOverrides,
  modalFooterOverrides,
  modalHeaderOverrides,
};
