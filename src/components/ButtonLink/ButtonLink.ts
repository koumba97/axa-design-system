import { html, LitElement, unsafeCSS } from "lit";
import styles from "./button.scss?inline";
import type { ButtonLinkProps, ButtonStyle } from "./ButtonLink.types";
import { customElement, property } from "lit/decorators.js";

@customElement("axa-button-link")
export class ButtonLink extends LitElement implements ButtonLinkProps {
    static styles = unsafeCSS(styles);

    @property({ type: String })
    label = "";

    @property({ type: String })
    url?: string;

    @property({ type: String })
    buttonStyle: ButtonStyle = "button";

    @property({ type: Boolean })
    isInverse: boolean = false;

    render() {
        const mode = this.isInverse ? "dark" : "light";

        return this.buttonStyle == "link"
            ? html`
                  <a class="axa-button-link link ${mode}" href=${this.url}>
                      ${this.label}
                  </a>
              `
            : html`
                  <button
                      class="axa-button-link button ${mode}"
                      type=${this.buttonStyle}
                  >
                      ${this.label}
                  </button>
              `;
    }
}
