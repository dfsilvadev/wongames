import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Radio from ".";

export default {
  title: "Form/Radio",
  component: Radio,
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

export const Basic: Story<ComponentProps<typeof Radio>> = ({ ...props }) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...props}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        {...props}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        {...props}
      />
    </div>
  </>
);
