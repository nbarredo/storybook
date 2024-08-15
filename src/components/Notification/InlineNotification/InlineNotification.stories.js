import { InlineNotification } from "./InlineNotification";

const meta = {
  title: "Design System/Notification/InlineNotification",
  component: InlineNotification,
  parameters: {
    layout: "fullscreen"
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
