/* eslint-disable no-unused-vars */
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
  acctType = "electric",
  alertText,
  status = "default",
  data
}) {
  const renderActiveContent = () => {
    return (
      <>
        <div className={`${styles.column} ${styles.actions}`}>
          <ul className={styles.actions}>
            <li>
              <TagCTA onClick={() => {}} text="Go Paperless" theme="default" />
            </li>
            <li>
              <Tag icon text="Set Up Autopay" theme="default" />
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <Payment
            status={status}
            totalDue={data.totalDue}
            dateDue={data.dateDue}
          />
        </div>
        <div className={`${styles.column} ${styles.cta}`}>
          <Link
            href="#"
            renderIcon={() => (
              <ArrowForwardIcon
                sx={{ fontSize: 19 }}
                aria-label="Arrow Right"
              />
            )}
            className={styles.link}
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
              <Tag icon text="Account Closed" theme="important" />
            </li>
          </ul>
        </div>
        <div className={`${styles.column} ${styles.cta}`}>
          <Link
            href="#"
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
    <section className={`${styles.root} ${styles[status]} ${className || ""}`}>
      <article className={styles["content-container"]}>
        <div className={styles.grid}>
          <div className={`${styles.column} ${styles.header}`}>
            <Header
              acctType={acctType}
              status={status}
              acctNumber={data.acctNumber}
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
          onClose={() => {}}
          onCloseButtonClick={() => {}}
          role="status"
          title={alertText}
          className={styles.alert}
        />
      )}
      {status === "error" && (
        <InlineNotification
          hideCloseButton
          kind="error"
          onClose={() => {}}
          onCloseButtonClick={() => {}}
          role="status"
          title={alertText}
          className={styles.alert}
        />
      )}
      <MobileCTA theme="paperless" text="Set Up Autopay" onClick={() => {}} />
    </section>
  );
}

export { AccountCard };

AccountCard.propTypes = {
  /** Specify an optional className to be applied to the AccountCard */
  className: PropTypes.string,
  /** Specify which type of account (gas or electric) the card is displaying */
  acctType: PropTypes.oneOf(["electric", "gas"]),
  /** Indicates whether the card should display with an elevated status. "Warning" and "danger" statuses will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  status: PropTypes.oneOf(["default", "warning", "error", "closed"]),
  /** The text of the card's warning/error message   */
  alertText: PropTypes.string,
  /** The data object that must be passed to the AccountCard */
  data: PropTypes.exact({
    totalDue: PropTypes.string,
    dateDue: PropTypes.string,
    acctNumber: PropTypes.number,
    address: PropTypes.string
  }).isRequired
};
