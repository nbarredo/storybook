import { fn } from "@storybook/test";
import { BillingCard } from "./BillingCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Delivery/Account Overview/Billing Card",
  component: BillingCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
};

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
      autoPayMessage: "scheduled for",
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
