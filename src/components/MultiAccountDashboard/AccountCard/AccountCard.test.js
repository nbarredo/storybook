import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../../setupTests";
import { AccountCard } from "./AccountCard";
import data from "./lang.json";

describe("Account Card component functions correctly", () => {
  const basicData = {
    totalDue: "100",
    dateDue: "2023-01-01",
    acctID: 123,
    address: "123 Main St",
    navigationLinkLbl: "Acct Details",
    onCardBodyClick: () => {},
    onClickAutopay: () => {},
    onClickPaperless: () => {},
    acctDetailsURL: "www.yahoo.com"
  };
  test("renders AccountCard with default props", () => {
    render(
      <LanguageProvider data={data}>
        <AccountCard {...basicData} />
      </LanguageProvider>
    );
    expect(screen.getByText(/Acct Details/i)).toBeInTheDocument();
  });

  test("renders in compact mode", () => {
    render(
      <LanguageProvider data={data}>
        <AccountCard compact {...basicData} />
      </LanguageProvider>
    );
    expect(screen.getByText(/Acct Details/i).closest("section")).toHaveClass(
      "compact"
    );
  });

  test("renders properly in warning or danger cardStyle and displays alert text", () => {
    const { rerender } = render(
      <LanguageProvider data={data}>
        <AccountCard
          cardStyle="warning"
          alertText="Check your account"
          {...basicData}
        />
      </LanguageProvider>
    );
    expect(screen.getByText(/Check your account/i)).toBeInTheDocument();
    rerender(
      <LanguageProvider data={data}>
        <AccountCard
          cardStyle="danger"
          alertText="Check your account"
          {...basicData}
        />
      </LanguageProvider>
    );
    expect(screen.getByText(/Check your account/i)).toBeInTheDocument();
  });

  test('displays "Paperless On" when hasPaperless is true', () => {
    render(
      <LanguageProvider data={data}>
        <AccountCard hasPaperless={true} {...basicData} />
      </LanguageProvider>
    );
    expect(screen.getByText("Paperless On")).toBeInTheDocument();
  });

  test('displays "Auto Pay On" when hasAutopay is true', () => {
    render(
      <LanguageProvider data={data}>
        <AccountCard hasAutopay={true} {...basicData} />
      </LanguageProvider>
    );
    expect(screen.getByText("Auto Pay On")).toBeInTheDocument();
  });

  test("renders mobile CTA for autopay", () => {
    const onClickAutopay = jest.fn();
    render(
      <LanguageProvider data={data}>
        <AccountCard
          mobileCTAType="autopay"
          onClickAutopay={onClickAutopay}
          {...basicData}
        />
      </LanguageProvider>
    );

    expect(screen.getByTestId("mobile-cta-autopay")).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    const className = "my-custom-class";
    render(
      <LanguageProvider data={data}>
        <AccountCard className={className} {...basicData} />
      </LanguageProvider>
    );

    expect(screen.getByText(/Acct Details/i).closest("section")).toHaveClass(
      className
    );
  });

  test('renders inactive content when cardStyle is "closed"', () => {
    const { getByText } = render(
      <LanguageProvider data={data}>
        <AccountCard cardStyle="closed" {...basicData} />
      </LanguageProvider>
    );

    expect(getByText("Account Closed")).toBeInTheDocument();
  });

  test('renders notification message when cardStyle is "info"', () => {
    render(
      <LanguageProvider data={data}>
        <AccountCard cardStyle="info" alertText="card message" {...basicData} />
      </LanguageProvider>
    );
    expect(screen.getByText(/card message/)).toBeInTheDocument();
  });

  test('renders parent/merged card when type="merged"', () => {
    render(
      <LanguageProvider data={data}>
        <AccountCard
          cardStyle="default"
          type="merged"
          alertText="card message"
          {...basicData}
        />
      </LanguageProvider>
    );
    expect(screen.getByTestId("ev-total-balance")).toBeInTheDocument();
    expect(screen.getByText(/Merged Account/)).toBeInTheDocument();
  });

  test('does not render a mobile CTA when mobileCTAType is set to "none"', () => {
    render(
      <LanguageProvider data={data}>
        <AccountCard
          alertText="card message"
          mobileCTAType="none"
          {...basicData}
        />
      </LanguageProvider>
    );
    expect(screen.getByRole("article")).toHaveClass("content-container");
    expect(screen.getByRole("article")).not.toHaveClass("mobile-cta");
  });

  test.each([
    ["100", "2023-01-01"],
    ["100", undefined],
    [undefined, "2023-01-01"]
  ])("renders the payment component when totalDue or dateDue are provided", (totalDue, dateDue) => {
    render(
      <LanguageProvider data={data}>
        <AccountCard
          {...basicData}
          totalDue={totalDue}
          dateDue={dateDue}
        />
      </LanguageProvider>
    );

    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });
});
