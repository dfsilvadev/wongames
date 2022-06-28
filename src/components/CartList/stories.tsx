import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import CartList from ".";

import mockItems from "./mock";

export default {
  title: "My Cart/CartList",
  component: CartList,
  argTypes: {
    items: {
      type: ""
    }
  },
  args: {
    items: mockItems,
    total: "R$ 330,00"
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Basic: Story<ComponentProps<typeof CartList>> = ({ ...props }) => (
  <CartList {...props} />
);
export const WithButton: Story<ComponentProps<typeof CartList>> = ({
  ...props
}) => <CartList {...props} hasButton />;
