import { gql } from "@apollo/client";

import { GamesFragment } from "graphql/fragments/game";

export const QUERY_GAMES = gql`
  query queryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        attributes {
          ...GamesFragment
        }
      }
    }
  }
  ${GamesFragment}
`;

export const QUERY_GAME_BY_SLUG = gql`
  query queryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          name
          short_description
          description
          price
          rating
          release_date

          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }

          developers {
            data {
              attributes {
                name
              }
            }
          }

          publisher {
            data {
              attributes {
                name
              }
            }
          }

          categories {
            data {
              attributes {
                name
              }
            }
          }

          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
