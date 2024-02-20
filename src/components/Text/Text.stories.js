import { ColorPalette } from "../../utils/ColorPalette";
import { Text } from "./Text";

export default {
  title: "In Progress/Text",
  component: Text,
  argTypes: {
    color: {
      options: Object.keys(ColorPalette),
      mapping: Object.keys(ColorPalette),
      control: { type: "select" }, // The input type we want to use for our control
      description: "Color of logos to be displayed" // A descripton of what this control does
    }
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/l9Q7DtqQtkUePUraGXaUmK/One-Source-Foundations?type=design&node-id=842-2221&mode=design&t=Ewf8yIlxUvXLEFih-0"
    }
  }
};

export const Default = {
  args: {
    children: "Sample Text",
    ariaHidden: false,
    weight: "reg"
  }
};
