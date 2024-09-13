import React from "react";

import {
	act,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./Tooltip";

const waitForFloating = () => act(async () => {});

describe("Tooltip Component", () => {
	test("renders tooltip content when trigger element is hovered", async () => {
		render(
			<Tooltip
				content="Tooltip Content"
				triggerElement={<button>Hover Me</button>}
			/>,
		);

		await waitForFloating();
		const trigger = screen.getByText(/Hover Me/);

		expect(screen.queryByText(/Tooltip Content/)).not.toBeInTheDocument();

		await act(async () => {
			await userEvent.hover(trigger);
		});

		expect(screen.getByText(/Tooltip Content/)).toBeInTheDocument();
	});
	test("renders optional title when provided", async () => {
		render(
			<Tooltip
				content="Tooltip Content"
				title="Optional Title"
				triggerElement={<button>Hover Me</button>}
			/>,
		);

		await waitForFloating();
		const trigger = screen.getByText(/Hover Me/);

		await act(async () => {
			await userEvent.hover(trigger);
		});

		expect(screen.getByText(/Optional Title/)).toBeInTheDocument();
	});
});
