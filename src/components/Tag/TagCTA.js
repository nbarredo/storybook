import React from "react";
import { Tag as CarbonTag } from "@carbon/react";
import PropTypes from "prop-types";
import styles from "./TagCTA.module.scss";

/**
 * This interactive tag is used to provide information or important details, and can be used as a CTA or a search filter display.
 */
function TagCTA({ text, theme = "default", className, ...props }) {
  const themeName = `theme-${theme}`;
  return (
    <div
      className={`${styles["gradient-border"]} ${styles[themeName]} ${className}`}
    >
      <CarbonTag
        className={`${styles["tag-cta"]} ${styles[themeName]} ${props.renderIcon ? styles.icon : ""}`}
        {...props}
      >
        {text}
      </CarbonTag>
    </div>
  );
}

export { TagCTA };

TagCTA.propTypes = {
  /** Specify an optional className to be applied to the Text */
  className: PropTypes.string,
  /** The text content of the tag */
  text: PropTypes.string,
  /** Specify what should occur when the tag is clicked */
  onClick: PropTypes.func,
  /** Specify the theme of the Text Input. Currently supports the following: */
  theme: PropTypes.oneOf(["default", "blue"]),
  /** Add a Material-UI icon to the button.  Search for an icon here:  https://mui.com/material-ui/material-icons/   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
