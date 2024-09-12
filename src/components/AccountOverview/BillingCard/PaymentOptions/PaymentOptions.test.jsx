import React from "react";
import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "../../../../setupTests";
import data from "../lang.json";
import { PaymentOptions } from "./PaymentOptions";

const LangWrapper = ({ children }) => {
	return <LanguageProvider data={data}>{children}</LanguageProvider>;
};

describe("PaymentOptions component functions properly", () => {
	const defaultProps = {
		onClickViewBill: () => {},
		onClickPayByBank: () => {},
		onClickPayByCard: () => {},
		status: "pmtDue",
	};
	test("Buttons are disabled when type is 'nothingDue' or 'credit'", () => {
		const { rerender } = render(
			<PaymentOptions {...defaultProps} status="credit" />,
			{
				wrapper: LangWrapper,
			},
		);
		const buttons = screen.getAllByRole("button");
		expect(buttons).toBeDisabled;
		rerender(<PaymentOptions {...defaultProps} status="pmtDue" />);
		expect(buttons).not.toBeDisabled;
	});
});
