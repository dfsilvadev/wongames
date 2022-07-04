/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryGames
// ====================================================

export interface queryGames_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryGames_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: queryGames_games_data_attributes_cover_data_attributes | null;
}

export interface queryGames_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: queryGames_games_data_attributes_cover_data | null;
}

export interface queryGames_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface queryGames_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: queryGames_games_data_attributes_developers_data_attributes | null;
}

export interface queryGames_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: queryGames_games_data_attributes_developers_data[];
}

export interface queryGames_games_data_attributes {
  __typename: "Game";
  slug: string;
  name: string;
  price: number;
  cover: queryGames_games_data_attributes_cover | null;
  developers: queryGames_games_data_attributes_developers | null;
}

export interface queryGames_games_data {
  __typename: "GameEntity";
  attributes: queryGames_games_data_attributes | null;
}

export interface queryGames_games {
  __typename: "GameEntityResponseCollection";
  data: queryGames_games_data[];
}

export interface queryGames {
  games: queryGames_games;
}

export interface queryGamesVariables {
  limit: number;
}
