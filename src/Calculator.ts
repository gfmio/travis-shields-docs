import add from "./add";
import div from "./div";
import ln from "./ln";
import mod from "./mod";
import mul from "./mul";
import sub from "./sub";

/** A simple stateful calculator */
export default class Calculator {
  protected current: number = 0;

  constructor(initial: number = 0) {
    this.current = initial;
  }

  public value() {
    return this.current;
  }

  public clear() {
    this.current = 0;
    return this;
  }

  public add(n: number) {
    this.current = add(this.current, n);
    return this;
  }

  public sub(n: number) {
    this.current = sub(this.current, n);
    return this;
  }

  public mul(n: number) {
    this.current = mul(this.current, n);
    return this;
  }

  public div(n: number) {
    this.current = div(this.current, n);
    return this;
  }

  public mod(n: number) {
    this.current = mod(this.current, n);
    return this;
  }

  public exp() {
    this.current = Math.exp(this.current);
    return this;
  }

  public ln() {
    this.current = ln(this.current);
    return this;
  }

  public sin() {
    this.current = Math.sin(this.current);
    return this;
  }

  public cos() {
    this.current = Math.cos(this.current);
    return this;
  }
}
