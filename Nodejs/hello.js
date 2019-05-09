var name = 'world';

var s = `Hello ${name}!`;

console.log(s);
function greet(name) {
    console.log(s + ',' + name + '!');
}

module.exports = greet;