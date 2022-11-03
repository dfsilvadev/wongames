import { gql } from "@apollo/client";

import { BannerFragment } from "graphql/fragments/banner";
import { GamesFragment } from "graphql/fragments/game";
import { HighlightFragment } from "graphql/fragments/highlight";

export const QUERY_HOME = gql`
  query queryHome($date: Date!) {
    banners(sort: "id") {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { lte: $date } }
      sort: "release_date:desc"
    ) {
      data {
        attributes {
          ...GamesFragment
        }
      }
    }

    upcomingGames: games(
      filters: { release_date: { gt: $date } }
      sort: "release_date"
    ) {
      data {
        attributes {
          ...GamesFragment
        }
      }
    }

    freeGames: games(filters: { price: { eq: 0 } }, sort: "release_date:desc") {
      data {
        attributes {
          ...GamesFragment
        }
      }
    }

    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          popularGames {
            title
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

          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${GamesFragment}
  ${HighlightFragment}
`;
