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
        const imageRatio = this.type === "bg" ? "16:9" : "1:1";

        return html`<div class="axa-card">
            <section class="${this.type} ${invertedClass} container">
                <axa-image
                    src=${this.image}
                    alt=${this.cardTitle}
                    ratio=${imageRatio}
                ></axa-image>
                <div class="content">
                    <p class="top">
                        <span class="subhead">${this.subhead}</span>
                        ${this.type !== "sm" && this.type !== "md"
                            ? html` <span class="date">
                                  - ${this.cardDate}</span
                              >`
                            : null}
                    </p>

                    <h5 class="title">${this.cardTitle}</h5>
                    <p class="text-content">${this.content}</p>
                    <p class="date bottom">${this.cardDate}</p>
                </div>
            </section>
        </div>`;
    }
}
