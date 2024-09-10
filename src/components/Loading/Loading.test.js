import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading component functions correctly", () => {
  test("renders with correct props", () => {
    render(
      <Loading
        active={true}
        className="testClass"
        description="Loading..."
        small={true}
        withOverlay={false}
      />
    );

    const loadingElement = screen.getByTestId("ev-loading");
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass("testClass");
    expect(loadingElement).toHaveClass("cds--loading--small");
    expect(loadingElement).toHaveTextContent("Loading...");
  });

  test("renders with an overlay", () => {
    render(
      <Loading
        active={true}
        description="Loading..."
        small={false}
        withOverlay={true}
      />
    );

    const overlayElement = document.querySelector(".cds--loading-overlay");
    expect(overlayElement).toBeInTheDocument();
  });
});
