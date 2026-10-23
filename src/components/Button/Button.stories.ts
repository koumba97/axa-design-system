import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { ButtonProps } from "./Button.types";
import { Button } from "./Button";
import { html } from "lit";

const meta = {
    title: "Components/Button",
    tags: ["autodocs"],
    render: (args: ButtonProps) => html`
            <axa-button
                label=${args.label ?? ""}
                buttonType=${args.type ?? "button"}
                url=${args.url ?? ""}
            ></axa-button>
        </div>
    `,
    argTypes: {
        label: {
            control: "text",
        },
    },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
    args: {
        label: "Button",
    },
};
