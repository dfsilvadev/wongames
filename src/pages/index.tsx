import { initializeApollo } from "utils/apollo";

import Home, { HomeTemplateProps } from "templates/Home";

import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import { QUERY_HOME } from "graphql/queries/home";
import { queryHome } from "graphql/generated/queryHome";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<queryHome>({
    query: QUERY_HOME
  });

  const banners = data.banners?.data.map(({ attributes: banner }) => ({
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

  return {
    props: {
      banners,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
      revalidate: 60 * 60 //1 hour
    }
  };
}
