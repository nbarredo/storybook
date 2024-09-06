import React from "react";
import { Tooltip } from "./Tooltip";

export default {
  title: "Design System/Tooltip",
  component: Tooltip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/JewKs8uC7fp1AFHY5kApSG/One-Source-Components?m=auto&node-id=5-2243&t=dPTQuqJeqmnP31mk-1"
    }
  }
};

export const Default = {
  args: {
    content: "Test",
    renderOpener: (props) => (
      <p {...props} style={{ "max-width": "fit-content" }}>
        Learn more about Increaser
      </p>
    ),
    placement: "left"
  }
};
