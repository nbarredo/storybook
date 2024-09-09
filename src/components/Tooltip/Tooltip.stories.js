import React from "react";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { Tooltip } from "./Tooltip";

export default {
  title: "Design System/Tooltip/Non-Interactive Tooltip",
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
    content: "Hello. I'm a tooltip.",
    triggerEL: (
      <p
        style={{
          maxWidth: "fit-content",
          borderBottom: `1px dotted var(--gray-40)`
        }}
      >
        This text will trigger a tooltip.
      </p>
    ),
    placement: "right"
  }
};

export const TriggerTag = {
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
    title: "Optional Title",
    placement: "left"
  }
};
TriggerTag.storyName = "Trigger: Tag Component";

export const TriggerButton = {
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
    placement: "top"
  }
};
TriggerButton.storyName = "Trigger: Button Component";
