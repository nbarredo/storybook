import React from "react";
import { PropTypes } from "prop-types";
import { Loading as CarbonLoading } from "@carbon/react";
import "./Loading.scss";

export const Loading = ({
  active,
  className,
  description,
  small,
  withOverlay
}) => {
  return (
    <CarbonLoading
     active={active}
     className= {className}
     description={description}
     small={small}
     withOverlay={withOverlay}
    />
  );
};
Loading.propTypes = {
  /** Specify whether you want the loading indicator to be spinning or not */
  active: PropTypes.bool,
  /** An optional class which will be applied to the component  */
  className: PropTypes.string,
  /** Specify a description that would be used to best describe the loading state */
  description: PropTypes.string,
  /** Choose whether or not to use the small variant */
  small: PropTypes.bool,
  /** Specify whether you want the loader to be applied with an overlay */
  withOverlay: PropTypes.bool
};
