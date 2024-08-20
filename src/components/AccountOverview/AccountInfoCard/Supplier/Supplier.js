import React from "react";
import PropTypes from "prop-types";
import styles from "../AccountInfoCard.module.scss";

function Supplier({ supplier, onClickSupplierCta, type, supplierCtaURL }) {
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
      <a
        className={styles.cta}
        href={supplierCtaURL || "#"}
        onClick={onClickSupplierCta}
      >
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
  type: PropTypes.oneOf(["electric", "gas", "unknown", "merged"]),
  /** Optional Supplier CTA URL that can be used for navigation instead of via JavaScript onClick behavior. */
  supplierCtaURL: PropTypes.string
};
