import { Button } from ".";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

const meta = {
  title: "Base/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "ghost", "default", "link", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon", "icon-sm"],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "outline",
    size: "sm",
    children: "Click me",
  },
};
