import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const trayOverrides = (mode: Mode, ui: UI, isHighContrast: boolean) => {
  return {
    background: colors[ui][mode].lightest,
    borderColor: isHighContrast
      ? colors[ui][mode].darkest
      : colors[ui][mode].lighter,
  };
};

export default trayOverrides;
