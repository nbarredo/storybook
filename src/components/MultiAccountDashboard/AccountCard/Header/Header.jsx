import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ToTitleCase } from "../../../../utils";
import { LanguageContext } from "../../../LanguageContext/LanguageContext";
import { Text } from "../../../Text/Text";
import styles from "./Header.module.scss";
import IconElectric from "./icon_acct_type_electric.svg?react";
import IconGas from "./icon_acct_type_gas.svg?react";
import IconMerged from "./icon_acct_type_merged.svg?react";
import IconUnknown from "./icon_acct_type_unknown.svg?react";
import IconDanger from "./icon_status_danger.svg?react";
import IconWarning from "./icon_status_warning.svg?react";
import Separator from "./separator.svg?react";

export default function Header({ cardStyle, type, acctID, address }) {
  const { lang } = useContext(LanguageContext);

  const isNumber = typeof acctID === "number";
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
        return `${lang("merged.acct.title")} `;
      default:
        return ToTitleCase(type);
    }
  };

  return (
    <header
      className={`${styles["acct-card-header"]} ${type === "merged" ? styles.merged : ""} `}
    >
      {getIcon(type, cardStyle)}
      <Text
        size="3"
        weight="semi"
        inline={true}
        color={getTextColor()}
        className={`${styles.title} ${isClosed() ? styles.closed : ""}`}
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
          className={`${isNumber ? styles.acctNumber : ""} ${isClosed() ? styles.closed : ""}`}
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
          {type === "merged" ? lang("merged.acct.subtitle") : address}
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
  acctID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** The mailing address of the account displayed in the card */
  address: PropTypes.string.isRequired,
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
