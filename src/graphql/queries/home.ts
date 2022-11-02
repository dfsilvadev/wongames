import { gql } from "@apollo/client";
import { BannerFragment } from "graphql/fragments/banner";

export const QUERY_HOME = gql`
  query queryHome {
    banners(sort: "id") {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }
  }

  ${BannerFragment}
`;
