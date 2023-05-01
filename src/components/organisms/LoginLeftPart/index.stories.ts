import { LoginLeftPart } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/LoginLeftPart",
  component: LoginLeftPart,
} satisfies Meta<typeof LoginLeftPart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginLeftPartStory: Story = {
  args: {
    // variantType: "h4",
    // typotext: "seeder",
    piclink:
      "../../Assets/loginIcons/Business Analysis 3D Illustration_login.svg",
    picname: "Business Analysis",
    // imglink: "../../Assets/seeder_logo_login.svg",
    // imgaltname: "seeder_logo",
  },
};
