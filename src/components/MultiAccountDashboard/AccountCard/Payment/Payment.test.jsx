import React from "react";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../../../setupTests";
import data from "../lang.json";
import Payment from "./Payment";

describe("Payment component functions correctly", () => {
	test("Applies correct styles when default cardStyle is selected", () => {
		render(
			<LanguageProvider data={data}>
				<Payment totalDue="totalDue" dateDue="dateDue" />
			</LanguageProvider>,
		);
		expect(screen.getByText(/totalDue/i).closest("div")).not.toHaveClass(
			"danger",
		);
	});
	test("Applies correct styles for danger cardStyle", () => {
		render(
			<LanguageProvider data={data}>
				<Payment cardStyle="danger" totalDue="totalDue" dateDue="dateDue" />
			</LanguageProvider>,
		);
		expect(screen.getByText(/totalDue/i).closest("div")).toHaveClass(/danger/);
	});
	test("Applies correct styles for 'credit' status", () => {
		render(
			<LanguageProvider data={data}>
				<Payment
					cardStyle="default"
					totalDue="totalDue"
					dateDue="dateDue"
					status="credit"
				/>
			</LanguageProvider>,
		);
		expect(screen.getByText(/totalDue/i).closest("div")).toHaveClass(/credit/);
		expect(screen.getByText(/totalDue/i)).toHaveClass(/credit/);
	});

	test.each([["credit"], ["nothingDue"]])(
		"Applies correct styles when isConnecticut is true",
		(status) => {
			const mockLabelValue = "View & Pay Bill";
			vi.spyOn(React, "useContext").mockImplementation(() => ({
				"ct.pay.bill.btn.label": mockLabelValue,
			}));

			render(
				<LanguageProvider data={data}>
					<Payment
						cardStyle="default"
						totalDue="totalDue"
						dateDue="dateDue"
						status={status}
						isConnecticut={true}
					/>
				</LanguageProvider>,
			);

			const el = screen.getByText(/totalDue/i).closest("div");
			const className = el.getAttribute("class");
			expect(className).toContain(status);

			expect(screen.getByText(mockLabelValue)).toBeEnabled();
		},
	);
});
