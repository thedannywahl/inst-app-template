"use client";

import { Button, Checkbox, Heading, Text, View, RadioInput, RadioInputGroup } from "@instructure/ui";
import { useContexts } from "context";
import type { Theme } from "types"
import type { ChangeEvent } from "react";

/**
 * Renders the Page component.
 *
 * @returns The JSX.Element representing the Page component.
 */
/**
 * Renders a page component.
 *
 * @returns The JSX element representing the page.
 */
function Page(): JSX.Element {
  const { App, Tray, Modal } = useContexts();

  const showModal = () => {
    Modal.show(content, header, footer, {
      modal: { size: "medium", label: "foo" },
      header: { spacing: "compact" },
    });
  };

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    try {
      App.applyTheme(value as Theme)
    } catch (error) {
      console.error(error)
      console.error(event)
    }
  }

  /**
   * Returns an array of key-value pairs from the given object.
   *
   * @param o - The object to extract key-value pairs from.
   * @returns An array of objects containing the key-value pairs.
   */
  const ktv = (o: Record<string, unknown>) =>
    Object.keys(o).map((k) => ({
      l: k,
      v: typeof o[k] !== "function" ? o[k] : typeof o[k],
    }));

  /**
   * Represents the context values for the page.
   * Each context value is an object with a key-value pair.
   * The key represents the context name, and the value is the component associated with that context.
   */
  const contextValues = [
    { app: ktv(App) },
    { tray: ktv(Tray) },
    { modal: ktv(Modal) },
  ];

  const content = <View as="div">Lorem Ipsum Sit Dolor...</View>;
  const header = "Title";
  const footer = "Footer";

  return (
    <>
      <Heading level="h2">Context Values</Heading>
      <Text as="p">pork chop leberkas flank venison ham chicken.</Text>
      <Button onClick={showModal}>Show Modal</Button>
      <br />
      <br />
      <Checkbox
        id="ui"
        label={`High contrast mode: ${App.isHighContrast}`}
        variant="toggle"
        onClick={() => App.toggleUI()}
      />{" "}
      UI: {App.ui}
      <br />
      <br />
      <RadioInputGroup
        name="Theme"
        defaultValue="system"
        description="Themes"
        onChange={handleThemeChange}
        variant="toggle"
      >
        {["system", "light", "dark"].map((theme) => (
          <RadioInput label={theme} value={theme} key={theme} id={theme} />
        ))}
      </RadioInputGroup>
      <br />
      theme: {App.theme}
      <br />
      <br />
      <Checkbox
        id="theme"
        label="Remember my choice"
        variant="toggle"
      />{" "}
      <br />
      <br />
      <Text as="span" color="danger">
        *experimental
      </Text>
      <Text as="p">
        App Name: {process.env.name}
        <br />
        App Version: {process.env.version}
        <br />
        App Environment: {process.env.NODE_ENV}
        <br />
      </Text>
    </>
  );
}

export default Page;
