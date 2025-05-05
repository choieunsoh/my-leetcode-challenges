// 790. Domino and Tromino Tiling
// https://leetcode.com/problems/domino-and-tromino-tiling/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const MOD = 1e9 + 7;
  if (n <= 2) return n;

  let prevOfPrev = 1;
  let prev = 2;
  let current = 5;
  for (let i = 4; i <= n; i++) {
    const temp = prev;
    prev = current;
    current = (2 * current + prevOfPrev) % MOD;
    prevOfPrev = temp;
  }
  return current;
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
