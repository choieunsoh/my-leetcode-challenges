// 901. Online Stock Span
// https://leetcode.com/problems/online-stock-span/
// T.C.: O(n)
// S.C.: O(n)

var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  const stack = this.stack;
  let days = 1;
  while (stack.length && stack.at(-1).price <= price) {
    days += stack.pop().days;
  }
  stack.push({ price, days });
  return days;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var ops = ['StockSpanner', 'next', 'next', 'next', 'next', 'next', 'next', 'next'],
  inputs = [[], [100], [80], [60], [70], [60], [75], [85]],
  outputs = [null, 1, 1, 1, 2, 1, 4, 6];
var obj = new StockSpanner();
for (let i = 0; i < ops.length; i++) {
  const input = inputs[i][0];
  const expected = outputs[i];
  let result = null;
  switch (ops[i]) {
    case 'next':
      result = obj.next(input);
      break;
  }
  console.log(i, ops[i], result, result === expected);
}
