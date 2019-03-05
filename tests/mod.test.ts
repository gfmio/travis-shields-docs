import { expect } from "chai";
import { describe, it } from "mocha";

import mod from "../src/mod";

describe("mod", () => {
  it("works for non-zero argments", () => expect(mod(6, 4)).equal(2));
  it("works for zero arguments", () => expect(mod(3, 0)).equal(0));
});
