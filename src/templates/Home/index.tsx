import { BannerProps } from "components/Banner";
import { HighlightProps } from "components/Highlight";
import { GameCardProps } from "components/GameCard";

import Base from "templates/Base";
import { Container } from "components/Container";
import BannerSlider from "components/BannerSlider";
import Showcase from "components/Showcase";

import * as S from "./styles";

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGamesTitle: string;
  newGames: GameCardProps[];
  mostPopularGamesTitle: string;
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGamesTitle: string;
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  freeGamesTitle: string;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGamesTitle,
  upcommingGames,
  upcommingHighlight,
  freeGamesTitle,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title={upcomingGamesTitle}
        highlight={upcommingHighlight}
        games={upcommingGames}
      />

      <Showcase
        title={freeGamesTitle}
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
};

export default Home;
