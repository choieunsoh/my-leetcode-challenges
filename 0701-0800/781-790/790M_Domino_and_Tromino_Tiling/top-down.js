// 790. Domino and Tromino Tiling
// https://leetcode.com/problems/domino-and-tromino-tiling/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  // f(n) = f(n-1) + f(n-2) + 2 * p(n-1)
  // f(1) = 1, f(2) = 2
  // p(n) = p(n-1) + f(n-2)
  // p(1) = 0, p(2) = 1
  const MOD = 1e9 + 7;
  const fMemo = new Array(n + 1).fill(0);
  const pMemo = new Array(n + 1).fill(0);
  return f(n);

  function p(n) {
    if (pMemo[n] > 0) return pMemo[n];

    let result = 0;
    if (n === 2) {
      result = 1;
    } else {
      result = (p(n - 1) + f(n - 2)) % MOD;
    }
    return (pMemo[n] = result);
  }

  function f(n) {
    if (fMemo[n] > 0) return fMemo[n];

    let result = 0;
    if (n <= 2) {
      result = n;
    } else {
      result = (f(n - 1) + f(n - 2) + 2 * p(n - 1)) % MOD;
    }
    return (fMemo[n] = result);
  }
};

var n = 3;
var expected = 5;
var result = numTilings(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = numTilings(n);
console.log(result, result === expected);

var allExpected = [
  0, 1, 2, 5, 11, 24, 53, 117, 258, 569, 1255, 2768, 6105, 13465, 29698, 65501, 144467, 318632, 702765, 1549997,
  3418626,
];
for (let n = 4; n <= 20; n++) {
  const result = numTilings(n);
  const expected = allExpected[n];
  console.log(n, result, result === expected);
}
