import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import CartDropdown from ".";

import items from "components/CartList/mock";

export default {
  title: "Others/CartDropdown",
  component: CartDropdown,
  argTypes: {},
  args: {
    items,
    total: "R$300,00"
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}
      >
        <Story />
      </div>
    )
  ]
} as Meta;

export const Basic: Story<ComponentProps<typeof CartDropdown>> = ({
  ...props
}) => <CartDropdown {...props} />;

export const Empty: Story<ComponentProps<typeof CartDropdown>> = () => (
  <CartDropdown />
);
