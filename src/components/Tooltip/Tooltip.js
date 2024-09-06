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
import styles from "./Tooltip.module.scss";

export const Tooltip = ({ content, renderOpener, placement }) => {
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
      shift(),
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

  return (
    <>
      {renderOpener({ ref: setReference, ...getReferenceProps() })}
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
            {content}
          </div>
        </div>
      )}
    </>
  );
};

Tooltip.propTypes = {
  /** stuff that goes in the tooltip */
  content: PropTypes.node,
  renderOpener: PropTypes.func,
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
