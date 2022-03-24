import Heading from "components/Heading";
import Logo from "components/Logo";
import { ReactNode } from "react";

import * as S from "./styles";

type AuthProps = {
  title: string;
  children: ReactNode;
};

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Logo id="banner" />

          <div>
            <Heading size="huge">All your favorite games in one place</Heading>

            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>

          <S.Footer>Won Games 2022 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Logo color="black" size="large" id="form" />

          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Auth;
