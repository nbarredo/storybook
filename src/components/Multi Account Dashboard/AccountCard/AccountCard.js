import React from "react";
import { Link } from "@carbon/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";
import { ToTitleCase } from "../../../utils";
import { Button } from "../../Button/Button";
import { InlineNotification } from "../../Notification/InlineNotification/InlineNotification";
import { Tag } from "../../Tag/Tag";
import { TagCTA } from "../../Tag/TagCTA";
import { Text } from "../../Text/Text";
import styles from "./AccountCard.module.scss";
import { ReactComponent as IconElectric } from "./icon_electric.svg";
import { ReactComponent as IconError } from "./icon_error_filled.svg";
import { ReactComponent as IconGas } from "./icon_gas.svg";
import { ReactComponent as IconWarning } from "./icon_warning_filled.svg";

/**
 * Descriptive text here.
 */
function AccountCard({ className, acctType = "electric", alertText, status }) {
  return (
    <section className={`${styles.root} ${styles[status]} ${className || ""}`}>
      <article className={styles["content-container"]}>
        <header>
          {getIcon(acctType, status)}

          <Text size="3" weight="semi" inline={true}>
            {ToTitleCase(acctType)}&nbsp;<span className={styles.pipe}>|</span>
            &nbsp;acct # 1245345
          </Text>
          <address>
            <Text color="gray-60" size="1" weight="reg">
              124 Main Street NH 120384
            </Text>
          </address>
        </header>

        <ul className={styles.actions}>
          <li>
            <TagCTA onClick={() => {}} text="Go Paperless" theme="default" />
          </li>
          <li>
            <Tag icon text="Set Up Autopay" theme="default" />
          </li>
        </ul>

        <aside className={styles["payment-area"]}>
          <div className={styles["total-due"]}>
            <Text color="gray-60" size="2" weight="semi" inline={true}>
              <strong>$9,900,853.02</strong>
              Due 02/06/23
            </Text>
          </div>
          <div className={styles["button-container"]}>
            <Button kind="tertiary" label="Pay Bill" size="sm" type="button" />
          </div>
        </aside>

        <Link
          href="#"
          renderIcon={() => (
            <ArrowForwardIcon sx={{ fontSize: 20 }} aria-label="Arrow Right" />
          )}
          className={styles.link}
        >
          Acct Details
        </Link>
      </article>
      {status === "warning" && (
        <InlineNotification
          hideCloseButton
          kind="warning"
          onClose={() => {}}
          onCloseButtonClick={() => {}}
          role="status"
          title={alertText}
          className={styles.alert}
        />
      )}
      {status === "error" && (
        <InlineNotification
          hideCloseButton
          kind="error"
          onClose={() => {}}
          onCloseButtonClick={() => {}}
          role="status"
          title={alertText}
          className={styles.alert}
        />
      )}
    </section>
  );
}

export { AccountCard };

AccountCard.propTypes = {
  /** Specify an optional className to be applied to the AccountCard */
  className: PropTypes.string,
  /** Specify which type of account (gas or electric) the card is displaying */
  acctType: PropTypes.oneOf(["electric", "gas"]),
  /** Indicates whether the card should display with an elevated status. "Warning" and "danger" statuses will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  status: PropTypes.oneOf(["default", "warning", "error"]),
  /** Indicates whether the card should display with an elevated status. "Warning" and "danger" statuses will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  alertText: PropTypes.string
};

export const getIcon = (acctType, status) => {
  if (status === "warning") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.warning}`}>
        <IconWarning />
      </figure>
    );
  }
  if (status === "error") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.error}`}>
        <IconError />
      </figure>
    );
  }
  if (acctType === "electric" && status === "default") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.electric}`}>
        <IconElectric />
      </figure>
    );
  }
  if (acctType === "gas" && status === "default") {
    return (
      <figure className={`${styles["icon-container"]} ${styles.gas}`}>
        <IconGas />
      </figure>
    );
  }
};
