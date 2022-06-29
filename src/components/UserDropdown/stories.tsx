import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import UserDropdown from ".";

export default {
  title: "Others/UserDropdown",
  component: UserDropdown,
  argTypes: {},
  args: {
    username: "Daniel"
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

export const Basic: Story<ComponentProps<typeof UserDropdown>> = ({
  ...props
}) => <UserDropdown {...props} />;
