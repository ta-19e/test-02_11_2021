const hello = require("./say_hello");

test("returns name", () => {
  expect(hello("Kuldar")).toBe("Hello Kuldar!");
});