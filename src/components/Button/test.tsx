import { screen } from "@testing-library/react";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import { renderWithTheme } from "utils/tests/helpers";

import Button from ".";

describe("<Button />", () => {
  it("should render the medium button by default", () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem"
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the small button when size small is passed", () => {
    renderWithTheme(<Button size="small">Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "3rem",
      "font-size": "1.2rem"
    });
  });

  it("should render the large button when size large is passed", () => {
    renderWithTheme(<Button size="large">Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "5rem",
      padding: "0.8rem 4.8rem",
      "font-size": "1.6rem"
    });
  });

  it("should render the full width button when fullWidth option is passed", () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%"
    });
  });

  it("should render an icon", () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    );
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render a minimal", () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    );

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      background: "none",
      color: "#F231A5"
    });

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule(
      "background",
      "none",
      {
        modifier: ":hover"
      }
    );
  });

  it("should render button as a link", () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    );

    debug(container);

    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute(
      "href",
      "/link"
    );
  });
});
