import React from "react";
import {
  ArgsTable,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title
} from "@storybook/addon-docs";
import { LanguageTable } from "../../../stories/custom_story_blocks";
import { LanguageContextProvider } from "../../LanguageContext/LanguageContext";
import { Text } from "../../Text/Text";
import { AccountCard } from "./AccountCard";
import data from "./lang.json";

const meta = {
  title: "Delivery/Multi-Account Dashboard/AccountCard",
  component: AccountCard,
  decorators: [
    (Story) => (
      <LanguageContextProvider data={data}>
        <Story />
      </LanguageContextProvider>
    )
  ],
  argTypes: {
    onClick: { action: "clicked" }
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          {LanguageTable(data)}
          <Primary />
          <ArgsTable />
          <Stories />
        </>
      )
    },
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bXF13WTZOM72lG35coDswz/Account-Overview-(Multi-%26-Single)---UI?node-id=1059-6171&t=pO2XzPyie353bzT4-4"
    }
  }
};

export default meta;

const cardBodyClickFn = () => {
  window.alert(
    "Card body was clicked.  Redirect the user to the account details screen."
  );
};

const autopayClickFn = () => {
  window.alert("Autopay button was clicked.");
};

const paperlessClickFn = () => {
  window.alert("Paperless button was clicked.");
};

const pastBillsClickFn = () => {
  window.alert("Past Bills & Payments link was clicked.");
};

const usageHistoryClickFn = () => {
  window.alert("Usege History link was clicked.");
};

const ChildCard = {
  status: "nothingDue",
  type: "electric",
  cardStyle: "info",
  alertText:
    "This account is part of a collective account and cannot be paid individually. ",
  mobileCTAType: "none",
  acctDetailsURL: "http://www.yahoo.com",
  compact: true,
  hasAutopay: false,
  hasPaperless: false,
  showAutopayBtn: false,
  showPaperlessBtn: false,
  isConnecticut: false,
  totalDue: "$135.11",
  dateDue: "02/06/23",
  acctID: 12345678987,
  address: "124 Main Street NH 120384",
  navigationLinkLbl: "Usage History",
  onCardBodyClick: cardBodyClickFn,
  onClickAutopay: autopayClickFn,
  onClickPaperless: paperlessClickFn,
  onClickNavigate: usageHistoryClickFn
};

export const Default = {
  args: {
    status: "nothingDue",
    type: "electric",
    cardStyle: "default",
    alertText: "Warning message appears here",
    mobileCTAType: "paperless",
    acctDetailsURL: "http://www.yahoo.com",
    compact: false,
    hasAutopay: true,
    hasPaperless: false,
    showAutopayBtn: true,
    showPaperlessBtn: true,
    isConnecticut: false,
    totalDue: "$900,853.02",
    dateDue: "02/06/23",
    acctID: 12345678987,
    address: "124 Main Street NH 120384",
    navigationLinkLbl: "Acct Details",
    onCardBodyClick: cardBodyClickFn,
    onClickAutopay: autopayClickFn,
    onClickPaperless: paperlessClickFn,
    onClickNavigate: pastBillsClickFn
  }
};

export const WithNickname = {
  args: {
    ...Default.args,
    acctID: "Condominium"
  }
};

export const AccountClosed = {
  args: {
    ...Default.args,
    cardStyle: "closed"
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

export const PaymentDue = {
  name: "Status: Payment Due",
  args: {
    ...Default.args,
    status: "pmtDue"
  }
};

export const PaymentOverdue = {
  name: "Status: Payment Overdue",
  args: {
    ...Default.args,
    alertText:
      "Our records show that your service has been shut off for nonpayment.  If you are successful in Our records show that your service has been shut off for nonpayment.  If you are successful in Our records show that your service has been shut off for nonpayment.  If you are successful in ",
    status: "pmtOverdue",
    cardStyle: "danger"
  }
};

export const FinalBill = {
  name: "Status: Final Bill",
  args: {
    ...Default.args,
    status: "finalBill",
    cardStyle: "warning",
    alertText: "This balance reflects your final bill."
  }
};

export const NothingDue = {
  name: "Status: Nothing Due",
  args: {
    ...Default.args,
    status: "nothingDue",
    totalDue: "$0.00",
    dateDue: null
  }
};

export const Credit = {
  name: "Status: Credit",
  args: {
    ...Default.args,
    status: "credit",
    cardStyle: "info",
    alertText: "The credit for $45.37 will be applied to your next bill.",
    totalDue: "$45.37",
    dateDue: null
  }
};

export const IsParent = {
  name: "Type: Merged/Parent",
  args: {
    ...Default.args,
    type: "merged",
    mobileCTAType: "none",
    totalDue: "$115.25"
  }
};

export const MergedAccountSamplePageLayout = {
  decorators: [
    (Story) => (
      <>
        <Text size="1" weight="reg" marginBottom={6}>
          This story demonstrates what the dashboard could look like with a
          parent/merged/main account and its child accounts. Note that final
          padding and spacing between the cards will be determined by the
          consuming application.
        </Text>
        <Story
          args={{ ...Default.args, type: "merged", mobileCTAType: "none" }}
        />
        <br />
        <AccountCard {...ChildCard} />
        <br />
        <AccountCard {...ChildCard} />
        <br />
        <AccountCard {...ChildCard} />
      </>
    )
  ],
  args: {
    ...Default.args
  }
};
