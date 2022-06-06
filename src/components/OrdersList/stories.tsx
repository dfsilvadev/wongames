import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import OrdersList from ".";

import itemsMock from "./mock";

export default {
  title: "Profile/OrdersList",
  component: OrdersList,
  argTypes: {},
  args: {
    items: itemsMock
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 850, margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Basic: Story<ComponentProps<typeof OrdersList>> = ({
  ...props
}) => <OrdersList {...props} />;
