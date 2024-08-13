import React, { forwardRef } from "react";
import { ActionableNotification as CarbonActionableNotification } from "@carbon/react";
import PropTypes from "prop-types";
import { Button } from "../../Button/Button";
import { Text } from "../../Text/Text";
import "./TotalBalance.scss";
import { ReactComponent as Separator } from "./separator.svg";

/**
 * This component is used to display balance information on the account dashboard screen.
 */
const TotalBalance = forwardRef(function TotalBalance(props, ref) {
  return (
    <div ref={ref} data-testid="ev-total-balance">
      <CarbonActionableNotification
        hideCloseButton={true}
        className={`ev-total-balance ${props.className}`}
        actionButtonLabel={null}
        kind="warning"
        inline={true}
        subtitle={props.subtitle}
        title={props.title}
      >
        {props.dueDate && (
          <div className="due-date-container">
            <div aria-hidden="true" className="separator">
              <Separator data-testid="separator" />
            </div>
            <Text
              marginBottom={0}
              marginTop={0}
              size="1"
              weight="semi"
              className="due-date"
            >
              Due {props.dueDate}
            </Text>
          </div>
        )}

        <Button
          label={` ${props.buttonLabel} `}
          size="md"
          onClick={props.onClick}
        />
      </CarbonActionableNotification>
    </div>
  );
});

export default TotalBalance;

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
  onClick: PropTypes.func,

  /** The date on which the payment is due. It should follow the format of `mm/dd/yy`. */
  dueDate: PropTypes.string
};
