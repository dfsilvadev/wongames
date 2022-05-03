import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import GameItem from ".";

export default {
  title: "GameItem",
  component: GameItem,
  argTypes: {},
  args: {
    img: "https://source.unsplash.com/user/willianjusten/151x70",
    title: "Red Dead Redemption 2",
    price: "R$ 215,00"
  },
  parameters: {
    // layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof GameItem>> = ({ ...props }) => (
  <GameItem {...props} />
);
