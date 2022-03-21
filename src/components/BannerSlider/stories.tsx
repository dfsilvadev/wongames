import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import BannerSlider from ".";
import items from "./mock";

export default {
  title: "Slide/BannerSlider",
  component: BannerSlider,
  args: {
    items
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

export const Default: Story<ComponentProps<typeof BannerSlider>> = ({
  ...props
}) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <BannerSlider {...props} />
  </div>
);
