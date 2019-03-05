export default class Calculator {
  public add(a: number, b: number) {
    return a + b;
  }
  public sub(a: number, b: number) {
    return a - b;
  }
  public mul(a: number, b: number) {
    return a * b;
  }
  public div(a: number, b: number) {
    return a / b;
  }
  public mod(a: number, b: number) {
    return a % b;
  }
  public exp(a: number) {
    return Math.exp(a);
  }
  public ln(a: number) {
    return Math.log(a);
  }
}
