import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Wishlist from ".";

import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

const props = {
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
  games: gamesMock.slice(0, 3)
};

jest.mock("components/Showcase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  }
}));

describe("<Whishlist />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Wishlist {...props} />);

    expect(
      screen.getByRole("heading", { name: /Wishlist/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument();

    expect(screen.getAllByText(/Population Zero/i)).toHaveLength(3);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render empty when there are no games", () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /your wishlist is empty/i })
    ).toBeInTheDocument();
  });
});
