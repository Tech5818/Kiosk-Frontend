import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { ColorArray, FontArray } from "@shared/types/theme";

const meta = {
  title: "Component/Typography",
  component: Typography,
  argTypes: {
    color: {
      control: "select",
      options: ColorArray,
    },
    size: {
      control: "select",
      options: FontArray,
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "기본 텍스트",
    color: "text",
    size: "LargeTitle",
  },
};
