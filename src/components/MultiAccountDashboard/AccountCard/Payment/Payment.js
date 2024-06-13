import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../Button/Button";
import { Text } from "../../../Text/Text";
import styles from "./Payment.module.scss";

export default function Payment({
  cardStyle = "default",
  totalDue,
  dateDue,
  onClickPayBill,
  status
}) {
  return (
    <aside className={styles["payment-area"]}>
      <div
        className={`${styles["total-due"]} ${cardStyle === "danger" ? styles.danger : ""} ${styles[status]}`}
        onClick={onClickPayBill}
      >
        <Text color="gray-60" size="2" weight="semi" inline={true}>
          <strong className={status === "credit" ? styles.credit : ""}>
            {totalDue}
          </strong>
          {dateDue && <span className={styles["due-date"]}>Due {dateDue}</span>}
        </Text>
      </div>
      <div className={styles["button-container"]}>
        <Button
          onClick={onClickPayBill}
          kind="tertiary"
          label="Pay Bill"
          size="sm"
          type="button"
        />
      </div>
    </aside>
  );
}

export { Payment };

Payment.propTypes = {
  /** Specify what should occur when the "Pay Bill" button is clicked */
  onClickPayBill: PropTypes.func,
  /** Indicates which card style/layout should be used. "Warning" and "danger" styles will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  cardStyle: PropTypes.oneOf(["default", "warning", "danger"]),
  totalDue: PropTypes.string,
  dateDue: PropTypes.string,
  /** Indicates the billing status of the account.  This will control the appearance of the "Payment Due" part of the card. */
  status: PropTypes.oneOf([
    "pmtDue",
    "pmtOverdue",
    "finalBill",
    "nothingDue",
    "credit"
  ])
};
