import { html, LitElement } from "lit";
import "./card.scss";
import type { CardProps } from "./Card.types";
import { customElement, property } from "lit/decorators.js";
import type { Link, Size } from "../../types/Common.types";

@customElement("axa-card")
export class Card extends LitElement implements CardProps {
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
        return html`<div class="axa-card">
        <section class="large">
            <div class="container>
                <div class="cover-img">
                <p>ookok</p>
                      ${this.isInverse}
                    <axa-image
                        src=${this.image}
                        alt=${this.cardTitle}
                    ></axa-image>
                </div>
            </div>
        </section>
    </div>`;
    }
}
