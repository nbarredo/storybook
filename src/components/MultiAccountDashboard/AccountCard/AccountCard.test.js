import { fireEvent, render, screen } from "@testing-library/react";
import { AccountCard } from "./AccountCard";

describe("Account Card component functions correctly", () => {
  const basicData = {
    totalDue: "100",
    dateDue: "2023-01-01",
    acctID: 123,
    address: "123 Main St"
  };
  test("renders AccountCard with default props", () => {
    render(<AccountCard data={basicData} />);
    expect(screen.getByText(/Acct Details/i)).toBeInTheDocument();
  });

  test("renders in compact mode", () => {
    render(<AccountCard compact data={basicData} />);
    expect(screen.getByText(/Acct Details/i).closest("section")).toHaveClass(
      "compact"
    );
  });

  test("renders properly in warning or danger status and displays alert text", () => {
    const { rerender } = render(
      <AccountCard
        status="warning"
        alertText="Check your account"
        data={basicData}
      />
    );
    expect(screen.getByText(/Check your account/i)).toBeInTheDocument();
    rerender(
      <AccountCard
        status="danger"
        alertText="Check your account"
        data={basicData}
      />
    );
    expect(screen.getByText(/Check your account/i)).toBeInTheDocument();
  });

  it('displays "Paperless is On" when hasPaperless is true', () => {
    render(
      <AccountCard
        hasPaperless={true}
        data={{ totalDue: "", dateDue: "", acctID: 123, address: "" }}
      />
    );
    expect(screen.getByText("Paperless is On")).toBeInTheDocument();
  });

  it('displays "Autopay is On" when hasAutopay is true', () => {
    render(
      <AccountCard
        hasAutopay={true}
        data={{ totalDue: "", dateDue: "", acctID: 123, address: "" }}
      />
    );
    expect(screen.getByText("Autopay is On")).toBeInTheDocument();
  });

  test("calls onClickPaperless when the paperless CTA is clicked", () => {
    const onClickPaperless = jest.fn();

    render(
      <AccountCard
        onClickPaperless={onClickPaperless}
        mobileCTAType="none"
        data={basicData}
      />
    );

    fireEvent.click(screen.getByText(/Go Paperless/i));
    expect(onClickPaperless).toHaveBeenCalled();
  });

  test("renders mobile CTA for autopay", () => {
    const onClickAutopay = jest.fn();
    render(
      <AccountCard
        mobileCTAType="autopay"
        onClickAutopay={onClickAutopay}
        data={basicData}
      />
    );

    expect(screen.getByTestId("mobile-cta-autopay")).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    const className = "my-custom-class";
    render(<AccountCard className={className} data={basicData} />);

    expect(screen.getByText(/Acct Details/i).closest("section")).toHaveClass(
      className
    );
  });

  test('renders inactive content when status is "closed"', () => {
    const { getByText } = render(
      <AccountCard status="closed" data={basicData} />
    );

    expect(getByText("Account Closed")).toBeInTheDocument();
    expect(getByText("Past Bills & Payments")).toBeInTheDocument();
  });
});
