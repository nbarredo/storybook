import React from "react";
//import "../../App.scss";
import { Button } from "./index";

const meta = {
  title: "In Progress/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    label: {
      control: { type: "text" },
      defaultValue: "Submit",
      description: "Some text"
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" }
    },
    kind: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "ghost",
        "danger",
        "danger--tertiary",
        "danger--ghost",
        "path"
      ],
      control: {
        type: "select"
      }
    },
    type: {
      options: ["button", "submit", "reset"],
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
    },
    disabled: {
      options: [true, false],
      control: { type: "select" }
    }
  }
};

export default meta;

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});

Default.args = {
  disabled: false,
  label: "test"
};

export const Primary = {
  args: {
    ...Default.args,
    kind: "primary"
  }
};

export const Secondary = {
  args: {
    ...Default.args,
    kind: "secondary"
  }
};

export const Tertiary = {
  args: {
    ...Default.args,
    kind: "tertiary"
  }
};

export const Ghost = {
  args: {
    ...Default.args,
    kind: "ghost"
  }
};

export const Danger = {
  args: {
    ...Default.args,
    kind: "danger"
  }
};

export const Danger_Tertiary = {
  args: {
    ...Default.args,
    kind: "danger-tertiary"
  }
};

export const Danger_Ghost = {
  args: {
    ...Default.args,
    kind: "danger-ghost"
  }
};

export const Path = {
  args: {
    ...Default.args,
    kind: "path"
  }
};
