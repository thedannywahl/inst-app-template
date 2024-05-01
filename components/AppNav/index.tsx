import { IconInstructureLogoLine, TopNavBar } from "@instructure/ui";
import { useContexts } from "context";
import getActionItems from "./ActionItems";
import type { TopNavBarItem } from "./types";

function LayoutTopNavBar(): JSX.Element {

  const handleDropdownMenuToggle = (isMenuOpen: boolean) => {
    const htmlEl = document.querySelector("html");
    if (!htmlEl) return;
    htmlEl.style.overflow = isMenuOpen ? "hidden" : "auto";
  };

  const ActionItems: TopNavBarItem[] = getActionItems();

  return (
    <TopNavBar>
      {() => {
        return (
          <TopNavBar.Layout
            id="AppNav"
            smallViewportConfig={{
              dropdownMenuToggleButtonLabel: "Toggle Menu",
              dropdownMenuLabel: "Main Menu",
              onDropdownMenuToggle: handleDropdownMenuToggle,
            }}
            desktopConfig={{}}
            renderBrand={
              <TopNavBar.Brand
                screenReaderLabel="Instructure Compliance Packages"
                renderIcon={
                  <IconInstructureLogoLine
                    size="small"
                    height="2.5rem"
                    width="2.5rem"
                    color="inherit"
                  />
                }
              />
            }
            renderActionItems={
              <TopNavBar.ActionItems
                listLabel="Actions"
                renderHiddenItemsMenuTriggerLabel={(
                  hiddenChildrenCount: number,
                ) => `${hiddenChildrenCount} more actions`}
              >
                {ActionItems.map((item) => (
                  <TopNavBar.Item key={item.id} {...item} />
                ))}
              </TopNavBar.ActionItems>
            }
          />
        );
      }}
    </TopNavBar>
  );
}

export default LayoutTopNavBar;
