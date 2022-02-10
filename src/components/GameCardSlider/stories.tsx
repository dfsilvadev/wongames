import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import GameCardSlider from ".";
import items from "./mock";

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  args: {
    items,
    color: "white"
  },
  argTypes: {
    color: {
      options: ["white", "black"],
      control: { type: "select" }
    }
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

export const Default: Story<ComponentProps<typeof GameCardSlider>> = ({
  ...props
}) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <GameCardSlider {...props} />
  </div>
);
