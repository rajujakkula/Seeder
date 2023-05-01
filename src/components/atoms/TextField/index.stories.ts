import type { Meta, StoryObj } from "@storybook/react";
import { MuiTextField } from ".";

const meta = {
  title: "atoms/MyTextField",
  component: MuiTextField,
  argTypes: {
    handleChange: { control: "change" },
  },
} satisfies Meta<typeof MuiTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyTextFieldInput: Story = {
  args: {
    textvariant: "outlined",
    placeholder: "enter your email id",
    startIcon: "Assets/loginIcons/lock.svg",
    endIcon: "Assets/loginIcons/eye.svg",
  },
};
