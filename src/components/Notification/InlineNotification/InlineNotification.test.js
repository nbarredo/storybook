import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InlineNotification } from "./InlineNotification";

describe("InlineNotification functions properly", () => {
  it("should have role=status by default", () => {
    const { container } = render(
      <InlineNotification title="Notification title" />
    );
    expect(container.firstChild).toHaveAttribute("role", "status");
  });

  it("should place the `className` prop on the outermost DOM node", () => {
    const { container } = render(
      <InlineNotification title="Notification title" className="test" />
    );
    expect(container.firstChild).toHaveClass("test");
  });

  it("interpolates matching className based on kind prop", () => {
    const { rerender } = render(
      <InlineNotification title="Notification title" />
    );
    const kinds = [
      "error",
      "info",
      "info-square",
      "success",
      "warning",
      "warning-alt"
    ];
    kinds.forEach((kind) => {
      rerender(<InlineNotification title="Notification title" kind={kind} />);
      expect(screen.queryByRole("status")).toHaveClass(
        `cds--inline-notification--${kind}`
      );
    });
  });

  it("allows non-interactive elements as children", () => {
    render(
      <InlineNotification title="Notification title">
        <p>Sample text</p>
      </InlineNotification>
    );
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByText(/Sample text/i)).toBeInTheDocument();
  });

  it("does not allow interactive elements as children", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    expect(() => {
      render(
        <InlineNotification title="Notification title">
          <button type="button">Sample button text</button>
        </InlineNotification>
      );
    }).toThrow();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("close button is rendered by default and includes aria-hidden=true", () => {
    render(<InlineNotification title="Notification title" />);

    const closeButton = screen.queryByRole("button", {
      hidden: true
    });
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveAttribute("aria-hidden", "true");
  });

  it("does not render close button when `hideCloseButton` is provided", () => {
    render(<InlineNotification title="Notification title" hideCloseButton />);
    const closeButton = screen.queryByRole("button", {
      hidden: true
    });
    expect(closeButton).not.toBeInTheDocument();
  });

  it("calls `onClose` when notification is closed", async () => {
    const onClose = jest.fn();
    render(<InlineNotification title="Notification title" onClose={onClose} />);

    const closeButton = screen.queryByRole("button", {
      hidden: true
    });
    await userEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });
  });

  it("keeps notification open if `onClose` returns false", async () => {
    render(
      <InlineNotification title="Notification title" onClose={() => false} />
    );

    const closeButton = screen.queryByRole("button", {
      hidden: true
    });
    await userEvent.click(closeButton);
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByRole("status")).toBeInTheDocument();
  });

  it("calls `onCloseButtonClick` when notification is closed", async () => {
    const onCloseButtonClick = jest.fn();
    render(
      <InlineNotification
        title="Notification title"
        onCloseButtonClick={onCloseButtonClick}
      />
    );

    const closeButton = screen.queryByRole("button", {
      hidden: true
    });
    await userEvent.click(closeButton);
    expect(onCloseButtonClick).toHaveBeenCalledTimes(1);
  });
});
