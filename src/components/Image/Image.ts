import { html, LitElement, unsafeCSS } from "lit";
import "./image.scss";
import type {
    ImageBackgroundColor,
    ImageObjectFit,
    ImageProps,
} from "./Image.types";
import type { Ratio } from "../../types/Common.types";
import { customElement, property } from "lit/decorators.js";
import styles from "./image.scss?inline";

@customElement("axa-image")
export class Image extends LitElement implements ImageProps {
    static styles = unsafeCSS(styles);

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
        const ratioClass = `ratio-${this.ratio.replace(":", "-")}`;
        const borderClass = this.hasBorder ? "has-border" : "";
        const objectFitClass = `object-fit-${this.objectFit}`;
        const backgroundColor =
            this.backgroundColor == "expressive" ? "background-expressive" : "";

        return html`<div class="axa-image" id=${this.customId}>
            <div
                class="${ratioClass} ${borderClass} ${backgroundColor} image-container"
            >
                <img
                    class="axa-card-image ${objectFitClass}"
                    src=${this.src}
                    alt=${this.alt}
                />
            </div>
        </div>`;
    }
}
