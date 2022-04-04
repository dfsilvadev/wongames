import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import mockGames from "./mock";

import GameDetails from ".";

export default {
  title: "Game/GameDetails",
  component: GameDetails,
  argTypes: {
    releaseDate: {
      control: { type: "date" }
    },
    genres: {
      control: {
        type: "inline-check",
        options: ["Role-playing", "Narrative", "Action"]
      }
    },
    platforms: {
      control: {
        type: "inline-check",
        options: ["windows", "linux", "mac"]
      }
    }
  },
  args: mockGames,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof GameDetails>> = ({
  ...props
}) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <GameDetails {...props} />
  </div>
);
