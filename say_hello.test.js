const say_hello = require("./say_hello");

test("expect return to be Hello Kevin", () => {
  expect(say_hello("Kevin")).toBe("Hello Kevin!");
});