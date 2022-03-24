import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Heading from ".";

export default {
  title: "Body/Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string"
    },
    color: {
      options: ["black", "white"],
      control: { type: "select" }
    },
    size: {
      options: ["small", "medium"],
      control: { type: "select" }
    },
    lineColor: {
      options: ["primary", "secondary"],
      control: { type: "select" }
    }
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const ResponsiveHeading: Story<ComponentProps<typeof Heading>> = ({
  ...props
}) => <Heading {...props} />;

ResponsiveHeading.args = {
  children: "Most Populars",
  color: "white",
  size: "medium",
  lineColor: "primary",
  lineLeft: false,
  lineBottom: false
};
