import React from "react";
import PropTypes from "prop-types";
import styles from "./BillingCard.module.scss";
import { LastMonth } from "./LastMonth/LastMonth";
import { ThisMonth } from "./ThisMonth/ThisMonth";

function BillingCard({ data }) {
  const isConnecticutCustomer = () => {
    if (data.companyCode === "CTE" || data.companyCode === "CTG") return true;
    return false;
  };
  return (
    <section className={`${styles["billing-card"]} ${styles[data.type]}`}>
      <LastMonth
        type={data.type}
        prevPaymentAmt={data.prevPaymentAmt}
        prevPaymentDate={data.prevPaymentDate}
        onClickPastBills={data.onClickPastBills}
      />
      <ThisMonth
        status={data.status}
        currPaymentAmt={data.currPaymentAmt}
        acctMessage={data.acctMessage}
        autoPayDate={data.autoPayDate}
        autoPayMessage={data.autoPayMessage}
        pmtPlanMessage={data.pmtPlanMessage}
        onClickViewBill={data.onClickViewBill}
        onClickPayByBank={data.onClickPayByBank}
        onClickPayByCard={data.onClickPayByCard}
        onClickAutopay={data.onClickAutopay}
        onClickPmtPlan={data.onClickPmtPlan}
        onClickCteViewPayBtn={data.onClickCteViewPayBtn}
        companyCode={data.companyCode}
        isConnecticutCustomer={isConnecticutCustomer}
      />
    </section>
  );
}

export { BillingCard };

BillingCard.propTypes = {
  /** The data object that must be passed to the BillingCard */
  data: PropTypes.exact({
    type: PropTypes.oneOf(["electric", "gas", "unknown"]),
    status: PropTypes.oneOf([
      "pmtDue",
      "pmtOverdue",
      "finalBill",
      "nothingDue",
      "credit",
      "hasAutoPay",
      "hasPmtPlan"
    ]),
    autoPayMessage: PropTypes.string,
    autoPayDate: PropTypes.string,
    pmtPlanMessage: PropTypes.string,
    prevPaymentAmt: PropTypes.string,
    prevPaymentDate: PropTypes.string,
    currPaymentAmt: PropTypes.string,
    acctMessage: PropTypes.string,
    onClickViewBill: PropTypes.func,
    onClickPayByBank: PropTypes.func,
    onClickPayByCard: PropTypes.func,
    onClickPastBills: PropTypes.func,
    onClickAutopay: PropTypes.func,
    onClickPmtPlan: PropTypes.func,
    onClickCteViewPayBtn: PropTypes.func,
    companyCode: PropTypes.string
  }).isRequired
};
