import React from "react";
import PropTypes from "prop-types";
import { InlineNotification } from "../../Notification/InlineNotification/InlineNotification";
// import { Button } from "../../Button/Button";
import { Text } from "../../Text/Text";
import styles from "./AccountCard.module.scss";
import { ReactComponent as IconElectric } from "./icon_electric.svg";
import { ReactComponent as IconGas } from "./icon_gas.svg";

/**
 * Descriptive text here.
 */
function AccountCard({ className, acctType = "electric" }) {
  return (
    <section className={`${styles.root} ${className}`}>
      <InlineNotification
        hideCloseButton
        kind="warning"
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        role="status"
        subtitle="Notification Subtitle"
        title="Notification Title"
      />
      <figure className={`${styles["icon-container"]} ${styles[acctType]}`}>
        {acctType === "electric" ? <IconElectric /> : <IconGas />}
      </figure>
      <header>
        <Text size="3" weight="semi" inline={true}>
          {acctType}&nbsp;|&nbsp;acct # 1245345
        </Text>
        <Text color="gray-60" size="1" weight="reg">
          124 Main Street NH 120384
        </Text>
      </header>
      <ul className="actions">
        <li>
          <button>Go Paperless</button>
        </li>
        <li>
          <button>Set Up Autopay</button>
        </li>
      </ul>
      <div className="total-due">
        <strong>1245</strong>
        <button>Pay Bill</button>
      </div>
      <a href="#">Acct Details</a>
    </section>
  );
}

export { AccountCard };

AccountCard.propTypes = {
  /** Specify an optional className to be applied to the AccountCard */
  className: PropTypes.string,
  /** Specify which type of account (gas or electric) the card is displaying */
  acctType: PropTypes.oneOf(["electric", "gas"])
};
