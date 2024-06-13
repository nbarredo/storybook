import React from "react";
// Adjust the import path as necessary
import "@testing-library/jest-dom";
import { fireEvent, render, rerender, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component functions properly", () => {
  const defaultProps = {
    cardStyle: "default",
    type: "electric",
    acctID: 12345,
    address: "123 Main St"
  };

  test("renders with default props", () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText(/^electric/i)).toBeInTheDocument();
    expect(screen.getByText(/12345/i)).toBeInTheDocument();
    expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
  });

  test("renders correct icon for electric account type and default cardStyle", () => {
    render(<Header {...defaultProps} />);
    // Assuming your icons render an <svg> element, adjust as necessary
    expect(screen.getByTestId("icon-electric")).toBeInTheDocument();
  });

  test("renders correct icon for gas account type and default cardStyle", () => {
    const { rerender } = render(<Header {...defaultProps} type="gas" />);
    expect(screen.getByTestId("icon-gas")).toBeInTheDocument();
    rerender(<Header {...defaultProps} type="gas" cardStyle="closed" />);
    expect(screen.getByTestId("icon-gas")).toBeInTheDocument();
  });

  test("renders correct icon for gas account type and warning cardStyle", () => {
    render(<Header {...defaultProps} type="gas" cardStyle="warning" />);
    expect(screen.getByTestId("icon-warning")).toBeInTheDocument();
  });

  test("renders correct icon for gas account type and danger cardStyle", () => {
    render(<Header {...defaultProps} type="gas" cardStyle="danger" />);
    expect(screen.getByTestId("icon-danger")).toBeInTheDocument();
  });

  test("applies closed class when cardStyle is closed", () => {
    render(<Header {...defaultProps} cardStyle="closed" />);

    expect(screen.getByRole("figure")).toHaveClass("closed");
  });

  test("renders address in gray-60 color", () => {
    render(<Header {...defaultProps} />);
    const addressText = screen.getByText(/123 Main St/i);
    expect(addressText).toHaveStyle("color: var(--gray-60)");
  });
});
