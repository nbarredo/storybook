import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Tag component functions properly", () => {
  test("renders without crashing", () => {
    render(<Tag text="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("applies the default theme when no theme prop is provided", () => {
    render(<Tag text="Test" />);
    const tag = screen.getByText("Test");
    expect(tag.parentNode).toHaveClass("theme-default");
  });

  test("applies the correct theme when a theme prop is provided", () => {
    render(<Tag text="Test" theme="important" />);
    const tag = screen.getByText("Test");
    expect(tag.parentNode).toHaveClass("theme-important");
  });

  test("passes additional props to the CarbonTag component", () => {
    render(<Tag text="Test" data-testid="carbon-tag" />);
    const tag = screen.getByTestId("carbon-tag");
    expect(tag).toBeInTheDocument();
  });

  test("renders the icon when the renderIcon prop is provided", () => {
    const Icon = () => <div data-testid="icon" />;
    render(<Tag text="Test" renderIcon={Icon} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });
});
