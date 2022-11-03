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
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
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
        <Showcase title="News" games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title="Upcoming"
        highlight={upcommingHighlight}
        games={upcommingGames}
      />

      <Showcase
        title="Free games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
};

export default Home;
