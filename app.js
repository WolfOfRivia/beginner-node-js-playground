const {capitalizeWords, makeMoney} = require('./utils');
const Person = require('./Person');

console.log(capitalizeWords('hello world from node js'));
console.log(makeMoney(1000));

const person1 = new Person('John', 30);

person1.greet();

// Example on using modules with node.js
// In your terminal run node app