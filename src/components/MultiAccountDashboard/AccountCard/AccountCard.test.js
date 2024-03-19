import { fireEvent, render, screen } from "@testing-library/react";
import { AccountCard } from "./AccountCard";

describe("Account Card component functions correctly", () => {
  test("renders AccountCard with default props", () => {
    const data = {
      totalDue: "100",
      dateDue: "2023-01-01",
      acctID: "123",
      address: "123 Main St"
    };
    render(<AccountCard data={data} />);
    expect(screen.getByText(/Acct Details/i)).toBeInTheDocument();
  });

  test("renders in compact mode", () => {
    const data = {
      totalDue: "100",
      dateDue: "2023-01-01",
      acctID: "123",
      address: "123 Main St"
    };
    render(<AccountCard compact data={data} />);
    expect(screen.getByText(/Acct Details/i).closest("section")).toHaveClass(
      "compact"
    );
  });

  test("renders with warning status and displays alert text", () => {
    const data = {
      totalDue: "100",
      dateDue: "2023-01-01",
      acctID: "123",
      address: "123 Main St"
    };
    render(
      <AccountCard
        status="warning"
        alertText="Check your account"
        data={data}
      />
    );
    expect(screen.getByText(/Check your account/i)).toBeInTheDocument();
  });

  test("calls onClickPaperless when the paperless CTA is clicked", () => {
    const onClickPaperless = jest.fn();
    const data = {
      totalDue: "100",
      dateDue: "2023-01-01",
      acctID: "123",
      address: "123 Main St"
    };
    render(
      <AccountCard
        onClickPaperless={onClickPaperless}
        mobileCTAType="none"
        data={data}
      />
    );

    fireEvent.click(screen.getByText(/Go Paperless/i));
    expect(onClickPaperless).toHaveBeenCalled();
  });

  test("renders mobile CTA for autopay", () => {
    const onClickAutopay = jest.fn();
    const data = {
      totalDue: "100",
      dateDue: "2023-01-01",
      acctID: "123",
      address: "123 Main St"
    };
    render(
      <AccountCard
        mobileCTAType="autopay"
        onClickAutopay={onClickAutopay}
        data={data}
      />
    );

    expect(screen.getByTestId("mobile-cta-autopay")).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    const data = {
      totalDue: "100",
      dateDue: "2023-01-01",
      acctID: "123",
      address: "123 Main St"
    };
    const className = "my-custom-class";
    render(<AccountCard className={className} data={data} />);

    expect(screen.getByText(/Acct Details/i).closest("section")).toHaveClass(
      className
    );
  });
});
