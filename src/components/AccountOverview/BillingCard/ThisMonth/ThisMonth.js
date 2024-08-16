import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../Button/Button";
import { TagCTA } from "../../../Tag/TagCTA";
import styles from "../BillingCard.module.scss";
import { PaymentOptions } from "../PaymentOptions/PaymentOptions";
import { autoPayIcon } from "../Utils";

function ThisMonth({
  status,
  currPaymentAmt,
  acctMessage,
  autoPayMessage,
  autoPayDate,
  pmtPlanMessage,
  onClickViewBill,
  onClickPayByBank,
  onClickPayByCard,
  onClickAutopay,
  onClickPmtPlan,
  onClickCteViewPayBtn,
  companyCode,
  isConnecticutCustomer
}) {
  const amountDue = () => {
    const symbol = currPaymentAmt.charAt(0);
    const amount = currPaymentAmt.substring(1);
    const values = amount.split(".");
    const integer = values[0];
    const fraction = values[1];
    return (
      <data
        value={currPaymentAmt}
        className={status === "credit" ? styles.credit : ""}
        aria-label={`${symbol}${integer}.${fraction}`}
      >
        <span className={styles.symbol}>{symbol}</span>
        <strong>{integer}</strong>
        <small>.{fraction}</small>
      </data>
    );
  };

  return (
    <div
      className={`${styles["this-month"]} ${styles[status]} ${companyCode === "CTE" ? styles.cte : ""}`}
    >
      <h4>This Month</h4>
      <aside className={`${styles[status]}`}>
        {amountDue()}
        {acctMessage}
        {status === "hasAutoPay" && (
          <TagCTA
            className={styles["auto-pay-cta"]}
            onClick={onClickAutopay}
            text={`Autopay ${autoPayMessage} ${autoPayDate}`}
            theme="blue"
            renderIcon={autoPayIcon}
          />
        )}
        {status === "hasPmtPlan" && (
          <TagCTA
            className={styles["pmt-plan-cta"]}
            onClick={onClickPmtPlan}
            text={pmtPlanMessage}
            theme="blue"
          />
        )}
      </aside>
      <PaymentOptions
        status={status}
        onClickViewBill={onClickViewBill}
        onClickPayByBank={onClickPayByBank}
        onClickPayByCard={onClickPayByCard}
        onClickCteViewPayBtn={onClickCteViewPayBtn}
        companyCode={companyCode}
      />
      {status === "hasAutoPay" && (
        <p className={styles["autopay-message"]}>
          Making another payment now might result in duplicate payment.
        </p>
      )}
      {status !== "hasAutoPay" && !isConnecticutCustomer() && (
        <Button
          className={styles["view-bill-button"]}
          kind="ghost"
          label="View Bill"
          onClick={onClickViewBill}
          size="md"
          type="button"
          fullWidth
        />
      )}
    </div>
  );
}

export { ThisMonth };

ThisMonth.propTypes = {
  status: PropTypes.oneOf([
    "pmtDue",
    "pmtOverdue",
    "finalBill",
    "nothingDue",
    "credit",
    "hasAutoPay",
    "hasPmtPlan"
  ]).isRequired,
  currPaymentAmt: PropTypes.string.isRequired,
  acctMessage: PropTypes.string.isRequired,
  autoPayMessage: PropTypes.string,
  pmtPlanMessage: PropTypes.string,
  autoPayDate: PropTypes.string,
  onClickViewBill: PropTypes.func,
  onClickPayByBank: PropTypes.func,
  onClickPayByCard: PropTypes.func,
  onClickAutopay: PropTypes.func,
  onClickPmtPlan: PropTypes.func,
  onClickCteViewPayBtn: PropTypes.func,
  companyCode: PropTypes.string,
  isConnecticutCustomer: PropTypes.func
};
