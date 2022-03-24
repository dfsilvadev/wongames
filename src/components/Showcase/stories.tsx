import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import highlightMock from "components/Highlight/mock";
import gamesMock from "components/GameCardSlider/mock";

import Showcase from ".";

export default {
  title: "Body/Showcase",
  component: Showcase,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "0 auto" }}>
        <Story />
      </div>
    )
  ],
  args: {
    title: "Most Popular",
    highlight: highlightMock,
    games: gamesMock
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Showcase>> = ({ ...props }) => (
  <Showcase {...props} />
);
