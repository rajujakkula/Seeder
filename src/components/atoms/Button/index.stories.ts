import { MuiButton } from ".";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "atoms/MuiButton",
  component: MuiButton,
  argTypes: {
    handleClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof MuiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomButton_1: Story = {
  args: {
    variant: "contained",
    children: "continue",
    size: "small",
  },
};
