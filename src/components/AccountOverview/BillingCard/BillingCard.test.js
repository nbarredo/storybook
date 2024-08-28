import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../../setupTests";
import { BillingCard } from "./BillingCard";
import data from "./lang.json";

const mockData = {
  type: "electric",
  status: "pmtDue",
  autoPayMessage: "AutoPay is enabled",
  autoPayDate: "2023-10-01",
  pmtPlanMessage: "Payment plan available",
  prevPaymentAmt: "$100.00",
  prevPaymentDate: "2023-09-01",
  currPaymentAmt: "$50.00",
  acctMessage: "Your account is in good standing",
  onClickViewBill: jest.fn(),
  onClickPayByBank: jest.fn(),
  onClickPayByCard: jest.fn(),
  onClickPastBills: jest.fn(),
  onClickAutopay: jest.fn()
};

const LangWrapper = ({ children }) => {
  return <LanguageProvider data={data}>{children}</LanguageProvider>;
};

describe("BillingCard Component functions correctly", () => {
  test("renders correctly with given data", () => {
    render(<BillingCard data={mockData} />, {
      wrapper: LangWrapper
    });
    expect(screen.getByText("Last Month")).toBeInTheDocument();
    expect(screen.getByText("This Month")).toBeInTheDocument();
    expect(screen.getByText("Past Bills & Payments")).toBeInTheDocument();
    expect(screen.getByText("View Bill")).toBeInTheDocument();
  });

  test("handles onClickPastBills correctly", () => {
    render(<BillingCard data={mockData} />, {
      wrapper: LangWrapper
    });
    fireEvent.click(screen.getByText("Past Bills & Payments"));
    expect(mockData.onClickPastBills).toHaveBeenCalled();
  });

  test("handles onClickViewBill correctly", () => {
    render(<BillingCard data={mockData} />, {
      wrapper: LangWrapper
    });
    fireEvent.click(screen.getByText("View Bill"));
    expect(mockData.onClickViewBill).toHaveBeenCalled();
  });

  test("handles onClickPayByBank correctly", () => {
    render(<BillingCard data={mockData} />, {
      wrapper: LangWrapper
    });
    fireEvent.click(screen.getByText("Pay by Bank"));
    expect(mockData.onClickPayByBank).toHaveBeenCalled();
  });

  test("handles onClickPayByCard correctly", () => {
    render(<BillingCard data={mockData} />, {
      wrapper: LangWrapper
    });
    fireEvent.click(screen.getByText("Pay by Card"));
    expect(mockData.onClickPayByCard).toHaveBeenCalled();
  });

  test("handles onClickAutopay correctly", () => {
    const autoPayData = { ...mockData, status: "hasAutoPay" };
    render(<BillingCard data={autoPayData} />, {
      wrapper: LangWrapper
    });
    fireEvent.click(
      screen.getByText(`Auto Pay scheduled for ${autoPayData.autoPayDate}`)
    );
    expect(autoPayData.onClickAutopay).toHaveBeenCalled();
  });
});
