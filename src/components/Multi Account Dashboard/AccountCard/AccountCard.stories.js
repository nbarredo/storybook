import { AccountCard } from "./AccountCard";

const meta = {
  title: "In Progress/Multi-Account Dashboard/AccountCard",
  component: AccountCard,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bXF13WTZOM72lG35coDswz/Account-Dashboard-(Account-Overview)---UI?type=design&node-id=560%3A6799&mode=design&t=ieaKzasMCaSbwME9-1"
    }
  }
};

export default meta;

export const Default = {
  args: {
    acctType: "electric",
    status: "default",
    alertText: "Warning message appears here",
    data: {
      totalDue: "$9,900,853.02",
      dateDue: "02/06/23"
    }
  }
};
