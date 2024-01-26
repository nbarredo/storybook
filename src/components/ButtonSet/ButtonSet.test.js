import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button/Button";
import { ButtonSet } from "./ButtonSet";

describe("ButtonSet component functions properly", () => {
  const buttonsData = [
    { label: "Button 1", onClick: jest.fn() },
    { label: "Button 2", onClick: jest.fn() },
    { label: "Button 3", onClick: jest.fn() }
  ];
  test("renders the correct number of buttons", () => {
    render(
      <ButtonSet>
        {buttonsData.map((buttonData, index) => (
          <Button
            key={index}
            label={buttonData.label}
            onClick={buttonData.onClick}
          />
        ))}
      </ButtonSet>
    );

    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBe(buttonsData.length);
  });

  test("renders correct alignment when align prop is passed", () => {
    render(
      <ButtonSet align="right">
        {buttonsData.map((buttonData, index) => (
          <Button
            key={index}
            label={buttonData.label}
            onClick={buttonData.onClick}
          />
        ))}
      </ButtonSet>
    );

    const buttonSetElement = screen.getByTestId("ev-button-set");
    expect(buttonSetElement).toHaveClass("right");
  });

  test("button width is adjusted based on the fixedSize prop", () => {
    render(
      <ButtonSet align="left" fixedSize={true}>
        {buttonsData.map((buttonData, index) => (
          <Button
            key={index}
            label={buttonData.label}
            onClick={buttonData.onClick}
          />
        ))}
      </ButtonSet>
    );

    const buttonSetElement = screen.getByTestId("ev-button-set");
    expect(buttonSetElement).toHaveClass("fixed-size");
  });

  test("renders stacked layout when stacked prop is true", () => {
    render(
      <ButtonSet stacked>
        {buttonsData.map((buttonData, index) => (
          <Button
            key={index}
            label={buttonData.label}
            onClick={buttonData.onClick}
          />
        ))}
      </ButtonSet>
    );

    const buttonSetElement = screen.getByTestId("ev-button-set");
    expect(buttonSetElement).toHaveClass("cds--btn-set--stacked");
  });
});
