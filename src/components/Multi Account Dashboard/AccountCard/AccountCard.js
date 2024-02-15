import React from "react";
import PropTypes from "prop-types";
// import { Button } from "../../Button/Button";
import { InlineNotification } from "../../Notification/InlineNotification/InlineNotification";
import "./AccountCard.scss";

/**
 * Inline notifications show up in task flows, to notify users of the status of an action or system. They usually appear at the top of the primary content area or close to the item needing attention.  Other "kinds" will eventually be available once we have completed designs for them.
 */
function AccountCard({ className, acctType = "electric" }) {
  return (
    <section className={`ev-account-card ${className}`}>
      <InlineNotification
        hideCloseButton
        kind="warning"
        onClose={() => {}}
        onCloseButtonClick={() => {}}
        role="status"
        subtitle="Notification Subtitle"
        title="Notification Title"
      />
      <figure>
        {acctType}
        <img src="hello.gif" />
      </figure>
      <header>
        <h2>gas| acct # 1245345</h2>
        <h4>address here</h4>
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
