import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import CartIcon from ".";

export default {
  title: "Others/CartIcon",
  component: CartIcon,
  argTypes: {},
  args: {
    quantity: 3
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const WithItems: Story<ComponentProps<typeof CartIcon>> = ({
  ...props
}) => <CartIcon {...props} />;

export const WithoutItems: Story<ComponentProps<typeof CartIcon>> = () => (
  <CartIcon />
);
