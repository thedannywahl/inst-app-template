import type { ThemeOrOverride } from "@instructure/emotion/types/EmotionTypes";
import type { UI, Mode } from "types";
import alertOverrides from "./themeOverrides/alert";
import avatarOverrides from "./themeOverrides/avatar";
import badgeOverrides from "./themeOverrides/badge";
import baseButtonOverrides from "./themeOverrides/baseButton";
import billboardOverrides from "./themeOverrides/billboard";
import breadcrumbOverrides from "./themeOverrides/breadcrumb";
import { toggleFacadeOverrides } from "./themeOverrides/checkbox";
import {
  formFieldLabelOverrides,
  formFieldMessageOverrides,
} from "./themeOverrides/formField";
import linkOverrides from "./themeOverrides/link";
import {
  modalBodyOverrides,
  modalFooterOverrides,
  modalHeaderOverrides,
  modalOverrides,
} from "./themeOverrides/modal";
import radioInputOverrides from "./themeOverrides/radioInput";
import { topNavBarLayoutOverrides } from "./themeOverrides/topNavBar";
import trayOverrides from "./themeOverrides/tray";
import viewOverrides from "./themeOverrides/view";

const ThemeOverrides = (
  mode: Mode,
  ui: UI,
): ThemeOrOverride | undefined => {
  return {
    componentOverrides: {
      Alert: alertOverrides(ui, mode),
      Avatar: avatarOverrides(ui, mode),
      Badge: badgeOverrides(ui, mode),
      BaseButton: baseButtonOverrides(ui, mode),
      Billboard: billboardOverrides(ui, mode),
      Breadcrumb: breadcrumbOverrides(ui, mode),
      FormFieldLabel: formFieldLabelOverrides(ui, mode),
      FormFieldMessage: formFieldMessageOverrides(ui, mode),
      Link: linkOverrides(ui, mode),
      Modal: modalOverrides(ui, mode),
      "Modal.Body": modalBodyOverrides(ui, mode),
      "Modal.Footer": modalFooterOverrides(ui, mode),
      "Modal.Header": modalHeaderOverrides(ui, mode),
      RadioInput: radioInputOverrides(ui, mode),
      ToggleFacade: toggleFacadeOverrides(ui, mode),
      TopNavBarLayout: topNavBarLayoutOverrides(ui, mode),
      Tray: trayOverrides(ui, mode),
      View: viewOverrides(ui, mode),
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
