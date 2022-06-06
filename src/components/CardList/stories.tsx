import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import CardList from ".";

import cardsMock from "components/PaymentOptions/mock";

export default {
  title: "Profile/CardList",
  component: CardList,
  argTypes: {},
  args: {
    cards: cardsMock
  },
  parameters: {
    backgrounds: {}
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 850, margin: "auto" }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Basic: Story<ComponentProps<typeof CardList>> = ({ ...props }) => (
  <CardList {...props} />
);
