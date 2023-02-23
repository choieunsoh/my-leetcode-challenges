// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/
var fib = function (n: number): number {
  if (n < 2) return n;
  let left = 0;
  let right = 1;
  for (let i = 2; i <= n; i++) {
    [left, right] = [right, left + right];
  }
  return right;
};

var n = 2;
var expected = 1;
var result = fib(n);
console.log(result, result === expected);

var n = 3;
var expected = 2;
var result = fib(n);
console.log(result, result === expected);

var n = 4;
var expected = 3;
var result = fib(n);
console.log(result, result === expected);
