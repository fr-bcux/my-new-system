import { LitElement, html, css } from 'lit';

export class MyButton extends LitElement {
  static styles = css`
    button {
      /* These are your tokens! */
      background-color: var(--color-primary-60);
      color: var(--color-white);
      border: none;
      border-radius: var(--border-radius-md);
      padding: var(--spacing-12) var(--spacing-16);
      font-family: var(--typeface-family-primary);
      font-size: var(--typeface-digital-font-size-small-text);
      cursor: pointer;
    }
    button:hover {
      background-color: var(--color-primary-70);
    }
  `;

  render() {
    return html`<button><slot></slot></button>`;
  }
}

window.customElements.define('my-button', MyButton);