import { Story, Meta } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import Footer from ".";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {}
} as Meta;

export const DesktopAndMobile: Story<ComponentProps<typeof Footer>> = () => (
  <div
    style={{
      maxWidth: "130rem",
      margin: "0 auto"
    }}
  >
    <Footer />
  </div>
);
