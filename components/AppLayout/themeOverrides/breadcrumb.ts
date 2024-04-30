import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const breadcrumbOverrides = (mode: Mode, ui: UI) => {
  return {
    separatorColor: colors[ui][mode].text.dark,
  };
};

export default breadcrumbOverrides;
