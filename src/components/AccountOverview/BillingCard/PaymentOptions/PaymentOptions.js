import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../Button/Button";
import styles from "../BillingCard.module.scss";

function PaymentOptions(props) {
  const {
    status,
    onClickViewBill,
    onClickPayByBank,
    onClickPayByCard,
    onClickCteViewPayBtn,
    companyCode
  } = props;
  const getIsDisabled = () => {
    if (status === "nothingDue" || status === "credit") return true;
    return false;
  };

  const renderDefaultContent = () => {
    return (
      <div
        className={`${styles["payment-options"]} ${
          status === "hasAutoPay" ? styles.hasAutoPay : ""
        }`}
      >
        {status === "hasAutoPay" ? (
          <>
            <Button
              kind="ghost"
              label="Pay Bill"
              onClick={onClickPayByBank}
              size="md"
              type="button"
              disabled={getIsDisabled()}
            />
            <Button
              kind="tertiary"
              label="View Bill"
              onClick={onClickViewBill}
              size="md"
              type="button"
              disabled={getIsDisabled()}
            />
          </>
        ) : (
          <>
            <Button
              kind="tertiary"
              label="Pay by Card"
              onClick={onClickPayByCard}
              size="md"
              type="button"
              ariaLabelledBy="button provider-label"
              id="button"
              disabled={getIsDisabled()}
            />
            <Button
              kind="primary"
              label="Pay by Bank"
              onClick={onClickPayByBank}
              size="md"
              type="button"
              disabled={getIsDisabled()}
            />
            {!getIsDisabled() && (
              <p
                aria-hidden="true"
                id="provider-label"
                className={styles["provider-label"]}
              >
                via Speedpay
              </p>
            )}
          </>
        )}
      </div>
    );
  };

  const renderCTEContent = () => {
    return (
      <Button
        fullWidth
        kind="primary"
        label="View & Pay Bill"
        onClick={onClickCteViewPayBtn}
        size="md"
        type="button"
      />
    );
  };

  return (
    <>{companyCode === "CTE" ? renderCTEContent() : renderDefaultContent()}</>
  );
}

export { PaymentOptions };

PaymentOptions.propTypes = {
  onClickViewBill: PropTypes.func.isRequired,
  onClickPayByBank: PropTypes.func.isRequired,
  onClickPayByCard: PropTypes.func.isRequired,
  onClickCteViewPayBtn: PropTypes.func,
  companyCode: PropTypes.string,
  status: PropTypes.oneOf([
    "pmtDue",
    "pmtOverdue",
    "finalBill",
    "nothingDue",
    "credit",
    "hasAutoPay",
    "hasPmtPlan"
  ]).isRequired
};
