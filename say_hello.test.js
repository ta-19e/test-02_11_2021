const sayHello = require("./say_hello");


test("name mari will be Mari", () => {
    const name="mari";
    expect(sayHello(name)).toBe("Hello Mari!")
})