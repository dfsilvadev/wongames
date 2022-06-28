import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Dropdown from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {},
  args: {
    title: "Click here",
    children: "content"
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Dropdown>> = ({ ...props }) => (
  <Dropdown {...props} />
);
