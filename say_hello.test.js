const assert = require("assert");
const say_hello = require("./say_hello");

test("say_hello Juhan to be Hello Juhan!", () => {
  assert.equal(say_hello("juhan"), "Hello Juhan!");
});
