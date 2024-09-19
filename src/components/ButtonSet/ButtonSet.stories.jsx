import React from "react";
import { Button } from "../Button/Button";
import { ButtonSet } from "./ButtonSet";

const meta = {
  title: "Design System/ButtonSet",
  component: ButtonSet
};

export default meta;

const buttonSeries = (
  <>
    <Button kind="ghost" label="Button 1" />
    <Button kind="tertiary" label="Button 2" />
  </>
);

export const Default = {
  args: {
    stacked: false,
    children: buttonSeries,
    align: "center"
  }
};
