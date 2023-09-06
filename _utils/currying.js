function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function (...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

const enablePartialApplication =
  (fn) =>
  (...args) => {
    if (args.length >= fn.length) return fn(...args);
    return enablePartialApplication(fn.bind(null, ...args));
  };

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

const curriedAdd = curry(sum);

var result = curriedAdd(1, 2, 3, 4, 5); // returns 15;
console.log('curriedAdd(1, 2, 3, 4, 5)', result);
result = curriedAdd(1)(2, 3, 4, 5); // returns 15;
console.log('curriedAdd(1)(2, 3, 4, 5)', result);
result = curriedAdd(1, 2)(3, 4, 5); // returns 15;
console.log('curriedAdd(1, 2)(3, 4, 5)', result);
result = curriedAdd(1, 2, 3, 4)(5); // returns 15;
console.log('curriedAdd(1, 2, 3, 4)(5)', result);
