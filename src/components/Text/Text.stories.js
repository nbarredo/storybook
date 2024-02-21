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
      description: "The color in which the text will be displayed" // A description of what this control does
    },
    size: {
      options: [
        "00",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11"
      ],
      control: {
        type: "select",
        labels: {
          "00": "00 (10px)",
          0: "0 (12px)",
          1: "1 (14px)",
          2: "2 (16px)",
          3: "3 (18px)",
          4: "4 (20px)",
          5: "5 (24px)",
          6: "6 (28px)",
          7: "7 (32px)",
          8: "8 (36px)",
          9: "9 (42px)",
          10: "10 (48px)",
          11: "11 (54px)"
        }
      }
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
