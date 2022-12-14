import { gql } from "@apollo/client";

import { GamesFragment } from "graphql/fragments/game";
import { HighlightFragment } from "graphql/fragments/highlight";

export const QUERY_UPCOMING = gql`
  query queryUpcoming($date: Date!) {
    upcoming: games(
      filters: { release_date: { gt: $date } }
      sort: "release_date"
    ) {
      data {
        attributes {
          ...GamesFragment
        }
      }
    }

    showcase: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${GamesFragment}
  ${HighlightFragment}
`;
