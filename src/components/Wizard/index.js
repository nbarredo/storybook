import React, { useRef, useState } from "react";
import { ComposedModal, ModalHeader, ModalBody } from "@carbon/react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "./Wizard.scss";

/**
 * Description of Wizard Component
 */
function Wizard ({
  headerTitle,
  state,
  open,
  setOpen,
  children,
  id,
  className,
  ...props
}) {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    setInProp(true);
    return () => {
      document.body.style.overflow = "overlay";
    };
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={200}
      classNames="wizard"
    >
      <ComposedModal
        data-testid={id}
        id={id}
        ref={nodeRef}
        className={`c-wizard ${state} ${className}`}
        open={open}
        {...props}
      >
        <ModalHeader>
          <h1 className="c-wizard__header__heading">{headerTitle}</h1>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ComposedModal>
    </CSSTransition>
  );
};

export { Wizard };

Wizard.propTypes = {
  /** An optional class which will be applied to the button  */
  className: PropTypes.string,
  /** Use to set the disabled/enabled state of the Button */
  disabled: PropTypes.bool,
  /** Specify the kind of Button you want to create */
  kind: PropTypes.oneOf(["primary",
    "secondary",
    "danger",
    "ghost",
    "danger--primary",
    "danger--ghost",
    "danger--tertiary",
    "tertiary",
    "ghost--subtle"]),
  /** The text content of the button */
  label: PropTypes.string,
  /** A function that should be triggererd when the Button is clicked */
  onClick: PropTypes.func,
  /** Add a Material-UI icon to the button.  Search for an icon here:  https://mui.com/material-ui/material-icons/   */
  renderIcon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  /** Specify the size of the button */
  size: PropTypes.oneOf(["sm",
    "md",
    "lg"]),
  /** Optional prop to specify the type of the Button */
  type: PropTypes.oneOf(["button",
    "reset",
    "submit"])
};
