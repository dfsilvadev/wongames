import Whishlist, { WishlistTemplateProps } from "templates/Wishlist";

import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { queryRecommended } from "graphql/generated/queryRecommended";
import { initializeApollo } from "utils/apollo";

import { gamesMapper, highlightMapper } from "utils/mappers";

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Whishlist {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<queryRecommended>({
    query: QUERY_RECOMMENDED
  });

  return {
    props: {
      recommendedTitle: data.recommended?.data?.attributes?.section.title,
      recommendedGames: gamesMapper(
        data.recommended?.data?.attributes?.section.games
      ),
      recommendedHighlight: highlightMapper(
        data.recommended?.data?.attributes?.section.highlight
      )
    }
  };
}
