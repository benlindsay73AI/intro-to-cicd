const sayHi = require("../src/index");

test("sayHi works", () => {
  expect(sayHi("Ben")).toBe("Hello there Ben");
});