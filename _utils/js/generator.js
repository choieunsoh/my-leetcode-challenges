const logger = require('./logger');

logger.title('Generators', false);

logger.title('Using yield to Pause Execution');
// generator function
function* generatorFunc() {
  console.log('1. code before the first yield');
  yield 100;

  console.log('2. code before the second yield');
  yield 200;
}

// returns generator object
const generator1 = generatorFunc();

console.log(generator1.next());

logger.title('Working of multiple yield Statements');
// generator function
function* generatorFunc() {
  console.log('1. code before first yield');
  yield 100;

  console.log('2. code before the second yield');
  yield 200;

  console.log('3. code after the second yield');
}

const generator2 = generatorFunc();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

logger.title('Passing Arguments to Generator Functions');
// generator function
function* generatorFunc() {
  // returns 'hello' at first next()
  let x = yield 'hello';

  // returns passed argument on the second next()
  console.log(x);
  console.log('some code');

  // returns 5 on second next()
  yield 5;
}

const generator3 = generatorFunc();

console.log(generator3.next());
console.log(generator3.next(6));
console.log(generator3.next());

logger.title('Generators are Used for Implementing Iterables');
// creating iterable object
const iterableObj = {
  // iterator method
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: '1', done: false };
        } else if (step === 2) {
          return { value: '2', done: false };
        } else if (step === 3) {
          return { value: '3', done: false };
        }
        return { value: '', done: true };
      },
    };
  },
};

console.log('Symbol.iterator');
for (const i of iterableObj) {
  console.log(i);
}

// generator function
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const obj = generatorFunc();

// iteration through generator
console.log('generator');
for (let value of obj) {
  console.log(value);
}

logger.title('JavaScript Generator Function With return');
// generator function
function* generatorFunc() {
  yield 100;

  return 123;

  console.log('2. some code before second yield');
  yield 200;
}

// returns generator object
const generator4 = generatorFunc();

console.log(generator4.next());
console.log(generator4.next());
console.log(generator4.next());

logger.title('JavaScript Generator Throw Method');
// generator function
function* generatorFunc() {
  yield 100;
  yield 200;
}

// returns generator object
const generator5 = generatorFunc();

console.log(generator5.next());

// throws an error
// terminates the generator
console.log(generator5.throw(new Error('Error occurred.')));
console.log(generator5.next());
