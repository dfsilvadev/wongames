import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import FormProfile from ".";

export default {
  title: "Form/FormProfile",
  component: FormProfile,
  argTypes: {},
  parameters: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "min(85.7rem, 100%)",
          margin: "0 auto"
        }}
      >
        <Story />
      </div>
    )
  ]
} as Meta;

export const Basic: Story<ComponentProps<typeof FormProfile>> = () => (
  <FormProfile />
);
