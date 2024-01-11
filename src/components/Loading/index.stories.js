// import React from "react";

import { Loading } from "./index";
const meta = {
  component: Loading,
  title: "In Progress/Loading",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ZCq6KsxrKb6WYU4XceP3ef/Add-Account--UI?type=design&node-id=1782%3A10843&mode=design&t=OMCwYpURvNaoG5qA-1"
    },
    docs: {
      story: {
        inline: false,
        height: "400px"
      }
    }
  }
};

export default meta;

export const Default = {
  args: {
    active: true,
    description: "Loading...",
    small: false,
    withOverlay: false
  }
};

export const Small = {
  args: {
    ...Default.args,
    small: true
  }
};
