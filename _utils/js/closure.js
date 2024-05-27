const logger = require('./logger');

// Closure
logger.title('Closure', false);

logger.title('Basic Closure');
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable from outerFunction
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Logs: 'I am from the outer function'

logger.title('Data Privacy/Encapsulation');
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0

logger.title('Function Factories');
function createGreeting(greeting) {
  return function (name) {
    console.log(greeting + ', ' + name);
  };
}

const sayHello = createGreeting('Hello');
sayHello('Alice'); // Hello, Alice
sayHello('Bob'); // Hello, Bob
const sayWow = createGreeting('Wow');
sayWow('Alice'); // Wow, Alice
sayWow('Bob'); // Wow, Bob

// Event Handlers
/*function setupButton() {
  let clickCount = 0;
  document.getElementById('myButton').addEventListener('click', function () {
    clickCount++;
    console.log('Button clicked ' + clickCount + ' times');
  });
}

setupButton();*/

logger.title('Memoization');
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const slowFunction = (num) => {
  // Simulate a time-consuming operation
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
};

const memoizedFunction = memoize(slowFunction);
console.time('First call');
console.log(memoizedFunction(5)); // Calculates and caches result
console.timeEnd('First call');
console.time('Second call');
console.log(memoizedFunction(5)); // Returns cached result
console.timeEnd('Second call');

logger.title('Module Pattern');
const Module = (function () {
  let privateVariable = 'I am private';

  function privateMethod() {
    console.log(privateVariable);
  }

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

Module.publicMethod(); // Logs: 'I am private'

logger.title('Currying');
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6

logger.title('Iterators');
function createIterator(array) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const iterator = createIterator([1, 2, 3]);
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().done); // true

logger.title('Once Functions');
function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn.apply(this, args);
    }
  };
}

const initialize = once(() => console.log('Initialized'));
initialize(); // Logs: Initialized
initialize(); // Does nothing

logger.title('Asynchronous Programming');
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}

function fetchDataWithCache() {
  const cache = {};
  return async function (url) {
    if (cache[url]) {
      return cache[url];
    } else {
      const data = await fetchData(url);
      cache[url] = data;
      return data;
    }
  };
}

const cachedFetch = fetchDataWithCache();
const url1 = 'https://jsonplaceholder.typicode.com/users/1';
console.log('Fetching', url1);
cachedFetch(url1).then(console.log);
cachedFetch(url1).then(console.log); // Uses cache

logger.title('Function Composition');
function compose(...fns) {
  return function (result) {
    return fns.reduceRight((acc, fn) => fn(acc), result);
  };
}

const add5 = (x) => x + 5;
const multiplyBy2 = (x) => x * 2;

const composedFunction = compose(add5, multiplyBy2);
console.log(composedFunction(10)); // 25

logger.title('Partial Application');
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

const multiply = (a, b, c) => a * b * c;
const multiplyBy3 = partial(multiply, 3);

console.log(multiplyBy3(3, 4)); // 36

logger.title('Rate Limiting/Throttling');
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const log = () => console.log('Throttled Function');
const throttledLog = throttle(log, 2000);

//window.addEventListener('resize', throttledLog);
console.time('throttling');
for (let i = 0; i < 5; i++) {
  throttledLog();
}
console.timeEnd('throttling');

logger.title('Debouncing');
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const validate = () => console.log('Validating form input...');
const debouncedValidate = debounce(validate, 500);

//document.getElementById('inputField').addEventListener('input', debouncedValidate);
console.time('debouncing');
for (let i = 0; i < 5; i++) {
  debouncedValidate();
}
console.timeEnd('debouncing');

logger.title('Dynamic Function Definition');
function createLogger(level) {
  return function (message) {
    console.log(`[${level.toUpperCase()}]: ${message}`);
  };
}

const infoLogger = createLogger('info');
const errorLogger = createLogger('error');

infoLogger('This is an informational message.'); // [INFO]: This is an informational message.
errorLogger('This is an error message.'); // [ERROR]: This is an error message.

logger.title('Managing Callbacks');
function fetchWithRetry(url, retries) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      console.log('attempting...', retries - n);
      fetch(url)
        .then((response) => {
          if (response.ok) {
            resolve(response.json());
          } else {
            throw new Error('Fetch failed');
          }
        })
        .catch((error) => {
          if (n === 0) {
            reject(error);
          } else {
            attempt(n - 1);
          }
        });
    }

    attempt(retries - 1);
  });
}

fetchWithRetry('https://api.example.com/data', 3)
  .then((data) => console.log('Data:', data))
  .catch((error) => console.error('Error:', error));

logger.title('Lazy Evaluation');
function lazy(valueFunction) {
  let cachedValue;
  let isComputed = false;

  return function () {
    if (!isComputed) {
      cachedValue = valueFunction();
      isComputed = true;
    }
    return cachedValue;
  };
}

const lazyValue = lazy(() => {
  console.log('Computing value...');
  return 42;
});

console.log(lazyValue()); // Computing value... 42
console.log(lazyValue()); // 42 (no recomputation)

logger.title('Dependency Injection');
function createService(apiClient) {
  return {
    fetchData: function (endpoint) {
      return apiClient.get(endpoint);
    },
  };
}

const mockApiClient = {
  get: (endpoint) => Promise.resolve(`Mock data from ${endpoint}`),
};

const service = createService(mockApiClient);
service.fetchData('/data').then(console.log); // Mock data from /data

logger.title('Iterating Over NodeLists');
function addClassToElements(className) {
  return function (elements) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
  };
}

const addHighlightClass = addClassToElements('highlight');
//const elements = document.querySelectorAll('.item');
//addHighlightClass(elements);

logger.title('Dynamic Event Handlers');
function createHandlers(data) {
  return function (event) {
    console.log(`Data: ${data}, Event: ${event.type}`);
  };
}

const data = 'some data';
//document.getElementById('myButton').addEventListener('click', createHandlers(data));

logger.title('Sandboxing');
function createSandbox() {
  const localData = 'sandbox data';
  return function (code) {
    eval(code);
  };
}

const sandbox = createSandbox();
sandbox('console.log(localData)'); // sandbox data

logger.title('Function Overriding');
function createOverride(originalFunction) {
  return function (...args) {
    console.log('Before function call');
    const result = originalFunction(...args);
    console.log('After function call');
    return result;
  };
}

const originalFunction = (x) => x * 2;
const overriddenFunction = createOverride(originalFunction);

console.log(overriddenFunction(5)); // Before function call, After function call, 10

logger.title('Chainable API');
function createChainableCalculator(initialValue = 0) {
  let value = initialValue;

  const calculator = {
    add: function (amount) {
      value += amount;
      return this;
    },
    subtract: function (amount) {
      value -= amount;
      return this;
    },
    multiply: function (amount) {
      value *= amount;
      return this;
    },
    divide: function (amount) {
      value /= amount;
      return this;
    },
    getResult: function () {
      return value;
    },
  };

  return calculator;
}

const calculator = createChainableCalculator(10);
const result = calculator.add(5).subtract(3).multiply(2).divide(2).getResult();
console.log(result); // 12

logger.title('Custom Validators');
function createValidator(minLength, maxLength) {
  return function (value) {
    return value.length >= minLength && value.length <= maxLength;
  };
}

const validateUsername = createValidator(3, 10);

console.log(validateUsername('John')); // true
console.log(validateUsername('Jo')); // false
console.log(validateUsername('Johnathan')); // false
