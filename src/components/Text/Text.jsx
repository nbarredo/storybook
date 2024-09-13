import PropTypes from "prop-types";
import { ColorPalette } from "../../utils/ColorPalette";
import styles from "./Text.module.scss";

/**
 * This component is used to render properly-styled text.
 */
function Text({
  weight = "reg",
  id,
  inline = false,
  children,
  className,
  marginTop,
  marginBottom,
  color = "gray-70",
  // ariaHeadingLevel,
  ariaHidden,
  size = "2",
}) {
  const marginTopClass = marginTop ? `mt-${marginTop}` : undefined;

  const marginBottomClass = marginBottom ? `mb-${marginBottom}` : undefined;

  return (
    <span
      className={`
    ${inline ? styles.inline : styles.block}
    ${styles[marginTopClass] ?? ""}
    ${styles[marginBottomClass] ?? ""}
    `}
    >
      <p
        className={`${styles["ev-text"]} font-size-${size}-${weight} ${className || ""}`}
        style={{ color: `var(--${color})` }}
        id={id ?? null}
        aria-hidden={ariaHidden?.toString()}
        // "aria-level": getVariant().role ? ariaHeadingLevel : null,
      >
        {children}
      </p>
    </span>
  );
}

Text.propTypes = {
  /** Determines the weight of the rendered text */
  weight: PropTypes.oneOf(["light", "reg", "semi", "bold"]),
  /** Determines the size of the rendered text */
  size: PropTypes.oneOf([
    "00",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ]),
  children: PropTypes.node,
  /** Specify an optional className to be applied to the Text */
  className: PropTypes.string,
  /** Determines whether the generated text will be inline or block */
  inline: PropTypes.bool,
  /** Specify a margin to apply above the text. This only applies if inline=false. */
  marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
  /** Specify a margin to apply below the text. This only applies if inline=false */
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
  /** A string which will determine the styling of the rendered text */
  color: PropTypes.oneOf(Object.keys(ColorPalette)),
  /** An optional unique id for the text component.  This is helpful if you want to refer to this element using an `ariaLabelledBy` on some other element */
  id: PropTypes.string,
  /** If your selected variant is an H1, H2, H3, or H4, you can use this optional prop to override the aria heading level. The use case would be:  You run the axe Dev Tools scan and it says, "Page must contain a level 1 header", but the Figma design for your page shows the heading as being an H3 in terms of appearance so you want to tell accessibility devices that no, in fact, the H3 should be thought of as an H1 */
  // ariaHeadingLevel: PropTypes.oneOf([1, 2, 3, 4]),
  /** Setting this to 'true' will make the text invisible to screen readers. */
  ariaHidden: PropTypes.bool,
};

export { Text };
