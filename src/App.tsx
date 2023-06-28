import "./styles.css";
import { Counter } from "./Counter";
import r2wc from "@r2wc/react-to-web-component";

const CounterWC = r2wc(Counter, { props: { count: "number" } });

customElements.define("counter-wc", CounterWC);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "counter-wc": any;
    }
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <counter-wc count="5"  />
      <Counter count={123} onCount={(val) => console.log("count", val)} />
    </div>
  );
}
