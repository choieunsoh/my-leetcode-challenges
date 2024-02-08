// 279. Perfect Squares
// https://leetcode.com/problems/perfect-squares/
// T.C.: O(sqrt(n))
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const sqrtN = Math.sqrt(n);

  if (sqrtN % 1 === 0) {
    return 1;
  }

  while (n % 4 === 0) {
    n /= 4;
  }
  if (n % 8 === 7) {
    return 4;
  }

  for (let i = 1; i < sqrtN; i++) {
    if (Math.sqrt(n - i * i) % 1 === 0) {
      return 2;
    }
  }

  return 3;
};

var n = 12,
  expected = 3;
var result = numSquares(n);
console.log(result, result === expected);

var n = 13,
  expected = 2;
var result = numSquares(n);
console.log(result, result === expected);

for (let n = 1; n <= 100; n++) {
  console.log(n, numSquares(n));
}
