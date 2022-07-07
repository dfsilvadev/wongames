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
