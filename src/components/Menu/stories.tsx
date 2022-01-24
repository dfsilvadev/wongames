import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Menu from ".";

export default {
  title: "Menu",
  component: Menu,
  args: {
    variant: "string"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Menu>> = () => <Menu />;

Basic.parameters = {
  layout: "fullscreen"
};
