import { LogoImg } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/LogoImg",
  component: LogoImg,
  argTypes: {},
} satisfies Meta<typeof LogoImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginImg: Story = {
  args: {
    imglink:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    imgname: "logo",
    className: "",
  },
};
