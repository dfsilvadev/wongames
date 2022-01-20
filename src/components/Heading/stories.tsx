import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Heading from ".";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string"
    },
    color: {
      options: ["black", "white"],
      control: { type: "select" }
    }
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Heading>> = ({ ...props }) => (
  <Heading {...props} />
);

Basic.args = {
  children: "Most Populars",
  color: "white",
  lineLeft: false,
  lineBottom: false
};
