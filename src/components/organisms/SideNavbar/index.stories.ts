import { SideNavbar } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organisms/SideNavbar",
  component: SideNavbar,
  argTypes: {},
} satisfies Meta<typeof SideNavbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SideNavbarStory: Story = {
  args: {},
};
