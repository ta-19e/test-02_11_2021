var capitalize = require('capitalize');

function sayHello(name) {
    if (!name) {
        throw "No name is given";    
    }
    return "Hello " + capitalize.words(name) + "!"
}

module.exports = sayHello