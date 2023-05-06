// 2620. Counter
// https://leetcode.com/problems/counter/
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
var counter = createCounter(10);
counter();
counter();
counter();
counter();
counter();
counter();
