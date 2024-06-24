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
  acctID,
  addresses,
  hasAutopay,
  hasOutageAlerts,
  hasPaperless,
  onClickAutopay,
  onClickBasicCta,
  onClickOutageAlerts,
  onClickPaperless,
  onClickSupplierCta,
  programs,
  showAutopayBtn = true,
  showBasicInfo = true,
  showOutageAlertsBtn = true,
  showPaperlessBtn = true,
  showProgramsInfo = true,
  showSupplierInfo = true,
  supplier,
  type
}) {
  const renderCollapsibleWrapper = (children) => {
    return (
      <details className={styles["collapsible-wrapper"]}>
        <summary
          data-open="Show Less Info"
          data-close="Show More Info"
        ></summary>
        {children}
      </details>
    );
  };

  const MainContent = () => {
    return (
      <div className={styles["main-content"]}>
        {showBasicInfo && (
          <Basic
            onClickBasicCta={onClickBasicCta}
            acctID={acctID}
            addresses={addresses}
          />
        )}
        {showSupplierInfo && (
          <Supplier
            onClickSupplierCta={onClickSupplierCta}
            supplier={supplier}
          />
        )}
        {showProgramsInfo && <Programs programs={programs} />}
      </div>
    );
  };

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
      {renderCollapsibleWrapper(<MainContent />)}
      <div className={styles["fixed-wrapper"]}>
        <MainContent />
      </div>
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
  /** Specify whether or not to display the Basic Information section  */
  showBasicInfo: PropTypes.bool,
  /** Specify whether or not to display the Supplier Information section */
  showSupplierInfo: PropTypes.bool,
  /** Specify whether or not to display the Programs Information section */
  showProgramsInfo: PropTypes.bool,
  /** An array of billing programs associated with the account */
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      theme: PropTypes.string
    })
  ),
  /** The account ID can either be the 11-digit account number (in which case the data type would be `number`), or the account's nickname (data type would be `string` in this case) */
  acctID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** An array of addresses associated with the account. */
  addresses: PropTypes.arrayOf(PropTypes.string),
  /** The name of the account's energy supplier. */
  supplier: PropTypes.string
};
