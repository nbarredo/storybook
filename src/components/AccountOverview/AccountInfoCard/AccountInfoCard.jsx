import React from "react";
import PropTypes from "prop-types";
import { Tag } from "../../Tag/Tag";
import { TagCTA } from "../../Tag/TagCTA";
import styles from "./AccountInfoCard.module.scss";
import { Basic } from "./Basic";
import { autopayIcon, outageIcon, paperlessIcon } from "./Icons";
import { Programs } from "./Programs";
import { Supplier } from "./Supplier";

function AccountInfoCard({
  hasAutopay,
  hasPaperless,
  hasOutageAlerts,
  showAutopayBtn = true,
  showPaperlessBtn = true,
  showOutageAlertsBtn = true,
  onClickPaperless,
  onClickAutopay,
  onClickOutageAlerts,
  onClickBasicCta,
  onClickSupplierCta,
  type,
  addresses,
  acctID,
  supplier
}) {
  return (
    <section className={`${styles["account-info-card"]} ${styles[type]}`}>
      <article className={styles.intro}>
        <header>
          <h4>Account Info</h4>
          <ul className={styles.actions}>
            {showPaperlessBtn && (
              <li>
                {hasPaperless ? (
                  <Tag
                    className={styles["cta-active"]}
                    showIcon
                    text="Paperless is On"
                    theme="default"
                  />
                ) : (
                  <TagCTA
                    renderIcon={paperlessIcon}
                    onClick={onClickPaperless}
                    text="Go Paperless"
                    theme="green"
                    className={styles["cta-inactive"]}
                  />
                )}
              </li>
            )}
            {showOutageAlertsBtn && (
              <li>
                {hasOutageAlerts ? (
                  <Tag
                    className={styles["cta-active"]}
                    showIcon
                    text="Outage Alerts On"
                    theme="default"
                  />
                ) : (
                  <TagCTA
                    renderIcon={outageIcon}
                    onClick={onClickOutageAlerts}
                    text="Outage Alerts"
                    theme="default"
                    className={styles["cta-inactive"]}
                  />
                )}
              </li>
            )}
            {showAutopayBtn && (
              <li>
                {hasAutopay ? (
                  <Tag
                    className={styles["cta-active"]}
                    showIcon
                    text="Autopay is On"
                    theme="default"
                  />
                ) : (
                  <TagCTA
                    renderIcon={autopayIcon}
                    onClick={onClickAutopay}
                    text="Auto Pay"
                    theme="blue"
                    className={styles["cta-inactive"]}
                  />
                )}
              </li>
            )}
          </ul>
        </header>
      </article>
      <details>
        <summary
          data-open="Show Less Info"
          data-close="Show More Info"
        ></summary>
        <Basic
          onClickBasicCta={onClickBasicCta}
          acctID={acctID}
          addresses={addresses}
        />
        <Supplier onClickSupplierCta={onClickSupplierCta} supplier={supplier} />
        <Programs />
      </details>
    </section>
  );
}

export { AccountInfoCard };

AccountInfoCard.propTypes = {
  /** Specify which type of account (gas or electric) the card is displaying */
  type: PropTypes.oneOf(["electric", "gas", "unknown", "merged"]),
  /** Specify whether or not the current account is enrolled in Autopay */
  hasAutopay: PropTypes.bool,
  /** Specify whether or not the current account is enrolled in Paperless Billing */
  hasPaperless: PropTypes.bool,
  /** Specify whether or not the current account is enrolled in Outage Alerts */
  hasOutageAlerts: PropTypes.bool,
  /** Specify whether or not to display the Autopay status */
  showAutopayBtn: PropTypes.bool,
  /** Specify whether or not to display the Paperless Billing status */
  showPaperlessBtn: PropTypes.bool,
  /** Specify whether or not to display the Outage Alerts status */
  showOutageAlertsBtn: PropTypes.bool,
  /** Specify what should occur when the "Go Paperless" tag is clicked */
  onClickPaperless: PropTypes.func,
  /** Specify what should occur when the "Set Up Autopay" tag is clicked */
  onClickAutopay: PropTypes.func,
  /** Specify what should occur when the "Outage Alerts" button is clicked */
  onClickOutageAlerts: PropTypes.func,
  /** Specify what should occur when the Basic info CTA is clicked */
  onClickBasicCta: PropTypes.func,
  /** Specify what should occur when the Supplier CTA is clicked */
  onClickSupplierCta: PropTypes.func,
  /** The account ID can either be the 11-digit account number (in which case the data type would be `number`), or the account's nickname (data type would be `string` in this case) */
  acctID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** An array of addresses associated with the account. */
  addresses: PropTypes.arrayOf(PropTypes.string),
  /** The name of the account's energy supplier. */
  supplier: PropTypes.string
};
