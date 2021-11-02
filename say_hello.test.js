const say_hello = require("./say_hello");

test("test say_hello with name Asko", () => {
  expect(say_hello("Asko")).toBe("Hello Asko!");
});
