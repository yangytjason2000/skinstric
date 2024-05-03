import type { Meta, StoryObj } from "@storybook/react";
import BackButton from "@/app/components/Buttons/BackButton";

const meta: Meta<typeof BackButton> = {
	component: BackButton,
	title: "BackButton",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		onClick: (()=>console.log("testing")),
	},
};