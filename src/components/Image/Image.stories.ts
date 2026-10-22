import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { ImageProps } from "./Image.types";
import { Image } from "./Image";

const meta = {
    title: "Example/Image",
    tags: ["autodocs"],
    render: (args) => Image(args),
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

export const Default: Story = {
    args: {
        src: "https://i.imgur.com/V0UIptf.png",
        alt: "Sample image",
        ratio: "1:1",
        hasBorder: false,
        backgroundColor: "functional",
        objectFit: "cover",
    },
};
