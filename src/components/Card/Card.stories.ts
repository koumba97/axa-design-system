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
        image: "https://picsum.photos/500/800",
        cardDate: "11/12/2020",
        link: [
            {
                url: "https://www.google.com",
                label: "MAKE A CLAIM",
                type: "link",
                variation: "primary",
                isInverse: true,
            },
        ],
        breakpoint: "750",
        cardTitle: "Car Insurance",
        content:
            "AXA Car insurance is tailored to your needs. Get your car insurance quote. And if you've got more than one car registered at your home address, check out our MultiCar discount.",
        subhead: "Member online",
        isInverse: false,
    },
};
