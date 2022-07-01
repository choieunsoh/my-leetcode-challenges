// https://leetcode.com/problems/fibonacci-number/
// 509. Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  const M = powerMatrix(n - 1);
  return M[0][0];

  function powerMatrix(n) {
    let M = [
      [1, 1],
      [1, 0],
    ];
    const N = [
      [1, 1],
      [1, 0],
    ];
    for (let i = 2; i <= n; i++) {
      M = multiplyMatrix(M, N);
    }
    return M;
  }
  function multiplyMatrix(M, N) {
    const result = [
      [0, 0],
      [0, 0],
    ];
    result[0][0] = M[0][0] * N[0][0] + M[0][1] * N[1][0];
    result[0][1] = M[0][0] * N[0][1] + M[0][1] * N[1][1];
    result[1][0] = M[1][0] * N[0][0] + M[1][1] * N[1][0];
    result[1][1] = M[1][0] * N[0][1] + M[1][1] * N[1][1];
    return result;
  }
};

const numbers = [10, 10, 20, 30, 40, 50, 100, 200];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.time(`fib-${number}`);
  console.log({ n: number, fib: fib(number) });
  console.timeEnd(`fib-${number}`);
}
