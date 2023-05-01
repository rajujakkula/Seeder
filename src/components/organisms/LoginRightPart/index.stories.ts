import { LoginRightPart } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/LoginRightPart",
  component: LoginRightPart,
} satisfies Meta<typeof LoginRightPart>;

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
    signup: true,
  },
};
