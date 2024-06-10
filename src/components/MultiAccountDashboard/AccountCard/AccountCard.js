import React from "react";
import { Link } from "@carbon/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";
import { InlineNotification } from "../../Notification/InlineNotification/InlineNotification";
import { Tag } from "../../Tag/Tag";
import { TagCTA } from "../../Tag/TagCTA";
import styles from "./AccountCard.module.scss";
import Header from "./Header/Header";
import MobileCTA from "./MobileCTA/MobileCTA";
import Payment from "./Payment/Payment";

/**
 * The account card is a compact way to display key information about a customer's account.  This component should not be used in any other context except on the multi-account dashboard.
 */
function AccountCard({
  className,
  compact,
  acctType = "electric",
  alertText,
  hasAutopay = false,
  hasPaperless = false,
  status = "default",
  onClickPaperless,
  onClickAutopay,
  onClickPayBill,
  acctDetailsURL,
  mobileCTAType = "paperless",
  data
}) {
  const renderActiveContent = () => {
    return (
      <>
        <div className={`${styles.column} ${styles.actions}`}>
          {status !== "danger" && (
            <ul className={styles.actions}>
              <li>
                {hasPaperless ? (
                  <Tag icon text="Paperless is On" theme="default" />
                ) : (
                  <TagCTA
                    onClick={onClickPaperless}
                    text="Go Paperless"
                    theme="default"
                  />
                )}
              </li>
              <li>
                {hasAutopay ? (
                  <Tag icon text="Autopay is On" theme="default" />
                ) : (
                  <TagCTA
                    onClick={onClickPaperless}
                    text="Set Up Auto Pay"
                    theme="blue"
                  />
                )}
              </li>
            </ul>
          )}
        </div>
        <div className={styles.column}>
          <Payment
            status={status}
            totalDue={data.totalDue}
            dateDue={data.dateDue}
            onClickPayBill={onClickPayBill}
          />
        </div>
        <div className={`${styles.column} ${styles.cta}`}>
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
        <div className={`${styles.column} ${styles.actions}`}>
          <ul className={styles.actions}>
            <li>
              <Tag showIcon text="Account Closed" theme="important" />
            </li>
          </ul>
        </div>
        <div className={`${styles.column} ${styles.cta}`}>
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
      className={`${styles.root} ${status !== "default" ? styles[status] : ""} ${className ?? ""} ${compact ? styles.compact : ""}`}
    >
      <article
        className={`${styles["content-container"]} ${status !== "default" ? styles[status] : ""}`}
      >
        <div className={styles.grid}>
          <div className={`${styles.column}`}>
            <Header
              acctType={acctType}
              status={status}
              acctID={data.acctID}
              address={data.address}
            />
          </div>
          {status === "closed"
            ? renderInactiveContent()
            : renderActiveContent()}
        </div>
      </article>
      {status === "warning" && (
        <InlineNotification
          hideCloseButton
          kind="warning"
          role="status"
          title={alertText}
          className={styles.alert}
        />
      )}
      {status === "danger" && (
        <InlineNotification
          hideCloseButton
          kind="error"
          role="status"
          title={alertText}
          className={styles.alert}
        />
      )}
      {status === "info" && (
        <InlineNotification
          hideCloseButton
          kind="info"
          role="status"
          title={alertText}
          className={`${styles.alert} ${styles.info}`}
        />
      )}
      {status === "default" && mobileCTAType !== "none" && (
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
  /** Specify what should occur when the "Go Paperless" tag is clicked */
  onClickPaperless: PropTypes.func,
  /** Specify what should occur when the "Set Up Autopay" tag is clicked */
  onClickAutopay: PropTypes.func,
  /** Specify what should occur when the "Pay Bill" button is clicked */
  onClickPayBill: PropTypes.func,
  /** The URL of the card's corresponding details page */
  acctDetailsURL: PropTypes.string,
  /** Specify an optional className to be applied to the AccountCard */
  className: PropTypes.string,
  /** Specify which type of account (gas or electric) the card is displaying */
  acctType: PropTypes.oneOf(["electric", "gas", "unknown", "merged"]),
  /** Specify which CTA should be shown at the bottom of the card in mobile viewports.  Paperless is the default, but if the account is already enrolled in paperless billing, the autopay CTA must show instead. If the account is already enrolled in both programs, select 'none' to hide the mobile CTA entirely. */
  mobileCTAType: PropTypes.oneOf(["none", "paperless", "autopay"]),
  /** Indicates whether the card should display with an elevated status. "Warning" and "danger" statuses will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  status: PropTypes.oneOf(["default", "info", "warning", "danger", "closed"]),
  /** The text of the card's warning/danger message   */
  alertText: PropTypes.string,
  /** The data object that must be passed to the AccountCard */
  data: PropTypes.exact({
    totalDue: PropTypes.string,
    dateDue: PropTypes.string,
    acctID: PropTypes.number,
    address: PropTypes.string
  }).isRequired
};
