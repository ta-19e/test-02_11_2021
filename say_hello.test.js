const sayHello = require("./say_hello");

describe("name tests", () => {
  test("return 'Hello Jan!' if given input Jan", () => {
    expect(sayHello("Jan")).toBe("Hello Jan!");
  });

  test("return 'Hello Jan Kängsepp!' if given input Jan Kängsepp", () => {
    expect(sayHello("Jan Kängsepp")).toBe("Hello Jan Kängsepp!");
  });

  test("return 'Hello Jan Kristjan Kängsepp!' if given input Jan Kristjan Kängsepp", () => {
    expect(sayHello("Jan Kristjan Kängsepp")).toBe("Hello Jan Kristjan Kängsepp!");
  });
});

describe("exception test", () => {
  test("returns empty name error if not given anything", () => {
    expect(() => {
      sayHello("");
    }).toThrow("No name is given");
  });
});
