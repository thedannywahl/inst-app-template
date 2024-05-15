import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const viewOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    color: color.licorice,
    colorPrimaryInverse: color.white,
    borderColorPrimary: color.tiara,
    borderColorSecondary: color.ash,
    borderColorSuccess: color.success,
    borderColorBrand: color.info,
    borderColorInfo: color.info,
    borderColorAlert: color.alert,
    borderColorWarning: color.warning,
    borderColorDanger: color.danger,
    borderColorTransparent: "transparent",
    debugOutlineColor: color.danger,
    backgroundPrimary: color.white,
    backgroundSecondary: color.porcelain,
    backgroundPrimaryInverse: color.licorice,
    backgroundBrand: color.info,
    backgroundInfo: color.info,
    backgroundAlert: color.alert,
    backgroundSuccess: color.success,
    backgroundDanger: color.danger,
    backgroundWarning: color.warning,
    focusColorInfo: color.info,
    focusColorDanger: color.danger,
    focusColorSuccess: color.success,
    focusColorInverse: color.white,
  };
};

export default viewOverrides;
