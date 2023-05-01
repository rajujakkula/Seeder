import type { Meta, StoryObj } from "@storybook/react";

import { Picture } from ".";

const meta = {
  title: "molecules/Picture",
  component: Picture,
} satisfies Meta<typeof Picture>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginImg: Story = {
  args: {
    piclink:
      "../../Assets/loginIcons/Business Analysis 3D Illustration_login.svg",
    picname: "bussiness_iilustration_img",
    className: "login-image",
  },
};
