import { LoginTopTitle } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "molecules/LoginTopTitle",
  component: LoginTopTitle,
} satisfies Meta<typeof LoginTopTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginTopTitleStory: Story = {
  args: {
    imglink: "../../Assets/seeder_logo_login.svg",
    imgname: "seeder_logo",
    variantType: "h4",
    typotext: "seeder",
  },
};
