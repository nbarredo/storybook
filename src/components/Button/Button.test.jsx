import AddIcon from "@mui/icons-material/Add";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Accordion component functions properly", () => {
  test("checks if button renders with correct text", () => {
    const { getByText } = render(<Button label="Click me" />);
    const buttonElement = getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("checks if onClick function is called when button is clicked", () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClick} />);
    const buttonElement = getByText(/Click me/i);

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });

  test("checks if onClick is prevented when button is disabled", () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button label="Click me" disabled={true} onClick={onClick} />,
    );
    const buttonElement = getByText(/Click me/i);

    fireEvent.click(buttonElement);

    expect(onClick).not.toHaveBeenCalled();
  });

  test("checks if button is disabled when rendered with disabled prop", () => {
    render(<Button label="Click me" disabled={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("aria-disabled", "true");
  });

  test("renders the correct icon", () => {
    const { getByTestId } = render(<Button renderIcon={AddIcon} />);
    const icon = getByTestId("AddIcon");
    expect(icon).toBeInTheDocument;
  });

  test("renders the correct size, type, kind, and classname", () => {
    render(
      <Button
        size="sm"
        kind="danger--primary"
        type="submit"
        className="eureka"
      />,
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("cds--layout--size-sm");
    expect(buttonElement).toHaveClass("cds--btn--danger--primary");
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(buttonElement).toHaveClass("eureka");
  });

  test("renders the correct css classname for 'ghost-subtle' button variation", () => {
    render(<Button size="sm" kind="ghost--subtle" type="submit" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("es--btn--ghost--subtle");
  });

  test("should apply full-width class when fullWidth prop is true", () => {
    const { container } = render(
      <Button label="Test Button" fullWidth={true} />,
    );
    const button = container.querySelector("button");
    expect(button.className).toContain("full-width");
  });

  test("should take on the accessible name of the element id passed to the component's ariaLabelledBy prop", () => {
    const { container } = render(
      <>
        <p id="test-label">Good afternoon</p>
        <Button
          label="Test Button"
          ariaLabelledBy="test-label"
          fullWidth={true}
        />
      </>,
    );
    const button = container.querySelector("button");
    expect(button).toHaveAccessibleName("Good afternoon");
  });

  test("Can use its own label as part of a composite aria-labelledby", () => {
    const { container } = render(
      <>
        <p id="test-label">One Two</p>
        <Button
          id="test-button"
          label="Three"
          ariaLabelledBy="test-label test-button"
          fullWidth={true}
        />
      </>,
    );

    const button = container.querySelector("button");
    expect(button).toHaveAccessibleName("One Two Three");
  });
});
