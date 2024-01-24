import { TextInput } from "./TextInput";

const meta = {
  title: "In Progress/TextInput",
  component: TextInput,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/JewKs8uC7fp1AFHY5kApSG/One-Source-Components?type=design&node-id=429%3A12390&mode=dev"
    }
  }
};

export default meta;

export const Default = {
  args: {
    placeholder: "Placeholder Text",
    labelText: "Input Field Label",
    defaultValue: "Delete this text to view the placeholder",
    size: "md",
    id: "test-id",
    helperText: "Helper text goes here"
  }
};
