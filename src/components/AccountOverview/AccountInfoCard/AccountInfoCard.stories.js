import { fn } from "@storybook/test";
import { AccountInfoCard } from "./AccountInfoCard";
import { fuelAssistanceIcon, winterProtectionIcon } from "./Icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Delivery/Account Overview/Account Info Card",
  component: AccountInfoCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bXF13WTZOM72lG35coDswz/Account-Overview-(Multi-%26-Single)---UI?node-id=2590-32336&t=8QmL13IFudKD5XbE-4"
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
};

export default meta;
const outageAlertsFn = () => {
  window.alert('clicked the "Outage Alerts" button.');
};

const autopayFn = () => {
  window.alert('clicked the "Autopay" button.');
};

const goPaperlessFn = () => {
  window.alert('clicked the "Go Paperless" button.');
};

const supplierCtaFn = (e) => {
  e.preventDefault();
  window.alert("clicked the Supplier CTA.");
};
const basicCtaFn = (e) => {
  e.preventDefault();
  window.alert("clicked the Basic Info CTA.");
};

export const Default = {
  args: {
    acctID: 12345678987,
    addresses: ["124 Main Street NH 120384"],
    forceCollapsible: false,
    hasAutopay: false,
    hasOutageAlerts: false,
    hasPaperless: false,
    onClickAutopay: autopayFn,
    onClickBasicCta: basicCtaFn,
    onClickOutageAlerts: outageAlertsFn,
    onClickPaperless: goPaperlessFn,
    onClickSupplierCta: supplierCtaFn,
    outageAlertLabel: "Outage Alerts",
    programs: [
      {
        id: 1,
        name: "Winter Protection",
        description:
          "You're in this program which prevents service from being shut off from Nov. 1 to May 1 with no late payment charges.",
        icon: winterProtectionIcon,
        theme: "purple"
      },
      {
        id: 2,
        name: "Fuel Assistance",
        description:
          "You're enrolled in this program that helps pay a portion of your winter heating bills.",
        icon: fuelAssistanceIcon,
        theme: "purple"
      }
    ],
    showAutopayBtn: true,
    showBasicInfo: true,
    showOutageAlertsBtn: true,
    showPaperlessBtn: true,
    showProgramsInfo: true,
    showSupplierInfo: true,
    supplier: "Third party supplier",
    type: "electric"
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

export const OnlyOneProgram = {
  args: {
    ...Default.args,
    programs: [
      {
        id: 1,
        name: "Winter Protection",
        description:
          "You're in this program which prevents service from being shut off from Nov. 1 to May 1 with no late payment charges.",
        icon: winterProtectionIcon,
        theme: "purple"
      }
    ]
  }
};
