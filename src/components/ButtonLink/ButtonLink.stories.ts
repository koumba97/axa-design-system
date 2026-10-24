import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { ButtonLinkProps } from "./ButtonLink.types";
import { ButtonLink } from "./ButtonLink";
import { html } from "lit";

const meta = {
    title: "Components/ButtonLink",
    tags: ["autodocs"],
    render: (args: ButtonLinkProps) => html`
            <axa-button-link
                label=${args.label ?? ""}
                buttonType=${args.buttonType ?? "button"}
                url=${args.url ?? ""}
            ></axa-button-link>
        </div>
    `,
    argTypes: {
        label: {
            control: "text",
        },
        buttonType: {
            control: { type: "select" },
            options: ["button", "link"],
        },
    },
} satisfies Meta<ButtonLinkProps>;

export default meta;
type Story = StoryObj<ButtonLinkProps>;

export const Button: Story = {
    args: {
        label: "Button",
    },
};

export const Link: Story = {
    args: {
        label: "Button",
        buttonType: "link",
    },
};
