const chalk = require("chalk");
const assert = require("assert");

const say_hello = require("./say_hello");

// test how function works
console.log(say_hello("jaan"));
// use also colors to be more "fancy"
console.log(chalk.yellow("mari: "), chalk.bold.green(say_hello("mari")));
console.log(chalk.yellow("kaja kallas: "), chalk.bold.green(say_hello("kaja kallas")));

// examples of testing using assert
assert.equal(say_hello("mari"), "Hello Mari!");
assert.equal(say_hello("kaja kallas"), "Hello Kaja Kallas!");

assert.notEqual(say_hello("mati"), "bye mati");
