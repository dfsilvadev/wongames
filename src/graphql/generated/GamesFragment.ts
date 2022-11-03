/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GamesFragment
// ====================================================

export interface GamesFragment_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface GamesFragment_cover_data {
  __typename: "UploadFileEntity";
  attributes: GamesFragment_cover_data_attributes | null;
}

export interface GamesFragment_cover {
  __typename: "UploadFileEntityResponse";
  data: GamesFragment_cover_data | null;
}

export interface GamesFragment_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface GamesFragment_developers_data {
  __typename: "DeveloperEntity";
  attributes: GamesFragment_developers_data_attributes | null;
}

export interface GamesFragment_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: GamesFragment_developers_data[];
}

export interface GamesFragment {
  __typename: "Game";
  slug: string;
  name: string;
  price: number;
  cover: GamesFragment_cover | null;
  developers: GamesFragment_developers | null;
}
