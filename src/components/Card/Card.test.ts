import { describe, expect, it } from "vitest";
import "./Card";

describe("Card", () => {
    it("should be registered as a custom element", () => {
        expect(customElements.get("axa-card")).toBeDefined();
    });
});
