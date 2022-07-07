/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: queryGameBySlug
// ====================================================

export interface queryGameBySlug_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  src: string;
}

export interface queryGameBySlug_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: queryGameBySlug_games_data_attributes_cover_data_attributes;
}

export interface queryGameBySlug_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: queryGameBySlug_games_data_attributes_cover_data;
}

export interface queryGameBySlug_games_data_attributes_gallery_data_attributes {
  __typename: "UploadFile";
  src: string;
  label: string;
}

export interface queryGameBySlug_games_data_attributes_gallery_data {
  __typename: "UploadFileEntity";
  attributes: queryGameBySlug_games_data_attributes_gallery_data_attributes;
}

export interface queryGameBySlug_games_data_attributes_gallery {
  __typename: "UploadFileRelationResponseCollection";
  data: queryGameBySlug_games_data_attributes_gallery_data[];
}

export interface queryGameBySlug_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface queryGameBySlug_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: queryGameBySlug_games_data_attributes_developers_data_attributes;
}

export interface queryGameBySlug_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: queryGameBySlug_games_data_attributes_developers_data[];
}

export interface queryGameBySlug_games_data_attributes_publisher_data_attributes {
  __typename: "Publisher";
  name: string;
}

export interface queryGameBySlug_games_data_attributes_publisher_data {
  __typename: "PublisherEntity";
  attributes: queryGameBySlug_games_data_attributes_publisher_data_attributes;
}

export interface queryGameBySlug_games_data_attributes_publisher {
  __typename: "PublisherEntityResponse";
  data: queryGameBySlug_games_data_attributes_publisher_data;
}

export interface queryGameBySlug_games_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
}

export interface queryGameBySlug_games_data_attributes_categories_data {
  __typename: "CategoryEntity";
  attributes: queryGameBySlug_games_data_attributes_categories_data_attributes;
}

export interface queryGameBySlug_games_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: queryGameBySlug_games_data_attributes_categories_data[];
}

export interface queryGameBySlug_games_data_attributes_platforms_data_attributes {
  __typename: "Platform";
  name: string;
}

export interface queryGameBySlug_games_data_attributes_platforms_data {
  __typename: "PlatformEntity";
  attributes: queryGameBySlug_games_data_attributes_platforms_data_attributes;
}

export interface queryGameBySlug_games_data_attributes_platforms {
  __typename: "PlatformRelationResponseCollection";
  data: queryGameBySlug_games_data_attributes_platforms_data[];
}

export interface queryGameBySlug_games_data_attributes {
  __typename: "Game";
  cover: queryGameBySlug_games_data_attributes_cover;
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING;
  release_date: any;
  gallery: queryGameBySlug_games_data_attributes_gallery;
  developers: queryGameBySlug_games_data_attributes_developers;
  publisher: queryGameBySlug_games_data_attributes_publisher;
  categories: queryGameBySlug_games_data_attributes_categories;
  platforms: queryGameBySlug_games_data_attributes_platforms;
}

export interface queryGameBySlug_games_data {
  __typename: "GameEntity";
  attributes: queryGameBySlug_games_data_attributes;
}

export interface queryGameBySlug_games {
  __typename: "GameEntityResponseCollection";
  data: queryGameBySlug_games_data[];
}

export interface queryGameBySlug {
  games: queryGameBySlug_games;
}

export interface queryGameBySlugVariables {
  slug: string;
}
