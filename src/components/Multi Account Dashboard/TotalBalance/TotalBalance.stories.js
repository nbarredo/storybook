import { TotalBalance } from "./TotalBalance";

const meta = {
  title: "In Progress/Multi-Account Dashboard/TotalBalance",
  component: TotalBalance,
  argTypes: { onClick: { action: "clicked" } }
};

export default meta;

export const Default = {
  args: {
    title: "Total Balance",
    subtitle: "$1,375.11",
    buttonLabel: "Pay Multiple Bills"
  }
};
