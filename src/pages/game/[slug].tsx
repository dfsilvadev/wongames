import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { initializeApollo } from "utils/apollo";
import { formatCurrency } from "utils/formatCurrency";

import Game, { GameTemplateProps } from "templates/Game";

import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "graphql/queries/games";

import { queryGames, queryGamesVariables } from "graphql/generated/queryGames";
import {
  queryGameBySlug,
  queryGameBySlugVariables
} from "graphql/generated/queryGameBySlug";

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
      limit: 9
    }
  });

  const paths = data.games.data.map((game) => ({
    params: {
      slug: game.attributes.slug
    }
  }));

  return {
    paths,
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    queryGameBySlug,
    queryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  });

  if (!data.games.data.length) return { notFound: true };

  const game = data.games.data[0];

  return {
    props: {
      cover: `http://localhost:1337${game.attributes.cover.data.attributes.src}`,
      gameInfo: {
        title: game.attributes.name,
        price: formatCurrency(game.attributes.price),
        description: game.attributes.short_description
      },
      gallery: game.attributes.gallery.data.map((item) => ({
        src: `http://localhost:1337${item.attributes.src}`,
        label: item.attributes.label
      })),
      description: game.attributes.description,
      details: {
        developer: game.attributes.developers.data[0].attributes.name,
        releaseDate: game.attributes.release_date,
        platforms: game.attributes.platforms.data.map(
          (platform) => platform.attributes.name
        ),
        publisher: game.attributes.publisher.data.attributes.name,
        rating: game.attributes.rating,
        genres: game.attributes.categories.data.map(
          (category) => category.attributes.name
        )
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock,
      revalidate: 60 * 60
    }
  };
};
