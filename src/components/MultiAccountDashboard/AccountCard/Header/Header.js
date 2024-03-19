/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { ToTitleCase } from "../../../../utils";
import { Text } from "../../../Text/Text";
import styles from "./Header.module.scss";
import { ReactComponent as IconElectric } from "./icon_electric.svg";
import { ReactComponent as IconDanger } from "./icon_error_filled.svg";
import { ReactComponent as IconGas } from "./icon_gas.svg";
import { ReactComponent as IconWarning } from "./icon_warning_filled.svg";

/**
 * Descriptive text here.
 */
export default function Header({ status, acctType, acctID, address }) {
  const isClosed = () => {
    return status === "closed";
  };
  return (
    <header>
      {getIcon(acctType, status)}
      <Text
        size="3"
        weight="semi"
        inline={true}
        className={`${styles.clamp} ${isClosed() ? styles.closed : ""}`}
      >
        {ToTitleCase(acctType)}
        <span className={styles.acctNumber}>
          &nbsp;<span className={styles.pipe}>|</span>
          &nbsp;{acctID}
        </span>
      </Text>
      <address>
        <Text
          color="gray-60"
          size="1"
          weight="reg"
          className={`${styles.clamp} ${isClosed() ? styles.closed : ""}`}
        >
          {address}
        </Text>
      </address>
    </header>
  );
}

export { Header };

Header.propTypes = {
  /** Indicates whether the card should display with an elevated status. "Warning" and "danger" statuses will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  status: PropTypes.oneOf(["default", "warning", "danger", "closed"])
    .isRequired,
  /** Specify which type of account (gas or electric) the card is displaying */
  acctType: PropTypes.oneOf(["electric", "gas"]).isRequired,
  /** The number or nickname of the account displayed in the card */
  acctID: PropTypes.string.isRequired,
  /** The mailing address of the account displayed in the card */
  address: PropTypes.string.isRequired
};

export const getIcon = (acctType, status) => {
  if (status === "warning") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.warning}`}>
        <IconWarning data-testid="icon-warning" />
      </figure>
    );
  }
  if (status === "danger") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.danger}`}>
        <IconDanger data-testid="icon-danger" />
      </figure>
    );
  }
  if (status === "closed") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.closed}`}>
        {acctType === "electric" && (
          <IconElectric data-testid="icon-electric" />
        )}
        {acctType === "gas" && <IconGas data-testid="icon-gas" />}
      </figure>
    );
  }
  if (acctType === "electric" && status === "default") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.electric}`}>
        <IconElectric data-testid="icon-electric" />
      </figure>
    );
  }
  if (acctType === "gas" && status === "default") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.gas}`}>
        <IconGas data-testid="icon-gas" />
      </figure>
    );
  }
};
