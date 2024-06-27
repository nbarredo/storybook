import React from "react";
import { Tag as CarbonTag } from "@carbon/react";
import CircleIcon from "@mui/icons-material/Circle";
import PropTypes from "prop-types";
import styles from "./Tag.module.scss";

/**
 * This tag is used to provide information or important details to the user. It is not clickable/interactive.
 */
function Tag({
  text,
  theme = "default",
  showIcon = false,
  renderIcon,
  className,
  ...props
}) {
  const themeName = `theme-${theme}`;
  const getIcon = () => {
    if (renderIcon) return renderIcon;
    return CircleIcon;
  };
  return (
    <CarbonTag
      className={`${styles.tag} ${styles[themeName]} ${renderIcon ? styles["render-icon"] : styles["default-icon"]} ${className}`}
      as="div"
      renderIcon={showIcon ? getIcon() : null}
      {...props}
    >
      {text}
    </CarbonTag>
  );
}

export { Tag };

Tag.propTypes = {
  /** Specify an optional className to be applied to the Component */
  className: PropTypes.string,
  /** The text content of the tag */
  text: PropTypes.string,
  /** Specify the theme of the Text Input. Currently supports the following: */
  theme: PropTypes.oneOf(["default", "important", "green", "pink", "purple"]),
  /** Toggle whether or not an icon will appear inside the tag. */
  showIcon: PropTypes.bool,
  /** Add a custom Material-UI icon to the button.  Search for an icon here:  https://mui.com/material-ui/material-icons/ .  If showIcon is `true`, and no renderIcon is provided, a default "dot" icon will be used.  */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};
