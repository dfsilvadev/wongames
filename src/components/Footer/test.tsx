import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Footer from ".";

describe("<Footer />", () => {
  it("should render 4 columns topics", () => {
    const { container } = renderWithTheme(<Footer />);

    expect(
      screen.getByRole("heading", { name: /contact us/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /fallow us/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /links/i })).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /location/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render 2 columns when on mobile ", () => {
    renderWithTheme(<Footer />);

    expect(screen.getByRole("content")).toHaveStyle({
      "grid-template-columns": "repeat(2,1fr)"
    });
  });

  it("should render 4 columns when on desktop", () => {
    renderWithTheme(<Footer />);

    expect(screen.getByRole("content")).toHaveStyleRule(
      "grid-template-columns",
      "repeat(4,1fr)",
      {
        media: "(min-width: 768px)"
      }
    );
  });

  it("should render a copyright", () => {
    renderWithTheme(<Footer />);

    expect(
      screen.getByText(/Won Games 2020 © All rights reserved\./i)
    ).toBeInTheDocument();
  });
});
