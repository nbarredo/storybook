import React from "react";
import PropTypes from "prop-types";
import styles from "./AccountInfoCard.module.scss";

function Supplier({ supplier, onClickSupplierCta, type }) {
  const getSectionTitle = () => {
    switch (type) {
      case "electric":
        return "Electric supplier";
      case "gas":
        return "Gas supplier";
      default:
        return "Supplier";
    }
  };
  return (
    <article role="presentation" className={styles.supplier}>
      <dl>
        <dt>{getSectionTitle()}</dt>
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
  /** Specify what should occur when the Supplier CTA is clicked */
  onClickSupplierCta: PropTypes.func,
  /** The name of the account's energy supplier. */
  supplier: PropTypes.string,
  /** Specify which type of account (gas or electric) the card is displaying */
  type: PropTypes.oneOf(["electric", "gas", "unknown", "merged"])
};
