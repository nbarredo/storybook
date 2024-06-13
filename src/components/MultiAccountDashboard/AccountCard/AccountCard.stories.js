import { AccountCard } from "./AccountCard";

const meta = {
  title: "In Progress/Multi-Account Dashboard/AccountCard",
  component: AccountCard,
  argTypes: {
    onClick: { action: "clicked" }
  },
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bXF13WTZOM72lG35coDswz/Account-Dashboard-(Account-Overview)---UI?type=design&node-id=1059%3A6170&mode=design&t=3mMpsdnrh1Cv9mQa-1"
    }
  }
};

export default meta;

export const Default = {
  args: {
    acctType: "electric",
    status: "default",
    alertText: "Warning message appears here",
    mobileCTAType: "paperless",
    acctDetailsURL: "http://www.yahoo.com",
    compact: false,
    hasAutopay: true,
    hasPaperless: false,
    showAutopayBtn: true,
    showPaperlessBtn: true,
    data: {
      totalDue: "$900,853.02",
      dateDue: "02/06/23",
      acctID: "12345678987",
      address: "124 Main Street NH 120384"
    }
  }
};

export const WithNickname = {
  args: {
    ...Default.args,
    data: {
      ...Default.args.data,
      acctID: "Condominium"
    }
  }
};

export const AccountClosed = {
  args: {
    ...Default.args,
    status: "closed"
  }
};

export const PaperlessButtonHidden = {
  args: {
    ...Default.args,
    showPaperlessBtn: false
  }
};

export const AutopayButtonHidden = {
  args: {
    ...Default.args,
    showAutopayBtn: false
  }
};
