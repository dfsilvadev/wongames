import Base from "templates/Base";
import { Container } from "components/Container";
import Heading from "components/Heading";
import GameCard, { GameCardProps } from "components/GameCard";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";
import { Grid } from "components/Grid";
import { Divider } from "components/Divider";
import Empty from "components/Empty";

export type WishlistTemplateProps = {
  recommendedTitle?: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
  games?: GameCardProps[];
};

const Wishlist = ({
  recommendedTitle = "You may like these games",
  recommendedGames,
  recommendedHighlight,
  games = []
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games.length ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Wishlist;
