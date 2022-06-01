const { hello } = require("../hello");

test("should say hello", () => {
  expect(hello()).toMatch(/hello/i);
});
