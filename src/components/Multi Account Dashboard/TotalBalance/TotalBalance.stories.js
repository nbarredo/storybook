import { TotalBalance } from "./TotalBalance";

const meta = {
  title: "In Progress/Multi-Account Dashboard/TotalBalance",
  component: TotalBalance
};

export default meta;

export const Default = {
  args: {
    kind: "warning",
    title: "Total Balance",
    subtitle: "$1,375.11",
    role: "status",
    hideCloseButton: true,
    buttonLabel: "Pay Multiple Bills"
  }
};
