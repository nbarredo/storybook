import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  getByLabelText,
  render,
  screen
} from "@testing-library/react";
import { LanguageProvider } from "../../../../setupTests";
import data from "../lang.json";
import { ThisMonth } from "./ThisMonth";

const LangWrapper = ({ children }) => {
  return <LanguageProvider data={data}>{children}</LanguageProvider>;
};

describe("ThisMonth Component Functions Properly", () => {
  const mockIsConnecticutCustomer = (companyCode) => {
    if (companyCode === "CTE" || companyCode === "CTG") return true;
    return false;
  };

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
    isConnecticutCustomer: mockIsConnecticutCustomer
  };

  test("Applies the correct styles when status prop = 'credit'", () => {
    const { rerender } = render(
      <ThisMonth {...defaultProps} status="credit" />,
      {
        wrapper: LangWrapper
      }
    );
    expect(screen.getByLabelText("$123.45")).toHaveClass("credit");
    rerender(<ThisMonth {...defaultProps} status="pmtDue" />, {
      wrapper: LangWrapper
    });
    expect(screen.getByLabelText("$123.45")).not.toHaveClass("credit");
  });

  test("Renders differently based on companyCode prop", () => {
    const { rerender } = render(
      <ThisMonth {...defaultProps} companyCode="CTE" />,
      {
        wrapper: LangWrapper
      }
    );
    expect(screen.getByText(/View & Pay Bill/i)).toBeInTheDocument();
    rerender(<ThisMonth {...defaultProps} companyCode="ABC" />);
    expect(screen.queryByText(/View & Pay Bill/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Pay by Card/i)).toBeInTheDocument();
    expect(screen.getByText(/View Bill/i)).toBeInTheDocument();
  });
});
