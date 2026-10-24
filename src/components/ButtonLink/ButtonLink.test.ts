import { describe, expect, it } from "vitest";
import "./ButtonLink";
import type { ButtonLink } from "./ButtonLink";
import type { ButtonLinkProps } from "./ButtonLink.types";

describe("ButtonLink", () => {
    it("should be registered as a custom element", () => {
        expect(customElements.get("axa-button-link")).toBeDefined();
    });

    it("should render the buttonLink", () => {
        const buttonLink = document.createElement("axa-button-link");

        document.body.appendChild(buttonLink);

        expect(buttonLink.shadowRoot).not.toBeNull();

        buttonLink.remove();
    });

    it("should render the buttonLink (button style)", async () => {
        const buttonLink = document.createElement(
            "axa-button-link",
        ) as HTMLElement &
            ButtonLinkProps & {
                updateComplete: Promise<boolean>;
            };

        document.body.appendChild(buttonLink);

        buttonLink.buttonStyle = "button";
        await buttonLink.updateComplete;

        expect(buttonLink.shadowRoot?.querySelector("button")).not.toBeNull();

        buttonLink.remove();
    });

    it("should render the buttonLink (link style)", async () => {
        const buttonLink = document.createElement(
            "axa-button-link",
        ) as HTMLElement &
            ButtonLinkProps & {
                updateComplete: Promise<boolean>;
            };

        document.body.appendChild(buttonLink);

        buttonLink.buttonStyle = "link";
        await buttonLink.updateComplete;

        expect(buttonLink.shadowRoot?.querySelector("a")).not.toBeNull();

        buttonLink.remove();
    });

    it("should display the label", async () => {
        const buttonLink = document.createElement(
            "axa-button-link",
        ) as HTMLElement &
            ButtonLinkProps & {
                updateComplete: Promise<boolean>;
            };

        buttonLink.label = "See more";
        document.body.appendChild(buttonLink);

        await buttonLink.updateComplete;

        expect(
            buttonLink.shadowRoot?.querySelector("button")?.textContent?.trim(),
        ).toBe("See more");

        buttonLink.remove();
    });
});
