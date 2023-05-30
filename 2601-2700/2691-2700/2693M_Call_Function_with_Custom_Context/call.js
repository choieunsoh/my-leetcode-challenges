// 2693. Call Function with Custom Context
// https://leetcode.com/problems/call-function-with-custom-context/
/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  return this.call(context, ...args);
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

var fn = function add(b) {
    return this.a + b;
  },
  args = [{ a: 5 }, 7];
var expected = 12;
var result = fn.callPolyfill(...args);
console.log(result, result === expected);

var fn = function tax(price, taxRate) {
    return `The cost of the ${this.item} is ${price * taxRate}`;
  },
  args = [{ item: 'burger' }, 10, 1.1];
var expected = 'The cost of the burger is 11';
var result = fn.callPolyfill(...args);
console.log(result, result === expected);
