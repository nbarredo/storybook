import React from "react";
import { Button as CarbonButton } from "@carbon/react";
import PropTypes from "prop-types";
import "./Button.scss";

/**
 * Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it.
 */
function Button({
  disabled,
  onClick,
  label,
  kind,
  size = "md",
  type,
  renderIcon,
  className = "",
  fullWidth = false,
  id,
  ariaLabelledBy
}) {
  let buttonType;
  if (kind === "ghost--subtle") {
    className = `${className || ""} es--btn--ghost--subtle`;
    buttonType = "ghost";
  } else {
    buttonType = kind;
  }

  if (renderIcon) className += " with-icon";
  if (fullWidth) className += " full-width";

  const handleClick = (evt) => {
    if (disabled) {
      evt.preventDefault();
      return false;
    }
    return onClick(evt);
  };

  return (
    <>
      <CarbonButton
        className={`ev-button ${className || ""}`}
        aria-disabled={disabled}
        iconDescription="Icon Description"
        kind={buttonType}
        onClick={(evt) => handleClick(evt)}
        renderIcon={renderIcon}
        size={size}
        type={type}
        id={id}
        aria-labelledby={ariaLabelledBy}
      >
        <span className="label-container">{label}</span>
      </CarbonButton>
    </>
  );
}

export { Button };

Button.propTypes = {
  /** An optional class which will be applied to the button  */
  className: PropTypes.string,
  /** Use to set the disabled/enabled state of the Button */
  disabled: PropTypes.bool,
  /** When this is set to 'true', the button will expand to fill the width of its container */
  fullWidth: PropTypes.bool,
  /** Specify the kind of Button you want to create */
  kind: PropTypes.oneOf([
    "primary",
    "secondary",
    "ghost",
    "danger--primary",
    "danger--ghost",
    "danger--tertiary",
    "tertiary",
    "ghost--subtle"
  ]),
  /** The text content of the button */
  label: PropTypes.string,
  /** A function that should be triggered when the Button is clicked */
  onClick: PropTypes.func,
  /** Add a Material-UI icon to the button.  Search for an icon here:  https://mui.com/material-ui/material-icons/   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** Specify the size of the button */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Optional prop to specify the type of the Button */
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  /** A unique ID for the Button */
  id: PropTypes.string,
  /** For a11y purposes, if you need the button's accessible name to come from another DOM element instead of from the button's own text.  This value must be a valid 'id' or series of 'ids' (separated by spaces) from some other DOM element(s).   */
  ariaLabelledBy: PropTypes.string
};
