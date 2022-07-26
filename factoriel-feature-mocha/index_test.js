var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("returns 120 if we pass 5", () => {
      const expected = 120;
      const input = 5;
      const result = Calculate.factorial(input);
      assert.equal(result, expected);
    });
    it("returns 6 if we pass 3", () => {
      const expected = 6;
      const input = 3;
      const result = Calculate.factorial(input);
      assert.equal(result, expected);
    });
    it("returns 1 when you pass in 0.", () => {
      const expected = 1;
      const input = 0;
      const result = Calculate.factorial(input);
      assert.equal(result, expected);
    });
  });
});
