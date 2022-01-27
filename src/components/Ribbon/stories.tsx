import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Ribbon from ".";

export default {
  title: "Ribbon",
  component: Ribbon,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" }
    },
    size: {
      options: ["small", "normal", "large"],
      control: { type: "select" }
    }
  },
  args: {
    children: "Best Seller",
    color: "primary",
    size: "normal"
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Ribbon>> = ({ ...props }) => (
  <div
    style={{
      width: "40rem",
      height: "25rem",
      position: "relative",
      backgroundColor: "#888"
    }}
  >
    <Ribbon {...props} />
  </div>
);
