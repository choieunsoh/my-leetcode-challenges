const logger = require('./logger');

logger.topic('Variable Hoisting');

logger.title('Basic Concept');
console.log(x1); // undefined
var x1 = 5;
console.log(x1); // 5
try {
  console.log(y1); // Error
} catch (err) {
  logger.error(err);
}

logger.title('The JavaScript Engine');
var x2;
console.log(x2); // undefined
x2 = 5;
console.log(x2); // 5
try {
  console.log(y2); // Uncaught ReferenceError: y is not defined
} catch (err) {
  logger.error(err);
}

logger.title('Hoisting and var');
console.log(x3);
try {
  console.log(y3);
} catch (err) {
  logger.error(err);
}

var x3 = 'This will log "undefined"!';
y3 = 'This will throw an error :(';
console.log(x3);
console.log(y3);

logger.title('Function Hoisting');
fnDeclaration(); // -> This works!
try {
  fnExpression(); // -> Uncaught TypeError: fnExpression is not a function
} catch (err) {
  logger.error(err);
}

function fnDeclaration() {
  console.log('This works!');
}

var fnExpression = function () {
  console.log("This won't work :(");
};
fnExpression();

logger.title('Conclusion');
var a = 123;
var b = 'abc';

var fnExpression = function () {
  var c = 456;
  var d = 'def';
};

function fnDeclaration() {
  var e = 789;
}

logger.log('JavaScript engine converts to below');
function fnDeclaration() {
  var e;

  e = 789;
}

var a;
var b;
var fnExpression;

a = 123;
b = 'abc';

fnExpression = function () {
  var c;
  var d;

  c = 456;
  d = 'def';
};
