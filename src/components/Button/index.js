import React from "react";
import { Button as CarbonButton } from "@carbon/react";
import PropTypes from "prop-types";
import "./Button.scss";

/**
 * Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.
 */
function Button ({
  disabled,
  onClick,
  label,
  kind,
  size,
  type,
  renderIcon,
  className
}) {
  return (
    <CarbonButton
      className={className || ""}
      disabled={disabled}
      iconDescription='Icon Description'
      kind={kind}
      onClick={(evt) => onClick(evt)}
      renderIcon={renderIcon}
      size={size}
      type={type}
    >
      {label}
    </CarbonButton>
  );
};

export { Button };

Button.propTypes = {
  /** An optional class which will be applied to the button  */
  className: PropTypes.string,
  /** Use to set the disabled/enabled state of the Button */
  disabled: PropTypes.bool,
  /** Specify the kind of Button you want to create */
  kind: PropTypes.oneOf(["primary",
    "secondary",
    "danger",
    "ghost",
    "danger--primary",
    "danger--ghost",
    "danger--tertiary",
    "tertiary"]),
  /** The text content of the button */
  label: PropTypes.string,
  /** A function that should be triggererd when the Button is clicked */
  onClick: PropTypes.func,
  /** Add a Material-UI icon to the button.  Search for an icon here:  https://mui.com/material-ui/material-icons/   */
  renderIcon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  /** Specify the size of the button */
  size: PropTypes.oneOf(["sm",
    "md",
    "lg"]),
  /** Optional prop to specify the type of the Button */
  type: PropTypes.oneOf(["button",
    "reset",
    "submit"])
};
