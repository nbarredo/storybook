import React, { useRef, useState } from "react";
import {
  FloatingArrow,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles
} from "@floating-ui/react";
import PropTypes from "prop-types";
import { Text } from "../Text/Text";
import styles from "./Tooltip.module.scss";

/**
 * This is an informational tooltip aimed at providing additional context or explanation to the user.  This variation of the tooltip can only display text and does not support links, buttons, or other interactive elements as content. It will display when the user hovers over the triggering element (or when tapped/clicked on a mobile device).
 * <br><br>The Tooltip is designed to remain within the parent container whenever possible.  If a Tooltip's `placement` would cause it to overflow the viewport, it will reposition itself --to the extent possible--to prevent this. In the example below, if you set the placement to `left`, note that the tooltip actually appears to the `right` of the triggering element.  That is because, in order to prevent itself from overflowing the container, it "flips" to the other side of the triggering element.
 */
export const Tooltip = ({
  content,
  title,
  placement = "bottom",
  triggerElement
}) => {
  const [isOpen, setIsOpen] = useState(null);

  const arrowRef = useRef(null);

  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      offset(12),
      flip(),
      shift({ padding: 5 }),
      arrow({
        element: arrowRef,
        padding: 10
      })
    ],
    whileElementsMounted: autoUpdate
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { styles: transitionStyles } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
      transform: "scale(0.8)"
    }
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role
  ]);

  const renderTrigger = (element) => {
    return (
      <span
        style={{
          maxWidth: "fit-content",
          maxHeight: "fit-content",
          display: "block"
        }}
        tabIndex="0"
        ref={setReference}
        {...getReferenceProps()}
      >
        {element}
      </span>
    );
  };

  return (
    <>
      {renderTrigger(triggerElement)}

      {isOpen && content && (
        <div
          ref={setFloating}
          style={{ ...floatingStyles, zIndex: 1 }}
          {...getFloatingProps()}
          className={styles["ev-tooltip"]}
        >
          <div style={transitionStyles} className={styles.container}>
            <FloatingArrow
              tipRadius={2}
              height={8}
              ref={arrowRef}
              context={context}
              className={styles.arrow}
            />

            {title && (
              <Text color="white" size="2" weight="semi" marginBottom={3}>
                {title}
              </Text>
            )}

            <Text color="white" size="1" weight="reg">
              {content}
            </Text>
          </div>
        </div>
      )}
    </>
  );
};

Tooltip.propTypes = {
  /** The text you'd like to appear inside the tooltip. This is required. */
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  /** Pass an element or component to serve as the trigger for the tooltip. */
  triggerElement: PropTypes.node.isRequired,
  /** The Tooltip can be placed on four different sides (top, right, left, bottom) in relation to the triggering element. Additionally, it can be aligned to the triggering element's edge, rather than being centered.  The default value is 'bottom'. */
  placement: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end"
  ])
};
