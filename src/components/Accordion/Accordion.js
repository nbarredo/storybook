import React from "react";
import { AccordionItem, Accordion as CarbonAccordion } from "@carbon/react";
import PropTypes from "prop-types";
import "./Accordion.scss";

/**
 * An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
 */
function Accordion({ children, title, icon }) {
  const createTitle = () => {
    return (
      <div className="title-container">
        {icon}
        <p>{title}</p>
      </div>
    );
  };

  return (
    <CarbonAccordion>
      <AccordionItem title={title && createTitle()}>{children}</AccordionItem>
    </CarbonAccordion>
  );
}

export { Accordion };

Accordion.propTypes = {
  /** An optional icon to precede the title text */
  icon: PropTypes.node,
  /** The title text for the accordion */
  title: PropTypes.string,
  /** The content that appears inside the accordion when it is open/expanded */
  children: PropTypes.node,
};
