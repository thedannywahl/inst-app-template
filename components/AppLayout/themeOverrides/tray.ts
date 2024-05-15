import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const trayOverrides = (mode: Mode, ui: UI, isHighContrast: boolean) => {
  const color = colors[ui][mode];
  return {
    background: color.white,
    borderColor: isHighContrast ? color.licorice : color.porcelain,
  };
};

export default trayOverrides;
