import React from "react";
import PropTypes from "prop-types";
import styles from "./Text.module.scss";

function Text({
  variant = "p",
  id,
  inline,
  children,
  marginTop,
  marginBottom,
  className = "",
  color = "paragraph",
  ariaHeadingLevel,
  ariaHidden
}) {
  const marginTopClass =
    marginTop || marginTop === 0 ? `mt-${marginTop}` : undefined;
  const marginBottomClass =
    marginBottom || marginBottom === 0 ? `mb-${marginBottom}` : undefined;

  const getVariant = () => {
    switch (variant.toLowerCase()) {
      case "h1":
        return { element: "h1", role: "heading" };
      case "h2":
        return { element: "h2", role: "heading" };
      case "h3":
        return { element: "h3", role: "heading" };
      case "h4":
        return { element: "h4", role: "heading" };
      case "bigparagraph":
        return {
          element: "p",
          variantClass: "big-paragraph"
        };
      case "p":
      case "body":
        return { element: "p" };
      case "largetitle":
        return {
          element: "p",
          variantClass: "large-title"
        };
      case "mediumtitle":
        return {
          element: "p",
          variantClass: "medium-title"
        };
      case "smalltitle":
        return {
          element: "p",
          variantClass: "small-title"
        };
      case "subtitle":
        return {
          element: "p",
          variantClass: "subtitle"
        };
      case "caption":
        return {
          element: "p",
          variantClass: "caption"
        };
      default:
        return null;
    }
  };
  return (
    <span className={`${styles.root} ${inline ? styles.inline : styles.block}`}>
      {React.createElement(
        getVariant().element,
        {
          className: `
          ${inline ? styles.inline : styles.block}
          ${getVariant().variantClass ?? ""} ${styles[marginTopClass] ?? ""} ${
            styles[marginBottomClass] ?? ""
          } 
          ${styles[color]}
          ${className}`,
          id: id ?? null,
          role: getVariant().role,
          "aria-level": getVariant().role ? ariaHeadingLevel : null,
          "aria-hidden": ariaHidden?.toString()
        },
        children
      )}
    </span>
  );
}

Text.propTypes = {
  /** A string which will determine the styling of the rendered text */
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "bigparagraph",
    "p",
    "largetitle",
    "mediumtitle",
    "smalltitle",
    "subtitle",
    "caption"
  ]),
  children: PropTypes.node,
  /** Determines whether the generated text will be inline or block */
  inline: PropTypes.bool,
  /** Specify a margin to apply above the text. This only applies if inline=false. */
  marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  /** Specify a margin to apply below the text. This only applies if inline=false */
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  /** Specify a classname to apply styles. Example error message for an error color text. */
  className: PropTypes.string,
  /** A string which will determine the styling of the rendered text */
  color: PropTypes.oneOf([
    "title",
    "paragraph",
    "disabled",
    "error",
    "success",
    "warning",
    "primary",
    "secondary"
  ]),
  /** An optional unique id for the text component.  This is helpful if you want to refer to this element using an `ariaLabelledBy` on some other element */
  id: PropTypes.string,
  /** If your selected variant is an H1, H2, H3, or H4, you can use this optional prop to override the aria heading level. The use case would be:  You run the axe Dev Tools scan and it says, "Page must contain a level 1 header", but the Figma design for your page shows the heading as being an H3 in terms of appearance so you want to tell accessibility devices that no, in fact, the H3 should be thought of as an H1 */
  ariaHeadingLevel: PropTypes.oneOf([1, 2, 3, 4]),
  /** Setting this to 'true' will make the text invisible to screen readers. */
  ariaHidden: PropTypes.bool
};

export { Text };
