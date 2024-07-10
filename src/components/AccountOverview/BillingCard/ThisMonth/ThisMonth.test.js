import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  getByLabelText,
  render,
  screen
} from "@testing-library/react";
import { ThisMonth } from "./ThisMonth";

describe("ThisMonth Component Functions Properly", () => {
  const defaultProps = {
    status: "pmtDue",
    currPaymentAmt: "$123.45",
    acctMessage: "Account message",
    autoPayMessage: "AutoPay message",
    autoPayDate: "01/01/2023",
    pmtPlanMessage: "Payment Plan message",
    onClickViewBill: jest.fn(),
    onClickPayByBank: jest.fn(),
    onClickPayByCard: jest.fn(),
    onClickAutopay: jest.fn(),
    onClickPmtPlan: jest.fn()
  };

  test("Applies the correct styles when status prop = 'credit'", () => {
    const { rerender } = render(
      <ThisMonth {...defaultProps} status="credit" />
    );
    expect(screen.getByLabelText("$123.45")).toHaveClass("credit");
    rerender(<ThisMonth {...defaultProps} status="pmtDue" />);
    expect(screen.getByLabelText("$123.45")).not.toHaveClass("credit");
  });

  test("Renders differently based on companyCode prop", () => {
    const { rerender } = render(
      <ThisMonth {...defaultProps} companyCode="CTE" />
    );
    expect(screen.getByText(/View & Pay Bill/i)).toBeInTheDocument();
    rerender(<ThisMonth {...defaultProps} companyCode="ABC" />);
    screen.debug();
    expect(screen.queryByText(/View & Pay Bill/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Pay by Card/i)).toBeInTheDocument();
    expect(screen.getByText(/View Bill/i)).toBeInTheDocument();
  });
});
