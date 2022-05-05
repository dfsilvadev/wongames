import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Empty from ".";

export default {
  title: "Others/Empty",
  component: Empty,
  args: {
    title: "Your wishlist is empty",
    description: "Games added to your wishlist will appear here",
    hasLink: true
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Empty>> = ({ ...props }) => (
  <Empty {...props} />
);
