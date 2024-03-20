import { render, screen } from "@testing-library/react";
import { Payment } from "./Payment";

describe("Payment component functions correctly", () => {
  test("Applies correct styles when in default status", () => {
    render(<Payment totalDue="totalDue" dateDue="dateDue" />);
    screen.debug();
    expect(screen.getByText(/totalDue/i).closest("div")).not.toHaveClass(
      "danger"
    );
  });
  test("Applies correct styles when in danger status", () => {
    render(<Payment status="danger" totalDue="totalDue" dateDue="dateDue" />);
    // screen.debug(screen.getByText(/totalDue/i).closest("div"));
    expect(screen.getByText(/totalDue/i).closest("div")).toHaveClass("danger");
  });
});
