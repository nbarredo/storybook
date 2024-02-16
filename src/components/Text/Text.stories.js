import { Text } from "./Text";

const colors = {
  black: "#000",
  white: "#fff",

  // -------- Gray --------
  "gray-00": "#f9fafb",
  "gray-10": "#f0f3f5",
  "gray-20": "#dee5e8",
  "gray-30": "#c1d0d7",
  "gray-40": "#a2b9c3",
  "gray-50": "#7493a4",
  "gray-60": "#4c6e80",
  "gray-70": "#415c6c",
  "gray-80": "#2f4656",
  "gray-90": "#223849",
  "gray-100": "#12202b",

  // --------- Blue ---------
  "blue-00": "#f2fbff",
  "blue-10": "#cbefff",
  "blue-20": "#a4e3ff",
  "blue-30": "#7dd8ff",
  "blue-40": "#55ccff",
  "blue-50": "#1ab0ff",
  "blue-60": "#068bdb",
  "blue-70": "#006db3",
  "blue-80": "#00538c",
  "blue-90": "#033f6d",
  "blue-100": "#002440",

  // -------- Teal --------
  "teal-00": "#f2ffff",
  "teal-10": "#ccf3f3",
  "teal-20": "#a8e6e7",
  "teal-30": "#89d8db",
  "teal-40": "#6ccbcf",
  "teal-50": "#40b0b7",
  "teal-60": "#23969f",
  "teal-70": "#117d87",
  "teal-80": "#076670",
  "teal-90": "#024f58",
  "teal-100": "#003940",

  // -------- Yellow --------
  "yellow-00": "#fffae0",
  "yellow-10": "#fdf09b",
  "yellow-20": "#f8e66d",
  "yellow-30": "#f4dc57",
  "yellow-40": "#efd139",
  "yellow-50": "#efc525",
  "yellow-60": "#e1b714",
  "yellow-70": "#d7ac0e",
  "yellow-80": "#bd9d01",
  "yellow-90": "#a79301",
  "yellow-100": "#847201",

  // -------- Red --------
  "red-00": "#fff4f2",
  "red-10": "#fdd9d4",
  "red-20": "#fabfb6",
  "red-30": "#f6a699",
  "red-40": "#f28e7e",
  "red-50": "#e5664f",
  "red-60": "#d1472d",
  "red-70": "#b63017",
  "red-80": "#942009",
  "red-90": "#6f1402",
  "red-100": "#4d0d00",

  // -------- Green --------
  "green-00": "#f2fffa",
  "green-10": "#c8f9e6",
  "green-20": "#95f3d0",
  "green-30": "#6cefbd",
  "green-40": "#3ae9a6",
  "green-50": "#16ca85",
  "green-60": "#0dab6e",
  "green-70": "#058554",
  "green-80": "#007045",
  "green-90": "#005a38",
  "green-100": "#004027",

  // --------- Bright Green ---------
  "bright-green-00": "#f2fff2",
  "bright-green-10": "#cdf9d0",
  "bright-green-20": "#a3f5ae",
  "bright-green-30": "#7af093",
  "bright-green-40": "#51e679",
  "bright-green-50": "#20cb5e",
  "bright-green-60": "#15ac50",
  "bright-green-70": "#09863a",
  "bright-green-80": "#077331",
  "bright-green-90": "#016025",
  "bright-green-100": "#00400e",

  // -------- Orange --------
  "orange-00": "#fff9f2",
  "orange-10": "#fee4cd",
  "orange-20": "#fdd0a9",
  "orange-30": "#fabc85",
  "orange-40": "#fba85f",
  "orange-50": "#eb8b2e",
  "orange-60": "#d97008",
  "orange-70": "#b85300",
  "orange-80": "#984400",
  "orange-90": "#713300",
  "orange-100": "#4d2300",

  // -------- Pink --------
  "pink-00": "#fffafe",
  "pink-10": "#fcd9f4",
  "pink-20": "#fac6ed",
  "pink-30": "#f8afe4",
  "pink-40": "#f7a1de",
  "pink-50": "#ea7bc6",
  "pink-60": "#da5aae",
  "pink-70": "#be4091",
  "pink-80": "#982c70",
  "pink-90": "#6b1f4e",
  "pink-100": "#431331",

  // -------- Purple --------
  "purple-00": "#f5f2ff",
  "purple-10": "#e2dafb",
  "purple-20": "#cec2f7",
  "purple-30": "#bcabf3",
  "purple-40": "#aa95ef",
  "purple-50": "#9174e8",
  "purple-60": "#815adf",
  "purple-70": "#7846d1",
  "purple-80": "#6c32b2",
  "purple-90": "#502371",
  "purple-100": "#440154"
};

export default {
  title: "In Progress/Text",
  component: Text,
  argTypes: {
    color: {
      options: Object.keys(colors),
      mapping: Object.keys(colors),
      control: { type: "select" }, // The input type we want to use for our control
      description: "Color of logos to be displayed" // A descripton of what this control does
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
