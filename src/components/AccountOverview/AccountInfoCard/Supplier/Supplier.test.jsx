import React from "react";
import { render, screen } from "@testing-library/react";
import { Supplier } from "./Supplier";

describe("Supplier component functions properly", () => {
  test("Renders heading based on account type", () => {
    const { rerender } = render(<Supplier type="gas" />);
    expect(screen.getByText(/^Gas supplier$/)).toBeInTheDocument;
    rerender(<Supplier type="merged" />);
    expect(screen.findByText("Gas supplier")).not.toBeInTheDocument;
    expect(screen.findByText("Electric supplier")).not.toBeInTheDocument;
  });
});
