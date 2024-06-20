import { fn } from "@storybook/test";
import { AccountInfoCard } from "./AccountInfoCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Delivery/Account Overview/Account Info Card",
  component: AccountInfoCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
};

export default meta;
/*
const viewBillFn = () => {
  window.alert('clicked the "View Bill" button.');
};
const payBankFn = () => {
  window.alert('clicked the "Pay by Bank" button.');
};
const payCardFn = () => {
  window.alert('clicked the "Pay by Card" button.');
};

const pastBillsFn = () => {
  window.alert('clicked the "Past BIlls and Payments" button.');
};

const autopayFn = () => {
  window.alert('clicked the "Autopay" button.');
};

const pmtPlanFn = () => {
  window.alert('clicked the "Payment Plan" button.');
}; */

export const Default = {
  args: {
    type: "electric",
    hasAutopay: false,
    hasPaperless: false,
    hasOutageAlerts: false,
    showAutopayBtn: true,
    showPaperlessBtn: true,
    showOutageAlertsBtn: true,
    addresses: ["124 Main Street NH 120384"]
  }
};

export const MoreThanOneAddress = {
  args: {
    ...Default.args,
    addresses: [
      "124 Main Street NH 120384",
      "1600 Pennsylvania Avenue NW, Washington, DC 20500"
    ]
  }
};
