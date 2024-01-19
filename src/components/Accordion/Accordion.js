import React from "react";
import { AccordionItem, Accordion as CarbonAccordion } from "@carbon/react";
import PropTypes from "prop-types";
import "./Accordion.scss";

/**
 * An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
 */
function Accordion({ children, title, icon, open = false }) {
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
      <AccordionItem
        open={open}
        title={title && createTitle()}
        className={icon && "icon"}
      >
        {children}
      </AccordionItem>
    </CarbonAccordion>
  );
}

export { Accordion };

Accordion.propTypes = {
  /** The content that appears inside the accordion when it is open/expanded */
  children: PropTypes.node,
  /** An optional icon to precede the title text */
  icon: PropTypes.node,
  /** The title text for the accordion */
  title: PropTypes.string.isRequired,
  /** When set to `true`, the accordion will be open by default. NOTE: Currently, this prop only affects how the accordion will appear on its INITIAL RENDER. The issue is currently being investigated by the dev team.  learn more here: https://github.com/carbon-design-system/carbon/issues/15347  */
  open: PropTypes.bool
};
