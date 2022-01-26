import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Banner from ".";

export default {
  title: "Banner",
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

export const Basic: Story<ComponentProps<typeof Banner>> = ({ ...props }) => (
  <Banner {...props} />
);
