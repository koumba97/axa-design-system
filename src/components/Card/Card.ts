import { html } from "lit";
import "./card.scss";
import type { CardProps } from "./Card.types";

export const Card = ({ image }: CardProps) => {
    return html`<div class=${["axa-card"]}>
        <section class=${["large"]}>
            <div class="container>
                <div class="cover-img">
                    <img class=${["axa-card-image"]} src=${[image]} />
                </div>
            </div>
        </section>
    </div>`;
};
