import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Highlight from ".";
import * as S from "./styles";

const props = {
  title: "Heading 1",
  subtitle: "Heading 2",
  backgroundImage: "/img/red-dead-img.jpg",
  buttonLabel: "Buy now",
  buttonLink: "/rdr2"
};

describe("<Highlight />", () => {
  it("should render headings and button", () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole("heading", { name: /Heading 1/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Heading 2/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Buy now/i })).toHaveAttribute(
      "href",
      "/rdr2"
    );
  });

  it("should render background image", () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      background: `url(${props.backgroundImage}) center center/cover no-repeat`
    });
  });

  it("should render float image", () => {
    renderWithTheme(<Highlight {...props} floatImage="/red-dead-float.png" />);

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      "/red-dead-float.png"
    );
  });

  it("should render align right by default", () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`
    });

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"floatimage content"'
    );
  });

  it("should render align left", () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Content}`
    });

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      '"content floatimage"'
    );
  });
});
