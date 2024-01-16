import React from "react";
import { AccordionItem, Accordion as CarbonAccordion } from "@carbon/react";
import HelpIcon from "@mui/icons-material/Help";
import PropTypes from "prop-types";
import "./Accordion.scss";

/**
 * An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
 */
function Accordion({ children, title, icon }) {
  const createTitle = () => {
    return (
      <>
        <span>
          <HelpIcon />
        </span>

        <h1>{title}</h1>
      </>
    );
  };

  return (
    <CarbonAccordion>
      <AccordionItem title={createTitle()}>{children}</AccordionItem>
    </CarbonAccordion>
  );
}

export { Accordion };

Accordion.propTypes = {
  /** An optional icon to precede the title text */
  icon: PropTypes.node,
  /** The title text for the accordion */
  title: PropTypes.node,
  /** A collection of button components that you would like to display */
  children: PropTypes.node,
};
