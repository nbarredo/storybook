import React from "react";
import { ActionableNotification as CarbonActionableNotification } from "@carbon/react";
import PropTypes from "prop-types";
import { Button } from "../../Button/Button";
import "./TotalBalance.scss";

/**
 * This component is used to display balance information on the account dashboard screen.
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
