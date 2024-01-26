import React from "react";
import { ButtonSet as CarbonButtonSet } from "@carbon/react";
import PropTypes from "prop-types";
import "./ButtonSet.scss";

/**
 * This components helps to properly organize a group of buttons
 */
function ButtonSet({
  stacked = false,
  children,
  align = "center",
  fixedSize = true
}) {
  return (
    <CarbonButtonSet
      data-testid="ev-button-set"
      stacked={stacked}
      align={align}
      className={`${align} ${fixedSize ? "fixed-size" : ""}`}
    >
      {children}
    </CarbonButtonSet>
  );
}

export { ButtonSet };

ButtonSet.propTypes = {
  /** Specify the alignment of the buttons in the set (left, center, or right) */
  align: PropTypes.oneOf(["left", "center", "right"]),
  /** A collection of button components that you would like to display */
  children: PropTypes.node,
  /** When `true`, buttons will render with the same width, regardless of their content.  When `false`, buttons will size individually, according to their content.  */
  fixedSize: PropTypes.bool,
  /** Specify the button arrangement of the set (vertically stacked or horizontal) */
  stacked: PropTypes.bool
};
