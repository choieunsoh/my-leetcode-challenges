const logger = require('./logger');

logger.topic('ES2015 Scope & Hoisting - let & const');

logger.title('var - Hoisting');
console.log(x1); // -> undefined
var x1 = 10;
console.log(x1); // -> 10

logger.title('let - Not Hoisting');
try {
  console.log(x2); // -> Uncaught ReferenceError: x is not defined
} catch (err) {
  logger.error(err);
}
let x2 = 10;
console.log(x2);

logger.title('Block-Scoped');
{
  var x3 = 10;
  let y3 = 20;

  console.log(x3); // -> 10
  console.log(y3); // -> 20
}

console.log(x3); // -> 10
try {
  console.log(y3); // -> Uncaught ReferenceError: y is not defined
} catch (err) {
  logger.error(err);
}

logger.title('Condition Loop');
for (var i = 0; i < 10; i++) {}
for (let j = 0; j < 10; j++) {}

console.log(i); // -> 10
try {
  console.log(j); // -> Uncaught ReferenceError: j is not defined
} catch (err) {
  logger.error(err);
}

logger.title('Duplicate Declarations');
var x4 = 4;
var x4 = 5;
console.log(x4);

let y4 = 6;
//let y4 = 7; // -> Uncaught SyntaxError: Identifier 'y' has already been declared

logger.title('const - No Reassignment');
var x5 = 3;
let y5 = 4;
const z5 = 5;

x5 = 30;
y5 = 40;
try {
  z5 = 50; // -> Uncaught TypeError: Assignment to constant variable.
} catch (err) {
  logger.error(err);
}
console.log(x5, y5, z5);

logger.title('const - No Empty Initializations');
var a;
let b;
//const c; // -> Uncaught SyntaxError: Missing initializer in const declaration
