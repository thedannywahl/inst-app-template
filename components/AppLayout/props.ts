import type { ThemeOrOverride } from "@instructure/emotion/types/EmotionTypes";
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
  isDark: boolean,
  isHighContrast: boolean,
): ThemeOrOverride | undefined => {
  return {
    componentOverrides: {
      Alert: alertOverrides(isDark, isHighContrast),
      Avatar: avatarOverrides(isDark, isHighContrast),
      Badge: badgeOverrides(isDark, isHighContrast),
      BaseButton: baseButtonOverrides(isDark, isHighContrast),
      Billboard: billboardOverrides(isDark, isHighContrast),
      Breadcrumb: breadcrumbOverrides(isDark, isHighContrast),
      FormFieldLabel: formFieldLabelOverrides(isDark, isHighContrast),
      FormFieldMessage: formFieldMessageOverrides(isDark, isHighContrast),
      Link: linkOverrides(isDark, isHighContrast),
      Modal: modalOverrides(isDark, isHighContrast),
      "Modal.Body": modalBodyOverrides(isDark, isHighContrast),
      "Modal.Footer": modalFooterOverrides(isDark, isHighContrast),
      "Modal.Header": modalHeaderOverrides(isDark, isHighContrast),
      RadioInput: radioInputOverrides(isDark, isHighContrast),
      ToggleFacade: toggleFacadeOverrides(isDark, isHighContrast),
      TopNavBarLayout: topNavBarLayoutOverrides(isDark, isHighContrast),
      Tray: trayOverrides(isDark, isHighContrast),
      View: viewOverrides(isDark, isHighContrast),
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
