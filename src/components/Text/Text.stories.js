import React from "react";
import Text from "./Text";

export default {
  title: "In Progress/Text",
  component: Text
};

function Template(args) {
  return <Text {...args} />;
}

export const Basic = Template.bind({});

Basic.args = {
  variant: "p",
  children: "Sample Text",
  inline: true,
  color: "paragraph"
};
