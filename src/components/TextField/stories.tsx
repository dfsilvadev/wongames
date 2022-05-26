import { Story, Meta } from "@storybook/react/types-6-0";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { ComponentProps } from "react";

import TextField from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  argTypes: {
    onInput: { action: "input" },
    icon: { type: "" }
  },
  args: {
    label: "E-mail",
    name: "email",
    initialValue: "",
    placeholder: "john.doe@gmail.com",
    disabled: false
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof TextField>> = ({
  ...props
}) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...props} />
  </div>
);

export const WithIcon: Story<ComponentProps<typeof TextField>> = ({
  ...props
}) => (
  <div style={{ maxWidth: 380, padding: 15 }}>
    <TextField {...props} icon={<EmailOutline />} />
  </div>
);

WithIcon.argTypes = {
  icon: { type: "" },
  iconPosition: {
    options: ["left", "right"],
    control: { type: "select" }
  }
};

WithIcon.args = {
  iconPosition: "left"
};

export const WhithError: Story<ComponentProps<typeof TextField>> = ({
  ...props
}) => (
  <div style={{ maxWidth: 380, padding: 15 }}>
    <TextField {...props} icon={<EmailOutline />} />
  </div>
);

WhithError.argTypes = {
  icon: { type: "" }
};

WhithError.args = {
  error: "Ops...something is wrong"
};
