const sayHello = require('./say_hello');

test("return 'Hello Jan!' if given input Jan", () => {
    expect(sayHello("jan")).toBe("Hello Jan!");
})