import React from "react";
// Adjust the import path as necessary
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../../../setupTests";
import data from "../lang.json";
import Header from "./Header";

const Wrapper = ({ children, ...props }) => {
	return <LanguageProvider {...props}>{children}</LanguageProvider>;
};

describe("Header component functions properly", () => {
	const defaultProps = {
		cardStyle: "default",
		type: "electric",
		acctID: 12345,
		address: "123 Main St",
	};

	test("renders with default props", () => {
		render(<Header {...defaultProps} />, {
			wrapper: LanguageProvider,
		});
		expect(screen.getByText(/^electric/i)).toBeInTheDocument();
		expect(screen.getByText(/12345/i)).toBeInTheDocument();
		expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
	});

	test("renders correct icon for electric account type and default cardStyle", () => {
		render(<Header {...defaultProps} />, {
			wrapper: LanguageProvider,
		});
		// Assuming your icons render an <svg> element, adjust as necessary
		expect(screen.getByTestId("icon-electric")).toBeInTheDocument();
	});

	test("renders correct icon for gas account type and default cardStyle", () => {
		const { rerender } = render(<Header {...defaultProps} type="gas" />, {
			wrapper: LanguageProvider,
		});
		expect(screen.getByTestId("icon-gas")).toBeInTheDocument();
		rerender(<Header {...defaultProps} type="gas" cardStyle="closed" />, {
			wrapper: LanguageProvider,
		});
		expect(screen.getByTestId("icon-gas")).toBeInTheDocument();
	});

	test("renders correct icon for unknown account type and default cardStyle", () => {
		render(<Header {...defaultProps} type="unknown" />, {
			wrapper: LanguageProvider,
		});
		expect(screen.getByTestId("icon-unknown")).toBeInTheDocument();
		expect(screen.getByText(/Acct/)).toBeInTheDocument();
	});

	test("renders correct icon and title for merged account type with default cardStyle", () => {
		render(
			<LanguageProvider data={data}>
				<Header {...defaultProps} type="merged" />
			</LanguageProvider>,
		);
		expect(screen.getByTestId("icon-merged")).toBeInTheDocument();
		expect(screen.getByText(/Merged Account/)).toBeInTheDocument();
	});

	test("renders correct icon for gas account type and warning cardStyle", () => {
		render(<Header {...defaultProps} type="gas" cardStyle="warning" />, {
			wrapper: LanguageProvider,
		});
		expect(screen.getByTestId("icon-warning")).toBeInTheDocument();
	});

	test("renders correct icon for gas account type and danger cardStyle", () => {
		render(<Header {...defaultProps} type="gas" cardStyle="danger" />, {
			wrapper: LanguageProvider,
		});
		expect(screen.getByTestId("icon-danger")).toBeInTheDocument();
	});

	test("Does not apply the number-related styling if the account ID isn't of type=number", () => {
		render(
			<Header address="" acctID="nickname" type="gas" cardStyle="default" />,
			{
				wrapper: LanguageProvider,
			},
		);
		expect(screen.getByText(/nickname/)).not.toHaveClass("acctNumber");
	});

	test("applies closed class when cardStyle is closed", () => {
		render(<Header {...defaultProps} cardStyle="closed" />, {
			wrapper: LanguageProvider,
		});
		expect(screen.getByRole("figure")).toHaveClass(/closed/);
	});

	test("renders correct icon when cardStyle is closed", () => {
		const { rerender } = render(
			<LanguageProvider data={data}>
				<Header acctID={123} address="" type="merged" cardStyle="closed" />,
			</LanguageProvider>,
		);
		expect(screen.getByRole("figure")).toHaveClass(/closed/);
		expect(screen.getByTestId("icon-merged")).toBeInTheDocument();
		rerender(
			<LanguageProvider data={data}>
				<Header acctID={123} address="" type="unknown" cardStyle="closed" />
			</LanguageProvider>,
		);
		expect(screen.getByTestId("icon-unknown")).toBeInTheDocument();
	});

	test("renders address in gray-60 color", () => {
		render(<Header {...defaultProps} />, {
			wrapper: LanguageProvider,
		});
		const addressText = screen.getByText(/123 Main St/i);
		expect(addressText).toHaveStyle("color: var(--gray-60)");
	});
});
