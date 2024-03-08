import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import { Text } from "../Text/Text";
import { Accordion } from "./Accordion";
import image from "./art_acct_number.png";

const meta = {
  title: "Approved for Use/Accordion",
  component: Accordion
};

export default meta;

export const Default = {
  args: {
    title: "Where do I find my account number?",
    open: false,
    children: (
      <>
        <Text size="1" weight="semi" marginBottom={5} inline={false}>
          Account numbers are on your bill. Contact{" "}
          <a href="#">customer service</a> for help if you don&apos;t yet have a
          bill.
        </Text>
        <img src={image} alt="some image" />
      </>
    )
  }
};

export const WithIcon = {
  args: {
    title: "Where do I find my account number?",
    icon: <HelpIcon />,
    open: false,
    children: (
      <>
        <p>
          Account numbers are on your bill. Contact{" "}
          <a href="#">customer service</a> for help if you don&#apos;t yet have
          a bill.
        </p>
        <br />
        <img src={image} alt="some image" />
      </>
    )
  }
};
