import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { AccountCard } from "./AccountCard";

/*
describe("TotalBalance component functions properly", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<TotalBalance buttonLabel="Test" />);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("applies the className", () => {
    const { container } = render(
      <TotalBalance className="test-class" buttonLabel="Test" />
    );
    expect(container.firstChild).toHaveClass("test-class");
  });

  it("displays the title and subtitle", () => {
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

  it("calls onClick when the button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <TotalBalance buttonLabel="Test" onClick={handleClick} />
    );
    fireEvent.click(getByText("Test"));
    expect(handleClick).toHaveBeenCalled();
  });
});
*/
