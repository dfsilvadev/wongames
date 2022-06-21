import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import ExploreSidebar from ".";
import itemsMock from "./mock";

export default {
  title: "Explorer/ExploreSidebar",
  component: ExploreSidebar,
  argTypes: {},
  args: {
    items: itemsMock
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof ExploreSidebar>> = ({
  ...props
}) => <ExploreSidebar {...props} />;

export const WithInitialValues: Story<ComponentProps<typeof ExploreSidebar>> =
  ({ ...props }) => (
    <ExploreSidebar
      {...props}
      initialValues={{
        windows: true,
        "under-50": true,
        action: true,
        sort_by: "low-to-high"
      }}
    />
  );
