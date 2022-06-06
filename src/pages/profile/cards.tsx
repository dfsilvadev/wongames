import CardsList, { CardsListProps } from "components/CardList";
import Profile from "templates/Profile";

import mockCards from "components/PaymentOptions/mock";

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  };
}
