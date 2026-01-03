// 1411. Number of Ways to Paint N × 3 Grid
// https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function (n) {
  const MOD = 1e9 + 7;
  /*
  init: for the single row, there are C(3, 3) * 3! = 6 3-color combinations, and C(3, 2) * 2 = 6 2-color combinations.
  C(3, 3) * 3! means: choose 3 colors out of 3, and, first cell: 3 possibilities, second cell: 2 possibilities, third cell: only 1 possibility.
  C(3, 2) * 2 means: choose 2 colors out of 3, and, there are only two ways: ABA or BAB.
  */
  let color2 = 6;
  let color3 = 6;
  for (let i = 2; i <= n; i++) {
    const tempColor3 = color3;
    color3 = (2 * tempColor3 + 2 * color2) % MOD;
    color2 = (2 * tempColor3 + 3 * color2) % MOD;
  }
  return (color2 + color3) % MOD;
};

var n = 1;
var expected = 12;
var result = numOfWays(n);
console.log(result, result === expected);

var n = 2;
var expected = 54;
var result = numOfWays(n);
console.log(result, result === expected);

var n = 5000;
var expected = 30228214;
var result = numOfWays(n);
console.log(result, result === expected);
