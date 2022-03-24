import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import FormSignIn from ".";

export default {
  title: "Form/FormSignIn",
  component: FormSignIn,
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof FormSignIn>> = () => (
  <div style={{ width: "300px", margin: "auto" }}>
    <FormSignIn />
  </div>
);
