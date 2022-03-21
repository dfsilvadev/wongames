import { Story, Meta } from "@storybook/react/types-6-0";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";
import { ComponentProps } from "react";

import Button from ".";

export default {
  title: "Form/Button",
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
  icon: "",
  minimal: false
};

export const WithIcon: Story<ComponentProps<typeof Button>> = ({
  ...props
}) => <Button {...props} />;

WithIcon.args = {
  size: "medium",
  children: "Buy now",
  icon: <AddShoppingCart />,
  fullWidth: false,
  minimal: false
};

export const Minimal: Story<ComponentProps<typeof Button>> = ({ ...props }) => (
  <Button {...props} />
);

Minimal.args = {
  size: "medium",
  children: "Buy now",
  icon: <AddShoppingCart />,
  fullWidth: false,
  minimal: true
};

export const AsLink: Story<ComponentProps<typeof Button>> = ({ ...props }) => (
  <Button {...props} />
);

AsLink.args = {
  size: "medium",
  children: "Buy now",
  icon: "",
  fullWidth: false,
  minimal: false,
  as: "a",
  href: "/link"
};
