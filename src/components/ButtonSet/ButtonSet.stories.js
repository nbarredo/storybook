import React from "react";
import { ButtonSet } from "./ButtonSet";
import { Button } from "../Button/Button";

const meta = {
  title: "In Progress/ButtonSet",
  component: ButtonSet
};

export default meta;

const buttonSeries = <><Button kind="tertiary" label="Button 1" /><Button kind="tertiary" label="Button 2" /></>;

export const Default = {
  args: {
    stacked: false,
    children: buttonSeries
  }
};
