import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import PaymentOptions from ".";

import cardsMock from "./mock";

export default {
  title: "My Cart/PaymentOptions",
  component: PaymentOptions,
  argTypes: {
    cards: {
      type: ""
    },
    handlePayment: {
      action: "clicked"
    }
  },
  args: {
    cards: cardsMock
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 16, maxWidth: 400 }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Basic: Story<ComponentProps<typeof PaymentOptions>> = ({
  ...props
}) => <PaymentOptions {...props} />;
