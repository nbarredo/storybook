import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Tag } from "./Tag";

const meta = {
  title: "Approved for Use/Tags/Simple Tag",
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
    text: "Lorem ipsum",
    theme: "default",
    showIcon: false
  }
};

export const WithDefaultIcon = {
  args: {
    ...Default.args,
    showIcon: true
  }
};

export const WithCustomIcon = {
  args: {
    ...Default.args,
    showIcon: true,
    renderIcon: ChildCareIcon
  }
};
