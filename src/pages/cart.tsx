import Cart, { CartTemplateProps } from "templates/Cart";

import itemsMock from "components/CartList/mock";
import cardsMock from "components/PaymentOptions/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: itemsMock,
      totla: "$ 430,00",
      cards: cardsMock
    }
  };
}
