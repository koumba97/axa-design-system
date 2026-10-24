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

        expect(card.type).toBe("sm");

        card.type = "lg";
        await card.updateComplete;

        expect(card.type).toBe("lg");

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

        expect(card.inverted).toBe(true);

        card.remove();
    });

    it("should display the title", async () => {
        const card = document.createElement("axa-card") as HTMLElement &
            CardProps & {
                updateComplete: Promise<boolean>;
            };

        card.cardTitle = "Car insurance";
        document.body.appendChild(card);
        await card.updateComplete;

        expect(card.shadowRoot?.querySelector("h5")?.textContent?.trim()).toBe(
            "Car insurance",
        );

        card.remove();
    });
});
