import HelpIcon from "@mui/icons-material/Help";
import { render, screen } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Accordion component functions properly", () => {
  test("renders the title", () => {
    render(<Accordion title="Test Title">Test Content</Accordion>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  test("renders the children", () => {
    render(<Accordion title="Test Title">Test Content</Accordion>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("starts open when the open prop is true", () => {
    render(
      <Accordion title="Test Title" open>
        Test Content
      </Accordion>,
    );
    const acc = screen.getByRole("listitem");
    const button = screen.getByRole("button");
    expect(acc).toHaveClass("cds--accordion__item--active");
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  test("starts closed when the open prop is false", () => {
    render(
      <Accordion title="Test Title" open={false}>
        Test Content
      </Accordion>,
    );
    const acc = screen.getByRole("listitem");
    const button = screen.getByRole("button");
    expect(acc).not.toHaveClass("cds--accordion__item--active");
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("renders the icon", () => {
    const { getByTestId } = render(
      <Accordion title="Test Title" icon={<HelpIcon />}>
        Test Content
      </Accordion>,
    );
    expect(getByTestId("HelpIcon")).toBeInTheDocument();
  });
});
