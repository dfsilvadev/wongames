import { gql } from "@apollo/client";

export const GamesFragment = gql`
  fragment GamesFragment on Game {
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
`;
