import { ComponentProps } from "react";
import { Settings } from "react-slick";
import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

import Slider from ".";

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

export default {
  title: "Slide/Slider",
  component: Slider,
  args: {
    settings: horizontalSettings
  }
} as Meta;

export const Horizontal: Story<ComponentProps<typeof Slider>> = ({
  ...props
}) => (
  <Slider {...props}>
    <Slide>I</Slide>
    <Slide>II</Slide>
    <Slide>III</Slide>
    <Slide>IV</Slide>
    <Slide>V</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const Vertical: Story<ComponentProps<typeof Slider>> = ({
  ...props
}) => (
  <Slider {...props}>
    <Slide>I</Slide>
    <Slide>II</Slide>
    <Slide>III</Slide>
    <Slide>IV</Slide>
    <Slide>V</Slide>
  </Slider>
);

Vertical.args = {
  settings: verticalSettings
};
