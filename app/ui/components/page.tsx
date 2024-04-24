"use client";

import {
  AccessibleContent,
  Alert,
  Avatar,
  Badge,
  BaseButton,
  Billboard,
  Breadcrumb,
  Button,
  Checkbox,
  Flex,
  FormFieldGroup,
  Heading,
  IconArrowOpenStartLine,
  IconButton,
  IconGradebookLine,
  IconGroupLine,
  IconPlusLine,
  IconUserLine,
  IconUserSolid,
  Img,
  Link,
  RadioInput,
  RadioInputGroup,
  Responsive,
  ScreenReaderContent,
  TruncateText,
  View,
} from "@instructure/ui";
import { red } from "ansis";
import { useContexts } from "context";
import type { ChangeEvent } from "react";
import type { Theme } from "types";

function Page(): JSX.Element {
  const { App, Tray, Modal } = useContexts();

  const handleThemeChange = (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    try {
      App.applyTheme(value as Theme);
    } catch (error) {
      console.error(red`Error:`, error);
      console.error(red`Error:`, event);
    }
  };

  return (
    <View>
      <Heading level="h2">Settings</Heading>
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
      <Heading level="h2" as="h2">
        Components
      </Heading>

      <View display="block" margin="large 0">
        <Heading level="h3" id="alert">
          Alert
        </Heading>
        <View display="block" padding="small 0">
          <Alert variant="info" renderCloseButtonLabel="Close">
            Info Alert (default)
          </Alert>
          <Alert variant="success" renderCloseButtonLabel="Close">
            Success Alert
          </Alert>
          <Alert variant="warning" renderCloseButtonLabel="Close">
            Warning Alert
          </Alert>
          <Alert variant="error">Error Alert</Alert>
        </View>
      </View>

      <View display="block" margin="large 0">
        <Heading level="h3" id="avatar">
          Avatar
        </Heading>
        <View display="block" padding="small 0">
          <Avatar name="John Doe" margin="0 medium 0 0" />
          <Avatar
            name="Jane Doe"
            renderIcon={<IconUserLine />}
            shape="rectangle"
            margin="0 medium 0 0"
          />
          <Avatar
            renderIcon={<IconGroupLine />}
            name="Heather Wheeler"
            color="fire"
            margin="0 medium 0 0"
          />
        </View>
        <View display="block" padding="small 0">
          <Avatar
            name="Arthur C. Clarke"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            name="James Arias"
            color="shamrock"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            name="Charles Kimball"
            color="barney"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            name="Melissa Reed"
            color="crimson"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            name="Heather Wheeler"
            color="fire"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            name="David Herbert"
            color="licorice"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar name="Isaac Asimov" color="ash" hasInverseColor />
        </View>
        <View display="block" padding="small 0">
          <Avatar
            renderIcon={<IconGroupLine />}
            name="Arthur C. Clarke"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            renderIcon={<IconGroupLine />}
            name="James Arias"
            color="shamrock"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            renderIcon={<IconGroupLine />}
            name="Charles Kimball"
            color="barney"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            renderIcon={<IconGroupLine />}
            name="Melissa Reed"
            color="crimson"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            renderIcon={<IconGroupLine />}
            name="Heather Wheeler"
            color="fire"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            renderIcon={<IconGroupLine />}
            name="David Herbert"
            color="licorice"
            hasInverseColor
            margin="0 small 0 0"
          />
          <Avatar
            renderIcon={<IconGroupLine />}
            name="Isaac Asimov"
            color="ash"
            hasInverseColor
          />
        </View>
      </View>

      <View display="block" margin="large 0">
        <Heading level="h3" id="badge">
          Badge
        </Heading>
        <View display="block" padding="small 0">
          <Badge count={105} countUntil={100} margin="0 medium 0 0">
            <Button>Inbox</Button>
          </Badge>
          <Badge count={250} countUntil={100}>
            <Button>Assignments</Button>
          </Badge>
        </View>
        <View display="block" padding="small 0">
          <Flex padding="small" display="inline-flex" alignItems="center">
            <Badge
              count={99}
              pulse
              margin="0 medium 0 0"
              formatOutput={(formattedCount) => (
                <AccessibleContent
                  alt={`You have ${formattedCount} new edits to review`}
                >
                  {formattedCount}
                </AccessibleContent>
              )}
            >
              <IconButton
                renderIcon={IconUserSolid}
                screenReaderLabel="Edits"
                withBorder={false}
                withBackground={false}
              />
            </Badge>
            <Badge
              type="notification"
              formatOutput={() => (
                <ScreenReaderContent>
                  You have new edits to review
                </ScreenReaderContent>
              )}
            >
              <IconButton
                renderIcon={IconUserSolid}
                screenReaderLabel="Edits"
                withBorder={false}
                withBackground={false}
              />
            </Badge>
          </Flex>
          <Flex padding="small" display="inline-flex" alignItems="center">
            <Badge standalone count={6} margin="0 small 0 0" />
            <Badge
              type="notification"
              standalone
              formatOutput={() => (
                <ScreenReaderContent>
                  This is a notification
                </ScreenReaderContent>
              )}
            />
          </Flex>
          <Flex padding="small" display="inline-flex" alignItems="center">
            <Badge
              standalone
              variant="success"
              count={12}
              margin="0 small 0 0"
            />
            <Badge
              variant="success"
              type="notification"
              standalone
              formatOutput={() => (
                <ScreenReaderContent>
                  This is a success notification
                </ScreenReaderContent>
              )}
            />
          </Flex>
          <Flex padding="small" display="inline-flex" alignItems="center">
            <Badge
              standalone
              variant="danger"
              count={18}
              countUntil={10}
              margin="0 small 0 0"
            />
            <Badge
              variant="danger"
              type="notification"
              standalone
              formatOutput={() => (
                <ScreenReaderContent>
                  This is a danger notification
                </ScreenReaderContent>
              )}
            />
          </Flex>
          <View background="primary-inverse" padding="small">
            <Flex padding="small" display="inline-flex" alignItems="center">
              <Badge
                standalone
                variant="inverse"
                count={8}
                margin="0 small 0 0"
              />
              <Badge
                variant="inverse"
                type="notification"
                standalone
                formatOutput={() => (
                  <ScreenReaderContent>
                    This is a danger notification
                  </ScreenReaderContent>
                )}
              />
            </Flex>
          </View>
        </View>
      </View>

      <View display="block" margin="large 0">
        <Heading level="h3" id="basebutton">
          BaseButton
        </Heading>
        <View display="block" padding="small 0">
          <BaseButton margin="0 small 0 0" size="small">
            Click me
          </BaseButton>
          <BaseButton renderIcon={IconPlusLine} size="medium" margin="small">
            With icon
          </BaseButton>
          <BaseButton margin="small" size="large" withBackground={false}>
            No background
          </BaseButton>
          <BaseButton margin="small" withBorder={false}>
            No border
          </BaseButton>
          <BaseButton margin="small" shape="circle" renderIcon={IconPlusLine} />
          <BaseButton
            margin="small"
            isCondensed={true}
            withBorder={false}
            withBackground={false}
          >
            Condensed
          </BaseButton>
        </View>
        <View display="block" padding="small 0">
          <BaseButton color="primary" margin="0 small 0 0" size="small">
            Click me
          </BaseButton>
          <BaseButton
            color="primary"
            renderIcon={IconPlusLine}
            size="medium"
            margin="small"
          >
            With icon
          </BaseButton>
          <BaseButton
            color="primary"
            margin="small"
            size="large"
            withBackground={false}
          >
            No background
          </BaseButton>
          <BaseButton color="primary" margin="small" withBorder={false}>
            No border
          </BaseButton>
          <BaseButton
            color="primary"
            margin="small"
            shape="circle"
            renderIcon={IconPlusLine}
          />
          <BaseButton
            color="primary"
            margin="small"
            isCondensed={true}
            withBorder={false}
            withBackground={false}
          >
            Condensed
          </BaseButton>
        </View>
        <View display="block" padding="small 0">
          <BaseButton color="primary-inverse" margin="0 small 0 0" size="small">
            Click me
          </BaseButton>
          <BaseButton
            color="primary-inverse"
            renderIcon={IconPlusLine}
            size="medium"
            margin="small"
          >
            With icon
          </BaseButton>
          <BaseButton
            color="primary-inverse"
            margin="small"
            size="large"
            withBackground={false}
          >
            No background
          </BaseButton>
          <BaseButton color="primary-inverse" margin="small" withBorder={false}>
            No border
          </BaseButton>
          <BaseButton
            color="primary-inverse"
            margin="small"
            shape="circle"
            renderIcon={IconPlusLine}
          />
          <BaseButton
            color="primary-inverse"
            margin="small"
            isCondensed={true}
            withBorder={false}
            withBackground={false}
          >
            Condensed
          </BaseButton>
        </View>
        <View display="block" padding="small 0">
          <BaseButton color="secondary" margin="0 small 0 0" size="small">
            Click me
          </BaseButton>
          <BaseButton
            color="secondary"
            renderIcon={IconPlusLine}
            size="medium"
            margin="small"
          >
            With icon
          </BaseButton>
          <BaseButton
            color="secondary"
            margin="small"
            size="large"
            withBackground={false}
          >
            No background
          </BaseButton>
          <BaseButton color="secondary" margin="small" withBorder={false}>
            No border
          </BaseButton>
          <BaseButton
            color="secondary"
            margin="small"
            shape="circle"
            renderIcon={IconPlusLine}
          />
          <BaseButton
            color="secondary"
            margin="small"
            isCondensed={true}
            withBorder={false}
            withBackground={false}
          >
            Condensed
          </BaseButton>
        </View>
        <View display="block" padding="small 0">
          <BaseButton color="success" margin="0 small 0 0" size="small">
            Click me
          </BaseButton>
          <BaseButton
            color="success"
            renderIcon={IconPlusLine}
            size="medium"
            margin="small"
          >
            With icon
          </BaseButton>
          <BaseButton
            color="success"
            margin="small"
            size="large"
            withBackground={false}
          >
            No background
          </BaseButton>
          <BaseButton color="success" margin="small" withBorder={false}>
            No border
          </BaseButton>
          <BaseButton
            color="success"
            margin="small"
            shape="circle"
            renderIcon={IconPlusLine}
          />
          <BaseButton
            color="success"
            margin="small"
            isCondensed={true}
            withBorder={false}
            withBackground={false}
          >
            Condensed
          </BaseButton>
        </View>
        <View display="block" padding="small 0">
          <BaseButton color="danger" margin="0 small 0 0" size="small">
            Click me
          </BaseButton>
          <BaseButton
            color="danger"
            renderIcon={IconPlusLine}
            size="medium"
            margin="small"
          >
            With icon
          </BaseButton>
          <BaseButton
            color="danger"
            margin="small"
            size="large"
            withBackground={false}
          >
            No background
          </BaseButton>
          <BaseButton color="danger" margin="small" withBorder={false}>
            No border
          </BaseButton>
          <BaseButton
            color="danger"
            margin="small"
            shape="circle"
            renderIcon={IconPlusLine}
          />
          <BaseButton
            color="danger"
            margin="small"
            isCondensed={true}
            withBorder={false}
            withBackground={false}
          >
            Condensed
          </BaseButton>
        </View>
      </View>

      <View display="block" margin="large 0">
        <Heading level="h3" id="billboard">
          Billboard
        </Heading>
        <View display="block" padding="small 0">
          <Billboard
            margin="large"
            size="medium"
            message="Click this link"
            href="#billboard"
            hero={(size) => <IconGradebookLine size={size} />}
          />
          <Billboard
            readOnly
            margin="large"
            message="Create a new Module"
            size="large"
            onClick={() => {
              alert("This Billboard was clicked!");
            }}
            hero={(size) => <IconPlusLine size={size} />}
          />
          <Billboard
            margin="large"
            size="small"
            heading="Well, this is awkward."
            message="Think there should be something here?"
            hero={<IconGroupLine />}
          />
          <Billboard
            size="small"
            heading="This is disabled"
            hero={(size) => <IconUserLine size={size} />}
            disabled
          />
        </View>
      </View>

      <View display="block" margin="large 0">
        <Heading level="h3" id="breadcrumb">
          Breadcrumb
        </Heading>
        <View display="block" padding="small 0">
          <Breadcrumb label="You are here:">
            <Breadcrumb.Link href="#breadcrumb">
              Student Forecast
            </Breadcrumb.Link>
            <Breadcrumb.Link href="#breadcrumb">
              University of Utah
            </Breadcrumb.Link>
            <Breadcrumb.Link href="#breadcrumb">
              University of Utah Colleges
            </Breadcrumb.Link>
            <Breadcrumb.Link>This is the current page</Breadcrumb.Link>
          </Breadcrumb>
        </View>
      </View>

      <View display="block" margin="large 0">
        <Heading level="h3" id="basebutton">
          Button
        </Heading>

        <View display="block" padding="small 0">
          ...
        </View>
      </View>
    </View>
  );
}

export default Page;
