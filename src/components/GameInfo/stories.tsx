import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import mockGame from "./mock";

import GameInfo from ".";

export default {
  title: "GameInfo",
  component: GameInfo,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  args: mockGame
} as Meta;

export const Basic: Story<ComponentProps<typeof GameInfo>> = ({ ...props }) => (
  <div style={{ maxWidth: "144rem", padding: "1.5rem", margin: "auto" }}>
    <GameInfo {...props} />
  </div>
);
