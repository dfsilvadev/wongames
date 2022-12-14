/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: queryUpcoming
// ====================================================

export interface queryUpcoming_upcoming_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryUpcoming_upcoming_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: queryUpcoming_upcoming_data_attributes_cover_data_attributes | null;
}

export interface queryUpcoming_upcoming_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: queryUpcoming_upcoming_data_attributes_cover_data | null;
}

export interface queryUpcoming_upcoming_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface queryUpcoming_upcoming_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: queryUpcoming_upcoming_data_attributes_developers_data_attributes | null;
}

export interface queryUpcoming_upcoming_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: queryUpcoming_upcoming_data_attributes_developers_data[];
}

export interface queryUpcoming_upcoming_data_attributes {
  __typename: "Game";
  slug: string;
  name: string;
  price: number;
  cover: queryUpcoming_upcoming_data_attributes_cover | null;
  developers: queryUpcoming_upcoming_data_attributes_developers | null;
}

export interface queryUpcoming_upcoming_data {
  __typename: "GameEntity";
  attributes: queryUpcoming_upcoming_data_attributes | null;
}

export interface queryUpcoming_upcoming {
  __typename: "GameEntityResponseCollection";
  data: queryUpcoming_upcoming_data[];
}

export interface queryUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: queryUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data_attributes | null;
}

export interface queryUpcoming_showcase_data_attributes_upcomingGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: queryUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data | null;
}

export interface queryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: queryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data_attributes | null;
}

export interface queryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: queryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data | null;
}

export interface queryUpcoming_showcase_data_attributes_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: queryUpcoming_showcase_data_attributes_upcomingGames_highlight_background;
  floatImage: queryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface queryUpcoming_showcase_data_attributes_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: queryUpcoming_showcase_data_attributes_upcomingGames_highlight | null;
}

export interface queryUpcoming_showcase_data_attributes {
  __typename: "Home";
  upcomingGames: queryUpcoming_showcase_data_attributes_upcomingGames | null;
}

export interface queryUpcoming_showcase_data {
  __typename: "HomeEntity";
  attributes: queryUpcoming_showcase_data_attributes | null;
}

export interface queryUpcoming_showcase {
  __typename: "HomeEntityResponse";
  data: queryUpcoming_showcase_data | null;
}

export interface queryUpcoming {
  upcoming: queryUpcoming_upcoming | null;
  showcase: queryUpcoming_showcase | null;
}

export interface queryUpcomingVariables {
  date: any;
}
