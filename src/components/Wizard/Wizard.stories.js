import React from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HelpIcon from "@mui/icons-material/Help";
import { Accordion } from "../Accordion/Accordion";
import image from "../Accordion/art_acct_number.png";
import { Button } from "../Button/Button";
import { ButtonSet } from "../ButtonSet/ButtonSet";
import { Text } from "../Text/Text";
import { TextInput } from "../TextInput/TextInput";
import { Wizard } from "./Wizard";
import {
  WizardBtnGrp,
  WizardDescription,
  WizardSlot,
  WizardSlotBtm
} from "./children";

export default {
  title: "Approved for Use/Wizard",
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
        We are unable to process your request. Please try again. If the problem
        persists, please <a href="#">contact us</a> for assistance.
      </p>
    </WizardDescription>
    <ButtonSet align="right">
      <Button kind="ghost--subtle" label="Cancel" />
      <Button kind="tertiary" label="Try Again" />
    </ButtonSet>
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
      <center>
        <Text variant="p" marginBottom={4} inline={false} className="test">
          Do you (or did you) have electric or gas service with Eversource?
        </Text>
      </center>
      <ButtonSet>
        <Button kind="tertiary" label="Not Yet" />
        <Button kind="tertiary" label="Yes" />
      </ButtonSet>
    </WizardSlot>
  </>
);

const accountInformationContent = (
  <>
    <WizardSlot>
      <form style={{ width: "250px" }}>
        <TextInput
          labelText="Account Number"
          invalidText="Must be 11 digits"
          inline={false}
          maxCount={11}
          helperText="Account numbers are 11 digits"
          placeholder=""
          size="lg"
          type="number"
          id="test-id"
        />
      </form>
    </WizardSlot>
    <Accordion title="Where do I find my account number?" icon={<HelpIcon />}>
      <>
        <p>
          Account numbers are on your bill. Contact{" "}
          <a href="#">customer service</a> for help if you don&#apos;t yet have
          a bill.
        </p>
        <br />
        <img src={image} />
      </>
    </Accordion>
    <Accordion
      title="Which ID # are you looking for?"
      icon={<ContactMailIcon />}
    />
    <ButtonSet align="right" fixedSize={false}>
      <Button kind="ghost" label="Back" />
      <Button kind="tertiary" label="Continue" />
    </ButtonSet>
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
    headerTitle: "There Was A Problem",
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

export const AccountInformation = {
  args: {
    ...defaultArgs,
    headerTitle: "Account Information",
    state: "default",
    children: accountInformationContent
  }
};
