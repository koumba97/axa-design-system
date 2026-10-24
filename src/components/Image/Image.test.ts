import { describe, expect, it } from "vitest";
import "./Image";
//import type { ImageProps } from "./Image.types";

describe("Image", () => {
    it("should be registered as a custom element", () => {
        expect(customElements.get("axa-image")).toBeDefined();
    });

    it("should render the card", () => {
        const image = document.createElement("axa-image");

        document.body.appendChild(image);

        expect(image.shadowRoot).not.toBeNull();

        image.remove();
    });
});
