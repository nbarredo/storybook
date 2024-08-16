import React from "react";
import PropTypes from "prop-types";
import { Tag } from "../../Tag/Tag";
import { TagCTA } from "../../Tag/TagCTA";
import styles from "./AccountInfoCard.module.scss";

function AccountInfoCard({ data }) {
  return (
    <section className={`${styles["account-info-card"]} ${styles[data.type]}`}>
      <h4>Account Info</h4>
      <ul className={styles.actions}>
        <li>
          <TagCTA onClick={() => {}} text="Go Paperless" theme="default" />
        </li>
        <li>
          <TagCTA onClick={() => {}} text="Outage Alerts" theme="default" />
        </li>
        <li>
          <TagCTA onClick={() => {}} text="Auto Pay" theme="blue" />
        </li>
      </ul>
      <details>
        <summary>Show More Info</summary>
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
        <article role="presentation">
          <dl>
            <dt>Programs</dt>
            <dd>&nbsp;</dd>
          </dl>
          <Tag icon text="Winter Protection" theme="purple" />
          <Tag icon text="Fuel Assistance" theme="purple" />
        </article>
      </details>
    </section>
  );
}

export { AccountInfoCard };

AccountInfoCard.propTypes = {
  /** The data object that must be passed to the AccountInfoCard */
  data: PropTypes.exact({
    type: PropTypes.oneOf(["electric", "gas", "unknown"]),
    status: PropTypes.oneOf([
      "pmtDue",
      "pmtOverdue",
      "finalBill",
      "nothingDue",
      "credit",
      "hasAutoPay",
      "hasPmtPlan"
    ]),
    autoPayMessage: PropTypes.string,
    autoPayDate: PropTypes.string,
    pmtPlanMessage: PropTypes.string,
    prevPaymentAmt: PropTypes.string,
    prevPaymentDate: PropTypes.string,
    currPaymentAmt: PropTypes.string,
    acctMessage: PropTypes.string,
    onClickViewBill: PropTypes.func,
    onClickPayByBank: PropTypes.func,
    onClickPayByCard: PropTypes.func,
    onClickPastBills: PropTypes.func,
    onClickAutopay: PropTypes.func,
    onClickPmtPlan: PropTypes.func
  }).isRequired
};