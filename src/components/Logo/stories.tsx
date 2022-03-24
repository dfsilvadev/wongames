import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Logo from ".";

export default {
  title: "Header/Logo",
  component: Logo,
  argTypes: {
    color: {
      options: ["black", "white"],
      control: { type: "select" }
    },
    size: {
      options: ["normal", "large"],
      control: { type: "select" }
    }
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Desktop: Story<ComponentProps<typeof Logo>> = ({ ...props }) => (
  <Logo {...props} />
);

Desktop.args = {
  hideOnMobile: false,
  color: "white",
  size: "normal"
};

export const Mobile: Story<ComponentProps<typeof Logo>> = ({ ...props }) => (
  <Logo {...props} />
);

Mobile.args = {
  hideOnMobile: true,
  color: "white",
  size: "normal"
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1"
  }
};
