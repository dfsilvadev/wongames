import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { initializeApollo } from "utils/apollo";

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

  const paths = data.games.data.map(({ attributes: path }) => ({
    params: {
      slug: path.slug
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

  const { attributes: game } = data.games.data[0];

  return {
    props: {
      cover: `http://localhost:1337${game.cover.data.attributes.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.data.map(({ attributes: image }) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers.data[0].attributes.name,
        releaseDate: game.release_date,
        platforms: game.platforms.data.map(
          ({ attributes: platform }) => platform.name
        ),
        publisher: game.publisher.data.attributes.name,
        rating: game.rating,
        genres: game.categories.data.map(
          ({ attributes: category }) => category.name
        )
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock,
      revalidate: 60 * 60
    }
  };
};
