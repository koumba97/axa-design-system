import { html, LitElement, unsafeCSS } from "lit";
import styles from "./button.scss?inline";
import type { ButtonProps, ButtonType } from "./Button.types";
import { customElement, property } from "lit/decorators.js";

@customElement("axa-button")
export class Button extends LitElement implements ButtonProps {
    static styles = unsafeCSS(styles);

    @property({ type: String })
    label = "";

    @property({ type: String })
    url?: string;

    @property({ type: String })
    type: ButtonType = "button";

    render() {
        return this.url
            ? html`
                  <a class="axa-button link" href=${this.url}>
                      ${this.label}
                  </a>
              `
            : html`
                  <button class="axa-button button" type=${this.type}>
                      ${this.label}
                  </button>
              `;
    }
}
