"use client";
import { signature } from "@/lib";
import {
  Button,
  Checkbox,
  FormFieldGroup,
  Heading,
  RadioInput,
  RadioInputGroup,
  Table,
  Text,
  View,
} from "@instructure/ui";
import { useContexts } from "context";
import { useTranslations } from "next-intl";
import React from "react";
import type { ChangeEvent } from "react";
import type { Theme } from "types";

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

  const t = useTranslations("Page");

  const showModal = () => {
    Modal.show(content, header, footer, {
      modal: { size: "medium", label: "foo" },
      header: { spacing: "compact" },
    });
  };

  const handleThemeChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    try {
      App.applyTheme(value as Theme);
    } catch (error) {
      console.error(error);
      console.error(event);
    }
  };

  /**
   * Returns an array of key-value pairs from the given object.
   *
   * @param o - The object to extract key-value pairs from.
   * @returns An object containing the key-value pairs.
   */
  const ktv = (o: Record<string, unknown>) =>
    Object.keys(o).map((k) => {
      const value = o[k];
      let valueStr: string;
      switch (typeof value) {
        case "function":
          valueStr = signature(value as (...args: unknown[]) => void);
          break;
        case "object":
          valueStr = value
            ? Array.isArray(value)
              ? value.join(", ")
              : Object.keys(value).join(", ")
            : "";
          break;
        default:
          valueStr = value ? value.toString() : "";
      }
      return {
        key: k,
        value: valueStr,
      };
    });

  /**
   * Represents the context values for the page.
   * Each context value is an object with a key-value pair.
   * The key represents the context name, and the value is the component associated with that context.
   */

  const contextValues = {
    app: ktv(App),
    tray: ktv(Tray),
    modal: ktv(Modal),
  };
  console.log(App);
  console.log(contextValues);

  const content = <View as="div">{t("title")}</View>;
  const header = "Title";
  const footer = "Footer";

  return (
    <View>
      <View>
        <Heading level="h2">App Info</Heading>
        <Text as="span">Name: {process.env.name}</Text>
        <br />
        <Text as="span">Version: {process.env.version}</Text>
        <br />
        <Text as="span">Environment: {process.env.NODE_ENV}</Text>
      </View>
      <View>
        <FormFieldGroup
          layout="columns"
          colSpacing="large"
          vAlign="top"
          rowSpacing="large"
          description="UI Settings"
        >
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
          <Checkbox
            id="ui"
            labelPlacement="top"
            label="High Contrast"
            variant="toggle"
            onClick={() => App.toggleUI()}
          />
          <Checkbox
            id="save"
            labelPlacement="top"
            label="Save"
            variant="toggle"
          />
        </FormFieldGroup>
      </View>
      <View>
        <Heading level="h2">Context Values</Heading>
        {Object.entries(contextValues).map(([key, value]) => (
          <React.Fragment key={key}>
            <Heading level="h3">
              <Text transform="capitalize">{key}</Text>
            </Heading>
            <Table caption={key}>
              <Table.Head>
                <Table.Row>
                  <Table.ColHeader id="key">Key</Table.ColHeader>
                  <Table.ColHeader id="value">Value</Table.ColHeader>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {value.map((row) => (
                  <Table.Row key={row.key}>
                    <Table.Cell>{row.key}</Table.Cell>
                    <Table.Cell>{row.value}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </React.Fragment>
        ))}
      </View>
      <Button onClick={showModal}>Show Modal</Button>
    </View>
  );
}

export default Page;
