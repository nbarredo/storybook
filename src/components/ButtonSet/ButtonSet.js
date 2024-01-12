import React from "react";
import { ButtonSet as CarbonButtonSet } from "@carbon/react";
import PropTypes from "prop-types";
import "./ButtonSet.scss";

/**
 * This components helps to properly organize a group of buttons
 */
function ButtonSet ({
  stacked = false,
  children,
  align = "center"
}) {
  return (

    <CarbonButtonSet
      stacked={stacked}
      align={align}
      className={`${align}`}
    >
      {children}
    </CarbonButtonSet>
  );
};

export { ButtonSet };

ButtonSet.propTypes = {
  /** Specify the button arrangement of the set (vertically stacked or horizontal) */
  stacked: PropTypes.bool,
  /** Specify the alignment of the buttons in the set (left, center, or right) */
  align: PropTypes.oneOf(["left",
    "center",
    "right"]),
  /** A collection of button components that you would like to display */
  children: PropTypes.node
};
