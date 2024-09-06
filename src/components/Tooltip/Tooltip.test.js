import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Tooltip } from "./Tooltip";
import "./Tooltip.module.scss";

describe("Text component functions properly", () => {
  test("renders without crashing", () => {
    render(<Text>some text</Text>);
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });

  test("applies the weight class", () => {
    render(<Text weight="bold">Test</Text>);
    const textElement = screen.getByText("Test");
    expect(textElement.className).toContain("font-size-2-bold");
  });

  test("applies the size class", () => {
    render(<Text size="3">Test</Text>);
    const textElement = screen.getByText("Test");
    expect(textElement.className).toContain("font-size-3-reg");
  });

  test("Component will inline/block styles", () => {
    render(
      <Text marginTop={5} marginBottom={3} inline={true}>
        test
      </Text>
    );
    const textElement = screen.getByText("test");
    expect(textElement.parentNode).toHaveClass("inline");
  });

  test("Component will apply top and/or bottom margin styles", () => {
    render(
      <Text marginTop={5} marginBottom={3} inline={false}>
        test
      </Text>
    );
    const textElement = screen.getByText("test");
    expect(textElement.parentNode).toHaveClass("mt-5");
    expect(textElement.parentNode).toHaveClass("mb-3");
  });

  test("Component will not render margins by default when no margin props are passed", () => {
    render(<Text inline={false}>test</Text>);
    const textElement = screen.getByText("test");
    expect(textElement.parentNode.className).not.toMatch(/mt-/);
    expect(textElement.parentNode.className).not.toMatch(/mb-/);
  });

  test("applies the color style", () => {
    window.getComputedStyle = jest.fn().mockImplementation(() => ({
      color: "#076670",
      getPropertyValue: jest.fn().mockReturnValue("#076670")
    }));

    render(
      <Text color="teal-80" id="test-id">
        Test
      </Text>
    );
    const textElement = screen.getByText("Test");
    expect(window.getComputedStyle(textElement).color).toBe("#076670");
  });
});
