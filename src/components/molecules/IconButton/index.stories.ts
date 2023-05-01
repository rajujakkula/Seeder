import { IconLabelButtons as MuiIconLabelButtons } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "molecules/IconLabelButtons",
  component: MuiIconLabelButtons,
  argTypes: {
    socialMediaClick: { action: "clicked" },
  },
} satisfies Meta<typeof MuiIconLabelButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconLabelButtons: Story = {
  args: {
    variant: "contained",
    socialIcon: "Assets/loginIcons/google.svg",
    altnameIconButton: "google_Icon",
    children: "google",
    direction: "column",
    size: "large",
  },
};
