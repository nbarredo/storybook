import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";
import { Button } from "../../Button/Button";
import { InlineNotification } from "../../Notification/InlineNotification/InlineNotification";
import { TagCTA } from "../../Tag/TagCTA";
import { Text } from "../../Text/Text";
import styles from "./AccountCard.module.scss";
import { ReactComponent as IconElectric } from "./icon_electric.svg";
import { ReactComponent as IconGas } from "./icon_gas.svg";

// import { ReactComponent as IconAttentionFilled } from "./icon_attention_filled.svg";
// import { ReactComponent as IconWarningFilled } from "./icon_warning_filled.svg";

/**
 * Descriptive text here.
 */
function AccountCard({ className, acctType = "electric" }) {
  return (
    <section className={`${styles.root} ${className}`}>
      <figure className={`${styles["icon-container"]} ${styles[acctType]}`}>
        {acctType === "electric" ? <IconElectric /> : <IconGas />}
      </figure>
      <header>
        <Text size="3" weight="semi" inline={true}>
          {acctType}&nbsp;<span className={styles.pipe}>|</span>&nbsp;acct #
          1245345
        </Text>
        <address>
          <Text color="gray-60" size="1" weight="reg">
            124 Main Street NH 120384
          </Text>
        </address>
      </header>
      <ul className="actions">
        <li>
          <TagCTA onClick={() => {}} text="Lorem ipsum" theme="default" />
        </li>
        <li>
          <button>Set Up Autopay</button>
        </li>
      </ul>
      <aside className={styles["payment-area"]}>
        <div className={styles["total-due"]}>
          <Text color="gray-60" size="2" weight="semi" inline={true}>
            <strong>1245</strong>
            Due 02/06/23
          </Text>
        </div>
        <div className={styles["button-container"]}>
          <Button kind="tertiary" label="Pay Bill" size="sm" type="button" />
        </div>
      </aside>
      <Button
        kind="ghost"
        label="Acct Details"
        size="sm"
        type="button"
        renderIcon={ArrowForwardIcon}
      />
      <InlineNotification
        hideCloseButton
        kind="warning"
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        role="status"
        title="This acct requires your immediate attention"
        className={styles.alert}
      />
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
