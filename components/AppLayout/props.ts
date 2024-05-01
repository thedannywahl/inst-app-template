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
      // InstructureUI.Alert
      Alert: Overrides.Alert(mode, ui),

      // InstructureUI.Avatar
      Avatar: Overrides.Avatar(mode, ui, isDark, isHighContrast),

      // InstructureUI.Badge
      Badge: Overrides.Badge(mode, ui, isHighContrast),

      // InstructureUI.Utilities.BaseButton
      BaseButton: Overrides.BaseButton(mode, ui),

      // InstructureUI.Billboard
      Billboard: Overrides.Billboard(mode, ui),

      // InstructureUI.Breadcrumb
      Breadcrumb: Overrides.Breadcrumb(mode, ui),
      "Breadcrumb.Link": Overrides.BreadcrumbLink(mode, ui),

      // InstructureUI.Checkbox
      Checkbox: Overrides.Checkbox(mode, ui),
      CheckboxFacade: Overrides.CheckboxFacade(mode, ui),
      ToggleFacade: Overrides.ToggleFacade(mode, ui),

      // InstructureUI.FormField
      FormField: Overrides.FormField(mode, ui),
      FormFieldLabel: Overrides.FormFieldLabel(mode, ui),
      FormFieldLayout: Overrides.FormFieldLayout(mode, ui),
      FormFieldMessage: Overrides.FormFieldMessage(mode, ui),
      FormFieldMessages: Overrides.FormFieldMessages(mode, ui),

      // InstructureUI.Link
      Link: Overrides.Link(mode, ui),

      // InstructureUI.Modal
      Modal: Overrides.Modal(mode, ui),
      "Modal.Body": Overrides.ModalBody(mode, ui),
      "Modal.Footer": Overrides.ModalFooter(mode, ui),
      "Modal.Header": Overrides.ModalHeader(mode, ui),

      // InstructureUI.RadioInput
      RadioInput: Overrides.RadioInput(mode, ui),

      // InstructureUI.TopNavBar
      TopNavBar: Overrides.TopNavBar(mode, ui),
      "TopNavBar.ActionItems": Overrides.TopNavBarActionItems(mode, ui),
      "TopNavBar.Brand": Overrides.TopNavBarBrand(mode, ui),
      "TopNavBar.Breadcrumb": Overrides.TopNavBarBreadcrumb(mode, ui),
      "TopNavBar.Item": Overrides.TopNavBarItem(mode, ui),
      "TopNavBar.Layout": Overrides.TopNavBarLayout(mode, ui, isHighContrast),
      "TopNavBar.MenuItems": Overrides.TopNavBarMenuItems(mode, ui),
      "TopNavBar.User": Overrides.TopNavBarUser(mode, ui),

      // InstructureUI.Tray
      Tray: Overrides.Tray(mode, ui, isHighContrast),

      // InstructureUI.View
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
