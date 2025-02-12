import React from "react";
import PropTypes from "prop-types";
import styles from "../AccountInfoCard.module.scss";

function Basic({ acctID, addresses, onClickBasicCta, basicCtaUrl }) {
  const getAddress = () => {
    switch (addresses.length) {
      case 0:
        return "None";
      case 1:
        return addresses[0];
      default:
        return "Multiple Addresses";
    }
  };
  return (
    <article role="presentation" className={styles.basic}>
      <dl>
        <dt>Acct number</dt>
        <dd>{acctID}</dd>
      </dl>
      <dl>
        <dt>Address</dt>
        <dd>{getAddress()}</dd>
      </dl>
      <a
        className={styles.cta}
        href={basicCtaUrl || "#"}
        onClick={onClickBasicCta}
      >
        Account Settings
      </a>
    </article>
  );
}

export { Basic };

Basic.propTypes = {
  /** The account ID can either be the 11-digit account number (in which case the data type would be `number`), or the account's nickname (data type would be `string` in this case) */
  acctID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** An array of addresses associated with the account. */
  addresses: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Specify what should occur when the Basic info CTA is clicked */
  onClickBasicCta: PropTypes.func,
  /** Optional Basic CTA URL that can be used for navigation instead of via JavaScript onClick behavior. */
  basicCtaUrl: PropTypes.string
};
