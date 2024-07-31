import React from "react";
import PropTypes from "prop-types";
import { Tag } from "../../Tag/Tag";
import { TagCTA } from "../../Tag/TagCTA";
import { TotalBalance } from "../TotalBalance/TotalBalance";
import styles from "./AccountCard.module.scss";

function ParentContent({
  cardStyle,
  showPaperlessBtn,
  paperlessBtnRef,
  hasPaperless,
  showAutopayBtn,
  onClickPaperless,
  autoPayBtnRef,
  hasAutopay,
  onClickAutopay
}) {
  return (
    <>
      <div className={`${styles.column} ${styles.actions}`}>
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
                  <Tag showIcon text="Autopay is On" theme="default" />
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
      </div>
      <div className={styles.column}>
        <TotalBalance
          buttonLabel="Pay Bill"
          title="Total Balance"
          subtitle="$135.11"
        />
      </div>
    </>
  );
}

export { ParentContent };

ParentContent.propTypes = {
  /** */
  acctDetailRef: PropTypes.node,
  /** Specify whether or not the Paperless Billing button/tag should appear. Note that for the medium breakpoint, you must add logic to determine which one of the two buttons should show (see Figma for details) */
  showPaperlessBtn: PropTypes.bool,
  /** The URL of the card's corresponding details page. At smaller viewports, the user can click the card body to navigate to the account details screen.  At larger viewports, an "Acct Details" link will appear on the card, and the users would need to click that link (and not the card body) to navigate to the details page. */
  acctDetailsURL: PropTypes.string.isRequired,

  /** Indicates which card style/layout should be used. "Warning" and "danger" styles will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  cardStyle: PropTypes.oneOf([
    "default",
    "info",
    "warning",
    "danger",
    "closed"
  ]),
  paperlessBtnRef: PropTypes.node,
  hasPaperless: PropTypes.bool,
  showAutopayBtn: PropTypes.bool,
  onClickPaperless: PropTypes.func,
  autoPayBtnRef: PropTypes.node,
  hasAutopay: PropTypes.bool,
  onClickAutopay: PropTypes.func
};
