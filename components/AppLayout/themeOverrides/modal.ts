import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const modalOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    textColor: color.licorice,
    background: color.white,
    borderColor: color.slate,
    inverseBackground: color.licorice,
    inverseTextColor: color.white,
  };
};

const modalBodyOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    inverseBackground: color.oxford,
  };
};

const modalFooterOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    background: color.porcelain,
    borderColor: color.slate,
    inverseBackground: color.oxford,
    inverseBorderColor: color.licorice,
  };
};

const modalHeaderOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    background: color.white,
    borderColor: color.slate,
    inverseBackground: color.licorice,
    inverseBorderColor: color.licorice,
  };
};

export {
  modalOverrides,
  modalBodyOverrides,
  modalFooterOverrides,
  modalHeaderOverrides,
};
