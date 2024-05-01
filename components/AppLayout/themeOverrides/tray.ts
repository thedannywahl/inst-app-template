import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const trayOverrides = (mode: Mode, ui: UI) => {
  return {
    background: colors[ui][mode].lightest,
    borderColor: colors[ui][mode].lighter,
  };
};

export default trayOverrides;
