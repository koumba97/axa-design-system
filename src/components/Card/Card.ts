import { html, LitElement, unsafeCSS } from "lit";
import styles from "./card.scss?inline";
import type { CardProps } from "./Card.types";
import { customElement, property } from "lit/decorators.js";
import type { Link, Size } from "../../types/Common.types";

@customElement("axa-card")
export class Card extends LitElement implements CardProps {
    static styles = unsafeCSS(styles);

    @property({ type: String })
    type: Size = "lg";

    @property({ type: String })
    image = "";

    @property({ type: String })
    cardDate = "";

    @property({ type: Array })
    link: Link[] = [];

    @property({ type: String })
    breakpoint = "";

    @property({ type: String })
    cardTitle = "";

    @property({ type: String })
    content = "";

    @property({ type: String })
    subhead = "";

    @property({ type: Boolean })
    isInverse = false;

    @property({ type: Boolean })
    inverted = false;

    render() {
        const invertedClass = this.inverted ? "inverted" : "";

        return html`<div class="axa-card">
            <section class="${this.type} ${invertedClass} container">
                <axa-image src=${this.image} alt=${this.cardTitle}></axa-image>
                <div class="horizontal-settings content">
                    <div class="v-center">
                        <p class="subhead">${this.subhead}</p>
                        <h5>${this.cardTitle}</h5>
                        <p class="date">${this.cardDate}</p>
                        <p class="preview">${this.content}</p>
                    </div>
                </div>
            </section>
        </div>`;
    }
}
