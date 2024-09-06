import React from "react";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
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
      <p style={{ maxWidth: "fit-content" }} {...props}>
        Learn more about Increaser
      </p>
    ),
    placement: "left"
  }
};

export const UsingAnotherComponentAsTheTrigger = {
  args: {
    content: "Test",
    renderOpener: (props) => (
      <Tag
        renderIcon={ChildCareIcon}
        showIcon
        text="Lorem ipsum"
        theme="default"
        {...props}
      />
    ),
    placement: "left"
  }
};

export const TestAgain = {
  args: {
    content: "Test",
    triggerEL: (
      <Tag
        renderIcon={ChildCareIcon}
        showIcon
        text="Lorem ipsum"
        theme="default"
      />
    ),
    placement: "left"
  }
};

export const TestAgainAgain = {
  args: {
    content: "Test",
    triggerEL: (
      <Button
        ariaLabelledBy=""
        id="test"
        kind="primary"
        label="Button"
        onClick={function noRefCheck() {}}
        size="lg"
        type="button"
      />
    ),
    placement: "left"
  }
};
