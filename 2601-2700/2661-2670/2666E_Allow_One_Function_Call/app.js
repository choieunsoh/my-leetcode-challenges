// 2666. Allow One Function Call
// https://leetcode.com/problems/allow-one-function-call/
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let called = false;
  return function (...args) {
    if (called) return undefined;
    called = true;
    return fn.apply(this, args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

var fn = (a, b, c) => a + b + c,
  calls = [
    [1, 2, 3],
    [2, 3, 6],
  ];
var expected = [{ calls: 1, value: 6 }];
var result = once(fn);
for (const call of calls) {
  console.log('input', call);
  console.log('output', result(...call));
}
console.log('expected', expected);

var fn = (a, b, c) => a * b * c,
  calls = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
  ];
var expected = [{ calls: 1, value: 140 }];
var result = once(fn);
for (const call of calls) {
  console.log('input', call);
  console.log('output', result(...call));
}
console.log('expected', expected);
