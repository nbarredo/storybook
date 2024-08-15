import TotalBalance from "./TotalBalance";

const meta = {
  title: "Delivery/Multi-Account Dashboard/TotalBalance",
  component: TotalBalance,
  argTypes: {
    onClick: { action: "clicked" },
    dueDate: { control: { type: "text" } }
  },
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bXF13WTZOM72lG35coDswz/Account-Overview-(Multi-%26-Single)---UI?node-id=2218-13437&t=pO2XzPyie353bzT4-4"
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

export const WithDueDate = {
  args: {
    title: "Total Balance",
    subtitle: "$1,375.11",
    buttonLabel: "Pay Multiple Bills",
    dueDate: "02/05/24"
  }
};
