import AddIcon from "@mui/icons-material/Add";
import { Button } from "./Button";

const meta = {
  title: "Approved for Use/Button",
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
      url: "https://www.figma.com/file/XV5UEMIBTZvKb1xg3YUyuM/Design-System---External?type=design&node-id=1%3A4388&mode=dev"
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
    type: "button"
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
