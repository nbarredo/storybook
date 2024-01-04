import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "./index";

const meta = {
  title: "In Progress/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    type: {
      options: ["button", "submit", "reset"],
      defaultValue: "button",
      control: {
        type: "select"
      }
    },
    iconPosition: {
      options: ["before", "after"],
      defaultValue: "after",
      control: {
        type: "radio"
      }
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/XV5UEMIBTZvKb1xg3YUyuM/Design-System---External?type=design&node-id=1%3A4388&mode=dev"
    }
  }
};

export default meta;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  label: "Button"
};

export const WithIcon = {
  args: {
    ...Default.args,
    renderIcon: AddIcon
  }
};
/*
export const Path = {
  args: {
    ...Default.args,
    kind: "path"
  }
}; */
