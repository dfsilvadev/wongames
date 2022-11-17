import { gql } from "@apollo/client";

import { HighlightFragment } from "graphql/fragments/highlight";
import { GamesFragment } from "graphql/fragments/game";

export const QUERY_RECOMMENDED = gql`
  query queryRecommended {
    recommended {
      data {
        attributes {
          section {
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                attributes {
                  ...GamesFragment
                }
              }
            }
          }
        }
      }
    }
  }

  ${HighlightFragment}
  ${GamesFragment}
`;
