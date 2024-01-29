import React from "react";
import { TextInput as CarbonTextInput } from "@carbon/react";
import PropTypes from "prop-types";
import "./TextInput.scss";

/**
 * This components helps to properly organize a group of buttons
 */
function TextInput(props) {
  return <CarbonTextInput {...props} />;
}

export { TextInput };

TextInput.propTypes = {
  /** Specify an optional className to be applied to the `<input>` node */
  className: PropTypes.string,
  /** Optionally provide the default value of the `<input>` */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Specify whether the `<input>` should be disabled */
  disabled: PropTypes.bool,
  /** Specify whether to display the character counter. Note: You must specify a maxCount in order for the counter to appear. */
  enableCounter: PropTypes.bool,
  /** Provide text that is used alongside the control label for additional help */
  helperText: PropTypes.node,
  /** Specify whether you want to hide the form field's label */
  hideLabel: PropTypes.bool,
  /** Specify a custom `id` for the `<input>` */
  id: PropTypes.string.isRequired,
  /** `true` to use the inline version. */
  inline: PropTypes.bool,
  /** Specify whether the control is currently invalid */
  invalid: PropTypes.bool,
  /** Provide the text that is displayed when the control is in an invalid state */
  invalidText: PropTypes.node,
  /** Provide the text that will be read by a screen reader when visiting this control */
  labelText: PropTypes.node.isRequired,
  /** Max character count allowed for the input. This is needed in order for enableCounter to display */
  maxCount: PropTypes.number,
  /** Optionally provide an `onChange` handler that is called whenever `<input>` is updated */
  onChange: PropTypes.func,
  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * `<input>` is clicked
   */
  onClick: PropTypes.func,
  /** Specify the placeholder attribute for the `<input>` */
  placeholder: PropTypes.string,
  /** Whether the input should be read-only */
  readOnly: PropTypes.bool,
  /** Specify the size of the Text Input. Currently supports the following: */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** Specify the type of the `<input>` */
  type: PropTypes.string,
  /** Specify the value of the `<input>` (for controlled forms only) */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
