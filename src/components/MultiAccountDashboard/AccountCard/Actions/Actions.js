import React, { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../../../LanguageContext/LanguageContext";
import { Tag } from "../../../Tag/Tag";
import { TagCTA } from "../../../Tag/TagCTA";
import styles from "../AccountCard.module.scss";

const Actions = forwardRef(function Actions(props, refs) {
  const { lang } = useContext(LanguageContext);
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
            <Tag
              showIcon
              text={lang("action.acct.closed.tag.label")}
              theme="important"
            />
          </li>
        </ul>
      ) : (
        <span>
          {cardStyle !== "danger" && (
            <ul className={styles.actions}>
              {showPaperlessBtn && (
                <li ref={paperlessBtnRef}>
                  {hasPaperless ? (
                    <Tag
                      showIcon
                      text={lang("action.paperless.active.btn.label")}
                      theme="default"
                    />
                  ) : (
                    <TagCTA
                      onClick={onClickPaperless}
                      text={lang("action.paperless.inactive.btn.label")}
                      theme="default"
                    />
                  )}
                </li>
              )}
              {showAutopayBtn && (
                <li ref={autoPayBtnRef}>
                  {hasAutopay ? (
                    <Tag
                      showIcon
                      text={lang("action.autopay.active.btn.label")}
                      theme="default"
                    />
                  ) : (
                    <TagCTA
                      onClick={onClickAutopay}
                      text={lang("action.autopay.inactive.btn.label")}
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
