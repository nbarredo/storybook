import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import TotalBalance from "../TotalBalance/TotalBalance";
import styles from "./AccountCard.module.scss";
import Actions from "./Actions/Actions";
import "./carbon.overrides.scss";

const ParentContent = forwardRef(function ParentContent(props, refs) {
  const {
    isClosed,
    cardStyle,
    showPaperlessBtn,
    hasPaperless,
    showAutopayBtn,
    onClickPaperless,
    hasAutopay,
    onClickAutopay,
    onClickPayBill
  } = props;
  const { autoPayBtnRef, paperlessBtnRef, totalBalanceRef } = refs;
  return (
    <>
      <Actions
        isClosed={isClosed}
        hasAutopay={hasAutopay}
        hasPaperless={hasPaperless}
        showAutopayBtn={showAutopayBtn}
        showPaperlessBtn={showPaperlessBtn}
        onClickPaperless={onClickPaperless}
        onClickAutopay={onClickAutopay}
        cardStyle={cardStyle}
        ref={{ autoPayBtnRef, paperlessBtnRef }}
      />
      <div className={`${styles.column} ${styles["total-balance-container"]}`}>
        <TotalBalance
          className="parent-content"
          buttonLabel="Pay Bill"
          title="Total Balance"
          subtitle="$135.11"
          ref={totalBalanceRef}
          onClick={onClickPayBill}
          dueDate="02/05/24"
        />
      </div>
    </>
  );
});

export default ParentContent;

ParentContent.propTypes = {
  /** Specify whether the account is active or closed */
  isClosed: PropTypes.bool.isRequired,
  /** */
  acctDetailRef: PropTypes.node,
  /** Specify whether or not the Paperless Billing button/tag should appear. Note that for the medium breakpoint, you must add logic to determine which one of the two buttons should show (see Figma for details) */
  showPaperlessBtn: PropTypes.bool,

  /** Indicates which card style/layout should be used. "Warning" and "danger" styles will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  cardStyle: PropTypes.oneOf([
    "default",
    "info",
    "warning",
    "danger",
    "closed"
  ]),
  /** Specify what should occur when the "Pay Bill" button is clicked. */
  onClickPayBill: PropTypes.func,
  hasPaperless: PropTypes.bool,
  showAutopayBtn: PropTypes.bool,
  onClickPaperless: PropTypes.func,
  hasAutopay: PropTypes.bool,
  onClickAutopay: PropTypes.func
};
