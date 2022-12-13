import Cart, { CartTemplateProps } from "templates/Cart";

import itemsMock from "components/CartList/mock";
import cardsMock from "components/PaymentOptions/mock";

import { initializeApollo } from "utils/apollo";
import { gamesMapper, highlightMapper } from "utils/mappers";

import { queryRecommended } from "graphql/generated/queryRecommended";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
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
      ),
      items: itemsMock,
      total: "$ 430,00",
      cards: cardsMock
    }
  };
}
