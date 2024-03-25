import type React from "react";
import {
  type ComponentProps,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  canvas as standard,
  canvasHighContrast as highContrast,
  type Modal,
} from "@instructure/ui";

import type {
  Children,
  Content,
  Context,
  ModalProps,
  Theme,
  TrayProps,
  UI,
  ValidUI,
} from "types";

/**
 * A context for storing and accessing the application context.
 */
const context = createContext<Context | undefined>(undefined);

/**
 * Custom hook that returns the current context value.
 * Throws an error if the hook is used outside of a ContextsProvider.
 *
 * @returns The current context value.
 */
export const useContexts = (): Context => {
  const err = "useContexts must be used within an ContextsProvider";
  const ctx = useContext(context);
  if (!ctx) {
    console.error(err);
    throw new Error(err);
  }
  return ctx;
};

/**
 * ContextProvider component.
 *
 * @component
 * @param children - The child components.
 * @example
 * <ContextProvider>
 *   <App />
 * </ContextProvider>
 */
export const ContextProvider: React.FC<Children> = ({ children }) => {
  // iFrame

  /**
   * Represents the state of whether the component is rendered within an iframe.
   */
  const [isInFrame, setIsInFrame] = useState<boolean>(false);

  /**
   * useEffect hook for checking if the current window is being displayed in an iframe.
   *
   * This hook runs once after the initial render of the component.
   * It checks if the current window is being displayed inside an iframe (`window?.frameElement`).
   * If it is, it calls the `setIsInFrame` function with `true` as an argument.
   * `setIsInFrame` is likely a state setter function from the `useState` hook.
   *
   * @example
   * useEffect(() => {
   *   if (window?.frameElement) setIsInFrame(true);
   * });
   */
  useEffect(() => {
    if (window?.frameElement) setIsInFrame(true);
  });

  // Theme

  /**
   * An array of valid themes.
   * @type {Theme[]}
   * @todo: store selected theme in localStorage
   * @todo: add a function to update the theme
   * @todo: add a function to get the current theme
   */
  const validThemes: Theme[] = ["light", "dark", "system"] as const;

  /**
   * Represents the theme state and provides a function to update it.
   */
  const [theme, setTheme] = useState<Theme>("light");

  /**
    * Represents the state of the high contrast UI.
    */
  const [isDark, setIsDark] = useState<boolean>(false);

  /**
   * Applies the specified theme.
   *
   * @param theme - The theme to apply.
   * @todo: store selected theme in localStorage
   */
  const applyTheme = (t: Theme): void => {
    setTheme(Object.keys(validThemes).includes(t) ? t : "dark");
  };

  /**
   * Toggles the contrast mode between light and dark.
   */
  const toggleTheme = (): void => {
    setIsDark(!isDark);
    isDark ? setTheme("light") : setTheme("dark");
    validUIs[ui].use();
  };

  /**
   * A mapping of valid UIs and their corresponding components.
   */
  const validUIs: ValidUI = {
    standard: standard,
    highContrast: highContrast
  } as const;

  /**
   * Represents the UI state.
   */
  const [ui, setUI] = useState<UI>("standard");

  /**
   * Represents the state of the high contrast UI.
   */
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);

  /**
   * Applies the specified UI.
   *
   * @param ui - The UI to apply.
   * @todo: store selected UI in localStorage
   */
  const applyUI = (ui: UI): void => {
    setUI(Object.keys(validUIs).includes(ui) ? ui : "standard");
    validUIs[ui].use();
  };

  /**
   * Toggles the contrast mode between standard and high contrast.
   */
  const toggleUI = (): void => {
    setIsHighContrast(!isHighContrast);
    isHighContrast ? applyUI("standard") : applyUI("highContrast");
  };

  // AppTray

  /**
   * Represents the state of the App Tray.
   */
  const [trayIsOpen, setTrayIsOpen] = useState<boolean>(false);

  /**
   * Represents the content of the App Tray.
   */
  const [trayContent, setTrayContent] = useState<Content>("");

  /**
   * Represents the header text for the App Tray.
   */
  const [trayHeader, setTrayHeader] = useState<string>("");

  /**
   * The state and setter for the App Tray.
   *
   * @remarks
   * This state is used to manage the props for the InstUI Tray component.
   *
   * @typeParam T - The type of the Tray component props.
   */
  const [trayProps, setTrayProps] = useState<TrayProps | undefined>(undefined);

  /**
   * Toggles the App Tray open or closed.
   */
  const toggleTray = (): void => setTrayIsOpen(!trayIsOpen);

  /**
   * Hides the App Tray.
   */
  const hideTray = (): void => setTrayIsOpen(false);

  /**
   * Clears the App Tray content, header, and props.
   */
  const clearTray = (): void => {
    setTrayContent("");
    setTrayHeader("");
    setTrayProps(undefined);
  };

  /**
   * Displays the App Tray with the specified content, header, and props.
   *
   * @param trayBody - The content to be displayed in the App Tray.
   * @param trayHeader - The header text for the App Tray.
   * @param trayProps - Additional props for the App Tray.
   */
  const showTray = (
    trayBody?: Content | undefined,
    trayHeader?: string,
    trayProps?: TrayProps,
  ): void => {
    setTrayHeader(trayHeader || "");
    setTrayContent(trayBody || "");
    setTrayProps(trayProps);
    setTrayIsOpen(true);
  };

  // AppModal

  /**
   * Represents the state of the App Modal.
   */
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  /**
   * The state and setter for the App Modal body content.
   *
   * @typeParam Content - The type of the App Modal body content.
   */
  const [modalBody, setModalBody] = useState<Content>("");

  /**
   * Represents the state and setter for the App Modal header.
   */
  const [modalHeader, setModalHeader] = useState<string>("");

  /**
   * Represents the state and setter for the App Modal footer.
   */
  const [modalFooter, setModalFooter] = useState<string>("");

  /**
   * The state and setter for the App Modal props.
   * @typeParam T - The type of the App Modal props.
   */
  const [modalProps, setModalProps] = useState<
    | (Omit<ComponentProps<typeof Modal>, "children" | "label"> & {
      label?: string;
    })
    | undefined
  >(undefined);

  /**
   * The state and setter for the App Modal header props.
   *
   * @remarks
   * This state is used to manage the props for the App Modal header component.
   *
   * @typeParam T - The type of the App Modal header props.
   */
  const [modalHeaderProps, setModalHeaderProps] = useState<
    ComponentProps<typeof Modal.Header> | undefined
  >(undefined);

  const [modalBodyProps, setModalBodyProps] = useState<
    ComponentProps<typeof Modal.Body> | undefined
  >(undefined);

  /**
   * The state and setter for the App Modal footer props.
   *
   * @remarks
   * This state is used to manage the props for the App Modal footer.
   *
   * @typeParam T - The type of the App Modal footer component props.
   */
  const [modalFooterProps, setModalFooterProps] = useState<
    ComponentProps<typeof Modal.Footer> | undefined
  >(undefined);

  /**
   * The label for the App Modal.
   */

  /**
   * Toggles the App Modal state between open and closed.
   */
  const toggleModal = (): void => setModalIsOpen(!modalIsOpen);

  /**
   * Hides the App Modal by setting the `modalIsOpen` state to `false`.
   */
  const hideModal = (): void => setModalIsOpen(false);

  /**
   * Clears the App Modal by resetting its body, header, footer, label, and props.
   */
  const clearModal = (): void => {
    setModalBody("");
    setModalHeader("");
    setModalFooter("");
    setModalProps(undefined);
  };

  /**
   * Displays a modal with the specified content, header, footer, and props.
   *
   * @param modalBody - The content to be displayed in the modal body.
   * @param modalHeader - The header text for the modal. Defaults to an empty string.
   * @param modalFooter - The footer text for the modal. Defaults to an empty string.
   * @param modalProps - Additional props for the modal.
   */
  const showModal = (
    modalBody: Content,
    modalHeader?: string,
    modalFooter?: string,
    modalProps?: ModalProps,
  ): void => {
    setModalHeader(modalHeader || "");
    setModalFooter(modalFooter || "");
    setModalBody(modalBody || "");

    modalProps?.modal
      ? setModalProps(modalProps.modal)
      : setModalProps(undefined);

    modalProps?.header
      ? setModalHeaderProps(modalProps.header)
      : setModalHeaderProps(undefined);

    modalProps?.body
      ? setModalBodyProps(modalProps?.body)
      : setModalBodyProps(undefined);

    modalProps?.footer
      ? setModalFooterProps(modalProps?.footer)
      : setModalFooterProps(undefined);

    setModalIsOpen(true);
  };

  return (
    <context.Provider
      value={{
        App: {
          toggleUI,
          applyUI,
          toggleTheme,
          applyTheme,
          isInFrame,
          theme,
          validThemes,
          ui,
          validUIs,
          isHighContrast,
          isDark,
        },
        Tray: {
          show: showTray,
          hide: hideTray,
          toggle: toggleTray,
          clear: clearTray,
          isOpen: trayIsOpen,
          body: trayContent,
          header: trayHeader,
          props: trayProps,
        },
        Modal: {
          show: showModal,
          hide: hideModal,
          toggle: toggleModal,
          clear: clearModal,
          isOpen: modalIsOpen,
          body: modalBody,
          header: modalHeader,
          footer: modalFooter,
          props: {
            modal: modalProps,
            header: modalHeaderProps,
            body: modalBodyProps,
            footer: modalFooterProps,
          },
        },
      }}
    >
      {children}
    </context.Provider>
  );
};
