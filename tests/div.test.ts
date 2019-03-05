import { expect } from "chai";
import { describe, it } from "mocha";

import div from "../src/div";

describe("div", () => {
  it("works for non-zero argments", () => expect(div(6, 2)).equal(3));
  it("works for zero arguments", () => expect(div(3, 0)).equal(0));
});
