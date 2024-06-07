import React from "react";
import PropTypes from "prop-types";
import { TagCTA } from "../../Tag/TagCTA";
import styles from "./BillingCard.module.scss";
import { billIcon } from "./Utils";

function LastMonth({
  type,
  prevPaymentAmt,
  prevPaymentDate,
  onClickPastBills
}) {
  return (
    <header className={`${styles["last-month"]} ${styles[type]}`}>
      <div className={styles["col-info"]}>
        <h4>Last Month</h4>
        <p aria-label={`${prevPaymentAmt} paid ${prevPaymentDate}`}>
          {prevPaymentAmt} paid {prevPaymentDate}
        </p>
      </div>
      <div className={styles["col-cta"]}>
        <TagCTA
          renderIcon={billIcon}
          className={styles.tagcta}
          onClick={onClickPastBills}
          text="Past Bills & Payments"
          theme="blue"
        />
      </div>
    </header>
  );
}

export { LastMonth };

LastMonth.propTypes = {
  type: PropTypes.oneOf(["electric", "gas", "unknown"]).isRequired,
  prevPaymentAmt: PropTypes.string.isRequired,
  prevPaymentDate: PropTypes.string.isRequired,
  onClickPastBills: PropTypes.func.isRequired
};
