import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const trayOverrides = (mode: Mode, ui: UI, isHighContrast: boolean) => {
  const color = colors[ui][mode];
  return {
    background: color.lightest,
    borderColor: isHighContrast ? color.darkest : color.lighter,
  };
};

export default trayOverrides;
