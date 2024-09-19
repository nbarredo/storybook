/* eslint-disable testing-library/no-container */

/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Wizard } from "./Wizard";

const setOpen = vi.fn();

describe("Wizard component functions correctly", () => {
	// Renders ComposedModal with headerTitle and children
	test("should render ComposedModal with headerTitle and children when open is true", () => {
		const { getByText } = render(
			<Wizard headerTitle="Test Header" state="default" open={true}>
				<div>Test Content</div>
			</Wizard>,
		);

		expect(screen.getByText("Test Header")).toBeInTheDocument();
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});

	// Does not render ComposedModal if open is false
	test("should not render ComposedModal if open is false", () => {
		render(
			<Wizard headerTitle="Test Header" id={"test"} state="error" open={false}>
				<div>Test Content</div>
			</Wizard>,
		);

		const element = screen.getByTestId("test");
		expect(element).not.toHaveClass("is-visible");
	});

	// Does not render ModalHeader if headerTitle is not provided
	test("should not render ModalHeader if headerTitle is not provided", () => {
		render(
			<Wizard state="success" open={true}>
				<div>Test Content</div>
			</Wizard>,
		);
		const element = screen.queryByText("Test Header");
		expect(element).not.toBeInTheDocument();
	});
});
