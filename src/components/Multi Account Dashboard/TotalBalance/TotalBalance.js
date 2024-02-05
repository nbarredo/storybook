import React from "react";
import { ActionableNotification as CarbonActionableNotification } from "@carbon/react";
import PropTypes from "prop-types";
import { Button } from "../../Button/Button";
import "./TotalBalance.scss";

/**
 * Inline notifications show up in task flows, to notify users of the status of an action or system. They usually appear at the top of the primary content area or close to the item needing attention.  Other "kinds" will eventually be available once we have completed designs for them.
 */
function TotalBalance(props) {
  return (
    <CarbonActionableNotification
      hideCloseButton={true}
      className={`ev-total-balance ${props.className}`}
      actionButtonLabel={null}
      kind="warning"
      inline={true}
      subtitle={props.subtitle}
      title={props.title}
    >
      <Button
        label={` ${props.buttonLabel} `}
        size="md"
        onClick={props.onClick}
      />
    </CarbonActionableNotification>
  );
}

export { TotalBalance };

TotalBalance.propTypes = {
  /** Specify an optional className to be applied to the notification box */
  className: PropTypes.string,

  /** Specify the subtitle */
  subtitle: PropTypes.string,

  /** Specify the title */
  title: PropTypes.string,

  /** The label that will appear on the action button. */
  buttonLabel: PropTypes.string.isRequired,

  /** Specify what will happen when the action button is clicked */
  onClick: PropTypes.func
};
