// https://leetcode.com/problems/fibonacci-number/
// 509. Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const numbers = [10, 10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.time(`fib-${number}`);
  console.log({ n: number, fib: fib(number) });
  console.timeEnd(`fib-${number}`);
}
