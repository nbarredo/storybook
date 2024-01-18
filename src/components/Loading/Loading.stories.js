import { Loading } from "./Loading";

const meta = {
  component: Loading,
  title: "Approved for Use/Loading",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/JewKs8uC7fp1AFHY5kApSG/One-Source-Components?type=design&node-id=482%3A21162&mode=design&t=gNQpqSQJ3zcvuiOF-1"
    },
    docs: {
      story: {
        inline: false,
        height: "400px"
      }
    }
  }
};

export default meta;

export const Default = {
  args: {
    active: true,
    description: "Loading...",
    small: false,
    withOverlay: false
  }
};

export const Small = {
  args: {
    ...Default.args,
    small: true
  }
};
