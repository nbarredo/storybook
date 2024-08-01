import React, { useRef } from "react";
import { Link } from "@carbon/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";
import { InlineNotification } from "../../Notification/InlineNotification/InlineNotification";
import styles from "./AccountCard.module.scss";
import Actions from "./Actions/Actions";
import Header from "./Header/Header";
import MobileCTA from "./MobileCTA/MobileCTA";
import ParentContent from "./ParentContent";
import Payment from "./Payment/Payment";

/**
 * The account card is a compact way to display key information about a customer's account.  This component should not be used in any other context except on the multi-account dashboard.
 */
function AccountCard({
  className,
  compact,
  type = "electric",
  alertText,
  hasAutopay = false,
  hasPaperless = false,
  showAutopayBtn = true,
  showPaperlessBtn = true,
  cardStyle = "default",
  onCardBodyClick,
  onClickPaperless,
  onClickAutopay,
  onClickPayBill,
  acctDetailsURL,
  mobileCTAType = "paperless",
  totalDue,
  dateDue,
  acctID,
  address,
  status = "pmtDue"
}) {
  const isClosed = Boolean(cardStyle === "closed");

  const paymentRef = useRef();
  const autoPayBtnRef = useRef();
  const paperlessBtnRef = useRef();
  const acctDetailRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const nodesToExcludeFromCardClick = [
    paymentRef,
    autoPayBtnRef,
    paperlessBtnRef
  ];

  const cardAction = (e) => {
    if (acctDetailRef.current && acctDetailRef.current.checkVisibility())
      return;

    const isFiltered = nodesToExcludeFromCardClick.some((node) => {
      if (node.current) return node.current.contains(e.target);
      return false;
    });

    if (isFiltered) return;

    e.stopPropagation();
    onCardBodyClick();
  };

  const renderActiveContent = () => {
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
        <div className={styles.column}>
          <Payment
            status={status}
            cardStyle={cardStyle}
            totalDue={totalDue}
            dateDue={dateDue}
            onClickPayBill={onClickPayBill}
            ref={paymentRef}
          />
        </div>
        <div className={`${styles.column} ${styles.cta}`} ref={acctDetailRef}>
          <Link
            href={acctDetailsURL}
            renderIcon={() => (
              <ArrowForwardIcon
                sx={{ fontSize: 19 }}
                aria-label="Arrow Right"
              />
            )}
            className={styles.link}
            aria-label="Account Details"
          >
            Acct Details
          </Link>
        </div>
      </>
    );
  };
  const renderInactiveContent = () => {
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
        <div className={`${styles.column} ${styles.cta}`} ref={acctDetailRef}>
          <Link
            href={acctDetailsURL}
            renderIcon={() => (
              <ArrowForwardIcon
                sx={{ fontSize: 19 }}
                aria-label="Arrow Right"
              />
            )}
            className={styles.link}
          >
            Past Bills & Payments
          </Link>
        </div>
      </>
    );
  };

  return (
    <section
      className={`${styles.root} ${cardStyle !== "default" ? styles[cardStyle] : ""} ${className ?? ""} ${compact ? styles.compact : ""}`}
    >
      <article
        className={`${styles["content-container"]} ${cardStyle !== "default" ? styles[cardStyle] : ""} ${mobileCTAType !== "none" ? styles["mobile-cta"] : ""}`}
        onClick={cardAction}
      >
        <div
          className={`${styles.grid} ${type === "merged" ? styles.parent : ""}`}
        >
          <div className={`${styles.column}`}>
            <Header
              type={type}
              cardStyle={cardStyle}
              acctID={acctID}
              address={address}
            />
          </div>
          {isClosed && renderInactiveContent()}
          {!isClosed && type !== "merged" && renderActiveContent()}
          {!isClosed && type === "merged" && (
            <ParentContent
              onClickAutopay={onClickAutopay}
              cardStyle={cardStyle}
              isClosed={isClosed}
              showPaperlessBtn={showPaperlessBtn}
              showAutopayBtn={showAutopayBtn}
              onClickPaperless={onClickPaperless}
              hasAutopay={hasAutopay}
              hasPaperless={hasPaperless}
              ref={{ autoPayBtnRef, paperlessBtnRef }}
            />
          )}
        </div>
      </article>
      {cardStyle === "warning" && (
        <InlineNotification
          hideCloseButton
          kind="warning"
          role="status"
          title={alertText}
          className={styles.alert}
        />
      )}
      {cardStyle === "danger" && (
        <InlineNotification
          hideCloseButton
          kind="error"
          role="status"
          title={alertText}
          className={styles.alert}
        />
      )}
      {cardStyle === "info" && (
        <InlineNotification
          hideCloseButton
          kind="info"
          role="status"
          title={alertText}
          className={`${styles.alert} ${styles.info}`}
        />
      )}
      {cardStyle === "default" && mobileCTAType !== "none" && (
        <>
          {mobileCTAType === "paperless" && (
            <MobileCTA
              data-testid="mobile-cta-paperless"
              theme="paperless"
              text="Go Paperless"
              onClick={onClickPaperless}
            />
          )}
          {mobileCTAType === "autopay" && (
            <MobileCTA
              data-testid="mobile-cta-autopay"
              theme="autopay"
              text="Set Up Auto Pay"
              onClick={onClickAutopay}
            />
          )}
        </>
      )}
    </section>
  );
}

export { AccountCard };

AccountCard.propTypes = {
  /** "Compact" mode should be used when the active user has more than five accounts to display.  This mode allows more information to fit on the screen at once, reducing the amount of scrolling the user might need to do to locate a specific account. */
  compact: PropTypes.bool,
  /** Specify whether or not the current account is enrolled in Autopay */
  hasAutopay: PropTypes.bool,
  /** Specify whether or not the current account is enrolled in Paperless Billing */
  hasPaperless: PropTypes.bool,
  /** Specify whether or not the Autopay button/tag should appear. Note that for the medium breakpoint, you must add logic to determine which one of the two buttons should show (see Figma for details) */
  showAutopayBtn: PropTypes.bool,
  /** Specify whether or not the Paperless Billing button/tag should appear. Note that for the medium breakpoint, you must add logic to determine which one of the two buttons should show (see Figma for details) */
  showPaperlessBtn: PropTypes.bool,
  /** Specify what should occur when the "Go Paperless" tag is clicked. */
  onClickPaperless: PropTypes.func,
  /** Specify what should occur when the "Set Up Autopay" tag is clicked. */
  onClickAutopay: PropTypes.func,
  /** Specify what should occur when the "Pay Bill" button is clicked. */
  onClickPayBill: PropTypes.func,
  /** Specify what should occur when the card body is clicked. Note that action will only occur on viewports where the "Acct Details ->" link is not shown. */
  onCardBodyClick: PropTypes.func.isRequired,
  /** The URL of the card's corresponding details page. At smaller viewports, the user can click the card body to navigate to the account details screen.  At larger viewports, an "Acct Details" link will appear on the card, and the users would need to click that link (and not the card body) to navigate to the details page. */
  acctDetailsURL: PropTypes.string.isRequired,
  /** Specify an optional className to be applied to the AccountCard */
  className: PropTypes.string,
  /** Specify which type of account (gas or electric) the card is displaying */
  type: PropTypes.oneOf(["electric", "gas", "unknown", "merged"]),
  /** Specify which CTA should be shown at the bottom of the card in mobile viewports.  Paperless is the default, but if the account is already enrolled in paperless billing, the autopay CTA must show instead. If the account is already enrolled in both programs, select 'none' to hide the mobile CTA entirely. */
  mobileCTAType: PropTypes.oneOf(["none", "paperless", "autopay"]),
  /** Indicates which card style/layout should be used. "Warning" and "danger" styles will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  cardStyle: PropTypes.oneOf([
    "default",
    "info",
    "warning",
    "danger",
    "closed"
  ]),
  /** The text of the card's warning/danger message   */
  alertText: PropTypes.string,
  /** Total amount due on the account. It must be a string preceded by the relevant currency symbol (e.g. "$250.75") */
  totalDue: PropTypes.string.isRequired,
  /** The date the next payment is due in `mm/dd/yy` format.  This should be `null` if no payment is due. */
  dateDue: PropTypes.string,
  /** The account ID can either be the 11-digit account number (in which case the data type would be `number`), or the account's nickname (data type would be `string` in this case) */
  acctID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** The address of the account */
  address: PropTypes.string.isRequired,
  /** Indicates the billing status of the account.  This will control the appearance of the "Payment Due" part of the card. */
  status: PropTypes.oneOf([
    "pmtDue",
    "pmtOverdue",
    "finalBill",
    "nothingDue",
    "credit"
  ])
};
