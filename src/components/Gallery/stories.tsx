import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import items from "./mock";

import Gallery from ".";

export default {
  title: "Game/Gallery",
  component: Gallery,
  args: { items },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Gallery>> = ({ ...props }) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <Gallery {...props} />
  </div>
);
