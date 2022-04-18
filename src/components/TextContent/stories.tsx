import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import textMock from "./mock";

import TextContent from ".";

export default {
  title: "Game/TextContent",
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as Meta;

export const Basic: Story<ComponentProps<typeof TextContent>> = ({
  ...props
}) => <TextContent {...props} />;
