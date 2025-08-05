class CfaAlert extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="alert">Alert: ' + this.getAttribute('title') + '</div>';
  }
}
customElements.define('cfa-alert', CfaAlert);
