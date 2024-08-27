import React from "react";
import {
  ArgsTable,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title
} from "@storybook/addon-docs";
import { fn } from "@storybook/test";
import { LanguageTable } from "../../../stories/custom_story_blocks";
import { LanguageContextProvider } from "../../LanguageContext/LanguageContext";
import { BillingCard } from "./BillingCard";
import data from "./lang.json";

const meta = {
  title: "Delivery/Account Overview/Billing Card",
  component: BillingCard,
  decorators: [
    (Story) => (
      <LanguageContextProvider data={data}>
        <Story />
      </LanguageContextProvider>
    )
  ],
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
      url: "https://www.figma.com/file/bXF13WTZOM72lG35coDswz/Account-Overview-(Multi-%26-Single)---UI?node-id=2541-24332&t=rjgkIPmESiIYK7bX-4"
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
};

export default meta;

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
};

const viewAndPayFn = () => {
  window.alert('clicked the "View & Pay Bill" button.');
};

export const StatusPaymentDue = {
  args: {
    data: {
      type: "electric",
      status: "pmtDue",
      autoPayMessage: null,
      autoPayDate: null,
      prevPaymentAmt: "$271.03",
      prevPaymentDate: "02/04/23",
      currPaymentAmt: "$304.14",
      acctMessage: "Due 03/06/24",
      onClickViewBill: viewBillFn,
      onClickPayByBank: payBankFn,
      onClickPayByCard: payCardFn,
      onClickPastBills: pastBillsFn,
      onClickAutopay: autopayFn,
      onClickPmtPlan: pmtPlanFn
    }
  }
};

export const StatusPaymentOverdue = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      status: "pmtOverdue"
    }
  }
};

export const StatusFinalBill = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      status: "finalBill",
      acctMessage: "This balance reflects your final bill"
    }
  }
};

export const StatusNothingDue = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      status: "nothingDue",
      currPaymentAmt: "$0.00",
      prevPaymentAmt: "$123.00",
      acctMessage: "Payment of $123.00 received"
    }
  }
};

export const StatusCredit = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      status: "credit",
      acctMessage: "Credit applied to next bill, no payment due"
    }
  }
};

export const TypeElectric = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      type: "electric"
    }
  }
};

export const TypeGas = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      type: "gas"
    }
  }
};

export const TypeUnknown = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      type: "unknown"
    }
  }
};

export const HasAutoPay = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      status: "hasAutoPay",
      autoPayMessage:
        "Making another payment now might result in duplicate payment.",
      autoPayDate: "01/06/24"
    }
  }
};

export const HasPaymentPlan = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      status: "hasPmtPlan",
      pmtPlanMessage: "On a Payment Plan"
    }
  }
};

export const ConnecticutUser = {
  args: {
    data: {
      ...StatusPaymentDue.args.data,
      companyCode: "CTE",
      onClickCteViewPayBtn: viewAndPayFn
    }
  }
};
