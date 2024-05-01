import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const breadcrumbOverrides = (mode: Mode, ui: UI) => {
  return {
    separatorColor: colors[ui][mode].dark,
  };
};

const breadcrumbLinkOverrides = (mode: Mode, ui: UI) => {
  return {}
}

export { breadcrumbOverrides, breadcrumbLinkOverrides };
