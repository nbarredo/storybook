import React from "react";
import { Tooltip } from "@carbon/react";
import PropTypes from "prop-types";
import { Tag } from "../../Tag/Tag";
import { TagCTA } from "../../Tag/TagCTA";
import styles from "./AccountInfoCard.module.scss";
import {
  autopayIcon,
  fuelAssistanceIcon,
  outageIcon,
  paperlessIcon,
  winterProtectionIcon
} from "./Icons";

function AccountInfoCard({
  hasAutopay,
  hasPaperless,
  hasOutageAlerts,
  showAutopayBtn = true,
  showPaperlessBtn = true,
  showOutageAlertsBtn = true,
  type
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
                  <Tag showIcon text="Paperless is On" theme="default" />
                ) : (
                  <TagCTA
                    renderIcon={paperlessIcon}
                    onClick={() => {}}
                    text="Go Paperless"
                    theme="default"
                    className={styles.action}
                  />
                )}
              </li>
            )}
            {showOutageAlertsBtn && (
              <li>
                {hasOutageAlerts ? (
                  <Tag showIcon text="Outage Alerts On" theme="default" />
                ) : (
                  <TagCTA
                    renderIcon={outageIcon}
                    onClick={() => {}}
                    text="Outage Alerts"
                    theme="default"
                    className={styles.action}
                  />
                )}
              </li>
            )}
            {showAutopayBtn && (
              <li>
                {hasAutopay ? (
                  <Tag showIcon text="Autopay is On" theme="default" />
                ) : (
                  <TagCTA
                    renderIcon={autopayIcon}
                    onClick={() => {}}
                    text="Auto Pay"
                    theme="blue"
                    className={styles.action}
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
        <article role="presentation">
          <dl>
            <dt>Acct number</dt>
            <dd>01234567890</dd>
            <dt>Address</dt>
            <dd>124 Main Street NH 120384</dd>
          </dl>
          <a className={styles.cta} href="#">
            Account Settings
          </a>
        </article>
        <article role="presentation">
          <dl>
            <dt>Electric supplier</dt>
            <dd>Third party supplier</dd>
          </dl>
          <a className={styles.cta} href="#">
            Manage Supplier and Rates
          </a>
        </article>
        <article role="presentation" className={styles.programs}>
          <dl>
            <dt>Programs</dt>
            <dd>&nbsp;</dd>
          </dl>
          <Tooltip
            enterDelayMs={0}
            leaveDelayMs={0}
            label="You're in this program which prevents service from being shut off from Nov. 1 to May 1 with no late payment charges."
            className={styles.tooltip}
          >
            <Tag
              showIcon
              renderIcon={winterProtectionIcon}
              text="Winter Protection"
              theme="purple"
              tabIndex="0"
            />
          </Tooltip>
          <Tooltip
            enterDelayMs={0}
            leaveDelayMs={0}
            label="You're enrolled in this program that helps pay a portion of your winter heating bills."
            className={styles.tooltip}
          >
            <Tag
              showIcon
              renderIcon={fuelAssistanceIcon}
              text="Fuel Assistance"
              theme="purple"
              tabIndex="0"
            />
          </Tooltip>
        </article>
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
  showOutageAlertsBtn: PropTypes.bool
};
