/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { TagCTA } from "../../../Tag/TagCTA";
import styles from "./MobileCTA.module.scss";

/**
 * Descriptive text here.
 */
export default function MobileCTA({ onClick, text, theme }) {
  return (
    <TagCTA
      onClick={onClick}
      text={text}
      theme={theme === "paperless" ? "default" : "blue"}
      className={`${styles["mobile-cta"]} ${styles[theme]}`}
    />
  );
}

export { MobileCTA };

MobileCTA.propTypes = {
  /** The text content of the tag */
  text: PropTypes.string.isRequired,
  /** Specify what should occur when the tag is clicked */
  onClick: PropTypes.func,
  /** Specify the theme of the Text Input. Currently supports the following: */
  theme: PropTypes.oneOf(["paperless", "autopay"]).isRequired
};
