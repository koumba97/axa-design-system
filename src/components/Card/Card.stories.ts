import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { CardProps } from "./Card.types";
import { Card } from "./Card";

const meta = {
    title: "Example/Card",
    tags: ["autodocs"],
    render: (args) => Card(args),
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["lg", "md", "sm", "bg"],
        },
        image: {
            control: "text",
        },
        cardDate: {
            control: "text",
        },
        link: {
            control: "object",
        },
        breakpoint: {
            control: "text",
        },
        cardTitle: {
            control: "text",
        },
        content: {
            control: "text",
        },
        subhead: {
            control: "text",
        },
        isInverse: {
            control: { type: "boolean" },
        },
        inverted: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
    args: {
        type: "lg",
    },
};
