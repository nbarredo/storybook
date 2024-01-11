import React from "react";
import PropTypes from "prop-types";

export const WizardDescription = (props) => {
  return <div className="c-wizard__description">{props.children}</div>;
};

WizardDescription.propTypes = {
  children: PropTypes.node
};

export const WizardSlot = (props) => {
  return (
    <div className="c-wizard__slot c-wizard__slot--1">
      {props.recommended
        ? (
        <div className="c-wizard__highlight-badge">
          <p>Recommended</p>
        </div>
          )
        : (
            ""
          )}
      {props.children}
    </div>
  );
};

WizardSlot.propTypes = {
  children: PropTypes.node,
  recommended: PropTypes.node
};

export const WizardBtnGrp = (props) => {
  return (
    <div className="c-wizard__btn-group c-wizard__btn-group--right">
      {props.children}
    </div>
  );
};

WizardBtnGrp.propTypes = {
  children: PropTypes.node
};

export const WizardSlotBtm = (props) => {
  return <div className="c-wizard__success-slot-btm">{props.children}</div>;
};

WizardSlotBtm.propTypes = {
  children: PropTypes.node
};
