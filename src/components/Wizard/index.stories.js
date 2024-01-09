import React from "react";

import { Wizard } from ".";

import {
  WizardDescription,
  WizardSlot,
  WizardBtnGrp,
  WizardSlotBtm
} from "./childrens";

const meta = {
  title: "Approved/Wizard",
  component: Wizard,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ZCq6KsxrKb6WYU4XceP3ef/Add-Account--UI?type=design&node-id=1782%3A10843&mode=design&t=OMCwYpURvNaoG5qA-1"
    }
  }
};

export default meta;

// const Template = (args) => <Wizard {...args}/>;
// export const Default = Template.bind({});

// Default.args = {
//     open: true,
//     state: 'wizard-default',
// }

export const Test = {
  args: {
    open: true,
    state: "c-wizard--default"
  },
  render: (args) => (
    <Wizard {...args}>
      <WizardDescription>
        <p>
          Area reserved to give the user context of what is being asked, or
          shown. Please keep it short, max two lines.
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
      </WizardSlot>
      <WizardBtnGrp>This is a button group</WizardBtnGrp>
    </Wizard>
  )
};

export const Success = {
  args: {
    open: true,
    state: "c-wizard--success"
  },
  render: (args) => (
    <Wizard {...args}>
      <WizardDescription>
        <p>
          Area reserved to give the user context of what is being asked, or
          shown. Please keep it short, max two lines.
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
    </Wizard>
  )
};

export const Error = {
  args: {
    open: true,
    state: "c-wizard--error"
  },
  render: (args) => (
    <Wizard {...args}>
      <WizardDescription>
        <p>
          Area reserved to give the user context of what is being asked, or
          shown. Please keep it short, max two lines.
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
    </Wizard>
  )
};

export const Highlight = {
  args: {
    open: true,
    state: "c-wizard--highlight"
  },
  render: (args) => (
    <Wizard {...args}>
      <WizardDescription>
        <p>
          Area reserved to give the user context of what is being asked, or
          shown. Please keep it short, max two lines.
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
    </Wizard>
  )
};
