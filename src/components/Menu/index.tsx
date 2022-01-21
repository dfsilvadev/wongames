import { Menu2 as MenuIcon } from "@styled-icons/remix-line/Menu2";
import { ShoppingCart as ShoppingCartIcon } from "@styled-icons/material-outlined/ShoppingCart";
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search";

import * as S from "./styles";
import Logo from "components/Logo";

const Menu = () => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile aria-label="Won Games" />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>
    </S.Wrapper>
  );
};

export default Menu;
