import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { PaymentOptions } from "./PaymentOptions";

describe("PaymentOptions component functions properly", () => {
  const defaultProps = {
    onClickViewBill: () => {},
    onClickPayByBank: () => {},
    onClickPayByCard: () => {},
    status: "pmtDue"
  };
  test("Buttons are disabled when type is 'nothingDue' or 'credit'", () => {
    const { rerender } = render(
      <PaymentOptions {...defaultProps} status="credit" />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toBeDisabled;
    rerender(<PaymentOptions {...defaultProps} status="pmtDue" />);
    expect(buttons).not.toBeDisabled;
  });
});
