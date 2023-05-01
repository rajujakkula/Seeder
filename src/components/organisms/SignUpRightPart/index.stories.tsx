import { SignUpRightPart } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/SignUpRightPart",
  component: SignUpRightPart,
} satisfies Meta<typeof SignUpRightPart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginRightPartStory: Story = {
  args: {
    // variant: "outlined",
    // variantType: "h2",
    // textvariant: "filled",
    // altnameIconButton: "google",
    // socialIcon: "Assets/loginIcons/google.svg",
    // children: "Google",
  },
};
