import { ReactNode } from "react";

import { Container } from "components/Container";
import Menu from "components/Menu";
import Footer from "components/Footer";

import * as S from "./styles";

export type BaseTemplateProps = {
  children: ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
};

export default Base;
