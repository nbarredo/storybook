import AddIcon from "@mui/icons-material/Add";
import { TagCTA } from "./TagCTA";

const meta = {
  title: "Approved for Use/Tags/Interactive Tag",
  component: TagCTA,
  argTypes: {
    onClick: { action: "clicked" }
  },
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
    text: "Lorem ipsum",
    theme: "default"
  }
};

export const WithIcon = {
  args: {
    ...Default.args,
    renderIcon: AddIcon
  }
};
