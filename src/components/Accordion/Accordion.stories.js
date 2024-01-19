import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import { Accordion } from "./Accordion";
import image from "./art_acct_number.png.png";

const meta = {
  title: "In Progress/Accordion",
  component: Accordion
};

export default meta;

export const Default = {
  args: {
    title: "Where do I find my account number?",
    open: false,
    children: (
      <>
        <p>
          Account numbers are on your bill. Contact{" "}
          <a href="#">customer service</a> for help if you don&#apos;t yet have
          a bill.
        </p>
        <br />
        <img src={image} />
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
        <img src={image} />
      </>
    )
  }
};
