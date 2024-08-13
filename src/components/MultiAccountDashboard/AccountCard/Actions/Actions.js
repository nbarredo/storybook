import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Tag } from "../../../Tag/Tag";
import { TagCTA } from "../../../Tag/TagCTA";
import styles from "../AccountCard.module.scss";

const Actions = forwardRef(function Actions(props, refs) {
  const {
    isClosed,
    hasAutopay,
    hasPaperless,
    showAutopayBtn,
    showPaperlessBtn,
    cardStyle,
    onClickPaperless,
    onClickAutopay
  } = props;

  const { autoPayBtnRef, paperlessBtnRef } = refs;
  return (
    <div className={`${styles.column} ${styles.actions}`}>
      {isClosed ? (
        <ul className={styles.actions}>
          <li>
            <Tag showIcon text="Account Closed" theme="important" />
          </li>
        </ul>
      ) : (
        <span>
          {cardStyle !== "danger" && (
            <ul className={styles.actions}>
              {showPaperlessBtn && (
                <li ref={paperlessBtnRef}>
                  {hasPaperless ? (
                    <Tag showIcon text="Paperless is On" theme="default" />
                  ) : (
                    <TagCTA
                      onClick={onClickPaperless}
                      text="Go Paperless"
                      theme="default"
                    />
                  )}
                </li>
              )}
              {showAutopayBtn && (
                <li ref={autoPayBtnRef}>
                  {hasAutopay ? (
                    <Tag showIcon text="Auto Pay is On" theme="default" />
                  ) : (
                    <TagCTA
                      onClick={onClickAutopay}
                      text="Set Up Auto Pay"
                      theme="blue"
                    />
                  )}
                </li>
              )}
            </ul>
          )}
        </span>
      )}
    </div>
  );
});

export default Actions;

Actions.propTypes = {
  /** Specify whether the account is active or closed */
  isClosed: PropTypes.bool.isRequired,
  /** Specify whether or not the current account is enrolled in Autopay */
  hasAutopay: PropTypes.bool.isRequired,
  /** Specify whether or not the current account is enrolled in Paperless Billing */
  hasPaperless: PropTypes.bool.isRequired,
  /** Specify whether or not the Autopay button/tag should appear. Note that for the medium breakpoint, you must add logic to determine which one of the two buttons should show (see Figma for details) */
  showAutopayBtn: PropTypes.bool.isRequired,
  /** Specify whether or not the Paperless Billing button/tag should appear. Note that for the medium breakpoint, you must add logic to determine which one of the two buttons should show (see Figma for details) */
  showPaperlessBtn: PropTypes.bool.isRequired,
  /** Specify what should occur when the "Go Paperless" tag is clicked. */
  onClickPaperless: PropTypes.func.isRequired,
  /** Specify what should occur when the "Set Up Autopay" tag is clicked. */
  onClickAutopay: PropTypes.func.isRequired,
  /** Indicates which card style/layout should be used. "Warning" and "danger" styles will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  cardStyle: PropTypes.oneOf(["default", "info", "warning", "danger", "closed"])
    .isRequired
};
