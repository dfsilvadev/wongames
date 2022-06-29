import Link from "next/link";

import Button from "components/Button";
import GameItem, { GameItemProps } from "components/GameItem";

import * as S from "./styles";
import Empty from "components/Empty";

export type CartListProps = {
  items?: GameItemProps[];
  total?: string;
  hasButton?: boolean;
};

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => {
  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          {!!items &&
            items.map((item) => <GameItem key={item.title} {...item} />)}

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart">
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <>
          <Empty
            title="Your cart is empty"
            description="Go back to the explore great games and offers"
            hasLink
          />
        </>
      )}
    </S.Wrapper>
  );
};

export default CartList;
