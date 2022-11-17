/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: queryRecommended
// ====================================================

export interface queryRecommended_recommended_data_attributes_section_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryRecommended_recommended_data_attributes_section_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: queryRecommended_recommended_data_attributes_section_highlight_background_data_attributes | null;
}

export interface queryRecommended_recommended_data_attributes_section_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: queryRecommended_recommended_data_attributes_section_highlight_background_data | null;
}

export interface queryRecommended_recommended_data_attributes_section_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryRecommended_recommended_data_attributes_section_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: queryRecommended_recommended_data_attributes_section_highlight_floatImage_data_attributes | null;
}

export interface queryRecommended_recommended_data_attributes_section_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: queryRecommended_recommended_data_attributes_section_highlight_floatImage_data | null;
}

export interface queryRecommended_recommended_data_attributes_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: queryRecommended_recommended_data_attributes_section_highlight_background;
  floatImage: queryRecommended_recommended_data_attributes_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface queryRecommended_recommended_data_attributes_section_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryRecommended_recommended_data_attributes_section_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: queryRecommended_recommended_data_attributes_section_games_data_attributes_cover_data_attributes | null;
}

export interface queryRecommended_recommended_data_attributes_section_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: queryRecommended_recommended_data_attributes_section_games_data_attributes_cover_data | null;
}

export interface queryRecommended_recommended_data_attributes_section_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface queryRecommended_recommended_data_attributes_section_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: queryRecommended_recommended_data_attributes_section_games_data_attributes_developers_data_attributes | null;
}

export interface queryRecommended_recommended_data_attributes_section_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: queryRecommended_recommended_data_attributes_section_games_data_attributes_developers_data[];
}

export interface queryRecommended_recommended_data_attributes_section_games_data_attributes {
  __typename: "Game";
  slug: string;
  name: string;
  price: number;
  cover: queryRecommended_recommended_data_attributes_section_games_data_attributes_cover | null;
  developers: queryRecommended_recommended_data_attributes_section_games_data_attributes_developers | null;
}

export interface queryRecommended_recommended_data_attributes_section_games_data {
  __typename: "GameEntity";
  attributes: queryRecommended_recommended_data_attributes_section_games_data_attributes | null;
}

export interface queryRecommended_recommended_data_attributes_section_games {
  __typename: "GameRelationResponseCollection";
  data: queryRecommended_recommended_data_attributes_section_games_data[];
}

export interface queryRecommended_recommended_data_attributes_section {
  __typename: "ComponentPagePopularGames";
  highlight: queryRecommended_recommended_data_attributes_section_highlight | null;
  games: queryRecommended_recommended_data_attributes_section_games | null;
}

export interface queryRecommended_recommended_data_attributes {
  __typename: "Recommended";
  section: queryRecommended_recommended_data_attributes_section;
}

export interface queryRecommended_recommended_data {
  __typename: "RecommendedEntity";
  attributes: queryRecommended_recommended_data_attributes | null;
}

export interface queryRecommended_recommended {
  __typename: "RecommendedEntityResponse";
  data: queryRecommended_recommended_data | null;
}

export interface queryRecommended {
  recommended: queryRecommended_recommended | null;
}
