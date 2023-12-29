import React from "react";
import { Button as CarbonButton } from "@carbon/react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

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
      className={`${styles.button} className`}
      disabled={disabled}
      iconDescription="Icon Description"
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(["primary",
    "secondary",
    "danger",
    "ghost",
    "danger--primary",
    "danger--ghost",
    "danger--tertiary",
    "tertiary"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  renderIcon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  size: PropTypes.oneOf(["sm",
    "md",
    "lg",
    "xl",
    "2xl"]),
  type: PropTypes.oneOf(["button",
    "reset",
    "submit"])
};
