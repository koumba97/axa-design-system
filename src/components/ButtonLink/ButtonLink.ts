import { html, LitElement, unsafeCSS } from "lit";
import styles from "./button.scss?inline";
import type { ButtonLinkProps, ButtonType } from "./ButtonLink.types";
import { customElement, property } from "lit/decorators.js";

@customElement("axa-button-link")
export class ButtonLink extends LitElement implements ButtonLinkProps {
    static styles = unsafeCSS(styles);

    @property({ type: String })
    label = "";

    @property({ type: String })
    url?: string;

    @property({ type: String })
    buttonType: ButtonType = "button";

    render() {
        return this.buttonType == "link"
            ? html`
                  <a class="axa-button link" href=${this.url}>
                      ${this.label}
                  </a>
              `
            : html`
                  <button class="axa-button button" type=${this.buttonType}>
                      ${this.label}
                  </button>
              `;
    }
}
