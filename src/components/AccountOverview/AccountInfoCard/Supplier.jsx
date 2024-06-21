import React from "react";
import PropTypes from "prop-types";
import styles from "./AccountInfoCard.module.scss";

function Supplier({ supplier, onClickSupplierCta }) {
  return (
    <article role="presentation" className={styles.supplier}>
      <dl>
        <dt>Electric supplier</dt>
        <dd>{supplier}</dd>
      </dl>
      <a className={styles.cta} href="#" onClick={onClickSupplierCta}>
        Manage Supplier and Rates
      </a>
    </article>
  );
}

export { Supplier };

Supplier.propTypes = {
  /** The name of the account's energy supplier. */
  supplier: PropTypes.string,
  /** Specify what should occur when the Supplier CTA is clicked */
  onClickSupplierCta: PropTypes.func
};
