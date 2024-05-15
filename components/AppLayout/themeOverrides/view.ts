import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const viewOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    color: color.darkest,
    colorPrimaryInverse: color.lightest,
    borderColorPrimary: color.light,
    borderColorSecondary: color.dark,
    borderColorSuccess: color.success,
    borderColorBrand: color.info,
    borderColorInfo: color.info,
    borderColorAlert: color.alert,
    borderColorWarning: color.warning,
    borderColorDanger: color.danger,
    borderColorTransparent: colors.fixed.transparent,
    debugOutlineColor: color.danger,
    backgroundPrimary: color.lightest,
    backgroundSecondary: color.lighter,
    backgroundPrimaryInverse: color.darkest,
    backgroundBrand: color.info,
    backgroundInfo: color.info,
    backgroundAlert: color.alert,
    backgroundSuccess: color.success,
    backgroundDanger: color.danger,
    backgroundWarning: color.warning,
    focusColorInfo: color.info,
    focusColorDanger: color.danger,
    focusColorSuccess: color.success,
    focusColorInverse: color.lightest,
  };
};

export default viewOverrides;
