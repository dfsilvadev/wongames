import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import ProfileMenu from ".";

export default {
  title: "Profile/ProfileMenu",
  component: ProfileMenu,
  argTypes: {
    activeLink: {
      options: ["/profile/me", "/profile/cards", "/profile/orders"],
      control: {
        type: "inline-radio"
      }
    }
  },
  args: {
    activeLink: "/profile/me"
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "32.5rem", width: "100%" }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Basic: Story<ComponentProps<typeof ProfileMenu>> = ({
  ...props
}) => <ProfileMenu {...props} />;
