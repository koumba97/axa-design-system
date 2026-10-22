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

        return html`<div class="axa-image">
            <div class="${ratioClass} ${borderClass} image-container">
                ${this.hasBorder}
                <img class=${["axa-card-image"]} src=${[this.src]} />
            </div>
        </div>`;
    }
}
