import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../Button/Button";
import { Text } from "../../../Text/Text";
import styles from "./Payment.module.scss";

export default function Payment({
  status = "default",
  totalDue,
  dateDue,
  onClickPayBill
}) {
  return (
    <aside className={styles["payment-area"]}>
      <div
        className={`${styles["total-due"]} ${status === "danger" ? styles.danger : ""}`}
      >
        <Text color="gray-60" size="2" weight="semi" inline={true}>
          <strong>{totalDue}</strong>
          <span className={styles["due-date"]}>Due {dateDue}</span>
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
  /** Indicates whether the card should display with an elevated status. "Warning" and "danger" statuses will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  status: PropTypes.oneOf(["default", "warning", "danger"]),
  totalDue: PropTypes.string,
  dateDue: PropTypes.string
};
