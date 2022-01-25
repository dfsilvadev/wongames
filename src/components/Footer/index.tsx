import Link from "next/link";

import Heading from "components/Heading";
import Logo from "components/Logo";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content role="content">
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact us
          </Heading>
          <Link href="mailto:sac@wongames.com">
            <a>sac@wongames.com</a>
          </Link>
          <Link href="#">
            <a>+55 11 9 5199-1612</a>
          </Link>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Fallow us
          </Heading>
          <nav aria-labelledby="social media">
            <Link href="https://www.instagram.com/won-games">
              <a rel="noopenner, noreferrer" target="_blank">
                Instagram
              </a>
            </Link>
            <Link href="https://www.twitter.com/won-games">
              <a rel="noopenner, noreferrer" target="_blank">
                Twitter
              </a>
            </Link>
            <Link href="https://www.youtube.com/won-games">
              <a rel="noopenner, noreferrer" target="_blank">
                Youtube
              </a>
            </Link>
            <Link href="https://www.facebook.com/won-games">
              <a rel="noopenner, noreferrer" target="_blank">
                Facebook
              </a>
            </Link>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>
          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/games">
              <a>Store</a>
            </Link>
            <Link href="/search">
              <a>Buscar</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>
          <span>Rua 7 de Maio</span>
          <span>527 - 89020330</span>
          <span>São Paulo, Brasil</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
