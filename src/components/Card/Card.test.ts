import { describe, expect, it } from "vitest";
import "./Card";
import type { CardProps } from "./Card.types";

describe("Card", () => {
    it("should be registered as a custom element", () => {
        expect(customElements.get("axa-card")).toBeDefined();
    });

    it("should render the card", () => {
        const card = document.createElement("axa-card");

        document.body.appendChild(card);

        expect(card.shadowRoot).not.toBeNull();

        card.remove();
    });

    it("should update type prop (size) changes", async () => {
        const card = document.createElement("axa-card") as HTMLElement &
            CardProps & {
                updateComplete: Promise<boolean>;
            };

        document.body.appendChild(card);

        card.type = "sm";
        await card.updateComplete;
        expect(
            card.shadowRoot
                ?.querySelector(".container")
                ?.classList.contains("sm"),
        ).toBe(true);

        card.type = "md";
        await card.updateComplete;
        expect(
            card.shadowRoot
                ?.querySelector(".container")
                ?.classList.contains("md"),
        ).toBe(true);

        card.type = "lg";
        await card.updateComplete;
        expect(
            card.shadowRoot
                ?.querySelector(".container")
                ?.classList.contains("lg"),
        ).toBe(true);

        card.type = "bg";
        await card.updateComplete;
        expect(
            card.shadowRoot
                ?.querySelector(".container")
                ?.classList.contains("bg"),
        ).toBe(true);

        card.remove();
    });

    it("should update image src", async () => {
        const imageSrc = "/images/AXA_Logo.svg.webp";
        const card = document.createElement("axa-card") as HTMLElement &
            CardProps & {
                updateComplete: Promise<boolean>;
            };

        document.body.appendChild(card);

        card.image = imageSrc;
        await card.updateComplete;
        const image = card.shadowRoot?.querySelector("axa-image");

        expect(image?.getAttribute("src")).toBe(imageSrc);

        card.remove();
    });

    it("should update when inverted prop changes", async () => {
        const card = document.createElement("axa-card") as HTMLElement &
            CardProps & {
                updateComplete: Promise<boolean>;
            };
        document.body.appendChild(card);
        await card.updateComplete;

        card.inverted = true;
        await card.updateComplete;

        expect(
            card.shadowRoot
                ?.querySelector(".container")
                ?.classList.contains("inverted"),
        ).toBe(true);

        card.remove();
    });

    it("should display the title", async () => {
        const title = "Car insurance";
        const card = document.createElement("axa-card") as HTMLElement &
            CardProps & {
                updateComplete: Promise<boolean>;
            };

        card.cardTitle = title;
        document.body.appendChild(card);
        await card.updateComplete;

        expect(card.shadowRoot?.querySelector("h5")?.textContent?.trim()).toBe(
            title,
        );

        card.remove();
    });
});
