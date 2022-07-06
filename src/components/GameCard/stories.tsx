import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import GameCard from ".";

export default {
  title: "Body/GameCard",
  component: GameCard,
  args: {
    slug: "population-zero",
    title: "Population Zero",
    developer: "Gearbox Software",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: "$215,00",
    favorite: false
  },
  argTypes: {
    onFav: {
      action: "Clicked"
    }
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta;

export const Default: Story<ComponentProps<typeof GameCard>> = ({
  ...props
}) => (
  <div style={{ width: "30rem", margin: "0 auto" }}>
    <GameCard {...props} />
  </div>
);

export const WithRibbon: Story<ComponentProps<typeof GameCard>> = ({
  ...props
}) => (
  <div style={{ width: "30rem", margin: "0 auto" }}>
    <GameCard {...props} />
  </div>
);

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary"
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
