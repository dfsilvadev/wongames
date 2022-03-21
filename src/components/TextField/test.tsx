import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";

import { renderWithTheme } from "utils/tests/helpers";

import TextField from ".";

describe("<TextField />", () => {
  it("should renders with label", () => {
    const { container } = renderWithTheme(
      <TextField label="Label" labelFor="Field" id="Field" />
    );

    expect(screen.getByLabelText("Label")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should renders without label", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });

  it("should renders with placeholder", () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText("hey you")).toBeInTheDocument();
  });

  it("should changes its value when typing", async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField onInput={onInput} label="Label" labelFor="Label" id="Label" />
    );

    const input = screen.getByRole("textbox");
    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it("should is accessible by tab", () => {
    renderWithTheme(<TextField label="Label" labelFor="Label" id="Label" />);

    const input = screen.getByLabelText("Label");

    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it("should render an icon", () => {
    renderWithTheme(<TextField icon={<EmailOutline data-testid="icon" />} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render an iconon the right side", () => {
    renderWithTheme(
      <TextField
        icon={<EmailOutline data-testid="icon" />}
        iconPosition="right"
      />
    );

    expect(screen.getByTestId("icon").parentElement).toHaveStyle({
      order: 1
    });
  });

  it("should does not changes its value when disabled", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it("should is not accessible by tab when disabled", () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    );

    const input = screen.getByLabelText("TextField");
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it("should renders with error", () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<EmailOutline data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        error="Error message"
      />
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
