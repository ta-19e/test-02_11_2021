var capitalize = require('capitalize');

function sayHello(Siim) {
    return "Hello " + capitalize.words(Siim) + "!";
}

console.log('repeat("a", 5): ', repeat("a", 5));
console.log("repeat(\"a\", 0): ", repeat('a', 0));
console.log(`repeat("testme ", 2): `, repeat("testme", 2));

module.exports = sayHello