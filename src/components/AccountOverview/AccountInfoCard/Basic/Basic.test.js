import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Basic } from "./Basic";

const singleAddress = ["124 Main Street NH 120384"];
const multiAddress = [
  "124 Main Street NH 120384",
  "1600 Pennsylvania avenue, Washington D.C. 12345"
];

describe("Basic component functions properly", () => {
  test("Renders 'multiple addresses' if passed an array containing more than one address", () => {
    const { rerender } = render(<Basic addresses={[]} acctID={12345} />);
    expect(screen.getByText(/None/i)).toBeInTheDocument;
    rerender(<Basic addresses={singleAddress} acctID={12345} />);
    expect(screen.getByText(/124 Main Street NH 120384/i)).toBeInTheDocument;
    rerender(<Basic addresses={multiAddress} acctID={12345} />);
    expect(screen.findByText(/Multiple Addresses/i)).toBeInTheDocument;
  });
});
