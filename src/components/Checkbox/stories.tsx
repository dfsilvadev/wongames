import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Checkbox from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    labelColor: {
      options: ["white", "black"],
      control: { type: "select" }
    },
    onCheck: { action: "check" }
  },
  args: {
    labelColor: "white"
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof Checkbox>> = ({ ...props }) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...props}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...props}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...props}
      />
    </div>
  </>
);
