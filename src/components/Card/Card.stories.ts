import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { CardProps } from "./Card.types";
import { html } from "lit";
import "./Card";

const meta = {
    title: "Components/Card",
    tags: ["autodocs"],
    render: (args: CardProps) => html`
        <div
            class="component-wrapper"
            style="padding: 20px; background-color:${args.isInverse
                ? "black"
                : "white"};"
        >
            <axa-card
                type=${args.type ?? ""}
                image=${args.image ?? ""}
                cardDate=${args.cardDate ?? ""}
                .link=${args.link ?? []}
                cardTitle=${args.cardTitle ?? "cover"}
                content=${args.content ?? ""}
                subhead=${args.subhead ?? ""}
                .isInverse=${args.isInverse ?? ""}
                .inverted=${args.inverted ?? ""}
            ></axa-card>
        </div>
    `,
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["sm", "md", "lg", "bg"],
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

export const SmallCard: Story = {
    args: {
        type: "sm",
        image: "/images/AXA_Logo.svg.webp",
        cardDate: "11/12/2020",
        cardTitle: "Car Insurance",
        content:
            "AXA Car insurance is tailored to your needs. Get your car insurance quote. And if you've got more than one car registered at your home address, check out our MultiCar discount.",
        subhead: "Member online",
        isInverse: false,
    },
};

export const MediumCard: Story = {
    args: {
        type: "md",
        image: "/images/AXA_Logo.svg.webp",
        cardDate: "11/12/2020",
        cardTitle: "Car Insurance",
        content:
            "AXA Car insurance is tailored to your needs. Get your car insurance quote. And if you've got more than one car registered at your home address, check out our MultiCar discount.",
        subhead: "Member online",
        isInverse: false,
    },
};

export const LargeCard: Story = {
    args: {
        type: "lg",
        image: "/images/AXA_Logo.svg.webp",
        cardDate: "11/12/2020",
        link: [
            {
                url: "https://www.google.com",
                label: "See more",
                type: "button",
                variation: "primary",
                isInverse: true,
            },
        ],
        cardTitle: "Car Insurance",
        content:
            "AXA Car insurance is tailored to your needs. Get your car insurance quote. And if you've got more than one car registered at your home address, check out our MultiCar discount.",
        subhead: "Member online",
        isInverse: false,
    },
};

export const BackgroundCard: Story = {
    args: {
        type: "bg",
        image: "/images/AXA_Logo.svg.webp",
        cardDate: "11/12/2020",
        link: [
            {
                url: "https://www.google.com",
                label: "See more",
                type: "button",
                variation: "primary",
                isInverse: true,
            },
        ],
        cardTitle: "Car Insurance",
        content:
            "AXA Car insurance is tailored to your needs. Get your car insurance quote. And if you've got more than one car registered at your home address, check out our MultiCar discount.",
        subhead: "Member online",
        isInverse: false,
    },
};
