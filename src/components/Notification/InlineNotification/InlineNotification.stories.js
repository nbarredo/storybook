import { InlineNotification } from "./InlineNotification";

const meta = {
  title: "Design System/Notification/InlineNotification",
  component: InlineNotification,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/JewKs8uC7fp1AFHY5kApSG/One-Source-Components?node-id=0-2378"
    }
  }
};

export default meta;

export const Default = {
  args: {
    kind: "warning",
    title: "Notification Title",
    subtitle: "Notification Subtitle",
    role: "status",
    hideCloseButton: true
  }
};
