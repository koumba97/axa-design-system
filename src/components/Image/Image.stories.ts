import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { ImageProps } from "./Image.types";
import "./Image";
import { html } from "lit";

const meta = {
    title: "Components/Image",
    tags: ["autodocs"],
    render: (args: ImageProps) => html`
        <div style="display: flex; width:200px;">
            <axa-image
                src=${args.src ?? ""}
                alt=${args.alt ?? ""}
                ratio=${args.ratio ?? "1:1"}
                .hasBorder=${args.hasBorder ?? false}
                backgroundColor=${args.backgroundColor ?? "functional"}
                objectFit=${args.objectFit ?? "cover"}
                customId=${args.customId ?? ""}
            ></axa-image>
        </div>
    `,
    argTypes: {
        src: {
            control: "text",
        },
        alt: {
            control: "text",
        },
        ratio: {
            control: { type: "select" },
            options: ["1:1", "2:3", "3:1", "3:2", "3:4", "4:3", "16:9"],
        },
        hasBorder: {
            control: { type: "boolean" },
        },
        backgroundColor: {
            control: { type: "select" },
            options: ["functional", "expressive"],
        },
        objectFit: {
            control: { type: "select" },
            options: ["cover", "contain"],
        },
        customId: {
            control: "text",
        },
    },
} satisfies Meta<ImageProps>;

export default meta;
type Story = StoryObj<ImageProps>;

export const Square: Story = {
    args: {
        src: "public/images/AXA_Logo.svg.webp",
        alt: "Sample image",
        ratio: "1:1",
        hasBorder: false,
        backgroundColor: "functional",
        objectFit: "cover",
    },
};

export const Vertical: Story = {
    args: {
        src: "public/images/AXA_Logo.svg.webp",
        alt: "Sample image",
        ratio: "2:3",
        hasBorder: false,
        backgroundColor: "functional",
        objectFit: "cover",
    },
};

export const Horizontal: Story = {
    args: {
        src: "public/images/AXA_Logo.svg.webp",
        alt: "Sample image",
        ratio: "4:3",
        hasBorder: false,
        backgroundColor: "functional",
        objectFit: "cover",
    },
};
