import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Highlight from ".";
import item from "./mock";

export default {
  title: "Body/Highlight",
  component: Highlight,
  argTypes: {
    alignment: {
      options: ["right", "left"],
      control: { type: "select" }
    }
  },
  args: { ...item },
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

export const Default: Story<ComponentProps<typeof Highlight>> = ({
  ...props
}) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...props} />
  </div>
);

export const WithFloatImage: Story<ComponentProps<typeof Highlight>> = ({
  ...props
}) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...props} />
  </div>
);

WithFloatImage.args = {
  title: "Read Dead it’s back",
  subtitle: "Come see John’s new adventures",
  backgroundImage: "/img/red-dead-img.jpg",
  floatImage: "/img/red-dead-float.png",
  buttonLabel: "Buy now",
  buttonLink: "/rdr2",
  alignment: "right"
};

WithFloatImage.argTypes = {
  alignment: {
    options: ["right", "left"],
    control: { type: "select" }
  }
};
