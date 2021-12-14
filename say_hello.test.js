const sayHello = require('./say_hello');

test("return name", () => {
    expect(sayHello("martin")).toBe("Hello Martin!");
}) 