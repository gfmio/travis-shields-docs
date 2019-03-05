import { expect } from "chai";
import { describe, it } from "mocha";

import Calculator from "../src/Calculator";

describe("Calculator", () => {
  const calculator = new Calculator(0);

  it("can add", () => expect(calculator.add(2).value()).equal(2));
  it("can sub", () => expect(calculator.sub(1).value()).equal(1));
  it("can mul", () => expect(calculator.mul(12).value()).equal(12));
  it("can div", () => expect(calculator.div(2).value()).equal(6));
  it("can mod", () => expect(calculator.mod(4).value()).equal(2));
  // prettier-ignore
  it("can exp", () => expect(calculator.sub(1).exp().value()).equal(Math.E));
  it("can ln", () => expect(calculator.ln().value()).equal(1));
});
