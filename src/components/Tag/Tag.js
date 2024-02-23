import React from "react";
import { Tag as CarbonTag } from "@carbon/react";
import PropTypes from "prop-types";
import styles from "./Tag.module.scss";

/**
 * This tag is used to provide information or important details to the user. It is not clickable/interactive.
 */
function Tag({ text, theme = "default", ...props }) {
  const themeName = `theme-${theme}`;
  return (
    <CarbonTag
      className={`${styles.tag} ${styles[themeName]}`}
      as="div"
      {...props}
    >
      {text}
    </CarbonTag>
  );
}

export { Tag };

Tag.propTypes = {
  /** The text content of the tag */
  text: PropTypes.string,
  /** Specify the theme of the Text Input. Currently supports the following: */
  theme: PropTypes.oneOf(["default", "important", "green", "pink", "purple"]),
  /** Add a Material-UI icon to the button.  Search for an icon here:  https://mui.com/material-ui/material-icons/   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
