/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { ToTitleCase } from "../../../../utils";
import { Text } from "../../../Text/Text";
import styles from "./Header.module.scss";
import { ReactComponent as IconElectric } from "./icon_acct_type_electric.svg";
import { ReactComponent as IconGas } from "./icon_acct_type_gas.svg";
import { ReactComponent as IconMerged } from "./icon_acct_type_merged.svg";
import { ReactComponent as IconUnknown } from "./icon_acct_type_unknown.svg";
import { ReactComponent as IconDanger } from "./icon_status_danger.svg";
import { ReactComponent as IconWarning } from "./icon_status_warning.svg";
import { ReactComponent as Separator } from "./separator.svg";

export default function Header({ cardStyle, type, acctID, address }) {
  const isClosed = () => {
    return cardStyle === "closed";
  };
  const getTextColor = () => {
    switch (type) {
      case "electric":
        return "teal-90";
      case "gas":
        return "purple-90";
      default:
        return "gray-70";
    }
  };
  const getAccountTitle = () => {
    switch (type) {
      case "unknown":
        return "Acct ";
      case "merged":
        return "Merged Account ";
      default:
        return ToTitleCase(type);
    }
  };
  return (
    <header>
      {getIcon(type, cardStyle)}
      <Text
        size="3"
        weight="semi"
        inline={true}
        color={getTextColor()}
        className={`${isClosed() ? styles.closed : ""}`}
      >
        {getAccountTitle()}
      </Text>
      {!["unknown", "merged"].includes(type) && (
        <div role="presentation" className={styles.separator}>
          <Separator data-testid="separator" />
        </div>
      )}
      {type !== "merged" && (
        <Text
          inline={true}
          color="gray-70"
          size="2"
          weight="reg"
          className={`${styles.acctNumber} ${isClosed() ? styles.closed : ""}`}
        >
          {acctID}
        </Text>
      )}
      <address>
        <Text
          color="gray-60"
          size="1"
          weight="reg"
          className={`${styles.clamp} ${isClosed() ? styles.closed : ""}`}
        >
          {type === "merged" ? "(Parent Account)" : address}
        </Text>
      </address>
    </header>
  );
}

export { Header };

Header.propTypes = {
  /** Indicates which card style/layout should be used. "Warning" and "danger" styles will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  cardStyle: PropTypes.oneOf(["default", "info", "warning", "danger", "closed"])
    .isRequired,
  /** Specify which type of account (gas or electric) the card is displaying */
  type: PropTypes.oneOf(["electric", "gas", "unknown", "merged"]).isRequired,
  /** The number or nickname of the account displayed in the card */
  acctID: PropTypes.number.isRequired,
  /** The mailing address of the account displayed in the card */
  address: PropTypes.string.isRequired
};

export const getIcon = (type, cardStyle) => {
  if (cardStyle === "warning") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.warning}`}>
        <IconWarning data-testid="icon-warning" />
      </figure>
    );
  }
  if (cardStyle === "danger") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.danger}`}>
        <IconDanger data-testid="icon-danger" />
      </figure>
    );
  }
  if (cardStyle === "closed") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.closed}`}>
        {type === "electric" && <IconElectric data-testid="icon-electric" />}
        {type === "gas" && <IconGas data-testid="icon-gas" />}
        {type === "unknown" && <IconUnknown data-testid="icon-unknown" />}
        {type === "merged" && <IconMerged data-testid="icon-merged" />}
      </figure>
    );
  }
  if (type === "electric" && ["default", "info"].includes(cardStyle)) {
    return (
      <figure className={`${styles["icon-container"]} ${styles.electric}`}>
        <IconElectric role="presentation" data-testid="icon-electric" />
      </figure>
    );
  }
  if (type === "gas" && ["default", "info"].includes(cardStyle)) {
    return (
      <figure className={`${styles["icon-container"]} ${styles.gas}`}>
        <IconGas data-testid="icon-gas" />
      </figure>
    );
  }
  if (type === "unknown" && ["default", "info"].includes(cardStyle)) {
    return (
      <figure className={`${styles["icon-container"]} ${styles.unknown}`}>
        <IconUnknown data-testid="icon-unknown" />
      </figure>
    );
  }
  if (type === "merged" && ["default", "info"].includes(cardStyle)) {
    return (
      <figure className={`${styles["icon-container"]} ${styles.merged}`}>
        <IconMerged data-testid="icon-merged" />
      </figure>
    );
  }
};
