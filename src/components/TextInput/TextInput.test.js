import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from "./TextInput";

describe("TextInput functions properly", () => {
  it("renders without crashing", () => {
    render(<TextInput id="test-input" labelText="test label" />);
  });

  it("triggers onChange event when input value changes", async () => {
    const onChangeMock = jest.fn();
    render(
      <TextInput
        id="test-input"
        onChange={onChangeMock}
        labelText="test label"
      />
    );
    const field = screen.getByRole("textbox");
    await waitFor(() => userEvent.type(field, "Hello!"));
    expect(onChangeMock).toHaveBeenCalled;
  });
});
