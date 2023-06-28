import { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom";
import { Counter } from "./Counter";

/* class WebComponent extends HTMLElement {
  _start: number = 0;
  set start(value) {
    console.log("set start", value);
    this._start = value;
    this.rerender();
  }

  get start() {
    console.log("get start", this._start);
    return this._start;
  }

  rerender() {
    console.log("rerender");
    this.root.render(<Counter start={this.start} />);
  }

  mountPoint: HTMLDivElement;
  root!: Root;
  constructor() {
    super();
    this.mountPoint = document.createElement("div");
    this.mountPoint.classList.add("__custom-element");
  }

  connectedCallback() {
    console.log("connected", this.start);
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.mountPoint);
    this.root = createRoot(this.mountPoint);
    this.root.render(<Counter start={this.start} />);
    //ReactDOM.render(<Counter />, this.mountPoint);
  }

  disconnectedCallback() {
    console.log("disconnected");
    this.root.unmount();
    //ReactDOM.unmountComponentAtNode(this.mountPoint);
  }
}

if (!customElements.get("counter-wc"))
  customElements.define("counter-wc", WebComponent);
 */
