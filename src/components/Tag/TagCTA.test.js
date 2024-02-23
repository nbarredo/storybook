import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { TagCTA } from "./TagCTA";

describe("TagCTA", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<TagCTA text="Test" />);
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("renders with default theme", () => {
    const { container } = render(<TagCTA text="Test" />);
    expect(container.firstChild).toHaveClass("theme-default");
  });

  it("renders with blue theme", () => {
    const { container } = render(<TagCTA text="Test" theme="blue" />);
    expect(container.firstChild).toHaveClass("theme-blue");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<TagCTA text="Test" onClick={handleClick} />);
    fireEvent.click(getByText("Test"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders with an icon when renderIcon is provided", () => {
    const Icon = () => <span>Icon</span>;
    const { getByText } = render(<TagCTA text="Test" renderIcon={Icon} />);
    expect(getByText("Icon")).toBeInTheDocument();
  });
});
