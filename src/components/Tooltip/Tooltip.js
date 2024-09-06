/* eslint-disable react/no-unescaped-entities */
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

export const Tooltip = ({ content, renderOpener, placement, triggerEL }) => {
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

  const renderOpenerTest = (element) => {
    return (
      <span
        style={{
          maxWidth: "fit-content",
          maxHeight: "fit-content",
          display: "block"
        }}
        ref={setReference}
        {...getReferenceProps()}
      >
        {element}
      </span>
    );
  };

  return (
    <>
      {renderOpener
        ? renderOpener({ ref: setReference, ...getReferenceProps() })
        : renderOpenerTest(triggerEL)}

      {/*
      {renderOpenerTest(triggerEL)}
      {renderOpener &&
        renderOpener({ ref: setReference, ...getReferenceProps() })} */}
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
  /** The text you'd like to appear inside the tooltip */
  content: PropTypes.string,

  renderOpener: PropTypes.func,
  triggerEL: PropTypes.node,
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
