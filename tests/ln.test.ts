import { expect } from "chai";
import { describe, it } from "mocha";

import ln from "../src/ln";

describe("ln", () => {
  it("works for non-zero argments", () => expect(ln(1)).equal(0));
  it("works for non-zero argments", () => expect(ln(Math.E)).equal(1));
  it("works for zero arguments", () => expect(ln(0)).equal(0));
  it("works for negative argments", () => expect(ln(-1)).equal(0));
  it("works for negative argments", () => expect(ln(-Math.E)).equal(1));
});
