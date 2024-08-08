import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../../../setupTests";
import Payment from "./Payment";

describe("Payment component functions correctly", () => {
  test("Applies correct styles when default cardStyle is selected", () => {
    render(<Payment totalDue="totalDue" dateDue="dateDue" />, {
      wrapper: LanguageProvider
    });
    expect(screen.getByText(/totalDue/i).closest("div")).not.toHaveClass(
      "danger"
    );
  });
  test("Applies correct styles for danger cardStyle", () => {
    render(
      <Payment cardStyle="danger" totalDue="totalDue" dateDue="dateDue" />,
      {
        wrapper: LanguageProvider
      }
    );
    expect(screen.getByText(/totalDue/i).closest("div")).toHaveClass("danger");
  });

  test("Applies correct styles for 'credit' status", () => {
    render(
      <Payment
        cardStyle="default"
        totalDue="totalDue"
        dateDue="dateDue"
        status="credit"
      />,
      {
        wrapper: LanguageProvider
      }
    );
    expect(screen.getByText(/totalDue/i).closest("div")).toHaveClass("credit");
    expect(screen.getByText(/totalDue/i)).toHaveClass("credit");
  });
});
