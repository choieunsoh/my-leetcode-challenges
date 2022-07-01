// https://leetcode.com/problems/fibonacci-number/
// 509. Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memo = []) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};

const numbers = [10, 10, 20, 30, 40, 50, 100, 200];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.time(`fib-${number}`);
  console.log({ n: number, fib: fib(number) });
  console.timeEnd(`fib-${number}`);
}
