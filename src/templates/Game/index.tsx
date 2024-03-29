import Base from "templates/Base";

import GameInfo, { GameInfoProps } from "components/GameInfo";
import Gallery, { GalleryImageProps } from "components/Gallery";
import TextContent from "components/TextContent";
import GameDetails, { GameDetailsProps } from "components/GameDetails";
import { Divider } from "components/Divider";
import { GameCardProps } from "components/GameCard";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";

import * as S from "./styles";

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGamesTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle = "You may like these games",
  recommendedGames
}: GameTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />

          <Divider />
        </S.SectionGameDetails>

        <Showcase
          title={upcomingGamesTitle}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase title={recommendedTitle} games={recommendedGames} />
      </S.Main>
    </Base>
  );
};

export default Game;
