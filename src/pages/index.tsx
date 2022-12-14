import { initializeApollo } from "utils/apollo";
import { bannerMapper, gamesMapper, highlightMapper } from "utils/mappers";

import Home, { HomeTemplateProps } from "templates/Home";

import { QUERY_HOME } from "graphql/queries/home";
import { queryHome, queryHomeVariables } from "graphql/generated/queryHome";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<queryHome, queryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    }
  });

  return {
    props: {
      banners: bannerMapper(banners!),
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      newGames: gamesMapper(newGames!),
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularHighlight: highlightMapper(
        sections?.data?.attributes?.popularGames?.highlight
      ),
      mostPopularGames: gamesMapper(
        sections!.data!.attributes!.popularGames!.games!
      ),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames!),
      upcomingHighlight: highlightMapper(
        sections?.data?.attributes?.upcomingGames?.highlight
      ),
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: gamesMapper(freeGames!),
      freeHighlight: highlightMapper(
        sections?.data?.attributes?.freeGames?.highlight
      ),
      revalidate: 60 //60 seconds
    }
  };
}
