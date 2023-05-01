import { LoginPage } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
} satisfies Meta<typeof LoginPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginOPageStory: Story = {
  args: {},
};
