import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Ribbon from ".";

describe("<Ribbon />", () => {
  it("should render the text correctly", () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with primary color", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: "#f231a5"
    });
  });

  it("should render with secondary color", () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: "#3cd3c1"
    });
  });

  it("should render normal size as default", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: "3.6rem",
      "font-size": "1.4rem"
    });
  });

  it("should render with size small", () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: "2.4rem",
      "font-size": "1.2rem"
    });
  });

  it("should render with size large", () => {
    renderWithTheme(<Ribbon size="large">Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: "4rem",
      "font-size": "1.8rem"
    });
  });
});
