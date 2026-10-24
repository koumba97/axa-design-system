import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { ButtonLinkProps } from "./ButtonLink.types";
import { ButtonLink } from "./ButtonLink";
import { html } from "lit";

const meta = {
    title: "Components/ButtonLink",
    tags: ["autodocs"],
    render: (args: ButtonLinkProps) => html`
        <div
            class="component-wrapper"
            style="padding: 20px; background-color:${args.isInverse
                ? "black"
                : "white"};"
        >
            <axa-button-link
                label=${args.label ?? ""}
                buttonStyle=${args.buttonStyle ?? "button"}
                buttonType=${args.buttonType ?? "button"}
                .isInverse=${args.isInverse ?? false}
                url=${args.url ?? ""}
            ></axa-button-link>
        </div>
    `,
    argTypes: {
        label: {
            control: "text",
        },
        buttonStyle: {
            control: { type: "select" },
            options: ["button", "link"],
        },
        buttonType: {
            control: { type: "select" },
            options: ["button", "submit", "reset"],
        },
        isInverse: {
            control: { type: "boolean" },
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
        buttonStyle: "link",
    },
};
