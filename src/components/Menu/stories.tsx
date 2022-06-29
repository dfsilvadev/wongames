import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Menu from ".";

export default {
  title: "Header/Menu",
  component: Menu,
  argTypes: {
    username: {
      control: {
        type: "text"
      }
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const ResponsiveMenu: Story<ComponentProps<typeof Menu>> = ({
  ...props
}) => <Menu {...props} />;

export const Logged: Story<ComponentProps<typeof Menu>> = ({ ...props }) => (
  <Menu {...props} />
);

Logged.args = {
  username: "Daniel"
};
