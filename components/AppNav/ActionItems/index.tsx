import { IconInfoLine, Text, View } from "@instructure/ui";
import { useContexts } from "context";
import type { TrayProps } from "types";
import type { TopNavBarItem } from "../types";

/**
 * Function to get Action Items for the application.
 * @returns Array of TopNavBar.Item Action Items.
 */
function getActionItems(): TopNavBarItem[] {
  const {
    Tray: { show },
  } = useContexts();
  const actionItems: TopNavBarItem[] = [];

  /**
   * Information Action Item.
   */
  const infoTray: [JSX.Element, string, TrayProps] = [
    <View key="tray">
      <Text as="p">
        This site and its contents are maintained by Instructure, inc.
      </Text>
      <Text as="h4" weight="bold">
        Current customers
      </Text>
      <Text as="p">Reach out to your CSM</Text>
      <Text as="h4" weight="bold">
        Prospective customers
      </Text>
      <Text as="p">Reach out to your sales contact.</Text>
      <Text as="p">For general inquiries email.</Text>
    </View>,
    "Info",
    { placement: "end" },
  ] as const;

  /**
   * Represents an action item for the top navigation bar.
   */
  const Info: TopNavBarItem = {
    renderIcon: <IconInfoLine />,
    id: "info",
    color: "secondary",
    variant: "button",
    onClick: () => {
      show(...infoTray);
    },
    children: "Info",
  };

  actionItems.push(Info);

  return actionItems;
}

export default getActionItems;
