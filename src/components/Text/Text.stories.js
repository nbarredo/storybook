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
      type: "link",
      url: "https://zeroheight.com/95a80ce17/p/277096-typography/b/25d187"
    }
  }
};

export const Default = {
  args: {
    children: "Sample Text",
    inline: true,
    size: "2",
    weight: "reg",
    color: "gray-70",
    ariaHidden: false
  }
};
