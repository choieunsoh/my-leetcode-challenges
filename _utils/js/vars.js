const logger = require('./logger');

logger.topic('Variables');

logger.title('Global Scope');
var x1 = 5;
var y1 = 'abc';
function fn() {}

console.log(x1);
console.log(y1);

logger.title('Local Scope');
var x2 = 5;

function fn() {
  var insideFnScope = 10;
  console.log(insideFnScope); // 10
  console.log(x); // 5
  {
    let x2 = 55;
    console.log(x2); // 55
  }
  console.log(x2); // 5
}
console.log(x2); // 5

fn();

try {
  console.log(insideFnScope); // Error
} catch (err) {
  logger.error(err);
}

logger.title('Drilling Deeper');
var x3 = 5;
var y3 = 10;

function fn() {
  var y3 = 20;
  console.log(x3); // 5
  console.log(y3); // 20
}

fn();

console.log(x3); // 5
console.log(y3); // 10

logger.title('Changing the Outer Scope');
{
  var x4 = 5;

  function fn() {
    x4 = 10;
    y4 = 20;
  }

  fn();
  console.log(x4); // 10
  console.log(y4); // 20
}

logger.title('Quiz 1');
var a1 = 'abc';
var b1 = 'def';

function fn() {
  a1 = 123;
  var b1 = 456;
  console.log(a1, b1);
}

fn(); // 123 456

logger.title('Quiz 2');
var a2 = 'abc';
var b2 = 'def';

function fn() {
  a2 = 123;
  var b2 = 456;
}

fn();

console.log(a2, b2); // 123 def

logger.title('Quiz 3');
var x3 = 5;
var y3 = 'abc';

function outerFn() {
  var x3 = 10;
  y3 = 'xyz';

  function innerFn() {
    x3 = 20;
    var y3 = 'jkl';
  }

  innerFn();

  console.log(x3);
  console.log(y3);
}

outerFn(); // 20 xyz

console.log(x3); // 5
console.log(y3); // xyz
