import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountInfoCard } from "./AccountInfoCard";
import { fuelAssistanceIcon, winterProtectionIcon } from "./Icons";

describe("AccountInfoCard component functions properly", () => {
	const defaultProps = {
		acctID: 12345678987,
		addresses: ["124 Main Street NH 120384"],
		hasAutopay: false,
		hasOutageAlerts: false,
		hasPaperless: false,
		onClickAutopay: () => {},
		onClickBasicCta: () => {},
		onClickOutageAlerts: () => {},
		onClickPaperless: () => {},
		onClickSupplierCta: () => {},
		programs: [
			{
				id: 1,
				name: "Winter Protection",
				description:
					"You're in this program which prevents service from being shut off from Nov. 1 to May 1 with no late payment charges.",
				icon: winterProtectionIcon,
				theme: "purple",
			},
			{
				id: 2,
				name: "Fuel Assistance",
				description:
					"You're enrolled in this program that helps pay a portion of your winter heating bills.",
				icon: fuelAssistanceIcon,
				theme: "purple",
			},
		],
		supplier: "Third party supplier",
		type: "electric",
	};

	it("renders Basic component when showBasicInfo is true", () => {
		render(<AccountInfoCard {...defaultProps} />);
		const accountNumbers = screen.getAllByText(/12345678987/);
		expect(accountNumbers.length).toBeGreaterThanOrEqual(1);
	});

	it("renders Supplier component when showSupplierInfo is true", () => {
		render(<AccountInfoCard {...defaultProps} />);
		const supplier = screen.getAllByText(/Third party supplier/i);
		expect(supplier.length).toBeGreaterThanOrEqual(1);
	});

	it("renders Programs component when showProgramsInfo is true", () => {
		render(<AccountInfoCard {...defaultProps} />);
		const programs = screen.getAllByText(/Programs/i);
		expect(programs.length).toBeGreaterThanOrEqual(1);
	});

	it("renders program badges properly in the Programs section", () => {
		render(<AccountInfoCard {...defaultProps} />);
		expect(screen.getAllByText(/winter protection/i)).toBeInTheDocument;
		expect(screen.getAllByText(/fuel assistance/i)).toBeInTheDocument;
	});

	it("renders TagCTA for Paperless when hasPaperless is false", () => {
		render(<AccountInfoCard {...defaultProps} />);
		expect(screen.getByTestId("PaperlessIcon")).toBeInTheDocument();
	});

	it("renders Tag for Paperless when hasPaperless is true", () => {
		render(<AccountInfoCard {...defaultProps} hasPaperless={true} />);
		expect(screen.getByTestId("CircleIcon")).toBeInTheDocument();
	});

	it("renders fixed wrapper when forceCollapsible is false and vice versa", () => {
		const { rerender } = render(<AccountInfoCard {...defaultProps} />);
		expect(screen.getByTestId("collapsible-wrapper")).not.toBeVisible();
		expect(screen.getByTestId("fixed-wrapper")).toBeVisible();
		rerender(<AccountInfoCard {...defaultProps} forceCollapsible={true} />);
		const coll = screen.getByTestId("collapsible-wrapper");
		expect(coll).toHaveClass(/force-collapsible/);
	});

	it("renders Simple Tag for Outage Alerts when hasOutageAlerts is true", () => {
		render(
			<AccountInfoCard
				{...defaultProps}
				hasAutopay={false}
				hasPaperless={false}
				hasOutageAlerts={true}
			/>,
		);
		expect(screen.getByTestId("CircleIcon")).toBeInTheDocument();
	});

	it("renders Simple Tag for Autopay when hasAutopay is true", () => {
		render(
			<AccountInfoCard
				{...defaultProps}
				hasAutopay={true}
				hasPaperless={false}
				hasOutageAlerts={false}
			/>,
		);
		expect(screen.getByTestId("CircleIcon")).toBeInTheDocument();
	});
});
