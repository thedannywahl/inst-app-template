import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const breadcrumbOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {
    separatorColor: color.ash,
  };
};

const breadcrumbLinkOverrides = (mode: Mode, ui: UI) => {
  const color = colors[ui][mode];
  return {};
};

export { breadcrumbOverrides, breadcrumbLinkOverrides };
