/* eslint-disable no-unused-vars */
import React from "react";
import { Column, Grid, Link } from "@carbon/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";
import { Button } from "../../Button/Button";
import { InlineNotification } from "../../Notification/InlineNotification/InlineNotification";
import { Tag } from "../../Tag/Tag";
import { TagCTA } from "../../Tag/TagCTA";
import { Text } from "../../Text/Text";
import styles from "./AccountCard.module.scss";
import Header from "./Header/Header";
import Payment from "./Payment/Payment";

/**
 * Descriptive text here.
 */
function AccountCard({
  className,
  acctType = "electric",
  alertText,
  status = "default",
  data
}) {
  return (
    <section className={`${styles.root} ${styles[status]} ${className || ""}`}>
      <article className={styles["content-container"]}>
        <Grid className={styles.grid}>
          <Column
            sm={3}
            md={2}
            lg={4}
            className={`${styles.column} ${styles.header}`}
          >
            <Header acctType={acctType} status={status} />
          </Column>
          <Column
            sm={2}
            md={2}
            lg={4}
            className={`${styles.column} ${styles.actions}`}
          >
            <p>actions</p>
          </Column>
          <Column
            sm={1}
            md={2}
            lg={4}
            className={`${styles.column} ${styles.payment}`}
          >
            <Payment
              status={status}
              totalDue={data.totalDue}
              dateDue={data.dateDue}
            />
          </Column>
          <Column
            sm={2}
            md={2}
            lg={4}
            className={`${styles.column} ${styles.cta}`}
          >
            <Link
              href="#"
              renderIcon={() => (
                <ArrowForwardIcon
                  sx={{ fontSize: 19 }}
                  aria-label="Arrow Right"
                />
              )}
              className={styles.link}
            >
              Acct Details
            </Link>
          </Column>
        </Grid>
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
  /** The text of the card's warning/error message   */
  alertText: PropTypes.string,
  /** The data object that must be passed to the AccountCard */
  data: PropTypes.exact({
    totalDue: PropTypes.string,
    dateDue: PropTypes.string
  }).isRequired
};
