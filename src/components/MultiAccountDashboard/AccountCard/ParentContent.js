import React from "react";
import PropTypes from "prop-types";

function ParentContent() {
  return (
    <>
      <p>Parent</p>
    </>
  );
}

export { ParentContent };

ParentContent.propTypes = {
  /** "Compact" mode should be used when the active user has more than five accounts to display.  This mode allows more information to fit on the screen at once, reducing the amount of scrolling the user might need to do to locate a specific account. */
  compact: PropTypes.bool,
  /** Specify whether or not the current account is enrolled in Autopay */
  hasAutopay: PropTypes.bool,
  /** Specify whether or not the current account is enrolled in Paperless Billing */
  hasPaperless: PropTypes.bool,
  /** Specify whether or not the Autopay button/tag should appear. Note that for the medium breakpoint, you must add logic to determine which one of the two buttons should show (see Figma for details) */
  showAutopayBtn: PropTypes.bool,
  /** Specify whether or not the Paperless Billing button/tag should appear. Note that for the medium breakpoint, you must add logic to determine which one of the two buttons should show (see Figma for details) */
  showPaperlessBtn: PropTypes.bool,
  /** Specify what should occur when the "Go Paperless" tag is clicked. */
  onClickPaperless: PropTypes.func,
  /** Specify what should occur when the "Set Up Autopay" tag is clicked. */
  onClickAutopay: PropTypes.func,
  /** Specify what should occur when the "Pay Bill" button is clicked. */
  onClickPayBill: PropTypes.func,
  /** Specify what should occur when the card body is clicked. Note that action will only occur on viewports where the "Acct Details ->" link is not shown. */
  onCardBodyClick: PropTypes.func.isRequired,
  /** The URL of the card's corresponding details page. At smaller viewports, the user can click the card body to navigate to the account details screen.  At larger viewports, an "Acct Details" link will appear on the card, and the users would need to click that link (and not the card body) to navigate to the details page. */
  acctDetailsURL: PropTypes.string.isRequired,
  /** Specify an optional className to be applied to the AccountCard */
  className: PropTypes.string,
  /** Specify which type of account (gas or electric) the card is displaying */
  type: PropTypes.oneOf(["electric", "gas", "unknown", "merged"]),
  /** Specify which CTA should be shown at the bottom of the card in mobile viewports.  Paperless is the default, but if the account is already enrolled in paperless billing, the autopay CTA must show instead. If the account is already enrolled in both programs, select 'none' to hide the mobile CTA entirely. */
  mobileCTAType: PropTypes.oneOf(["none", "paperless", "autopay"]),
  /** Indicates which card style/layout should be used. "Warning" and "danger" styles will cause the card to have an alert message at the bottom whose text can be customized using the alertText prop.  */
  cardStyle: PropTypes.oneOf([
    "default",
    "info",
    "warning",
    "danger",
    "closed"
  ]),
  /** The text of the card's warning/danger message   */
  alertText: PropTypes.string,
  /** Total amount due on the account. It must be a string preceded by the relevant currency symbol (e.g. "$250.75") */
  totalDue: PropTypes.string.isRequired,
  /** The date the next payment is due in `mm/dd/yy` format.  This should be `null` if no payment is due. */
  dateDue: PropTypes.string,
  /** The account ID can either be the 11-digit account number (in which case the data type would be `number`), or the account's nickname (data type would be `string` in this case) */
  acctID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** The address of the account */
  address: PropTypes.string.isRequired,
  /** Indicates the billing status of the account.  This will control the appearance of the "Payment Due" part of the card. */
  status: PropTypes.oneOf([
    "pmtDue",
    "pmtOverdue",
    "finalBill",
    "nothingDue",
    "credit"
  ])
};
