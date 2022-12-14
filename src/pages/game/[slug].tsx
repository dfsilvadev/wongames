import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { initializeApollo } from "utils/apollo";
import { gamesMapper, highlightMapper } from "utils/mappers";

import Game, { GameTemplateProps } from "templates/Game";

import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "graphql/queries/games";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { QUERY_UPCOMING } from "graphql/queries/upcoming";

import { queryGames, queryGamesVariables } from "graphql/generated/queryGames";
import {
  queryGameBySlug,
  queryGameBySlugVariables
} from "graphql/generated/queryGameBySlug";
import { queryRecommended } from "graphql/generated/queryRecommended";
import {
  queryUpcoming,
  queryUpcomingVariables
} from "graphql/generated/queryUpcoming";

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<queryGames, queryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15
    }
  });

  const paths = data.games?.data.map(({ attributes: path }) => ({
    params: {
      slug: path?.slug
    }
  }));

  return {
    paths,
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const TODAY = new Date().toISOString().slice(0, 10);

  const { data } = await apolloClient.query<
    queryGameBySlug,
    queryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  });

  if (!data.games?.data.length) return { notFound: true };

  const { attributes: game } = data.games.data[0];

  const { data: recItems } = await apolloClient.query<queryRecommended>({
    query: QUERY_RECOMMENDED
  });

  const {
    data: { upcoming, showcase }
  } = await apolloClient.query<queryUpcoming, queryUpcomingVariables>({
    query: QUERY_UPCOMING,
    variables: {
      date: TODAY
    }
  });

  return {
    props: {
      cover: `http://localhost:1337${game?.cover?.data?.attributes?.src}`,
      gameInfo: {
        title: game?.name,
        price: game?.price,
        description: game?.short_description
      },
      gallery: game?.gallery?.data.map(({ attributes: image }) => ({
        src: `http://localhost:1337${image?.src}`,
        label: image?.label
      })),
      description: game?.description,
      details: {
        developer: game?.developers?.data[0].attributes?.name,
        releaseDate: game?.release_date,
        platforms: game?.platforms?.data.map(
          ({ attributes: platform }) => platform?.name
        ),
        publisher: game?.publisher?.data?.attributes?.name,
        rating: game?.rating,
        genres: game?.categories?.data.map(
          ({ attributes: category }) => category?.name
        )
      },
      upcomingGamesTitle: showcase?.data?.attributes?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming),
      upcomingHighlight: highlightMapper(
        showcase?.data?.attributes?.upcomingGames?.highlight
      ),
      recommendedTitle: recItems.recommended?.data?.attributes?.section.title,
      recommendedGames: gamesMapper(
        recItems.recommended?.data?.attributes?.section.games
      ),
      revalidate: 60 * 60
    }
  };
};
