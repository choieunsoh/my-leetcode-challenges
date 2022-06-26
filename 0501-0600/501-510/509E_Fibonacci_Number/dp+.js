// https://leetcode.com/problems/fibonacci-number/
// 509. Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;
  let one = 0;
  let two = 1;
  let three = 1;
  for (let i = 2; i <= n; i++) {
    three = one + two;
    one = two;
    two = three;
  }
  return three;
};

const numbers = [10, 10, 20, 30, 40, 50, 100, 200];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.time(`fib-${number}`);
  console.log({ n: number, fib: fib(number) });
  console.timeEnd(`fib-${number}`);
}

for (let i = 0; i <= 20; i++) {
  const number = i;
  console.time(`fib-${number}`);
  console.log({ n: number, fib: fib(number) });
  console.timeEnd(`fib-${number}`);
}
