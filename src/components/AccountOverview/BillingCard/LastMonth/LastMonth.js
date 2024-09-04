import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../../../LanguageContext/LanguageContext";
import { TagCTA } from "../../../Tag/TagCTA";
import styles from "../BillingCard.module.scss";
import { billIcon } from "../Utils";

function LastMonth({
  type,
  prevPaymentAmt,
  prevPaymentDate,
  onClickPastBills
}) {
  const { lang } = useContext(LanguageContext);
  return (
    <header className={`${styles["last-month"]} ${styles[type]}`}>
      <div className={styles["col-info"]}>
        <h4>{lang("last.month.title")}</h4>
        <p
          aria-label={`${prevPaymentAmt} ${lang("text.paid")} ${prevPaymentDate}`}
        >
          {prevPaymentAmt} {lang("text.paid")} {prevPaymentDate}
        </p>
      </div>
      <div className={styles["col-cta"]}>
        <TagCTA
          renderIcon={billIcon}
          className={styles.tagcta}
          onClick={onClickPastBills}
          text={lang("past.bills.cta.label")}
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
