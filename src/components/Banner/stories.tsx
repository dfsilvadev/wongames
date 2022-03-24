import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Banner from ".";

export default {
  title: "Header/Banner",
  component: Banner,
  args: {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death"
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

export const Default: Story<ComponentProps<typeof Banner>> = ({ ...props }) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Banner {...props} />
  </div>
);

export const WithRibbon: Story<ComponentProps<typeof Banner>> = ({
  ...props
}) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Banner {...props} />
  </div>
);

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "normal",
  ribbonColor: "secondary"
};

WithRibbon.argTypes = {
  ribbonSize: {
    options: ["small", "normal", "large"],
    control: { type: "select" }
  },
  ribbonColor: {
    options: ["primary", "secondary"],
    control: { type: "select" }
  }
};
