import React from "react";
import { render } from "@testing-library/react";
import { AccountCard } from "./AccountCard";

describe("AccountCard Component Functions Properly", () => {
  test("should render correctly with default props", () => {
    const { getByText } = render(
      <AccountCard
        data={{
          totalDue: "100",
          dateDue: "2023-04-30",
          acctNumber: 123456,
          address: "123 Main St"
        }}
      />
    );
    expect(getByText("Go Paperless")).toBeInTheDocument();
    expect(getByText("Set Up Autopay")).toBeInTheDocument();
    expect(getByText("Acct Details")).toBeInTheDocument();
    expect(getByText("100")).toBeInTheDocument();
    expect(getByText("Due 2023-04-30")).toBeInTheDocument();
  });

  test("should render correctly with custom props", () => {
    const { getByText } = render(
      <AccountCard
        className="custom-class"
        acctType="gas"
        status="default"
        alertText="This is a custom alert"
        data={{
          totalDue: "200",
          dateDue: "2023-05-15",
          acctNumber: 654321,
          address: "456 Elm St"
        }}
      />
    );
    expect(getByText("Go Paperless")).toBeInTheDocument();
    expect(getByText("Set Up Autopay")).toBeInTheDocument();
    expect(getByText("Acct Details")).toBeInTheDocument();
    expect(getByText("200")).toBeInTheDocument();
    expect(getByText("Due 2023-05-15")).toBeInTheDocument();
  });

  test("should render correctly with different status props", () => {
    const { getByText, rerender } = render(
      <AccountCard
        status="warning"
        alertText="This is a warning"
        data={{
          totalDue: "300",
          dateDue: "2023-06-01",
          acctNumber: 789012,
          address: "789 Pine St"
        }}
      />
    );
    expect(getByText("This is a warning")).toBeInTheDocument();

    rerender(
      <AccountCard
        status="error"
        alertText="This is an error"
        data={{
          totalDue: "400",
          dateDue: "2023-07-01",
          acctNumber: 345678,
          address: "101 Oak St"
        }}
      />
    );
    expect(getByText("This is an error")).toBeInTheDocument();

    rerender(
      <AccountCard
        status="closed"
        data={{
          totalDue: "500",
          dateDue: "2023-08-01",
          acctNumber: 901234,
          address: "202 Maple St"
        }}
      />
    );
    expect(getByText("Account Closed")).toBeInTheDocument();
  });
  // Test for acctType prop
  test("should correctly display the account type", () => {
    const { getByText, rerender } = render(
      <AccountCard
        acctType="electric"
        data={{
          totalDue: "100",
          dateDue: "2023-04-30",
          acctNumber: 123456,
          address: "123 Main St"
        }}
      />
    );
    expect(getByText(/^electric$/i)).toBeInTheDocument();

    rerender(
      <AccountCard
        acctType="gas"
        data={{
          totalDue: "200",
          dateDue: "2023-05-15",
          acctNumber: 654321,
          address: "456 Elm St"
        }}
      />
    );
    expect(getByText(/^gas$/i)).toBeInTheDocument();
  });

  // Test for status prop
  test("should apply correct styling based on status prop", () => {
    const { container, rerender } = render(
      <AccountCard
        status="default"
        data={{
          totalDue: "100",
          dateDue: "2023-04-30",
          acctNumber: 123456,
          address: "123 Main St"
        }}
      />
    );
    expect(container.querySelector(".default")).toBeInTheDocument();

    rerender(
      <AccountCard
        status="warning"
        data={{
          totalDue: "200",
          dateDue: "2023-05-15",
          acctNumber: 654321,
          address: "456 Elm St"
        }}
      />
    );
    expect(container.querySelector(".warning")).toBeInTheDocument();

    rerender(
      <AccountCard
        status="error"
        data={{
          totalDue: "300",
          dateDue: "2023-06-01",
          acctNumber: 789012,
          address: "789 Pine St"
        }}
      />
    );
    expect(container.querySelector(".error")).toBeInTheDocument();

    rerender(
      <AccountCard
        status="closed"
        data={{
          totalDue: "400",
          dateDue: "2023-07-01",
          acctNumber: 345678,
          address: "101 Oak St"
        }}
      />
    );
    expect(container.querySelector(".closed")).toBeInTheDocument();
  });

  // Test for alertText prop
  test("should display alertText when status is warning or error", () => {
    const { getByText, rerender } = render(
      <AccountCard
        status="warning"
        alertText="Warning message"
        data={{
          totalDue: "100",
          dateDue: "2023-04-30",
          acctNumber: 123456,
          address: "123 Main St"
        }}
      />
    );
    expect(getByText("Warning message")).toBeInTheDocument();

    rerender(
      <AccountCard
        status="error"
        alertText="Error message"
        data={{
          totalDue: "200",
          dateDue: "2023-05-15",
          acctNumber: 654321,
          address: "456 Elm St"
        }}
      />
    );
    expect(getByText("Error message")).toBeInTheDocument();
  });
});
describe("AccountCard Component Props", () => {});
