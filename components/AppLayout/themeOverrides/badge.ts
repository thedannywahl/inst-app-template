import {
  canvasHighContrast as highContrast,
  canvas as standard,
} from "@instructure/ui";
import type { Mode, UI } from "types";
import { colors } from "../themeOverrides";

const badgeOverrides = (mode: Mode, ui: UI, isHighContrast: boolean) => {
  const color = colors[ui][mode];
  return {
    /**
     * Dark mode keeps a light background and dark text on a Badge, so we use the
     * color definitions from the built-in theme to ensure the badge is readable.
     */
    color: isHighContrast
      ? highContrast.colors.textLight
      : standard.colors.textLight,
    colorInverse: isHighContrast
      ? highContrast.colors.textDarkest
      : standard.colors.textDarkest,
    colorDanger: color.danger,
    colorSuccess: color.success,
    colorPrimary: color.info,
  };
};

export default badgeOverrides;
