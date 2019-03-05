import { describe, it } from "mocha";
import { expect } from "chai";

import Calculator from "../src";

describe("Calculator", () => {
  const calculator = new Calculator();

  it("can add", () => expect(calculator.add(1, 1)).equal(2));
  it("can sub", () => expect(calculator.sub(1, 1)).equal(2));
  it("can mul", () => expect(calculator.mul(1, 1)).equal(2));
  it("can div", () => expect(calculator.div(1, 1)).equal(2));
  it("can mod", () => expect(calculator.mod(1, 1)).equal(2));
  it("can exp", () => expect(calculator.exp(1)).equal(Math.E));
  it("can ln", () => expect(calculator.ln(1)).equal(0));
});
