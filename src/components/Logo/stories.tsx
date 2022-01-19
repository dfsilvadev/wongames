import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Logo from ".";

export default {
  title: "Logo",
  component: Logo,
  argTypes: {
    color: {
      options: ["black", "white"],
      control: { type: "select" },
      defaultValue: "white"
    },
    size: {
      options: ["normal", "large"],
      control: { type: "select" },
      defaultValue: "normal"
    }
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Logo>> = ({ ...props }) => (
  <Logo {...props} />
);
