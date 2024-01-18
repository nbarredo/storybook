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
    icon: <HelpIcon />,
    children: (
      <>
        <p>
          Account numbers are on your bill. Contact customer service for help if
          you don&#apos;t yet have a bill.
        </p>
        <img src={image} />
      </>
    )
  }
};
