import { gql } from "@apollo/client";

export const QUERY_GAMES = gql`
  query queryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        attributes {
          slug
          name
          price
          cover {
            data {
              attributes {
                url
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
        }
      }
    }
  }
`;
