import { Story, Meta } from "@storybook/react/types-6-0";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";
import { ComponentProps } from "react";

import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" }
    },
    icon: { type: "" }
  }
} as Meta;

export const Default: Story<ComponentProps<typeof Button>> = ({ ...props }) => (
  <Button {...props} />
);

Default.args = {
  children: "Buy now",
  size: "medium",
  fullWidth: false,
  icon: ""
};

export const WithIcon: Story<ComponentProps<typeof Button>> = ({
  ...props
}) => <Button {...props} />;

WithIcon.args = {
  size: "small",
  children: "Buy now",
  icon: <AddShoppingCart />,
  fullWidth: false
};
