import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import FormSignUp from ".";

export default {
  title: "Form/FormSignUp",
  component: FormSignUp,
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof FormSignUp>> = () => (
  <div style={{ width: "300px", margin: "auto" }}>
    <FormSignUp />
  </div>
);
