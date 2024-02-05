import { TotalBalance } from "./TotalBalance";

const meta = {
  title: "In Progress/Multi-Account Dashboard/TotalBalance",
  component: TotalBalance,
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
    title: "Total Balance",
    subtitle: "$1,375.11",
    buttonLabel: "Pay Multiple Bills"
  }
};
