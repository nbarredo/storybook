import React from "react";
import ChildCareIcon from "@mui/icons-material/ChildCare";
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

  test("renders the default icon when showIcon is true", () => {
    render(<Tag text="Test" showIcon={true} />);
    const icon = screen.getByTestId("CircleIcon");
    expect(icon).toBeInTheDocument();
  });

  test("renders a custom icon when one is passed to it via the 'renderIcon' prop", () => {
    render(<Tag text="Test" showIcon={true} renderIcon={ChildCareIcon} />);
    const icon = screen.getByTestId("ChildCareIcon");
    screen.debug();
    expect(icon).toBeInTheDocument();
  });
});
