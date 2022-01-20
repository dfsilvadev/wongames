import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import MediaMatch from ".";

export default {
  title: "MediaMatch",
  component: MediaMatch,
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Desktop: Story<ComponentProps<typeof MediaMatch>> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);
export const Mobile: Story<ComponentProps<typeof MediaMatch>> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1"
  }
};
