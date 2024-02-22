import { Tag } from "./Tag";

const meta = {
  title: "Approved for Use/Tag",
  component: Tag,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/JewKs8uC7fp1AFHY5kApSG/One-Source-Components?type=design&node-id=1547-1297&mode=design&t=OsGPiExVR0AP7An0-0"
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
    helperText: "Helper text goes here",
    invalid: false,
    invalidText: "Please enter a valid zip code",
    disabled: false
  }
};
