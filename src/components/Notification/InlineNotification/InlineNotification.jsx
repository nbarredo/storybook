import React from "react";
import { InlineNotification as CarbonInlineNotification } from "@carbon/react";
import PropTypes from "prop-types";
import "./InlineNotification.scss";

/**
 * Inline notifications show up in task flows, to notify users of the status of an action or system. They usually appear at the top of the primary content area or close to the item needing attention.  Other "kinds" will eventually be available once we have completed designs for them.
 */
function InlineNotification(props) {
  return (
    <CarbonInlineNotification
      {...props}
      className={`ev-inline-notification ${props.className || ""}`}
    />
  );
}

export { InlineNotification };

InlineNotification.propTypes = {
  /** Provide a description for "close" icon button that can be read by screen readers */
  "aria-label": PropTypes.string,

  /** Specify the content */
  children: PropTypes.node,

  /** Specify an optional className to be applied to the notification box */
  className: PropTypes.string,

  /** Specify the close button should be disabled, or not */
  hideCloseButton: PropTypes.bool,

  /** Specify what state the notification represents */
  kind: PropTypes.oneOf(["warning", "info", "error"]),
  /* TODO: These kinds will eventually be available once we have completed designs for them 
  kind: PropTypes.oneOf([
    "info-square",
    "success",
    "warning",
    "warning-alt"
  ]), */

  /** Provide a function that is called when menu is closed */
  onClose: PropTypes.func,

  /** Provide a function that is called when the close button is clicked */
  onCloseButtonClick: PropTypes.func,

  /** By default, this value is "status". You can also provide an alternate role if it makes sense from the accessibility-side. */
  role: PropTypes.oneOf(["alert", "log", "status"]),

  /** Provide a description for "status" icon that can be read by screen readers */
  statusIconDescription: PropTypes.string,

  /** Specify the subtitle */
  subtitle: PropTypes.string,

  /** Specify the title */
  title: PropTypes.string
};
