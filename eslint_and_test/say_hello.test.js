const sayHello = require("./say_hello");

test("name mari will be Mari", () => {
  const name = "mari";
  expect(sayHello(name)).toBe("Hello Mari!");
});

test("name mari mets will be Mari Mets", () => {
  const name = "mari mets";
  expect(sayHello(name)).toBe("Hello Mari Mets!");
});
