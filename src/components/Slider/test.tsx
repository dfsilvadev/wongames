import "match-media-mock";
import { screen } from "@testing-library/react";

import { renderWithTheme } from "utils/tests/helpers";

import Slider from ".";

describe("<Slider />", () => {
  it("should render children as slider item", () => {
    const { container } = renderWithTheme(
      <Slider settings={{ slidesToShow: 2 }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    );

    expect(
      screen.getByText(/Item 1/i).parentElement?.parentElement
    ).toHaveClass("slick-slide");

    expect(
      screen.getByText(/Item 2/i).parentElement?.parentElement
    ).toHaveClass("slick-slide");

    expect(container.firstChild).toMatchSnapshot();
  });
});
