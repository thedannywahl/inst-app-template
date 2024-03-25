import { CloseButton, Flex, Heading, Tray, View } from "@instructure/ui";
import { useContexts } from "context";

/**
 * Function to render the application tray.
 */
function LayoutAppTray(): JSX.Element {
  /**
   * Function to handle the click event of the close button.
   */
  const hideTray = () => {
    AppTray.hide();
  };

  /**
   * Represents the App Tray component.
   *
   * @remarks
   * This component is used to render the App Tray.
   *
   * @example
   * ```tsx
   * const { Tray: AppTray } = useContexts();
   * ```
   */
  const { Tray: AppTray } = useContexts();

  /**
   * The header element for the AppTray component.
   *
   * @remarks
   * This element displays the header text and close button for the App Tray.
   *
   * @returns The JSX.Element representing the header.
   */
  const header: JSX.Element = (
    <Flex>
      <Flex.Item shouldGrow shouldShrink>
        {AppTray?.header ? <Heading>{AppTray.header}</Heading> : null}
      </Flex.Item>
      <Flex.Item>
        <CloseButton
          placement="end"
          offset="small"
          onClick={hideTray}
          screenReaderLabel="Close"
        />
      </Flex.Item>
    </Flex>
  );

  return (
    <Tray
      open={AppTray.isOpen}
      onDismiss={hideTray}
      label={AppTray?.props?.label || "App Tray"}
      shouldCloseOnDocumentClick
      {...AppTray?.props}
    >
      <View as="div" padding="medium">
        {header}
        {AppTray.body}
      </View>
    </Tray>
  );
}

export default LayoutAppTray;
