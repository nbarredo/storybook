import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Accordion component functions properly", () => {
  test("checks if button renders with correct text", () => {
    const { getByText } = render(<Button label="Click me" />);
    const buttonElement = getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("checks if onClick function is called when button is clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClick} />);
    const buttonElement = getByText(/Click me/i);

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });

  test("checks if button is disabled when rendered with disabled prop", () => {
    render(<Button label="Click me" disabled={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("cds--btn--disabled");
  });

  test("renders the correct icon", () => {
    const { getByTestId } = render(<Button renderIcon={AddIcon} />);
    const icon = getByTestId("AddIcon");
    expect(icon).toBeInTheDocument;
  });
});
