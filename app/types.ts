import type {
  canvas as Standard,
  canvasHighContrast as HighContrast,
  Modal,
  Tray,
} from "@instructure/ui";
import type { ComponentProps, ReactNode } from "react";
import type { availableLocales } from "@/i18n";

// General
export type Content = JSX.Element | ReactNode | string;

export type Children = {
  children: React.ReactNode;
};

// i18n

/**
 * @todo: typing `Locales` as a string pattern causes `AvailableLocale`
 * to be `string` instead of a union of the `locales` array.
 * const str: AvailableLocale = "fr"; // This should cause a TypeScript error
 * const arr: AvailableLocale[] = ["fr"]; // This should cause a TypeScript error
 */
export type Locale = Lowercase<string>
  | `${Lowercase<string>}-${Uppercase<string>}`;

export type AvailableLocale = (typeof availableLocales)[number];

// Modal
export type ModalProps =
  | {
    modal:
    | (Omit<ComponentProps<typeof Modal>, "children" | "label"> & {
      label?: string;
    })
    | undefined;
    header?: ComponentProps<typeof Modal.Header>;
    body?: ComponentProps<typeof Modal.Body>;
    footer?: ComponentProps<typeof Modal.Footer>;
  }
  | undefined;

export type ShowModal = (
  content: Content,
  header?: string | undefined,
  footer?: string | undefined,
  props?: ModalProps,
) => void;

// Tray
export type TrayProps =
  | (Omit<ComponentProps<typeof Tray>, "label"> & { label?: string })
  | undefined;

export type ShowTray = (
  body: Content,
  header?: string,
  props?: TrayProps,
) => void;

// App
export type Theme = "light" | "dark" | "system";

export type ValidUI = {
  standard: typeof Standard;
  highContrast: typeof HighContrast;
};
export type UI = "standard" | "highContrast";

export type ApplyUI = (ui: UI) => void;

export type ApplyTheme = (theme: Theme) => void;

/**
 * Represents the context object containing information about the application,
 * tray, and modal.
 */
export interface Context {
  /**
   * Represents the application object.
   */
  App: {
    /**
     * A helper object for enumerating the properties of Context.App.
     */
    [key: string]: unknown;

    /**
     * Toggles the UI between `standard` and `highContrast`
     */
    toggleUI: () => void;

    /**
     * Applies the specified UI to the application.
     */
    applyUI: ApplyUI;

    /**
     * Toggles the UI between `standard` and `highContrast`
     */
    toggleTheme: () => void;

    /**
     * Applies the specified UI to the application.
     */
    applyTheme: ApplyTheme;

    /**
     * Indicates whether the application is running inside an iframe.
     */
    isInFrame: boolean;

    /**
     * Represents the theme of the application.
     *
     * @default "light"
     * @example "dark"
     */
    theme: Theme;

    /**
     * Represents the user interface of the application.
     *
     * @default "standard"
     * @example "highContrast"
     */
    ui: UI;

    /**
     * Represents the valid themes that can be applied to the application.
     *
     * @default ["light", "dark"]
     */
    validThemes: Theme[];

    /**
     * Represents the valid user interfaces that can be applied to the application.
     */
    validUIs: ValidUI;

    /**
     * Represents whether `highContrast` UI is active or not
     * 
     * @default: false
     */
    isHighContrast: boolean;

    /**
     * Represents whether `dark` theme is active or not
     * 
     * @default: false
     */
    isDark: boolean;
  };

  /**
   * Represents the tray object.
   */
  Tray: {
    /**
     * A helper object for enumerating the properties of Context.Tray.
     */
    [key: string]: unknown;

    /**
     * Shows the App Tray.
     */
    show: ShowTray;

    /**
     * Hides the App Tray.
     */
    hide: () => void;

    /**
     * Toggles the visibility of the App Tray.
     */
    toggle: () => void;

    /**
     * Clears the content of the App Tray.
     */
    clear: () => void;

    /**
     * Indicates whether the App Tray is currently open.
     */
    isOpen: boolean;

    /**
     * Represents the body content of the App Tray.
     *
     * @example <View>Hello world!</View>
     */
    body: Content;

    /**
     * Represents the header text of the App Tray.
     *
     * @example "Hello world!"
     */
    header: string;

    /**
     * Represents the props of the tray.
     *
     * @example { placement: "end" }
     */
    props: TrayProps;
  };

  /**
   * Represents the App Modal object.
   */
  Modal: {
    /**
     * A helper object for enumerating the properties of Context.Modal.
     */
    [key: string]: unknown;

    /**
     * Shows the App Modal.
     */
    show: ShowModal;

    /**
     * Hides the App Modal.
     */
    hide: () => void;

    /**
     * Toggles the visibility of the App Modal.
     */
    toggle: () => void;

    /**
     * Clears the content of the App Modal.
     */
    clear: () => void;

    /**
     * Indicates whether the App Modal is currently open.
     */
    isOpen: boolean;

    /**
     * Represents the body content of the App Modal.
     *
     * @example <View>Hello world!</View>
     */
    body: Content;

    /**
     * Represents the header text of the App Modal.
     *
     * @example "Hello world!"
     */
    header: string;

    /**
     * Represents the footer text of the App Modal.
     *
     * @example "additional footnote"
     */
    footer: string;

    /**
     * Represents the props of the App Modal Components.
     *
     * @remarks the props object maps the following keys to their respective components:
     * - `modal` to the `Modal` component
     * - `header` to the `Modal.Header` component
     * - `body` to the `Modal.Body` component
     * - `footer` to the `Modal.Footer` component
     * `Modal.label` and `Modal.childre`n are omitted from the props object requirements.
     * `label` can be optionally included in the `modal` object.
     * @example
     * {
     *   modal: { size: "medium" },
     *   header: { spacing: "compact" }
     * }
     */
    props: ModalProps;
  };
}
