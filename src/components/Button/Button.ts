import { html, LitElement, unsafeCSS } from "lit";
import styles from "./button.scss?inline";
import type { ButtonProps } from "./Button.types";
import { customElement, property } from "lit/decorators.js";

@customElement("axa-button")
export class Button extends LitElement implements ButtonProps {
    static styles = unsafeCSS(styles);

    @property({ type: String })
    label = "";

    render() {
        return html`<button class="axa-button">${this.label}</button>`;
    }
}
