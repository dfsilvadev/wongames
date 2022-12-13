/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEROBBON_COLOR, ENUM_COMPONENTPAGEROBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: queryHome
// ====================================================

export interface queryHome_banners_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_banners_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_banners_data_attributes_image_data_attributes | null;
}

export interface queryHome_banners_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: queryHome_banners_data_attributes_image_data | null;
}

export interface queryHome_banners_data_attributes_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface queryHome_banners_data_attributes_ribbon {
  __typename: "ComponentPageRobbon";
  text: string | null;
  color: ENUM_COMPONENTPAGEROBBON_COLOR | null;
  size: ENUM_COMPONENTPAGEROBBON_SIZE | null;
}

export interface queryHome_banners_data_attributes {
  __typename: "Banner";
  title: string;
  subtitle: string;
  image: queryHome_banners_data_attributes_image;
  button: queryHome_banners_data_attributes_button | null;
  ribbon: queryHome_banners_data_attributes_ribbon | null;
}

export interface queryHome_banners_data {
  __typename: "BannerEntity";
  attributes: queryHome_banners_data_attributes | null;
}

export interface queryHome_banners {
  __typename: "BannerEntityResponseCollection";
  data: queryHome_banners_data[];
}

export interface queryHome_newGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_newGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_newGames_data_attributes_cover_data_attributes | null;
}

export interface queryHome_newGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: queryHome_newGames_data_attributes_cover_data | null;
}

export interface queryHome_newGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface queryHome_newGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: queryHome_newGames_data_attributes_developers_data_attributes | null;
}

export interface queryHome_newGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: queryHome_newGames_data_attributes_developers_data[];
}

export interface queryHome_newGames_data_attributes {
  __typename: "Game";
  slug: string;
  name: string;
  price: number;
  cover: queryHome_newGames_data_attributes_cover | null;
  developers: queryHome_newGames_data_attributes_developers | null;
}

export interface queryHome_newGames_data {
  __typename: "GameEntity";
  attributes: queryHome_newGames_data_attributes | null;
}

export interface queryHome_newGames {
  __typename: "GameEntityResponseCollection";
  data: queryHome_newGames_data[];
}

export interface queryHome_upcomingGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_upcomingGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_upcomingGames_data_attributes_cover_data_attributes | null;
}

export interface queryHome_upcomingGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: queryHome_upcomingGames_data_attributes_cover_data | null;
}

export interface queryHome_upcomingGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface queryHome_upcomingGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: queryHome_upcomingGames_data_attributes_developers_data_attributes | null;
}

export interface queryHome_upcomingGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: queryHome_upcomingGames_data_attributes_developers_data[];
}

export interface queryHome_upcomingGames_data_attributes {
  __typename: "Game";
  slug: string;
  name: string;
  price: number;
  cover: queryHome_upcomingGames_data_attributes_cover | null;
  developers: queryHome_upcomingGames_data_attributes_developers | null;
}

export interface queryHome_upcomingGames_data {
  __typename: "GameEntity";
  attributes: queryHome_upcomingGames_data_attributes | null;
}

export interface queryHome_upcomingGames {
  __typename: "GameEntityResponseCollection";
  data: queryHome_upcomingGames_data[];
}

export interface queryHome_freeGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_freeGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_freeGames_data_attributes_cover_data_attributes | null;
}

export interface queryHome_freeGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: queryHome_freeGames_data_attributes_cover_data | null;
}

export interface queryHome_freeGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface queryHome_freeGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: queryHome_freeGames_data_attributes_developers_data_attributes | null;
}

export interface queryHome_freeGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: queryHome_freeGames_data_attributes_developers_data[];
}

export interface queryHome_freeGames_data_attributes {
  __typename: "Game";
  slug: string;
  name: string;
  price: number;
  cover: queryHome_freeGames_data_attributes_cover | null;
  developers: queryHome_freeGames_data_attributes_developers | null;
}

export interface queryHome_freeGames_data {
  __typename: "GameEntity";
  attributes: queryHome_freeGames_data_attributes | null;
}

export interface queryHome_freeGames {
  __typename: "GameEntityResponseCollection";
  data: queryHome_freeGames_data[];
}

export interface queryHome_sections_data_attributes_newGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_newGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_newGames_highlight_background_data_attributes | null;
}

export interface queryHome_sections_data_attributes_newGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_newGames_highlight_background_data | null;
}

export interface queryHome_sections_data_attributes_newGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_newGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_newGames_highlight_floatImage_data_attributes | null;
}

export interface queryHome_sections_data_attributes_newGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_newGames_highlight_floatImage_data | null;
}

export interface queryHome_sections_data_attributes_newGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: queryHome_sections_data_attributes_newGames_highlight_background;
  floatImage: queryHome_sections_data_attributes_newGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface queryHome_sections_data_attributes_newGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: queryHome_sections_data_attributes_newGames_highlight | null;
}

export interface queryHome_sections_data_attributes_popularGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_popularGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_popularGames_highlight_background_data_attributes | null;
}

export interface queryHome_sections_data_attributes_popularGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_popularGames_highlight_background_data | null;
}

export interface queryHome_sections_data_attributes_popularGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_popularGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_popularGames_highlight_floatImage_data_attributes | null;
}

export interface queryHome_sections_data_attributes_popularGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_popularGames_highlight_floatImage_data | null;
}

export interface queryHome_sections_data_attributes_popularGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: queryHome_sections_data_attributes_popularGames_highlight_background;
  floatImage: queryHome_sections_data_attributes_popularGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface queryHome_sections_data_attributes_popularGames_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_popularGames_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_popularGames_games_data_attributes_cover_data_attributes | null;
}

export interface queryHome_sections_data_attributes_popularGames_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_popularGames_games_data_attributes_cover_data | null;
}

export interface queryHome_sections_data_attributes_popularGames_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface queryHome_sections_data_attributes_popularGames_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: queryHome_sections_data_attributes_popularGames_games_data_attributes_developers_data_attributes | null;
}

export interface queryHome_sections_data_attributes_popularGames_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: queryHome_sections_data_attributes_popularGames_games_data_attributes_developers_data[];
}

export interface queryHome_sections_data_attributes_popularGames_games_data_attributes {
  __typename: "Game";
  slug: string;
  name: string;
  price: number;
  cover: queryHome_sections_data_attributes_popularGames_games_data_attributes_cover | null;
  developers: queryHome_sections_data_attributes_popularGames_games_data_attributes_developers | null;
}

export interface queryHome_sections_data_attributes_popularGames_games_data {
  __typename: "GameEntity";
  attributes: queryHome_sections_data_attributes_popularGames_games_data_attributes | null;
}

export interface queryHome_sections_data_attributes_popularGames_games {
  __typename: "GameRelationResponseCollection";
  data: queryHome_sections_data_attributes_popularGames_games_data[];
}

export interface queryHome_sections_data_attributes_popularGames {
  __typename: "ComponentPagePopularGames";
  title: string | null;
  highlight: queryHome_sections_data_attributes_popularGames_highlight | null;
  games: queryHome_sections_data_attributes_popularGames_games | null;
}

export interface queryHome_sections_data_attributes_upcomingGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_upcomingGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_upcomingGames_highlight_background_data_attributes | null;
}

export interface queryHome_sections_data_attributes_upcomingGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_upcomingGames_highlight_background_data | null;
}

export interface queryHome_sections_data_attributes_upcomingGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_upcomingGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_upcomingGames_highlight_floatImage_data_attributes | null;
}

export interface queryHome_sections_data_attributes_upcomingGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_upcomingGames_highlight_floatImage_data | null;
}

export interface queryHome_sections_data_attributes_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: queryHome_sections_data_attributes_upcomingGames_highlight_background;
  floatImage: queryHome_sections_data_attributes_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface queryHome_sections_data_attributes_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: queryHome_sections_data_attributes_upcomingGames_highlight | null;
}

export interface queryHome_sections_data_attributes_freeGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_freeGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_freeGames_highlight_background_data_attributes | null;
}

export interface queryHome_sections_data_attributes_freeGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_freeGames_highlight_background_data | null;
}

export interface queryHome_sections_data_attributes_freeGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface queryHome_sections_data_attributes_freeGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: queryHome_sections_data_attributes_freeGames_highlight_floatImage_data_attributes | null;
}

export interface queryHome_sections_data_attributes_freeGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: queryHome_sections_data_attributes_freeGames_highlight_floatImage_data | null;
}

export interface queryHome_sections_data_attributes_freeGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: queryHome_sections_data_attributes_freeGames_highlight_background;
  floatImage: queryHome_sections_data_attributes_freeGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface queryHome_sections_data_attributes_freeGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: queryHome_sections_data_attributes_freeGames_highlight | null;
}

export interface queryHome_sections_data_attributes {
  __typename: "Home";
  newGames: queryHome_sections_data_attributes_newGames | null;
  popularGames: queryHome_sections_data_attributes_popularGames | null;
  upcomingGames: queryHome_sections_data_attributes_upcomingGames | null;
  freeGames: queryHome_sections_data_attributes_freeGames | null;
}

export interface queryHome_sections_data {
  __typename: "HomeEntity";
  attributes: queryHome_sections_data_attributes | null;
}

export interface queryHome_sections {
  __typename: "HomeEntityResponse";
  data: queryHome_sections_data | null;
}

export interface queryHome {
  banners: queryHome_banners | null;
  newGames: queryHome_newGames | null;
  upcomingGames: queryHome_upcomingGames | null;
  freeGames: queryHome_freeGames | null;
  sections: queryHome_sections | null;
}

export interface queryHomeVariables {
  date: any;
}
