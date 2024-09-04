import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "../../../Button/Button";
import { LanguageContext } from "../../../LanguageContext/LanguageContext";
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
  const { lang } = useContext(LanguageContext);

  const isConnecticutCustomer = () => {
    if (companyCode === "CTE" || companyCode === "CTG") return true;
    return false;
  };

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
              label={lang("text.pay.bill")}
              onClick={onClickPayByBank}
              size="md"
              type="button"
              disabled={getIsDisabled()}
            />
            <Button
              kind="tertiary"
              label={lang("text.view.bill")}
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
              label={lang("pay.card.btn.label")}
              onClick={onClickPayByCard}
              size="md"
              type="button"
              ariaLabelledBy="button provider-label"
              id="button"
              disabled={getIsDisabled()}
            />
            <Button
              kind="primary"
              label={lang("pay.bank.btn.label")}
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
                {lang("provider.label")}
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
        className={styles["view-pay-bill-button"]}
        fullWidth
        kind="primary"
        label={lang("ct.button.label")}
        onClick={onClickCteViewPayBtn}
        size="md"
        type="button"
      />
    );
  };

  return (
    <>{isConnecticutCustomer() ? renderCTEContent() : renderDefaultContent()}</>
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
