import { html, LitElement } from "lit";
import type {
    ImageBackgroundColor,
    ImageObjectFit,
    ImageProps,
} from "./Image.types";
import type { Ratio } from "../../types/Common.types";
import { customElement, property } from "lit/decorators.js";

@customElement("axa-image")
export class Image extends LitElement implements ImageProps {
    @property({ type: String })
    src = "";

    @property({ type: String })
    alt = "";

    @property({ type: String })
    ratio: Ratio = "1:1";

    @property({ type: Boolean })
    hasBorder = false;

    @property({ type: String })
    backgroundColor: ImageBackgroundColor = "functional";

    @property({ type: String })
    objectFit: ImageObjectFit = "cover";

    @property({ type: String })
    customId?: string;

    render() {
        return html`<div class="axa-image">
            <img class=${["axa-card-image"]} src=${[this.src]} />
        </div>`;
    }
}
