const logger = require('./logger');

logger.title('Variables', false);

logger.title('Global Scope');
{
  var x = 5;
  var y = 'abc';
  function fn() {}

  console.log(x);
  console.log(y);
}

logger.title('Local Scope');
{
  var x = 5;

  function fn() {
    var insideFnScope = 10;
    console.log(insideFnScope); // 10
    console.log(x); // 5
    {
      let x = 55;
      console.log(x); // 55
    }
    console.log(x); // 5
  }
  console.log(x); // 5

  fn();

  try {
    console.log(insideFnScope); // Error
  } catch (err) {
    console.log(err.message);
  }
}

logger.title('Drilling Deeper');
{
  var x = 5;
  var y = 10;

  function fn() {
    var y = 20;
    console.log(x); // 5
    console.log(y); // 20
  }

  fn();

  console.log(x); // 5
  console.log(y); // 10
}

logger.title('Changing the Outer Scope');
{
  var x = 5;

  function fn() {
    x = 10;
    y = 20;
  }

  fn();
  console.log(x); // 10
  console.log(y); // 20
}

logger.title('Quiz 1');
{
  var a = 'abc';
  var b = 'def';

  function fn() {
    a = 123;
    var b = 456;
    console.log(a, b);
  }

  fn(); // 123 456
}

logger.title('Quiz 2');
{
  var a = 'abc';
  var b = 'def';

  function fn() {
    a = 123;
    var b = 456;
  }

  fn();

  console.log(a, b); // 123 def
}

logger.title('Quiz 3');
{
  var x = 5;
  var y = 'abc';

  function outerFn() {
    var x = 10;
    y = 'xyz';

    function innerFn() {
      x = 20;
      var y = 'jkl';
    }

    innerFn();

    console.log(x);
    console.log(y);
  }

  outerFn(); // 20 xyz

  console.log(x); // 5
  console.log(y); // xyz
}
