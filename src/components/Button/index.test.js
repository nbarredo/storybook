import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from ".";

const handleCLick = jest.fn();

test("Renders enabled Button component", () => {
  const buttonComponentEnabled = <Button type="tertiary" disabled={false} onClick={handleCLick} label='Submit' />;
  render(buttonComponentEnabled);
  const buttonElement = screen.getByText("Submit");
  expect(buttonElement).toBeDefined();
  expect(buttonElement).not.toHaveClass("c-btn--disabled");
  expect(buttonElement).not.toBeDisabled();
});

test("Renders disabled Button component", () => {
  const buttonComponentDisabled = <Button disabled={true} onClick={handleCLick} label='Submit' />;
  render(buttonComponentDisabled);

  const buttonElement = screen.getByText("Submit");
  expect(buttonElement).toBeDefined();
  expect(buttonElement).toBeDisabled();
});
