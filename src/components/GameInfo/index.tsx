import { FavoriteBorder } from "@styled-icons/material-outlined";
import { AddShoppingCart } from "@styled-icons/material-twotone";

import Button from "components/Button";
import Heading from "components/Heading";
import Ribbon from "components/Ribbon";

import * as S from "./styles";

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineColor="primary" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{`${price}`}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.WrapperButton>
        <Button icon={<AddShoppingCart />} size="large">
          Add to cart
        </Button>
        <Button icon={<FavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
      </S.WrapperButton>
    </S.Wrapper>
  );
};

export default GameInfo;
