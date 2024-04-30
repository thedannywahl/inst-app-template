import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const trayOverrides = (mode: Mode, ui: UI) => {
  return {
    background: colors[ui][mode].background.lightest,
    borderColor: colors[ui][mode].border.light,
  };
};

export default trayOverrides;
