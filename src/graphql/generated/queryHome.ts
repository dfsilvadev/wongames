/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEROBBON_COLOR, ENUM_COMPONENTPAGEROBBON_SIZE } from "./globalTypes";

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

export interface queryHome {
  banners: queryHome_banners | null;
}
