import GamesTemplate, { GamesTemplateProps } from "templates/Games";

import { initializeApollo } from "utils/apollo";

import { QUERY_GAMES } from "graphql/queries/games";
import filterItemsMock from "components/ExploreSidebar/mock";
import { queryGames, queryGamesVariables } from "graphql/generated/queryGames";

export default function GamePage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<queryGames, queryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  });

  const games = data.games.data.map((game) => ({
    slug: game.attributes.slug,
    title: game.attributes.name,
    developer: game.attributes.developers.data[0].attributes!.name,
    img: `http://localhost:1337${game.attributes.cover!.data?.attributes?.url}`,
    price: game.attributes.price
  }));

  return {
    props: {
      games,
      filterItems: filterItemsMock,
      revalidate: 60 * 60 // 1 hours
    }
  };
}
