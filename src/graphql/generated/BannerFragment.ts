/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEROBBON_COLOR, ENUM_COMPONENTPAGEROBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL fragment: BannerFragment
// ====================================================

export interface BannerFragment_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface BannerFragment_image_data {
  __typename: "UploadFileEntity";
  attributes: BannerFragment_image_data_attributes | null;
}

export interface BannerFragment_image {
  __typename: "UploadFileEntityResponse";
  data: BannerFragment_image_data | null;
}

export interface BannerFragment_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface BannerFragment_ribbon {
  __typename: "ComponentPageRobbon";
  text: string | null;
  color: ENUM_COMPONENTPAGEROBBON_COLOR | null;
  size: ENUM_COMPONENTPAGEROBBON_SIZE | null;
}

export interface BannerFragment {
  __typename: "Banner";
  title: string;
  subtitle: string;
  image: BannerFragment_image;
  button: BannerFragment_button | null;
  ribbon: BannerFragment_ribbon | null;
}
