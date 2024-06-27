import AddIcon from "@mui/icons-material/Add";
import { Button } from "./Button";

const meta = {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    type: {
      options: ["button", "submit", "reset"],
      defaultValue: "button",
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/JewKs8uC7fp1AFHY5kApSG/One-Source-Components?type=design&node-id=361%3A5989&mode=design&t=QGTtgyV204Ro5R1a-1"
    }
  }
};

export default meta;

export const Default = {
  args: {
    size: "lg",
    disabled: false,
    label: "Button",
    kind: "primary",
    type: "button",
    fullWidth: false,
    id: "test",
    ariaLabelledBy: ""
  }
};

export const WithIcon = {
  args: {
    ...Default.args,
    renderIcon: AddIcon
  }
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
    onClick: () => {
      window.alert("Button was clicked.");
    }
  }
};
