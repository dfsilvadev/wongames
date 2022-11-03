import {
  queryHome_banners,
  queryHome_newGames,
  queryHome_sections_data_attributes_popularGames_games,
  queryHome_sections_data_attributes_popularGames_highlight
} from "graphql/generated/queryHome";

export const bannerMapper = (banners: queryHome_banners) => {
  return banners.data.map(({ attributes: banner }) => ({
    img: `http://localhost:1337${banner?.image.data?.attributes?.url}`,
    title: banner?.title,
    subtitle: banner?.subtitle,
    buttonLabel: banner?.button?.label,
    buttonLink: banner?.button?.link,
    ...(banner?.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }));
};

export const gamesMapper = (
  games:
    | queryHome_newGames
    | queryHome_sections_data_attributes_popularGames_games
    | null
    | undefined
) => {
  return (
    games &&
    games.data.map(({ attributes: game }) => ({
      title: game?.name,
      slug: game?.slug,
      developer: game?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game?.cover?.data?.attributes?.url}`,
      price: game?.price
    }))
  );
};

export const highlightMapper = (
  highlight:
    | queryHome_sections_data_attributes_popularGames_highlight
    | null
    | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight?.background.data?.attributes?.url}`,
      floatImage: `http://localhost:1337${highlight?.floatImage?.data?.attributes?.url}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  );
};
