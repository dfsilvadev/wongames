import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from "@styled-icons/material-outlined";

import { formatCurrency } from "utils/formatCurrency";

import Ribbon, { RibbonColors, RibbonSizes } from "components/Ribbon";

import Button from "components/Button";

import * as S from "./styles";

export type GameCardProps = {
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "small"
}: GameCardProps) => {
  console.log(promotionalPrice);

  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <Link href={`/game/${slug}`} passHref>
        <S.ImageBox>
          <Image src={img} alt={title} layout="fill" />
        </S.ImageBox>
      </Link>

      <S.Content>
        <Link href={`/game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>

        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional>{formatCurrency(price)}</S.Price>
          )}

          <S.Price>{formatCurrency(promotionalPrice! || price)}</S.Price>

          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameCard;
