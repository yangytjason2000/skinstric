import type { Meta, StoryObj } from "@storybook/react";
import InfoForm from "@/app/components/InfoForm";

const meta: Meta<typeof InfoForm> = {
	component: InfoForm,
	title: "InfoForm",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
        question: "question1",
        placeholder: "",
        hintText: "click on it",
	},
};
