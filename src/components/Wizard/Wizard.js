import PropTypes from "prop-types";
import React from "react";
import { ComposedModal, ModalBody, ModalHeader } from "@carbon/react";
import { Loading } from "../Loading/Loading";
import "./Wizard.scss";

/**
 * Description of Wizard Component
 */
function Wizard({
  children,
  className,
  hasCloseButton = true,
  headerTitle,
  id,
  open,
  state,
  isLoading,
  ...props
}) {
  return (
    <ComposedModal
      data-testid={id}
      preventCloseOnClickOutside
      id={id}
      className={`c-wizard c-wizard--${state} ${className || ""} ${isLoading ? "loading" : ""}`}
      open={open}
      {...props}
    >
      {isLoading && (
        <div className="loading-container">
          <Loading withOverlay={false} />
        </div>
      )}
      <ModalHeader closeClassName={hasCloseButton ? "" : "hide-close-button"}>
        <h1 className="c-wizard__header__heading">{headerTitle}</h1>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ComposedModal>
  );
}

export { Wizard };

Wizard.propTypes = {
  /** The text you'd like to appear at the very top of the wizard modal */
  headerTitle: PropTypes.string,
  /** This is the content that will appear in the body of the wizard modal */
  children: PropTypes.node,
  /** An optional class which will be applied to the wizard modal  */
  className: PropTypes.string,
  /** An option ID which can be added to the component */
  id: PropTypes.string,
  /** Determines whether the wizard modal is visible or not  */
  open: PropTypes.bool.isRequired,
  /** Specify the size of the button */
  state: PropTypes.oneOf(["default", "success", "error", "highlight"])
    .isRequired,
  /** Determines whether a close button will appear inside the modal */
  hasCloseButton: PropTypes.bool,
  /** Determines whether the component should display its loading state */
  isLoading: PropTypes.bool,
};
