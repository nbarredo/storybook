import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TotalBalance from "./TotalBalance";

describe("TotalBalance component functions properly", () => {
  test("renders without crashing", () => {
    const { getByText } = render(<TotalBalance buttonLabel="Test" />);
    expect(getByText("Test")).toBeInTheDocument();
  });

  test("applies the className", () => {
    render(<TotalBalance className="test-class" buttonLabel="Test" />);
    expect(screen.getByRole("alertdialog")).toHaveClass("test-class");
  });

  test("displays the title and subtitle", () => {
    const { getByText } = render(
      <TotalBalance
        title="Test Title"
        subtitle="Test Subtitle"
        buttonLabel="Test"
      />
    );
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Subtitle")).toBeInTheDocument();
  });

  test("calls onClick when the button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <TotalBalance buttonLabel="Test" onClick={handleClick} />
    );
    fireEvent.click(getByText("Test"));
    expect(handleClick).toHaveBeenCalled();
  });

  test("properly display due date information", () => {
    render(
      <TotalBalance dueDate="01/29/77" buttonLabel="Test" onClick={jest.fn()} />
    );
    const separator = screen.getByTestId("separator");
    const dueDate = screen.getByText(/01\/29\/77/);
    expect(separator).toBeInTheDocument();
    expect(dueDate).toBeInTheDocument();
    screen.debug();
  });
});
