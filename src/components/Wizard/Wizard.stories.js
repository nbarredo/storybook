import React from "react";
import { Button } from "../Button/Button";
import { ButtonSet } from "../ButtonSet/ButtonSet";
import { Text } from "../Text/Text";
import { Wizard } from "./Wizard";
import {
  WizardBtnGrp,
  WizardDescription,
  WizardSlot,
  WizardSlotBtm
} from "./children";

export default {
  title: "In Progress/Wizard",
  component: Wizard,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ZCq6KsxrKb6WYU4XceP3ef/Add-Account--UI?type=design&node-id=1782%3A10843&mode=design&t=OMCwYpURvNaoG5qA-1"
    }
  }
};

const defaultArgs = {
  open: true,
  state: "default",
  headerTitle: "Title",
  hasCloseButton: true,
  isLoading: false
};

const defaultContent = (
  <>
    <WizardDescription>
      <p>
        Area reserved to give the user context of what is being asked, or shown.
        Please keep it short, max two lines.
      </p>
    </WizardDescription>
    <WizardSlot>
      <p>
        Slot Component
        <br />
        Placeholder area for Wizard content.
      </p>
    </WizardSlot>
    <WizardSlot>
      <p>
        Slot Component
        <br />
        Placeholder area for Wizard content.
      </p>
      <ButtonSet>
        <Button kind="tertiary" label="Button 1" />
        <Button kind="tertiary" label="Button 2" />
      </ButtonSet>
    </WizardSlot>
  </>
);

const successContent = (
  <>
    <WizardDescription>
      <p>
        Area reserved to give the user context of what is being asked, or shown.
        Please keep it short, max two lines.
      </p>
    </WizardDescription>
    <WizardSlot>
      <p>
        Slot Component
        <br />
        Placeholder area for Wizard content.
      </p>
    </WizardSlot>
    <WizardBtnGrp>This is a button group</WizardBtnGrp>
    <WizardSlotBtm>
      <p>Slot Component Success Bottom (Optional)</p>
    </WizardSlotBtm>
  </>
);

const errorContent = (
  <>
    <WizardDescription>
      <p>
        Area reserved to give the user context of what is being asked, or shown.
        Please keep it short, max two lines.
      </p>
    </WizardDescription>
    <WizardSlot>
      <p>
        Slot Component
        <br />
        Placeholder area for Wizard content.
      </p>
    </WizardSlot>
    <WizardBtnGrp>This is a button group</WizardBtnGrp>
  </>
);

const highlightContent = (
  <>
    <WizardDescription>
      <p>
        Area reserved to give the user context of what is being asked, or shown.
        Please keep it short, max two lines.
      </p>
    </WizardDescription>
    <WizardSlot>
      <p>
        Slot Component
        <br />
        Placeholder area for Wizard content.
      </p>
    </WizardSlot>
    <WizardBtnGrp>This is a button group</WizardBtnGrp>
  </>
);

const letsContinueContent = (
  <>
    <WizardSlot>
      <Text variant="p" marginBottom={3} inline={false}>
        Do you (or did you) have electric or gas service with Eversource?
      </Text>
      <ButtonSet>
        <Button kind="tertiary" label="Not Yet" />
        <Button kind="tertiary" label="Yes" />
      </ButtonSet>
    </WizardSlot>
  </>
);

export const Default = {
  args: {
    ...defaultArgs,
    children: defaultContent
  }
};

export const Success = {
  args: {
    ...defaultArgs,
    state: "success",
    children: successContent
  }
};

export const Error = {
  args: {
    ...defaultArgs,
    state: "error",
    children: errorContent
  }
};

export const Highlight = {
  args: {
    ...defaultArgs,
    state: "highlight",
    children: highlightContent
  }
};

export const LetsContinue = {
  args: {
    ...defaultArgs,
    headerTitle: "Let's Continue Your Online Set Up",
    state: "default",
    children: letsContinueContent
  }
};
