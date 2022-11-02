import { gql } from "@apollo/client";

export const QUERY_HOME = gql`
  query queryHome {
    banners {
      data {
        attributes {
          title
          subtitle
          image {
            data {
              attributes {
                url
              }
            }
          }
          button {
            label
            link
          }
          ribbon {
            text
            color
            size
          }
        }
      }
    }
  }
`;
