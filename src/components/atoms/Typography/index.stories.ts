import type { Meta, StoryObj } from "@storybook/react";

import { TypographyCustom } from ".";

const meta = {
  title: "atoms/TypographyCustom",
  component: TypographyCustom,
} satisfies Meta<typeof TypographyCustom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginTopTitleTypography: Story = {
  args: {
    variantType: "h3",
    typotext: "Seeder",
  },
};
