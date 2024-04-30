import type { ThemeOrOverride } from "@instructure/emotion/types/EmotionTypes";
import type { Mode, UI } from "types";
import * as Overrides from "./themeOverrides";

const ThemeOverrides = (
  mode: Mode,
  ui: UI,
  isDark: boolean,
  isHighContrast: boolean,
): ThemeOrOverride | undefined => {
  return {
    componentOverrides: {
      Alert: Overrides.Alert(mode, ui),
      Avatar: Overrides.Avatar(mode, ui, isDark, isHighContrast),
      Badge: Overrides.Badge(mode, ui),
      BaseButton: Overrides.BaseButton(mode, ui),
      Billboard: Overrides.Billboard(mode, ui),
      Breadcrumb: Overrides.Breadcrumb(mode, ui),
      FormFieldLabel: Overrides.FormFieldLabel(mode, ui),
      FormFieldMessage: Overrides.FormFieldMessage(mode, ui),
      Link: Overrides.Link(mode, ui),
      Modal: Overrides.Modal(mode, ui),
      "Modal.Body": Overrides.ModalBody(mode, ui),
      "Modal.Footer": Overrides.ModalFooter(mode, ui),
      "Modal.Header": Overrides.ModalHeader(mode, ui),
      RadioInput: Overrides.RadioInput(mode, ui),
      ToggleFacade: Overrides.ToggleFacade(mode, ui),
      TopNavBarLayout: Overrides.TopNavBarLayout(mode, ui),
      Tray: Overrides.Tray(mode, ui),
      View: Overrides.View(mode, ui),
    },
    themeOverrides: {
      canvas: {
        componentOverrides: {},
      },
      "canvas-high-contrast": {
        componentOverrides: {},
      },
    },
  };
};

export { ThemeOverrides };
